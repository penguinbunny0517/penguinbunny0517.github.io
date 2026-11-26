(() => {
  const topic = "penguin-bunny-study-room";
  const actions = {
    nuzzle: ["蹭蹭兔兔", "蹭蹭小鹅"],
    kiss: ["亲亲兔兔", "亲亲小鹅"],
    hug: ["抱抱兔兔", "抱抱小鹅"],
    nest: ["变成兔窝！", "变成鹅窝！"],
    drink: ["给兔兔一杯暖暖的奶茶～", "给小鹅一杯纯冷萃！"],
  };
  const people = {
    maimai: {
      shortName: "麦麦",
      actor: document.querySelector("#studyMaimai"),
      seat: document.querySelector("#studyMaimaiSeat"),
    },
    tutu: {
      shortName: "兔兔",
      actor: document.querySelector("#studyTutu"),
      seat: document.querySelector("#studyTutuSeat"),
    },
  };
  const view = {
    actors: document.querySelector("#studyActors"),
    effect: document.querySelector("#studyEffect"),
    access: document.querySelector("#studyAccess"),
    login: document.querySelector("#studyLogin"),
    signout: document.querySelector("#studySignOut"),
    controls: document.querySelector("#studyControls"),
    sit: document.querySelector("#studySit"),
    actions: document.querySelector("#studyActions"),
    status: document.querySelector("#studyStatus"),
  };
  const client = siteAuth.createClient();
  const submit = view.login.querySelector("button");
  let author = null;
  let channel = null;
  let present = new Set();
  let connected = false;
  let wantsSeat = false;
  let sitting = false;
  let changingSeat = false;
  let sending = false;
  let effectTimeout;

  function partnerOf(id) {
    return id === "maimai" ? "tutu" : "maimai";
  }

  function setStatus(message) {
    view.status.textContent = message;
  }

  function canInteract() {
    return connected && sitting && !changingSeat && present.has(partnerOf(author?.id));
  }

  function render() {
    view.access.hidden = Boolean(author);
    view.signout.hidden = !author;
    view.controls.hidden = !author;
    view.actors.hidden = !author;
    view.sit.disabled = !connected || changingSeat;
    view.sit.textContent = sitting ? "离座" : "入座";
    view.actions.hidden = !canInteract();
    for (const button of view.actions.children) button.disabled = sending;

    for (const person of siteAuth.authors) {
      const { actor, seat } = people[person.id];
      const seated = present.has(person.id) || (author?.id === person.id && sitting);
      actor.hidden = !seated;
      seat.dataset.seated = String(seated);
      seat.textContent = `${person.name} · ${seated ? "自习中" : "空座"}`;
    }
  }

  function renderActionButtons() {
    const index = author?.id === "maimai" ? 0 : 1;
    view.actions.replaceChildren();
    if (!author) return;
    for (const [action, labels] of Object.entries(actions)) {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.action = action;
      button.textContent = labels[index];
      view.actions.append(button);
    }
  }

  function clearEffect() {
    window.clearTimeout(effectTimeout);
    effectTimeout = undefined;
    view.effect.hidden = true;
    delete view.effect.dataset.recipient;
    for (const { actor } of Object.values(people)) delete actor.dataset.motion;
  }

  function playAction(senderId, action) {
    const sender = people[senderId];
    const partnerId = partnerOf(senderId);
    const partner = people[partnerId];
    if (!sender || !Object.hasOwn(actions, action)) return;

    clearEffect();
    // Apply the cleared styles before restarting an animation on repeat clicks.
    void sender.actor.offsetWidth;
    sender.actor.dataset.motion = action;
    if (action === "hug" || action === "drink") partner.actor.dataset.motion = action;

    if (action === "kiss" || action === "hug" || action === "drink") {
      view.effect.textContent = action === "drink" ? (senderId === "maimai" ? "🧋" : "🧊☕") : "♥";
      if (action === "drink") view.effect.dataset.recipient = partnerId;
      view.effect.hidden = false;
    }

    const label = actions[action][senderId === "maimai" ? 0 : 1];
    setStatus(`${sender.shortName} · ${label}`);
    effectTimeout = window.setTimeout(() => {
      clearEffect();
      setStatus("");
    }, action === "nest" || action === "drink" ? 3500 : 1900);
  }

  function resetConnection() {
    connected = false;
    sitting = false;
    changingSeat = false;
    sending = false;
    present = new Set();
    clearEffect();
  }

  async function updateSeat(next) {
    if (!connected || changingSeat) return;
    const active = channel;
    changingSeat = true;
    render();
    const result = next ? await active.track({ author: author.id }) : await active.untrack();
    if (active !== channel || !connected) return;

    changingSeat = false;
    if (result === "ok") {
      wantsSeat = next;
      sitting = next;
      clearEffect();
      setStatus("");
    } else {
      setStatus("座位状态暂时无法更新，请再试一次。");
    }
    render();
  }

  async function showSession(session) {
    const email = session?.user?.email?.trim().toLowerCase();
    const nextAuthor = siteAuth.authors.find((person) => person.email === email) || null;
    if (author === nextAuthor && channel) return;

    const previous = channel;
    channel = null;
    author = nextAuthor;
    wantsSeat = false;
    resetConnection();
    renderActionButtons();
    render();
    if (previous) await client.removeChannel(previous);
    if (author !== nextAuthor || channel) return;
    if (!author) {
      setStatus(session ? "请用麦麦或兔兔的专属账号登录。" : "");
      return;
    }

    setStatus("正在连接自习室…");
    await client.realtime.setAuth();
    if (author !== nextAuthor || channel) return;

    const active = client.channel(topic, {
      config: { private: true, broadcast: { ack: true } },
    });
    channel = active;
    active
      .on("presence", { event: "sync" }, () => {
        if (active !== channel) return;
        present = new Set(Object.values(active.presenceState()).flat().map(({ author: id }) => id));
        if (effectTimeout && !present.has(partnerOf(author.id))) {
          clearEffect();
          setStatus("");
        }
        render();
      })
      .on("broadcast", { event: "study-action" }, ({ payload }) => {
        if (active !== channel || !canInteract() || payload?.from !== partnerOf(author.id)) return;
        playAction(payload.from, payload.action);
      })
      .subscribe((status) => {
        if (active !== channel) return;
        if (status === "SUBSCRIBED") {
          connected = true;
          setStatus("");
          render();
          if (wantsSeat) void updateSeat(true);
          return;
        }
        resetConnection();
        setStatus("自习室连不上了，请刷新后重试。");
        render();
      });
  }

  view.sit.addEventListener("click", () => void updateSeat(!sitting));
  view.actions.addEventListener("click", async (event) => {
    const action = event.target.closest("button")?.dataset.action;
    if (!action || sending || !canInteract()) return;
    const active = channel;
    const from = author.id;
    sending = true;
    render();
    const result = await active.send({ type: "broadcast", event: "study-action", payload: { from, action } });
    if (active !== channel || !connected) return;

    sending = false;
    if (result === "ok" && canInteract()) {
      playAction(from, action);
    } else if (result !== "ok") {
      setStatus("刚刚的动作没送到，请再试一次。");
    }
    render();
  });

  if (!client) {
    setStatus("登录服务暂时没有加载，请刷新后重试。");
    return;
  }

  view.login.addEventListener("submit", async (event) => {
    event.preventDefault();
    const { email, password } = view.login.elements;
    const address = email.value.trim().toLowerCase();
    if (!siteAuth.authors.some((person) => person.email === address)) {
      setStatus("请用麦麦或兔兔的专属账号登录。");
      return;
    }

    submit.disabled = true;
    setStatus("正在登录…");
    const { data, error } = await client.auth.signInWithPassword({ email: address, password: password.value });
    submit.disabled = false;
    if (error) {
      setStatus("登录失败，请确认邮箱和密码。");
      return;
    }
    view.login.reset();
    void showSession(data.session);
  });

  view.signout.addEventListener("click", async () => {
    const { error } = await client.auth.signOut({ scope: "local" });
    if (error) {
      setStatus("暂时无法退出登录，请重试。");
      return;
    }
    void showSession(null);
  });

  client.auth.onAuthStateChange((_event, session) => {
    // Let Supabase finish updating its session before joining Realtime.
    window.setTimeout(() => void showSession(session), 0);
  });
  client.auth.getSession().then(({ data, error }) => {
    submit.disabled = false;
    if (error) {
      setStatus("暂时无法读取登录状态，请重新登录。");
      return;
    }
    void showSession(data.session);
  });
})();
