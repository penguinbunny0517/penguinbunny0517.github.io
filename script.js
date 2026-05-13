const appData = {
  couple: {
    penguin: {
      id: "penguin",
      name: "麦麦小鹅 🩶",
      animal: "penguin",
      location: {
        label: "",
        city: "",
        lat: 39.9725,
        lng: 116.318,
        timeZone: "Asia/Shanghai",
      },
      note: "",
    },
    rabbit: {
      id: "rabbit",
      name: "兔兔公主 🧡",
      animal: "rabbit",
      location: {
        label: "",
        city: "",
        lat: 39.810167,
        lng: 116.110999,
        timeZone: "Asia/Shanghai",
      },
      note: "",
    },
  },
  nextMeetDate: null,
  musicTracks: [
    {
      id: "mainli",
      title: "麦恩莉",
      artist: "方大同",
      src: "assets/musics/麦恩莉-方大同.mp3",
    },
    {
      id: "summer-firework",
      title: "夏夜最后的烟火",
      artist: "颜人中",
      src: "assets/musics/夏夜最后的烟火-颜人中.mp3",
    },
    {
      id: "only-you",
      title: "唯你懂我心",
      artist: "汪苏泷",
      src: "assets/musics/唯你懂我心-汪苏泷.mp3",
    },
    {
      id: "first-day",
      title: "第一天",
      artist: "孙燕姿",
      src: "assets/musics/第一天-孙燕姿.mp3",
    }
  ],
  messageAuthors: [
    {
      id: "maimai",
      name: "麦麦小鹅",
      emoji: "🐧",
      email: "suzhiyuan0326@163.com",
    },
    {
      id: "tutu",
      name: "兔兔公主",
      emoji: "🐰",
      email: "penguinbunny0517@163.com",
    },
  ],
  messageBoards: [
    {
      id: "maimai",
      title: "麦麦の留言板",
      owner: "麦麦小鹅",
      englishTitle: "Penguin's Mailbox",
      accent: "penguin",
      emoji: "🐧",
      line: "“他们写了日影一封信。”",
      allowedEmails: ["suzhiyuan0326@163.com", "penguinbunny0517@163.com"],
    },
    {
      id: "tutu",
      title: "兔兔の留言板",
      owner: "兔兔公主",
      englishTitle: "Bunny's Mailbox",
      accent: "rabbit",
      emoji: "🐰",
      line: "“我的诗情没有两片叶子。”",
      allowedEmails: ["suzhiyuan0326@163.com", "penguinbunny0517@163.com"],
    },
  ],
  auth: {
    supabaseUrl: "https://jzpoaywushcdqrhssksm.supabase.co",
    supabaseAnonKey: "sb_publishable_yYHiwLSXOGgQtolLUp0sIQ_9F6y3s5V",
  },
  trips: [
    {
      id: "dalian",
      place: "大连",
      shortName: "中国 · 辽宁 · 大连",
      englishTitle: "Dalian",
      date: "2025.10.04 - 2025.10.08",
      season: "海风和黄昏",
      icon: "海",
      photos: [
        "assets/trips/dalian/dalian1.jpg",
        "assets/trips/dalian/dalian2.jpg",
        "assets/trips/dalian/dalian3.jpg",
        "assets/trips/dalian/dalian4.jpg",
        "assets/trips/dalian/dalian5.jpg",
        "assets/trips/dalian/dalian6.jpg",
        "assets/trips/dalian/dalian7.jpg",
        "assets/trips/dalian/dalian8.jpg",
        "assets/trips/dalian/dalian9.jpg",
        "assets/trips/dalian/dalian10.jpg",
        "assets/trips/dalian/dalian11.jpg",
      ],
      quote: "“这是一个港口，我在这里爱你。”",
    },
    {
      id: "beijing-zoo",
      place: "北京野生动物园",
      shortName: "中国 · 北京 · 野生动物园",
      englishTitle: "Beijing Wildlife Park",
      date: "2025.11.16",
      season: "动物和晴天",
      icon: "园",
      photos: [
        "assets/trips/beijing-zoo/beiye1.jpg",
        "assets/trips/beijing-zoo/beiye2.jpg",
        "assets/trips/beijing-zoo/beiye3.jpg",
        "assets/trips/beijing-zoo/beiye4.jpg",
        "assets/trips/beijing-zoo/beiye5.jpg",
        "assets/trips/beijing-zoo/beiye6.jpg",
        "assets/trips/beijing-zoo/beiye7.jpg",
        "assets/trips/beijing-zoo/beiye8.jpg",
        "assets/trips/beijing-zoo/beiye9.jpg",
        "assets/trips/beijing-zoo/beiye10.jpg",
        "assets/trips/beijing-zoo/beiye11.jpg",
        "assets/trips/beijing-zoo/beiye12.jpg",
        "assets/trips/beijing-zoo/beiye13.jpg",
        "assets/trips/beijing-zoo/beiye14.jpg",
        "assets/trips/beijing-zoo/beiye15.jpg",
        "assets/trips/beijing-zoo/beiye16.jpg",
        "assets/trips/beijing-zoo/beiye17.jpg",
      ],
      quote: "“都可以随便的，你说的，我都愿意去，小火车摆动的旋律。”",
    },
    {
      id: "tianjin",
      place: "天津",
      shortName: "中国 · 天津",
      englishTitle: "Tianjin",
      date: "2025.12.13 - 2025.12.14",
      season: "城市和烟火",
      icon: "津",
      photos: [
        "assets/trips/tianjin/tianjin1.jpg",
        "assets/trips/tianjin/tianjin2.jpg",
        "assets/trips/tianjin/tianjin3.jpg",
        "assets/trips/tianjin/tianjin4.jpg",
        "assets/trips/tianjin/tianjin5.jpg",
        "assets/trips/tianjin/tianjin6.jpg",
        "assets/trips/tianjin/tianjin7.jpg",
        "assets/trips/tianjin/tianjin8.jpg",
        "assets/trips/tianjin/tianjin9.jpg",
        "assets/trips/tianjin/tianjin10.jpg",
        "assets/trips/tianjin/tianjin11.jpg",
      ],
      quote: "“パッと光って咲いた、花火を見ていた。”",
    },
    {
      id: "universal",
      place: "北京环球影城",
      shortName: "中国 · 北京 · 环球影城",
      englishTitle: "Universal Beijing Resort",
      date: "2026.02.28",
      season: "魔法和拥抱",
      icon: "影",
      photos: [
        "assets/trips/universal/huanqiu1.jpg",
        "assets/trips/universal/huanqiu2.jpg",
        "assets/trips/universal/huanqiu3.jpg",
        "assets/trips/universal/huanqiu4.jpg",
        "assets/trips/universal/huanqiu5.jpg",
        "assets/trips/universal/huanqiu6.jpg",
        "assets/trips/universal/huanqiu7.jpg",
        "assets/trips/universal/huanqiu8.jpg",
      ],
      quote: "“要说说笑笑，随风飘飘，永不坠落。”",
    },
    {
      id: "jeju",
      place: "济州岛",
      shortName: "韩国 · 济州岛",
      englishTitle: "Jeju Island",
      date: "2026.03.25 - 2026.03.29",
      season: "橘子和海岸线",
      icon: "橘",
      photos: [
        "assets/trips/jeju/jeju1.jpg",
        "assets/trips/jeju/jeju2.jpg",
        "assets/trips/jeju/jeju3.jpg",
        "assets/trips/jeju/jeju4.jpg",
        "assets/trips/jeju/jeju5.jpg",
        "assets/trips/jeju/jeju6.jpg",
        "assets/trips/jeju/jeju7.jpg",
        "assets/trips/jeju/jeju8.jpg",
        "assets/trips/jeju/jeju9.jpg",
        "assets/trips/jeju/jeju10.jpg",
        "assets/trips/jeju/jeju11.jpg",
        "assets/trips/jeju/jeju12.jpg",
        "assets/trips/jeju/jeju13.jpg",
        "assets/trips/jeju/jeju14.jpg",
        "assets/trips/jeju/jeju15.jpg",
        "assets/trips/jeju/jeju16.jpg",
        "assets/trips/jeju/jeju17.jpg",
        "assets/trips/jeju/jeju18.jpg",
        "assets/trips/jeju/jeju19.jpg",
        "assets/trips/jeju/jeju20.jpg",
        "assets/trips/jeju/jeju21.jpg",
        "assets/trips/jeju/jeju22.jpg",
        "assets/trips/jeju/jeju23.jpg",
        "assets/trips/jeju/jeju24.jpg",
        "assets/trips/jeju/jeju25.jpg",
        "assets/trips/jeju/jeju26.jpg",
        "assets/trips/jeju/jeju27.jpg",
        "assets/trips/jeju/jeju28.jpg",
        "assets/trips/jeju/jeju29.jpg",
        "assets/trips/jeju/jeju30.jpg",
        "assets/trips/jeju/jeju31.jpg",
        "assets/trips/jeju/jeju32.jpg",
        "assets/trips/jeju/jeju33.jpg",
      ],
      quote: "“你记得我最纯净的轮廓，握住小小风车和放肆的梦。”"
    },
  ],
  longingMessages: [
    "发送一颗小心心～",
    "收到一份抱抱！",
    "今天的想念已经盖章，正在慢慢飞过去。",
    "咪咪咪！",
  ],
  timeline: [
    {
      date: "2025.04.27",
      tag: "鹅与兔的相识！",
      text: "“我中过最惊喜的彩券...”",
    },
    {
      date: "2025.05.11",
      tag: "鹅兔初见！第一天 & 暖暖～",
      text: "“爱是腾空的魔幻，第一天的纯真色彩它总是永远那么灿烂。”",
    },
    {
      date: "2025.05.17",
      tag: "在一起啦！",
      text: "“我想写一首诗，犹如日，犹如月，犹如午阴，犹如无边落木萧萧下——我的诗情没有两片叶子。”",
    },
    {
      date: "2025.05.20",
      tag: "第一个520，互送花花～🌷",
      text: "“小王子有他的玫瑰，而你也是我唯一的玫瑰。”",
    },
    {
      date: "2025.05.31",
      tag: "欢乐谷一日游～",
      text: "FOUND餐厅好吃，雪域金翅摇hur了！",
    },
    {
      date: "2025.06.21",
      tag: "朋友圈官宣！",
      text: "“感谢你的出现，过去的往事就如烟～”",
    },
    {
      date: "2025.07.06",
      tag: "第一次异地开始（呜呜呜）",
      text: "“全世界的水都会重逢，每条路也都会带我们归家。”",
    },
    {
      date: "2025.08.25",
      tag: "100天！",
      text: "“我在这里爱你。”",
    },
    {
      date: "2025.10.03",
      tag: "鹅 back to Beijing！",
      text: "Oh 麦麦麦！（兔子忘记播放版）",
    },
    {
      date: "2025.10.04-2025.10.08",
      tag: "鹅兔的大连之旅！",
      text: "“跳动的世界里找你的频率～”",
    },
    {
      date: "2025.10.18",
      tag: "一起去圆明园～",
      text: "\"I can take you far far away, far enough for us to dissappear.\"",
    },
    {
      date: "2025.11.16",
      tag: "北野一日游！",
      text: "“我们小手拉大手，一起郊游，今天别想太多～”",
    },
    {
      date: "2025.12.12",
      tag: "一起过第一次初雪～ ❄️",
      text: "小鹅冰面滑行失败，小兔直接倒下开睡！",
    },
    {
      date: "2025.12.13-2025.12.14",
      tag: "天津两日小旅行～",
      text: "居然在超高层酒店幸运地看到了烟花！",
    },
    {
      date: "2026.01.01",
      tag: "第一次一起跨年！",
      text: "喜欢和香香软软的兔一起泡私汤～",
    },
    {
      date: "2026.02.28",
      tag: "环球影城一日游～",
      text: "又是时隔将近两个月异地后的见面，幸福！",
    },
    {
      date: "2026.03.25-2026.03.29",
      tag: "Kiss in Jeju! 🍊",
      text: "\"나가서 바람이나 좀 쐐, 아무도 찾지 않는 곳에.\""
    },
    {
      date: "2026.04.19",
      tag: "兔咖！🐰",
      text: "饭团虽然不乖但实在美丽，小灰兔完全萌之！",
    },
    {
      date: "2026.04.26-2026.05.01",
      tag: "天津 Staycation～",
      text: "第一次有了和兔兔一起生活的感觉，日常中透着幸福～",
    },
  ],
  milestones: [
    {
      id: "first-meet",
      title: "初见纪念日",
      date: "2025-05-11",
      repeat: "yearly",
      note: "",
      accent: "blue",
    },
    {
      id: "together",
      title: "在一起纪念日",
      date: "2025-05-17",
      repeat: "yearly",
      note: "",
      accent: "coral",
    },
    {
      id: "maimai-birthday",
      title: "麦麦の生日",
      date: "2004-03-26",
      repeat: "yearly",
      note: "",
      accent: "mint",
    },
    {
      id: "tutu-birthday",
      title: "兔兔の生日",
      date: "2005-04-02",
      repeat: "yearly",
      note: "",
      accent: "butter",
    },
  ],
  wishes: [],
};

const mapState = {
  map: null,
  route: null,
  markers: {},
};

const musicState = {
  currentId: null,
  isMenuOpen: false,
  isPlaying: false,
  isSeeking: false,
  resolvedTrackUrls: new Map(),
  resolvingTrackUrls: new Map(),
  volume: 0.58,
};

const GEOCODE_CACHE_KEY = "penguinBunnyReverseGeocodeV2";
const MESSAGE_STORAGE_KEY = "penguinBunnyMessagesLocalV2";
const WISH_STORAGE_KEY = "penguinBunnyWishesLocalV2";
const LEGACY_WISH_STORAGE_KEYS = ["penguinBunnyWishesLocalV1"];
const REMOVED_DEFAULT_WISH_IDS = new Set([
  "wish-happy-valley-again",
  "wish-sea-sunrise",
  "wish-cook-dinner",
]);
const REMOTE_TABLES = {
  messages: "love_messages",
  wishes: "love_wishes",
};
const MESSAGE_IMAGE_BUCKET = "penguinbunny-message-images";
const MAX_MESSAGE_IMAGES = 6;

const messageState = {
  activeBoardId: null,
  editingMessageId: null,
  draftImages: [],
  messages: [],
  syncStatus: "local",
  syncError: "",
};

const messageImageState = {
  messageId: null,
  images: [],
  activeIndex: 0,
};

const wishState = {
  wishes: appData.wishes.map((wish) => ({ ...wish })),
  syncStatus: "local",
  syncError: "",
};

const authState = {
  client: null,
  session: null,
  pendingBoardId: null,
  pendingTripId: null,
  pendingAuthContext: "site",
  isReady: false,
};

const tripModalState = {
  activeTripId: null,
  activePhotoIndex: 0,
};

const elements = {
  distanceValue: document.querySelector("#distanceValue"),
  mapCanvas: document.querySelector("#mapCanvas"),
  locationStrip: document.querySelector("#locationStrip"),
  musicPlayer: document.querySelector("#musicPlayer"),
  musicToggle: document.querySelector("#musicToggle"),
  musicMenu: document.querySelector("#musicMenu"),
  musicLabel: document.querySelector("#musicLabel"),
  bgmAudio: document.querySelector("#bgmAudio"),
  siteLoginButton: document.querySelector("#siteLoginButton"),
  tripGrid: document.querySelector("#tripGrid"),
  timelineViewport: document.querySelector("#timelineViewport"),
  timelineTrack: document.querySelector("#timelineTrack"),
  milestoneNoteBoard: document.querySelector("#milestoneNoteBoard"),
  wishStats: document.querySelector("#wishStats"),
  wishAuthHint: document.querySelector("#wishAuthHint"),
  wishForm: document.querySelector("#wishForm"),
  wishInput: document.querySelector("#wishInput"),
  wishList: document.querySelector("#wishList"),
  messageBoardGrid: document.querySelector("#messageBoardGrid"),
  messageModal: document.querySelector("#messageModal"),
  messageModalTitle: document.querySelector("#messageModalTitle"),
  messageModalSubtitle: document.querySelector("#messageModalSubtitle"),
  messageForm: document.querySelector("#messageForm"),
  messageText: document.querySelector("#messageText"),
  messageImages: document.querySelector("#messageImages"),
  messageImageLimit: document.querySelector("#messageImageLimit"),
  messageSubmit: document.querySelector("#messageSubmit"),
  messageCancelEdit: document.querySelector("#messageCancelEdit"),
  messagePreview: document.querySelector("#messagePreview"),
  messageFormHint: document.querySelector("#messageFormHint"),
  messageAuthStatus: document.querySelector("#messageAuthStatus"),
  messageFeedTitle: document.querySelector("#messageFeedTitle"),
  messageFeedCount: document.querySelector("#messageFeedCount"),
  messageList: document.querySelector("#messageList"),
  messageImageModal: document.querySelector("#messageImageModal"),
  messageImageFull: document.querySelector("#messageImageFull"),
  messageImagePrev: document.querySelector("#messageImagePrev"),
  messageImageNext: document.querySelector("#messageImageNext"),
  messageImageCounter: document.querySelector("#messageImageCounter"),
  authModal: document.querySelector("#authModal"),
  authTitle: document.querySelector("#authTitle"),
  authCopy: document.querySelector("#authCopy"),
  authForm: document.querySelector("#authForm"),
  authEmail: document.querySelector("#authEmail"),
  authPassword: document.querySelector("#authPassword"),
  authSubmit: document.querySelector("#authSubmit"),
  authStatus: document.querySelector("#authStatus"),
  authSignOut: document.querySelector("#authSignOut"),
  tripModal: document.querySelector("#tripModal"),
  modalImage: document.querySelector("#modalImage"),
  modalPrev: document.querySelector("#modalPrev"),
  modalNext: document.querySelector("#modalNext"),
  modalCounter: document.querySelector("#modalCounter"),
  modalTitle: document.querySelector("#modalTitle"),
  modalEnglish: document.querySelector("#modalEnglish"),
  modalQuote: document.querySelector("#modalQuote"),
  tripAuthRow: document.querySelector("#tripAuthRow"),
  tripAuthStatus: document.querySelector("#tripAuthStatus"),
  tripSignOut: document.querySelector("#tripSignOut"),
  missButton: document.querySelector("#missButton"),
  missMessage: document.querySelector("#missMessage"),
  nextMeetText: document.querySelector("#nextMeetText"),
};

function toRadians(value) {
  return (value * Math.PI) / 180;
}

function getDistanceKm(from, to) {
  const earthRadiusKm = 6371;
  const latDelta = toRadians(to.lat - from.lat);
  const lngDelta = toRadians(to.lng - from.lng);
  const a =
    Math.sin(latDelta / 2) ** 2 +
    Math.cos(toRadians(from.lat)) *
    Math.cos(toRadians(to.lat)) *
    Math.sin(lngDelta / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return Math.round(earthRadiusKm * c);
}

function getPeople() {
  return [appData.couple.penguin, appData.couple.rabbit];
}

function sameCurrentSpot() {
  const [penguin, rabbit] = getPeople();
  return getDistanceKm(penguin.location, rabbit.location) === 0;
}

function renderDistance() {
  const [penguin, rabbit] = getPeople();
  const distance = getDistanceKm(penguin.location, rabbit.location);
  elements.distanceValue.textContent = `${distance.toLocaleString("zh-CN")} km`;
}

function formatCoordinate(location) {
  return `北纬 ${location.lat.toFixed(3)}°，东经 ${location.lng.toFixed(3)}°`;
}

function getLocationLabel(person) {
  return person.location.label || "地图定位中...";
}

function getLocationCity(person) {
  return person.location.city || getLocationLabel(person);
}

function getGeocodeCache() {
  try {
    return JSON.parse(localStorage.getItem(GEOCODE_CACHE_KEY)) || {};
  } catch {
    return {};
  }
}

function setGeocodeCache(cache) {
  try {
    localStorage.setItem(GEOCODE_CACHE_KEY, JSON.stringify(cache));
  } catch {
    // Reverse geocoding still works without cache.
  }
}

function getGeocodeCacheKey(location) {
  return `${location.lat.toFixed(6)},${location.lng.toFixed(6)}`;
}

function uniqueLocationParts(parts) {
  const seen = new Set();

  return parts
    .map((part) => String(part || "").trim())
    .filter(Boolean)
    .filter((part) => {
      const normalized = part.replace(/市$/, "");
      if (seen.has(normalized)) return false;
      seen.add(normalized);
      return true;
    });
}

function cleanLocationPart(part) {
  return String(part || "").trim();
}

function stripLocationSuffix(part) {
  return cleanLocationPart(part).replace(/[省市自治区特别行政区]+$/g, "");
}

function isSameLocationPart(a, b) {
  return stripLocationSuffix(a) === stripLocationSuffix(b);
}

function getDisplayNameParts(result) {
  return String(result.display_name || "")
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
}

function getMunicipalityFromParts(parts) {
  const municipalities = ["北京市", "上海市", "天津市", "重庆市"];
  return municipalities.find((municipality) => parts.some((part) => isSameLocationPart(part, municipality))) || "";
}

function getCityFromDisplayParts(parts, province) {
  return (
    parts.find((part) => /市$/.test(part) && !isSameLocationPart(part, province)) ||
    parts.find((part) => /州$|盟$/.test(part) && !isSameLocationPart(part, province)) ||
    ""
  );
}

function formatReverseGeocodeLabel(result) {
  const address = result.address || {};
  const displayParts = getDisplayNameParts(result);
  const country = cleanLocationPart(address.country) || displayParts[displayParts.length - 1] || "中国";
  const municipality = getMunicipalityFromParts(displayParts);

  if (municipality) {
    return uniqueLocationParts([country, municipality]).join(" · ");
  }

  const province = cleanLocationPart(address.state || address.province);
  const city =
    cleanLocationPart(address.city || address.town) ||
    getCityFromDisplayParts(displayParts, province);

  return uniqueLocationParts([country, province, city]).join(" · ");
}

function formatReverseGeocodeCity(result, fallback) {
  const address = result.address || {};
  const displayParts = getDisplayNameParts(result);
  const municipality = getMunicipalityFromParts(displayParts);

  if (municipality) return municipality;

  const province = cleanLocationPart(address.state || address.province);
  const city =
    cleanLocationPart(address.city || address.town) ||
    getCityFromDisplayParts(displayParts, province);

  return (
    city ||
    province ||
    fallback ||
    "当前位置"
  );
}

async function reverseGeocodePerson(person) {
  const { location } = person;
  const cache = getGeocodeCache();
  const cacheKey = getGeocodeCacheKey(location);

  if (cache[cacheKey]) {
    location.label = cache[cacheKey].label;
    location.city = cache[cacheKey].city;
    return;
  }

  const endpoint = new URL("https://nominatim.openstreetmap.org/reverse");
  endpoint.searchParams.set("format", "jsonv2");
  endpoint.searchParams.set("lat", String(location.lat));
  endpoint.searchParams.set("lon", String(location.lng));
  endpoint.searchParams.set("zoom", "18");
  endpoint.searchParams.set("addressdetails", "1");
  endpoint.searchParams.set("accept-language", "zh-CN,zh,en");

  const response = await fetch(endpoint.toString(), {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Reverse geocoding failed");
  }

  const result = await response.json();
  const label = formatReverseGeocodeLabel(result) || "地图定位已生成";
  const city = formatReverseGeocodeCity(result, label);

  location.label = label;
  location.city = city;
  cache[cacheKey] = { label, city };
  setGeocodeCache(cache);
}

async function resolveLocationLabels() {
  await Promise.allSettled(
    getPeople().map(async (person) => {
      try {
        await reverseGeocodePerson(person);
      } catch {
        person.location.label = "自动定位暂时不可用";
        person.location.city = "当前位置";
      }
      renderLocationStrip();
      syncMarkerContent(person.id);
    }),
  );
}

function renderLocationStrip() {
  elements.locationStrip.innerHTML = getPeople()
    .map(
      (person) => `
        <div class="location-pill" data-person="${person.id}">
          <strong>${person.name}</strong>
          <time class="location-clock" data-time-zone="${person.location.timeZone}" aria-label="${getLocationCity(person)}当前时间">--:--:--</time>
          <div class="location-meta">
            <span>${getLocationLabel(person)}</span>
            <small>${formatCoordinate(person.location)}</small>
          </div>
        </div>
      `,
    )
    .join("");

  updateLocationClocks();
}

function formatCityTime(timeZone) {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone,
  }).format(new Date());
}

function updateLocationClocks() {
  document.querySelectorAll(".location-clock").forEach((clock) => {
    const timeZone = clock.dataset.timeZone;
    if (!timeZone) return;

    clock.textContent = formatCityTime(timeZone);
    clock.dateTime = new Date().toISOString();
  });
}

function startLocationClocks() {
  updateLocationClocks();
  window.setInterval(updateLocationClocks, 1000);
}

function createLocationIcon(personId) {
  const offsetClass = sameCurrentSpot()
    ? personId === "penguin"
      ? "is-offset-left"
      : "is-offset-right"
    : "";

  return L.divIcon({
    className: `leaflet-couple-pin leaflet-couple-pin-${personId} ${offsetClass}`,
    html: '<span class="leaflet-couple-pin-shape" aria-hidden="true"></span>',
    iconSize: [32, 40],
    iconAnchor: [16, 40],
    popupAnchor: [0, -34],
    tooltipAnchor: [0, -34],
  });
}

function getLocationTooltip(person) {
  return `
    <strong>${person.name}</strong>
    <span>${getLocationLabel(person)}</span>
    <small>${formatCoordinate(person.location)}</small>
  `;
}

function getTooltipDirection(personId) {
  return personId === "penguin" ? "right" : "left";
}

function getTooltipOffset(personId) {
  return personId === "penguin" ? [13, 0] : [-13, 0];
}

function syncMarkerContent(personId) {
  const marker = mapState.markers[personId];
  const person = appData.couple[personId];

  if (!marker) return;

  marker.setIcon(createLocationIcon(personId));
  marker.setTooltipContent(getLocationTooltip(person));
}

function updateMapRoute({ fit = false } = {}) {
  if (!mapState.map) return;

  const [penguin, rabbit] = getPeople();
  const points = [
    [penguin.location.lat, penguin.location.lng],
    [rabbit.location.lat, rabbit.location.lng],
  ];
  const sameSpot = sameCurrentSpot();

  if (!mapState.route) {
    mapState.route = L.polyline(points, {
      color: "#df7d5d",
      dashArray: "8 10",
      interactive: false,
      opacity: sameSpot ? 0 : 0.74,
      weight: 3,
    }).addTo(mapState.map);
  }

  mapState.route.setLatLngs(points);
  mapState.route.setStyle({ opacity: sameSpot ? 0 : 0.74 });

  if (!fit) return;

  if (sameSpot) {
    mapState.map.setView(points[0], 12);
    return;
  }

  const distance = getDistanceKm(penguin.location, rabbit.location);

  mapState.map.fitBounds(L.latLngBounds(points), {
    maxZoom: distance < 50 ? 12 : distance < 300 ? 8 : 5,
    padding: [70, 106],
  });
}

function initLeafletMap() {
  renderDistance();
  renderLocationStrip();
  resolveLocationLabels();

  if (typeof L === "undefined") {
    elements.mapCanvas.innerHTML = '<p class="leaflet-fallback">真实地图暂时没有加载出来，检查网络后刷新就好。</p>';
    return;
  }

  mapState.map = L.map(elements.mapCanvas, {
    attributionControl: true,
    scrollWheelZoom: false,
    worldCopyJump: true,
    zoomControl: false,
  });

  L.control.zoom({ position: "bottomright" }).addTo(mapState.map);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    maxZoom: 19,
  }).addTo(mapState.map);

  getPeople().forEach((person) => {
    const marker = L.marker([person.location.lat, person.location.lng], {
      draggable: false,
      icon: createLocationIcon(person.id),
      title: person.name,
    }).addTo(mapState.map);

    marker.bindTooltip(getLocationTooltip(person), {
      className: "couple-map-tooltip",
      direction: getTooltipDirection(person.id),
      offset: getTooltipOffset(person.id),
      opacity: 1,
    });

    mapState.markers[person.id] = marker;
  });

  Object.keys(mapState.markers).forEach(syncMarkerContent);
  updateMapRoute({ fit: true });
}

function getCurrentTrack() {
  return appData.musicTracks.find((track) => track.id === musicState.currentId);
}

function getCurrentTrackIndex() {
  return appData.musicTracks.findIndex((track) => track.id === musicState.currentId);
}

function getWrappedTrack(step) {
  if (!appData.musicTracks.length) return null;

  const currentIndex = getCurrentTrackIndex();
  if (currentIndex < 0) return appData.musicTracks[0];

  const baseIndex = currentIndex;
  const nextIndex = (baseIndex + step + appData.musicTracks.length) % appData.musicTracks.length;

  return appData.musicTracks[nextIndex];
}

function formatMusicTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

function resolveMusicTrackUrl(track) {
  if (!track) return Promise.resolve("");

  if (musicState.resolvedTrackUrls.has(track.id)) {
    return Promise.resolve(musicState.resolvedTrackUrls.get(track.id));
  }

  if (musicState.resolvingTrackUrls.has(track.id)) {
    return musicState.resolvingTrackUrls.get(track.id);
  }

  const pendingUrl = fetch(track.src)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load ${track.src}`);
      }
      return response.blob();
    })
    .then((blob) => {
      const objectUrl = URL.createObjectURL(blob);
      musicState.resolvedTrackUrls.set(track.id, objectUrl);
      musicState.resolvingTrackUrls.delete(track.id);
      return objectUrl;
    })
    .catch(() => {
      musicState.resolvedTrackUrls.set(track.id, track.src);
      musicState.resolvingTrackUrls.delete(track.id);
      return track.src;
    });

  musicState.resolvingTrackUrls.set(track.id, pendingUrl);
  return pendingUrl;
}

function preloadMusicTrackUrls() {
  appData.musicTracks.forEach((track) => {
    resolveMusicTrackUrl(track);
  });
}

function updateMusicDisplay() {
  const currentTrack = getCurrentTrack();

  elements.musicToggle.classList.toggle("is-playing", musicState.isPlaying);
  elements.musicLabel.textContent = currentTrack ? currentTrack.title : "";

  const nowTitle = document.querySelector("#musicNowTitle");
  const nowArtist = document.querySelector("#musicNowArtist");
  const playToggle = document.querySelector("#musicPlayToggle");

  if (nowTitle) {
    nowTitle.textContent = currentTrack ? currentTrack.title : "还没有选择歌曲";
  }

  if (nowArtist) {
    nowArtist.textContent = currentTrack ? currentTrack.artist : "从下面的歌单里选一首开始播放";
  }

  if (playToggle) {
    playToggle.textContent = musicState.isPlaying ? "⏸" : "▶";
    playToggle.setAttribute("aria-label", musicState.isPlaying ? "暂停音乐" : "播放音乐");
  }

  document.querySelectorAll(".music-option").forEach((option) => {
    const isActive = option.dataset.musicId === musicState.currentId;
    option.classList.toggle("is-active", isActive);
    option.setAttribute("aria-pressed", String(isActive && musicState.isPlaying));
  });
}

function updateVolumeDisplay() {
  const volumeRange = document.querySelector("#musicVolume");
  const volumeValue = document.querySelector("#musicVolumeValue");
  const percent = Math.round(musicState.volume * 100);

  elements.bgmAudio.volume = musicState.volume;

  if (volumeRange) {
    volumeRange.value = String(percent);
  }

  if (volumeValue) {
    volumeValue.textContent = `${percent}%`;
  }
}

function updateMusicProgress() {
  const progressTrack = document.querySelector("#musicProgress");
  const progressFill = document.querySelector("#musicProgressFill");
  const progressThumb = document.querySelector("#musicProgressThumb");
  const currentTimeLabel = document.querySelector("#musicCurrentTime");
  const durationLabel = document.querySelector("#musicDuration");
  const duration = elements.bgmAudio.duration;
  const currentTime = elements.bgmAudio.currentTime;
  const hasDuration = Number.isFinite(duration) && duration > 0;
  const boundedCurrentTime = hasDuration ? Math.min(Math.max(currentTime || 0, 0), duration) : 0;
  const percent = hasDuration ? (boundedCurrentTime / duration) * 100 : 0;

  if (progressTrack) {
    progressTrack.setAttribute("aria-disabled", String(!hasDuration));
    progressTrack.setAttribute("aria-valuemax", String(Math.floor(hasDuration ? duration : 100)));
    progressTrack.setAttribute("aria-valuenow", String(Math.floor(boundedCurrentTime)));
    progressTrack.setAttribute(
      "aria-valuetext",
      hasDuration ? `${formatMusicTime(boundedCurrentTime)} / ${formatMusicTime(duration)}` : "还没有歌曲时长",
    );
  }

  if (progressFill) {
    progressFill.style.width = `${percent}%`;
  }

  if (progressThumb) {
    progressThumb.style.left = `${percent}%`;
  }

  if (currentTimeLabel) {
    currentTimeLabel.textContent = formatMusicTime(boundedCurrentTime);
  }

  if (durationLabel) {
    durationLabel.textContent = hasDuration ? formatMusicTime(duration) : "0:00";
  }
}

function seekMusicTo(value) {
  const duration = elements.bgmAudio.duration;
  if (!Number.isFinite(duration) || duration <= 0) return;

  const nextTime = Math.min(Math.max(Number(value), 0), duration);
  if (Number.isFinite(nextTime)) {
    elements.bgmAudio.currentTime = nextTime;
    updateMusicProgress();
  }
}

function seekMusicFromPointer(clientX) {
  const progressTrack = document.querySelector("#musicProgress");
  const duration = elements.bgmAudio.duration;

  if (!progressTrack || !Number.isFinite(duration) || duration <= 0) return;

  const rect = progressTrack.getBoundingClientRect();
  const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);

  seekMusicTo(ratio * duration);
}

function seekMusicFromProgressEvent(event) {
  const progressTrack = document.querySelector("#musicProgress");
  const duration = elements.bgmAudio.duration;

  if (!progressTrack || !Number.isFinite(duration) || duration <= 0) return;

  const rect = progressTrack.getBoundingClientRect();
  const localX = Number.isFinite(event.offsetX) ? event.offsetX : event.clientX - rect.left;
  const ratio = Math.min(Math.max(localX / rect.width, 0), 1);

  seekMusicTo(ratio * duration);
}

function canSeekMusic() {
  const duration = elements.bgmAudio.duration;
  return Number.isFinite(duration) && duration > 0;
}

function setMusicMenuOpen(isOpen) {
  musicState.isMenuOpen = isOpen;
  elements.musicMenu.hidden = !isOpen;
  elements.musicToggle.setAttribute("aria-expanded", String(isOpen));
  elements.musicPlayer.classList.toggle("is-open", isOpen);
}

function renderMusicMenu() {
  elements.musicMenu.innerHTML = `
    <div class="music-now">
      <span id="musicNowTitle">还没有选择歌曲</span>
      <small id="musicNowArtist">从下面的歌单里选一首开始播放</small>
    </div>
    <div class="music-control-panel">
      <div class="music-controls" aria-label="音乐播放控制">
        <button class="music-control-button" id="musicPrev" type="button" aria-label="上一首">⏮</button>
        <button class="music-control-button music-control-button-main" id="musicPlayToggle" type="button" aria-label="播放音乐">▶</button>
        <button class="music-control-button" id="musicNext" type="button" aria-label="下一首">⏭</button>
      </div>
      <div class="music-progress">
        <div
          id="musicProgress"
          class="music-progress-range"
          role="slider"
          tabindex="0"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow="0"
          aria-valuetext="还没有歌曲时长"
          aria-disabled="true"
          aria-label="音乐播放进度"
        >
          <span class="music-progress-fill" id="musicProgressFill"></span>
          <span class="music-progress-thumb" id="musicProgressThumb"></span>
        </div>
        <div class="music-progress-row">
          <span id="musicCurrentTime">0:00</span>
          <span id="musicDuration">0:00</span>
        </div>
      </div>
    </div>
    <div class="music-volume">
      <div class="music-volume-row">
        <span>音量</span>
        <strong id="musicVolumeValue">58%</strong>
      </div>
      <input
        id="musicVolume"
        class="music-volume-range"
        type="range"
        min="0"
        max="100"
        step="1"
        value="58"
        aria-label="音乐音量"
      >
    </div>
    <div class="music-list">
      ${appData.musicTracks
      .map(
        (track) => `
        <button class="music-option" type="button" data-music-id="${track.id}" aria-pressed="false">
          <span>${track.title}</span>
          <small>${track.artist}</small>
        </button>
      `,
      )
      .join("")}
    </div>
  `;

  document.querySelector("#musicVolume").addEventListener("input", (event) => {
    musicState.volume = Number(event.target.value) / 100;
    updateVolumeDisplay();
  });

  document.querySelector("#musicPrev").addEventListener("click", playPreviousMusicTrack);
  document.querySelector("#musicNext").addEventListener("click", playNextMusicTrack);
  document.querySelector("#musicPlayToggle").addEventListener("click", toggleCurrentMusicTrack);

  const progressTrack = document.querySelector("#musicProgress");
  const startProgressSeek = (clientX) => {
    if (!canSeekMusic()) return false;
    musicState.isSeeking = true;
    seekMusicFromPointer(clientX);
    return true;
  };
  const finishProgressSeek = (clientX) => {
    if (canSeekMusic() && Number.isFinite(clientX)) {
      seekMusicFromPointer(clientX);
    }
    musicState.isSeeking = false;
    updateMusicProgress();
  };

  progressTrack.addEventListener("click", (event) => {
    if (progressTrack.getAttribute("aria-disabled") === "true") return;
    seekMusicFromProgressEvent(event);
  });
  progressTrack.addEventListener("pointerdown", (event) => {
    if (progressTrack.getAttribute("aria-disabled") === "true" || !canSeekMusic()) return;
    event.preventDefault();
    musicState.isSeeking = true;
    seekMusicFromProgressEvent(event);
    progressTrack.setPointerCapture(event.pointerId);
  });
  progressTrack.addEventListener("pointermove", (event) => {
    if (!musicState.isSeeking) return;
    event.preventDefault();
    seekMusicFromProgressEvent(event);
  });
  progressTrack.addEventListener("pointerup", (event) => {
    if (progressTrack.hasPointerCapture(event.pointerId)) {
      progressTrack.releasePointerCapture(event.pointerId);
    }
    seekMusicFromProgressEvent(event);
    musicState.isSeeking = false;
    updateMusicProgress();
  });
  progressTrack.addEventListener("pointercancel", () => {
    musicState.isSeeking = false;
    updateMusicProgress();
  });
  progressTrack.addEventListener("blur", () => {
    musicState.isSeeking = false;
    updateMusicProgress();
  });
  progressTrack.addEventListener("keydown", (event) => {
    const duration = elements.bgmAudio.duration;
    if (!Number.isFinite(duration) || duration <= 0) return;

    const step = event.shiftKey ? 15 : 5;
    const currentTime = elements.bgmAudio.currentTime || 0;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      seekMusicTo(currentTime - step);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      seekMusicTo(currentTime + step);
    } else if (event.key === "Home") {
      event.preventDefault();
      seekMusicTo(0);
    } else if (event.key === "End") {
      event.preventDefault();
      seekMusicTo(duration);
    }
  });
  progressTrack.addEventListener("mousedown", (event) => {
    if (progressTrack.getAttribute("aria-disabled") === "true") return;
    event.preventDefault();
    if (!startProgressSeek(event.clientX)) return;
    seekMusicFromProgressEvent(event);

    const handleMouseMove = (moveEvent) => {
      seekMusicFromPointer(moveEvent.clientX);
    };
    const handleMouseUp = (upEvent) => {
      document.removeEventListener("mousemove", handleMouseMove);
      finishProgressSeek(upEvent.clientX);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp, { once: true });
  });
  progressTrack.addEventListener(
    "touchstart",
    (event) => {
      if (progressTrack.getAttribute("aria-disabled") === "true") return;
      const touch = event.touches[0];
      if (!touch) return;
      event.preventDefault();
      if (!startProgressSeek(touch.clientX)) return;

      const handleTouchMove = (moveEvent) => {
        const movingTouch = moveEvent.touches[0];
        if (!movingTouch) return;
        moveEvent.preventDefault();
        seekMusicFromPointer(movingTouch.clientX);
      };
      const handleTouchEnd = (endEvent) => {
        document.removeEventListener("touchmove", handleTouchMove);
        const endingTouch = endEvent.changedTouches[0];
        finishProgressSeek(endingTouch ? endingTouch.clientX : NaN);
      };

      document.addEventListener("touchmove", handleTouchMove, { passive: false });
      document.addEventListener("touchend", handleTouchEnd, { once: true });
      document.addEventListener("touchcancel", handleTouchEnd, { once: true });
    },
    { passive: false },
  );

  document.querySelectorAll(".music-option").forEach((option) => {
    option.addEventListener("click", () => playMusicTrack(option.dataset.musicId, { closeMenu: false }));
  });

  updateVolumeDisplay();
  updateMusicDisplay();
  updateMusicProgress();
}

async function playMusicTrack(trackId, options = {}) {
  const track = appData.musicTracks.find((item) => item.id === trackId);
  const isSameTrack = musicState.currentId === trackId;
  const shouldCloseMenu = options.closeMenu ?? true;

  if (!track) return;

  if (isSameTrack && musicState.isPlaying) {
    elements.bgmAudio.pause();
    if (shouldCloseMenu) {
      setMusicMenuOpen(false);
    }
    return;
  }

  if (!isSameTrack) {
    musicState.currentId = track.id;
    elements.bgmAudio.removeAttribute("src");
    delete elements.bgmAudio.dataset.musicId;
    updateMusicDisplay();
    updateMusicProgress();
  }

  if (elements.bgmAudio.dataset.musicId !== track.id) {
    const sourceUrl = await resolveMusicTrackUrl(track);

    if (musicState.currentId !== track.id) return;

    elements.bgmAudio.src = sourceUrl;
    elements.bgmAudio.dataset.musicId = track.id;
    elements.bgmAudio.load();
  }

  elements.bgmAudio.loop = false;
  elements.bgmAudio
    .play()
    .then(() => {
      musicState.isPlaying = true;
      updateMusicDisplay();
      updateMusicProgress();
      if (shouldCloseMenu) {
        setMusicMenuOpen(false);
      }
    })
    .catch(() => {
      musicState.isPlaying = false;
      updateMusicDisplay();
    });
}

function toggleCurrentMusicTrack() {
  if (musicState.isPlaying) {
    elements.bgmAudio.pause();
    return;
  }

  const currentTrack = getCurrentTrack() || appData.musicTracks[0];
  if (currentTrack) {
    playMusicTrack(currentTrack.id, { closeMenu: false });
  }
}

function playPreviousMusicTrack() {
  const track = getWrappedTrack(-1);
  if (track) {
    playMusicTrack(track.id, { closeMenu: false });
  }
}

function playNextMusicTrack() {
  const track = getWrappedTrack(1);
  if (track) {
    playMusicTrack(track.id, { closeMenu: false });
  }
}

function initMusicPlayer() {
  if (!elements.musicPlayer) return;

  elements.bgmAudio.preload = "auto";
  elements.bgmAudio.volume = musicState.volume;
  preloadMusicTrackUrls();
  renderMusicMenu();
  updateMusicDisplay();

  elements.musicToggle.addEventListener("click", () => {
    setMusicMenuOpen(!musicState.isMenuOpen);
  });

  elements.bgmAudio.addEventListener("play", () => {
    musicState.isPlaying = true;
    updateMusicDisplay();
    updateMusicProgress();
  });

  elements.bgmAudio.addEventListener("pause", () => {
    musicState.isPlaying = false;
    updateMusicDisplay();
  });

  elements.bgmAudio.addEventListener("loadedmetadata", updateMusicProgress);
  elements.bgmAudio.addEventListener("durationchange", updateMusicProgress);
  elements.bgmAudio.addEventListener("timeupdate", updateMusicProgress);
  elements.bgmAudio.addEventListener("ended", playNextMusicTrack);

  document.addEventListener("click", (event) => {
    if (!musicState.isMenuOpen || elements.musicPlayer.contains(event.target)) return;
    setMusicMenuOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && musicState.isMenuOpen) {
      setMusicMenuOpen(false);
      elements.musicToggle.focus();
    }
  });
}

function renderTrips() {
  const tripCards = appData.trips
    .map((trip, index) => {
      const tilt = ["-1deg", "0.6deg", "-0.5deg", "0.8deg", "-0.7deg"][index] || "0deg";
      const coverPhoto = getTripPhotos(trip)[0];

      return `
        <button class="trip-card" type="button" style="--tilt: ${tilt}" data-trip-id="${trip.id}">
          <span class="trip-photo">
            <img src="${coverPhoto}" alt="${trip.place}的旅行照片">
          </span>
          <span class="trip-title-group">
            <h3>${trip.shortName}</h3>
            <span class="trip-english">${trip.englishTitle}</span>
            <span class="trip-date">${trip.date}</span>
          </span>
        </button>
      `;
    })
    .join("");

  elements.tripGrid.innerHTML = `
    ${tripCards}
    <article class="trip-card trip-card-loading" aria-label="麦麦和兔兔的故事将会持续展开">
      <span class="trip-photo trip-photo-loading" aria-hidden="true">
        <span>Loading...</span>
      </span>
      <span class="trip-title-group trip-loading-copy">
        <h3>麦麦和兔兔的故事将会持续展开...</h3>
      </span>
    </article>
  `;

  document.querySelectorAll(".trip-card[data-trip-id]").forEach((card) => {
    card.addEventListener("click", () => {
      const tripId = card.dataset.tripId;
      if (!ensureSiteAuth({ context: "trip", tripId })) return;
      openTripModal(tripId);
    });
  });
}

function formatTimelineDate(dateText) {
  const [start, end] = dateText.split("-");
  const [startYear, startMonth, startDay] = start.split(".");

  if (!end) {
    return {
      year: startYear,
      day: `${startMonth}.${startDay}`,
    };
  }

  const [endYear, endMonth, endDay] = end.split(".");
  const crossesYear = endYear && endYear !== startYear;

  return {
    year: crossesYear ? `${startYear}-${endYear}` : startYear,
    day: crossesYear
      ? `${startMonth}.${startDay} - ${endYear}.${endMonth}.${endDay}`
      : `${startMonth}.${startDay} - ${endMonth}.${endDay}`,
  };
}

function renderTimeline() {
  elements.timelineTrack.innerHTML = appData.timeline
    .map((event, index) => {
      const timelineDate = formatTimelineDate(event.date);

      return `
        <li class="timeline-item" style="--timeline-index: ${index}">
          <article class="timeline-card">
            <span class="timeline-dot" aria-hidden="true"></span>
            <span class="timeline-date" aria-label="${event.date}">
              <span class="timeline-year">${timelineDate.year}</span>
              <span class="timeline-day">${timelineDate.day}</span>
            </span>
            <strong class="timeline-tag">${event.tag}</strong>
            <p>${event.text}</p>
          </article>
        </li>
      `;
    })
    .join("");

  elements.timelineTrack.scrollLeft = 0;
  window.requestAnimationFrame(updateTimelineFade);
}

function getTodayStart() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

function parseDateParts(dateText) {
  if (!dateText) return null;

  const [year, month, day] = dateText.split("-").map(Number);
  if (!year || !month || !day) return null;

  return { year, month, day };
}

function getNextMilestoneDate(milestone) {
  const parts = parseDateParts(milestone.date);
  if (!parts) return null;

  if (milestone.repeat !== "yearly") {
    return new Date(parts.year, parts.month - 1, parts.day);
  }

  const today = getTodayStart();
  const nextDate = new Date(today.getFullYear(), parts.month - 1, parts.day);

  if (nextDate < today) {
    nextDate.setFullYear(today.getFullYear() + 1);
  }

  return nextDate;
}

function formatMilestoneDate(milestone) {
  const parts = parseDateParts(milestone.date);

  if (!parts) return "待设定";

  return `${String(parts.month).padStart(2, "0")}.${String(parts.day).padStart(2, "0")}`;
}

function getMilestoneStatus(milestone) {
  const nextDate = getNextMilestoneDate(milestone);
  if (!nextDate) return "等补充";

  const days = Math.round((nextDate - getTodayStart()) / 86400000);
  if (days === 0) return "就是今天";
  if (days > 0) return `还有 ${days} 天`;

  return "已经收藏";
}

function renderMilestones() {
  if (!elements.milestoneNoteBoard) return;

  const tilts = ["-1.6deg", "1.1deg", "-0.7deg", "1.7deg", "-1.2deg"];

  elements.milestoneNoteBoard.innerHTML = appData.milestones
    .map((milestone, index) => {
      const date = formatMilestoneDate(milestone);
      const status = getMilestoneStatus(milestone);
      const todayClass = status === "就是今天" ? " is-today" : "";
      const tilt = tilts[index % tilts.length];

      return `
        <article class="milestone-note milestone-note-${milestone.accent}${todayClass}" style="--note-tilt: ${tilt}">
          <span class="milestone-tape" aria-hidden="true"></span>
          <span class="milestone-date">
            <strong>${date}</strong>
          </span>
          <h3>${milestone.title}</h3>
          <span class="milestone-status">${status}</span>
        </article>
      `;
    })
    .join("");
}

function getInitialWishes() {
  return appData.wishes.map((wish) => ({ ...wish }));
}

function clearLegacyWishStorage() {
  try {
    LEGACY_WISH_STORAGE_KEYS.forEach((key) => localStorage.removeItem(key));
  } catch {
    // Ignore storage failures so the public page can still render.
  }
}

function removeDefaultWishes(wishes) {
  return wishes.filter((wish) => !REMOVED_DEFAULT_WISH_IDS.has(wish.id));
}

function getLocalWishes() {
  try {
    const stored = JSON.parse(localStorage.getItem(WISH_STORAGE_KEY));
    return Array.isArray(stored) ? removeDefaultWishes(stored) : getInitialWishes();
  } catch {
    return getInitialWishes();
  }
}

function getStoredWishes() {
  if (wishState.syncStatus === "ready" || wishState.syncStatus === "loading") {
    return wishState.wishes;
  }

  return getLocalWishes();
}

function saveLocalWishes(wishes) {
  try {
    localStorage.setItem(WISH_STORAGE_KEY, JSON.stringify(removeDefaultWishes(wishes)));
    return true;
  } catch {
    return false;
  }
}

function normalizeRemoteWish(row) {
  return {
    id: row.id,
    text: row.text || "",
    createdAt: row.created_at,
    completedAt: row.completed_at,
    createdBy: row.created_by,
    completedBy: row.completed_by,
  };
}

function getSyncErrorCopy(error) {
  const message = String(error?.message || "");

  if (message.includes("love_messages") || message.includes("love_wishes") || message.includes("schema cache")) {
    return "Supabase 同步表还没建好，当前先显示本地预览。";
  }

  if (message.includes("bucket") || message.includes(MESSAGE_IMAGE_BUCKET)) {
    return "Supabase 图片空间还没建好，图片暂时不能同步。";
  }

  return "同步暂时没有成功，当前先显示本地预览。";
}

async function refreshRemoteWishes() {
  if (!authState.client) {
    wishState.syncStatus = "local";
    wishState.syncError = "";
    wishState.wishes = getLocalWishes();
    renderWishes();
    return;
  }

  wishState.syncStatus = "loading";
  wishState.syncError = "";
  renderWishes();

  const { data, error } = await authState.client
    .from(REMOTE_TABLES.wishes)
    .select("id,text,created_by,completed_by,created_at,completed_at,updated_at")
    .order("created_at", { ascending: false });

  if (error) {
    wishState.syncStatus = "error";
    wishState.syncError = getSyncErrorCopy(error);
    wishState.wishes = getLocalWishes();
    renderWishes();
    return;
  }

  wishState.syncStatus = "ready";
  wishState.syncError = "";
  wishState.wishes = Array.isArray(data) ? removeDefaultWishes(data.map(normalizeRemoteWish)) : [];
  saveLocalWishes(wishState.wishes);
  renderWishes();
}

function getWishStatusText(wish) {
  if (!wish.completedAt) return "";
  return `${formatMessageDate(wish.completedAt)} 已打卡`;
}

function renderWishes() {
  if (!elements.wishList || !elements.wishStats || !elements.wishAuthHint || !elements.wishForm) return;

  const wishes = getStoredWishes();
  const completedCount = wishes.filter((wish) => wish.completedAt).length;
  const pendingCount = wishes.length - completedCount;
  const canUseWishes = isSiteAuthenticated();
  const isSyncing = wishState.syncStatus === "loading";
  const isSynced = wishState.syncStatus === "ready";

  elements.wishStats.innerHTML = `
    <span><b>${pendingCount}</b> 个想一起做</span>
    <span><b>${completedCount}</b> 个已打卡</span>
  `;

  if (wishState.syncStatus === "error") {
    elements.wishAuthHint.innerHTML = `<span>${escapeHTML(wishState.syncError)}</span>`;
  } else if (isSyncing) {
    elements.wishAuthHint.innerHTML = "<span>正在同步小愿望...</span>";
  } else if (canUseWishes) {
    elements.wishAuthHint.innerHTML = `<span>已登录：${escapeHTML(getCurrentAuthName())}，${isSynced ? "已开启跨设备同步" : "可以新增和打卡"}。</span>`;
  } else {
    elements.wishAuthHint.innerHTML = `<span>登录后可以新增愿望和打卡。</span><button type="button" data-wish-login>登录</button>`;
  }

  elements.wishForm.hidden = !canUseWishes;

  elements.wishList.innerHTML = wishes
    .map((wish, index) => {
      const isDone = Boolean(wish.completedAt);
      const tilt = ["-0.7deg", "0.55deg", "-0.35deg", "0.8deg"][index % 4];

      return `
        <article class="wish-card ${isDone ? "is-done" : ""}" style="--wish-tilt: ${tilt}">
          <span class="wish-pin" aria-hidden="true"></span>
          <span class="wish-index">${String(index + 1).padStart(2, "0")}</span>
          <h3>${escapeHTML(wish.text)}</h3>
          ${wish.completedAt ? `<span class="wish-status">${getWishStatusText(wish)}</span>` : ""}
          <div class="wish-actions">
            <button class="wish-toggle" type="button" data-toggle-wish="${escapeHTML(wish.id)}" ${!canUseWishes || isSyncing ? "disabled" : ""}>
              ${isDone ? "取消打卡" : "打卡完成"}
            </button>
            <button class="wish-delete" type="button" data-delete-wish="${escapeHTML(wish.id)}" ${!canUseWishes || isSyncing ? "disabled" : ""}>
              删除
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

async function addWish(text) {
  const normalizedText = String(text || "").trim();
  if (!normalizedText) return;

  const currentAuthor = getCurrentAuthor();
  if (!currentAuthor) return;

  if (authState.client && wishState.syncStatus !== "error") {
    elements.wishForm.querySelector("button").disabled = true;

    const { data, error } = await authState.client
      .from(REMOTE_TABLES.wishes)
      .insert({
        text: normalizedText,
        created_by: currentAuthor.id,
      })
      .select("id,text,created_by,completed_by,created_at,completed_at,updated_at");

    elements.wishForm.querySelector("button").disabled = false;

    if (error) {
      wishState.syncStatus = "error";
      wishState.syncError = getSyncErrorCopy(error);
      renderWishes();
      return;
    }

    elements.wishInput.value = "";
    if (Array.isArray(data) && data[0]) {
      wishState.wishes.unshift(normalizeRemoteWish(data[0]));
      renderWishes();
    }
    refreshRemoteWishes();
    return;
  }

  const wishes = getLocalWishes();
  wishes.unshift({
    id: crypto.randomUUID ? crypto.randomUUID() : `wish-${Date.now()}`,
    text: normalizedText,
    createdAt: new Date().toISOString(),
    createdBy: currentAuthor.id,
    completedAt: null,
  });

  if (saveLocalWishes(wishes)) {
    elements.wishInput.value = "";
    wishState.wishes = wishes;
    renderWishes();
  }
}

async function toggleWishCompletion(wishId) {
  const wishes = getStoredWishes();
  const targetWish = wishes.find((wish) => wish.id === wishId);
  if (!targetWish) return;

  const currentAuthor = getCurrentAuthor();
  if (!currentAuthor) return;

  const previousCompletedAt = targetWish.completedAt;
  const previousCompletedBy = targetWish.completedBy;
  const nextCompletedAt = targetWish.completedAt ? null : new Date().toISOString();
  const nextCompletedBy = targetWish.completedAt ? null : currentAuthor.id;

  if (authState.client && wishState.syncStatus !== "error") {
    targetWish.completedAt = nextCompletedAt;
    targetWish.completedBy = nextCompletedBy;
    renderWishes();

    const { error } = await authState.client
      .from(REMOTE_TABLES.wishes)
      .update({
        completed_at: nextCompletedAt,
        completed_by: nextCompletedBy,
      })
      .eq("id", wishId);

    if (error) {
      targetWish.completedAt = previousCompletedAt;
      targetWish.completedBy = previousCompletedBy;
      wishState.syncStatus = "error";
      wishState.syncError = getSyncErrorCopy(error);
      renderWishes();
      return;
    }

    refreshRemoteWishes();
    return;
  }

  targetWish.completedAt = nextCompletedAt;
  targetWish.completedBy = nextCompletedBy;

  if (saveLocalWishes(wishes)) {
    wishState.wishes = wishes;
    renderWishes();
  }
}

async function deleteWish(wishId) {
  const wishes = getStoredWishes();
  const targetWish = wishes.find((wish) => wish.id === wishId);
  if (!targetWish) return;

  const shouldDelete = window.confirm(`确定要删除「${targetWish.text}」这个小愿望吗？`);
  if (!shouldDelete) return;

  const nextWishes = wishes.filter((wish) => wish.id !== wishId);

  if (authState.client && wishState.syncStatus !== "error") {
    const previousWishes = wishState.wishes.map((wish) => ({ ...wish }));
    wishState.wishes = nextWishes;
    renderWishes();

    const { error } = await authState.client
      .from(REMOTE_TABLES.wishes)
      .delete()
      .eq("id", wishId);

    if (error) {
      wishState.wishes = previousWishes;
      wishState.syncStatus = "error";
      wishState.syncError = getSyncErrorCopy(error);
      renderWishes();
      return;
    }

    saveLocalWishes(nextWishes);
    refreshRemoteWishes();
    return;
  }

  if (saveLocalWishes(nextWishes)) {
    wishState.wishes = nextWishes;
    renderWishes();
  }
}

function bindWishes() {
  if (!elements.wishList || !elements.wishForm || !elements.wishAuthHint) return;

  elements.wishForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!ensureSiteAuth({ context: "site" })) return;
    addWish(elements.wishInput.value);
  });

  elements.wishList.addEventListener("click", (event) => {
    const toggleButton = event.target.closest("[data-toggle-wish]");
    const deleteButton = event.target.closest("[data-delete-wish]");
    if (!toggleButton && !deleteButton) return;
    if (!ensureSiteAuth({ context: "site" })) return;

    if (toggleButton) {
      toggleWishCompletion(toggleButton.dataset.toggleWish);
      return;
    }

    deleteWish(deleteButton.dataset.deleteWish);
  });

  elements.wishAuthHint.addEventListener("click", (event) => {
    if (event.target.closest("[data-wish-login]")) {
      openAuthModal(null, { context: "site" });
    }
  });
}

function updateTimelineFade() {
  const maxScroll = elements.timelineTrack.scrollWidth - elements.timelineTrack.clientWidth;
  const atStart = elements.timelineTrack.scrollLeft <= 2;
  const atEnd = maxScroll <= 2 || elements.timelineTrack.scrollLeft >= maxScroll - 2;

  elements.timelineViewport.classList.toggle("is-at-start", atStart);
  elements.timelineViewport.classList.toggle("is-at-end", atEnd);
}

function bindTimelineScroll() {
  elements.timelineTrack.addEventListener("scroll", updateTimelineFade, { passive: true });
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function getBoardAllowedEmails(boardId) {
  const board = getBoard(boardId);
  return (board?.allowedEmails || []).map(normalizeEmail);
}

function getSiteAllowedEmails() {
  return appData.messageAuthors.map((author) => normalizeEmail(author.email));
}

function getCurrentAuthEmail() {
  return normalizeEmail(authState.session?.user?.email);
}

function getAuthorByEmail(email) {
  const normalizedEmail = normalizeEmail(email);

  return appData.messageAuthors.find((author) => author.email === normalizedEmail) || null;
}

function getCurrentAuthor() {
  return getAuthorByEmail(getCurrentAuthEmail());
}

function getCurrentAuthName() {
  return getCurrentAuthor()?.name || "专属账号";
}

function getBoardOwnerAuthor(boardId) {
  return appData.messageAuthors.find((author) => author.id === boardId) || null;
}

function getBoardPermissionText(board) {
  if (board.id === "maimai") {
    return "「麦麦の留言板」只允许麦麦编辑 & 兔兔查看～";
  }

  if (board.id === "tutu") {
    return "「兔兔の留言板」只允许兔兔编辑 & 麦麦查看～";
  }

  return "这个留言板只允许专属账号进入。";
}

function isAllowedMessageEmail(email, boardId) {
  return getBoardAllowedEmails(boardId).includes(normalizeEmail(email));
}

function isMessageAuthenticated(boardId = messageState.activeBoardId || authState.pendingBoardId) {
  if (!boardId) return false;
  return Boolean(authState.session && isAllowedMessageEmail(getCurrentAuthEmail(), boardId));
}

function isSiteAuthenticated() {
  return Boolean(authState.session && getSiteAllowedEmails().includes(getCurrentAuthEmail()));
}

function isBoardAuthConfigured(boardId) {
  return getBoardAllowedEmails(boardId).length > 0;
}

function canEditBoard(boardId = messageState.activeBoardId) {
  const author = getCurrentAuthor();
  return Boolean(author && author.id === boardId);
}

function canEditMessage(message) {
  return Boolean(message && canEditBoard(message.boardId));
}

function setAuthStatus(message = "", tone = "neutral") {
  if (!elements.authStatus) return;

  elements.authStatus.textContent = message;
  elements.authStatus.dataset.tone = tone;
}

function setAuthSubmitLoading(isLoading) {
  elements.authSubmit.disabled = isLoading;
  elements.authSubmit.textContent = isLoading ? "登录中..." : "登录";
}

function setAuthSignOutVisible(isVisible) {
  if (!elements.authSignOut) return;
  elements.authSignOut.hidden = !isVisible;
}

function updateSiteLoginButton() {
  if (!elements.siteLoginButton) return;

  const authenticated = isSiteAuthenticated();
  elements.siteLoginButton.textContent = authenticated ? "已登录" : "登录";
  elements.siteLoginButton.classList.toggle("is-authenticated", authenticated);
}

function createSupabaseClient() {
  if (!window.supabase?.createClient) return null;

  return window.supabase.createClient(appData.auth.supabaseUrl, appData.auth.supabaseAnonKey, {
    auth: {
      autoRefreshToken: true,
      detectSessionInUrl: true,
      persistSession: true,
    },
  });
}

function updateAuthDependentUI() {
  renderMessageBoards();
  updateMessageAuthStatus();
  updateTripAuthStatus();
  updateSiteLoginButton();
  renderWishes();
}

function completePendingAuthAction() {
  if (authState.pendingTripId && isSiteAuthenticated()) {
    const tripId = authState.pendingTripId;
    authState.pendingTripId = null;
    closeAuthModal();
    openTripModal(tripId);
    return true;
  }

  if (authState.pendingBoardId && isMessageAuthenticated(authState.pendingBoardId)) {
    const boardId = authState.pendingBoardId;
    authState.pendingBoardId = null;
    closeAuthModal();
    openMessageModal(boardId);
    return true;
  }

  return false;
}

async function initSupabaseAuth() {
  if (!elements.authModal) return;

  authState.client = createSupabaseClient();
  authState.isReady = true;

  if (!authState.client) {
    setAuthStatus("认证脚本暂时没有加载出来，检查网络后刷新页面。", "error");
    updateAuthDependentUI();
    return;
  }

  const { data, error } = await authState.client.auth.getSession();

  if (!error) {
    authState.session = data.session;
  }

  authState.client.auth.onAuthStateChange((_event, session) => {
    authState.session = session;
    updateAuthDependentUI();
    refreshRemoteData().then(() => {
      completePendingAuthAction();
    });
  });

  updateAuthDependentUI();
  refreshRemoteData();
}

function openAuthModal(boardId = null, options = {}) {
  const board = boardId ? getBoard(boardId) : null;
  const context = options.context || (boardId ? "message" : "site");
  const allowedEmails = boardId ? getBoardAllowedEmails(boardId) : getSiteAllowedEmails();
  const alreadyAllowed = boardId ? isMessageAuthenticated(boardId) : isSiteAuthenticated();
  const hideAuthForm = allowedEmails.length === 0 || (context === "site" && alreadyAllowed);

  authState.pendingBoardId = boardId || null;
  authState.pendingTripId = options.tripId || null;
  authState.pendingAuthContext = context;
  elements.authEmail.value = "";
  elements.authPassword.value = "";
  elements.authForm.hidden = hideAuthForm;
  elements.authSubmit.textContent = "登录";
  setAuthSignOutVisible(context === "site" && alreadyAllowed);

  if (context === "trip") {
    elements.authTitle.textContent = "鹅兔相册入口";
    elements.authCopy.textContent = "旅行相册只给麦麦和兔兔查看。";
  } else if (context === "site") {
    elements.authTitle.textContent = "鹅兔专属入口";
    elements.authCopy.textContent = "登录后可以查看旅行相册、专属留言板和小小愿望清单。";
  } else {
    elements.authTitle.textContent = "鹅兔留言入口";
    elements.authCopy.textContent = "留言板只给麦麦和兔兔使用！";
  }

  if (boardId && !board) {
    setAuthStatus("这个留言板暂时没有找到。", "error");
  } else if (allowedEmails.length === 0) {
    setAuthStatus("这里还没有开放登录。", "error");
  } else if (authState.session && !alreadyAllowed) {
    setAuthStatus("当前账号不能进入这里，请换另一个专属账号。", "error");
  } else if (!authState.client) {
    setAuthStatus("认证服务还没准备好，检查网络后刷新页面。", "error");
  } else if (context === "trip") {
    setAuthStatus("登录后就可以打开旅行相册。", "neutral");
  } else if (context === "site") {
    setAuthStatus(
      authState.session
        ? `已登录：${getCurrentAuthName()}，旅行相册、留言板和愿望清单权限已打开。`
        : "只给麦麦和兔兔使用。",
      authState.session ? "success" : "neutral"
    );
  } else {
    setAuthStatus(getBoardPermissionText(board), "neutral");
  }

  elements.authModal.hidden = false;
  document.body.classList.add("modal-open");
  if (hideAuthForm) {
    elements.authSubmit.disabled = true;
  } else {
    elements.authSubmit.disabled = false;
    elements.authPassword.focus();
  }
}

function closeAuthModal() {
  elements.authModal.hidden = true;
  authState.pendingBoardId = null;
  authState.pendingTripId = null;
  authState.pendingAuthContext = "site";
  setAuthSignOutVisible(false);
  document.body.classList.remove("modal-open");
}

function ensureMessageAuth(boardId) {
  if (isMessageAuthenticated(boardId)) return true;

  openAuthModal(boardId);
  return false;
}

function ensureSiteAuth(options = {}) {
  if (isSiteAuthenticated()) return true;

  openAuthModal(null, options);
  return false;
}

function bindSiteLoginButton() {
  if (!elements.siteLoginButton) return;

  elements.siteLoginButton.addEventListener("click", () => {
    openAuthModal(null, { context: "site" });
  });
}

async function submitPasswordAuth() {
  const email = normalizeEmail(elements.authEmail.value);
  const password = elements.authPassword.value;
  const boardId = authState.pendingBoardId;
  const tripId = authState.pendingTripId;
  const context = authState.pendingAuthContext;
  const board = getBoard(boardId);
  const allowedEmails = boardId ? getBoardAllowedEmails(boardId) : getSiteAllowedEmails();

  if (boardId && (!board || !isBoardAuthConfigured(board.id))) {
    setAuthStatus("这个留言板还没有开放登录。", "error");
    return;
  }

  if (!allowedEmails.includes(email)) {
    setAuthStatus("这个账号不能进入这里。", "error");
    return;
  }

  if (password.length < 6) {
    setAuthStatus("密码至少需要 6 位。", "error");
    return;
  }

  if (!authState.client) {
    setAuthStatus("Supabase 认证还没有加载成功，刷新页面后再试。", "error");
    return;
  }

  setAuthSubmitLoading(true);
  setAuthStatus("", "neutral");

  const { data, error } = await authState.client.auth.signInWithPassword({
    email,
    password,
  });

  setAuthSubmitLoading(false);

  if (error) {
    setAuthStatus("登录失败。请确认邮箱、密码正确。", "error");
    return;
  }

  authState.session = data.session;
  await refreshRemoteData();
  updateAuthDependentUI();
  const shouldOpenBoard = Boolean(board && authState.pendingBoardId === board.id);
  const shouldOpenTrip = Boolean(context === "trip" && tripId && authState.pendingTripId === tripId);

  if (context === "site" && !shouldOpenBoard && !shouldOpenTrip) {
    authState.pendingBoardId = null;
    authState.pendingTripId = null;
    elements.authForm.hidden = true;
    setAuthSignOutVisible(true);
    setAuthStatus(`已登录：${getCurrentAuthName()}，旅行相册、留言板和愿望清单权限已打开。`, "success");
    return;
  }

  closeAuthModal();

  if (shouldOpenBoard) {
    openMessageModal(board.id);
    return;
  }

  if (shouldOpenTrip) {
    openTripModal(tripId);
  }
}

async function signOutAuth(source = "site") {
  if (!authState.client) return;

  await authState.client.auth.signOut({ scope: "local" });
  authState.session = null;
  messageState.messages = [];
  messageState.syncStatus = "local";
  messageState.syncError = "";

  if (source === "message") {
    closeMessageModal();
  }

  if (source === "trip") {
    closeTripModal();
  }

  updateAuthDependentUI();
  refreshRemoteWishes();

  if (source === "auth") {
    openAuthModal(null, { context: "site" });
  }
}

async function signOutMessageAuth() {
  await signOutAuth("message");
}

function updateMessageAuthStatus() {
  if (!elements.messageAuthStatus) return;

  if (!authState.client) {
    elements.messageAuthStatus.innerHTML = "<span>认证服务未加载，留言板暂时只能本地预览。</span>";
    return;
  }

  if (!authState.session) {
    elements.messageAuthStatus.innerHTML = "<span>尚未登录。</span>";
    return;
  }

  if (messageState.syncStatus === "loading") {
    elements.messageAuthStatus.innerHTML = "<span>正在同步留言...</span>";
    return;
  }

  if (messageState.syncStatus === "error") {
    elements.messageAuthStatus.innerHTML = `
      <span>${escapeHTML(messageState.syncError)}</span>
      <button type="button" data-message-sign-out>退出登录</button>
    `;
    return;
  }

  const email = getCurrentAuthEmail();
  const boardId = messageState.activeBoardId;
  const author = getCurrentAuthor();
  const isOwner = canEditBoard(boardId);
  const board = getBoard(boardId);
  const syncCopy = messageState.syncStatus === "ready" ? "，已跨设备同步" : "";
  const statusText = isAllowedMessageEmail(email, boardId)
    ? `已登录：${author ? author.name : "专属账号"}，${isOwner ? "可留言和编辑" : `可查看${board ? board.title : "留言板"}`}${syncCopy}`
    : "当前账号不在允许名单。";

  elements.messageAuthStatus.innerHTML = `
    <span>${escapeHTML(statusText)}</span>
    <button type="button" data-message-sign-out>退出登录</button>
  `;
}

function bindAuthModal() {
  if (!elements.authModal) return;

  elements.authForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitPasswordAuth();
  });

  elements.authSignOut?.addEventListener("click", () => signOutAuth("auth"));

  elements.authModal.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-auth-modal]")) {
      closeAuthModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (elements.authModal.hidden) return;

    if (event.key === "Escape") {
      closeAuthModal();
    }
  });
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getLocalMessages() {
  try {
    const stored = JSON.parse(localStorage.getItem(MESSAGE_STORAGE_KEY));
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function getStoredMessages() {
  if (messageState.syncStatus === "ready" || messageState.syncStatus === "loading") {
    return messageState.messages;
  }

  return getLocalMessages();
}

function saveLocalMessages(messages) {
  try {
    localStorage.setItem(MESSAGE_STORAGE_KEY, JSON.stringify(messages));
    return true;
  } catch {
    setMessageFormHint("图片可能太大了，浏览器本地空间放不下。");
    return false;
  }
}

function getMessageImageDisplayUrl(pathOrUrl) {
  const value = String(pathOrUrl || "");

  if (!value || value.startsWith("data:") || value.startsWith("blob:") || value.startsWith("http")) {
    return value;
  }

  if (!authState.client) return value;

  const { data } = authState.client.storage
    .from(MESSAGE_IMAGE_BUCKET)
    .getPublicUrl(value);

  return data?.publicUrl || value;
}

function normalizeRemoteMessage(row) {
  const imagePaths = Array.isArray(row.images)
    ? row.images
      .map((item) => (typeof item === "string" ? item : item?.path || item?.url || ""))
      .filter(Boolean)
    : [];

  return {
    id: row.id,
    boardId: row.board_id,
    authorId: row.author_id,
    content: row.content || "",
    imagePaths,
    images: imagePaths.map(getMessageImageDisplayUrl),
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function normalizeLocalMessage(message) {
  return {
    ...message,
    imagePaths: message.imagePaths || message.images || [],
    images: message.images || message.imagePaths || [],
  };
}

async function refreshRemoteMessages() {
  if (!authState.client || !isSiteAuthenticated()) {
    messageState.syncStatus = "local";
    messageState.syncError = "";
    messageState.messages = [];
    renderMessageBoards();
    if (messageState.activeBoardId) renderMessageList();
    return;
  }

  messageState.syncStatus = "loading";
  messageState.syncError = "";
  renderMessageBoards();
  if (messageState.activeBoardId) {
    updateMessageAuthStatus();
    renderMessageList();
  }

  const { data, error } = await authState.client
    .from(REMOTE_TABLES.messages)
    .select("id,board_id,author_id,content,images,created_at,updated_at")
    .order("updated_at", { ascending: false });

  if (error) {
    messageState.syncStatus = "error";
    messageState.syncError = getSyncErrorCopy(error);
    messageState.messages = getLocalMessages().map(normalizeLocalMessage);
    renderMessageBoards();
    if (messageState.activeBoardId) {
      updateMessageAuthStatus();
      renderMessageList();
    }
    return;
  }

  messageState.syncStatus = "ready";
  messageState.syncError = "";
  messageState.messages = Array.isArray(data) ? data.map(normalizeRemoteMessage) : [];
  saveLocalMessages(messageState.messages);
  renderMessageBoards();
  if (messageState.activeBoardId) {
    updateMessageAuthStatus();
    renderMessageList();
  }
}

async function refreshRemoteData() {
  await Promise.all([
    refreshRemoteWishes(),
    refreshRemoteMessages(),
  ]);
}

function getBoard(boardId) {
  return appData.messageBoards.find((board) => board.id === boardId);
}

function getAuthor(authorId) {
  return appData.messageAuthors.find((author) => author.id === authorId) || appData.messageAuthors[0];
}

function getBoardMessages(boardId) {
  return getStoredMessages()
    .filter((message) => message.boardId === boardId)
    .sort((first, second) => {
      const firstTime = new Date(first.updatedAt || first.createdAt).getTime();
      const secondTime = new Date(second.updatedAt || second.createdAt).getTime();
      return secondTime - firstTime;
    });
}

function formatMessageDate(isoValue) {
  const date = new Date(isoValue);

  if (Number.isNaN(date.getTime())) {
    return "日期待定";
  }

  const parts = new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Asia/Shanghai",
  })
    .formatToParts(date)
    .reduce((result, part) => {
      result[part.type] = part.value;
      return result;
    }, {});

  return `${parts.year}.${parts.month}.${parts.day}`;
}

function getMessageStatus(message) {
  const createdAt = message.createdAt || message.updatedAt;
  const updatedAt = message.updatedAt || message.createdAt;
  const isEdited = updatedAt && createdAt && updatedAt !== createdAt;

  return `${formatMessageDate(updatedAt || createdAt)} ${isEdited ? "已编辑" : "已创建"}`;
}

function getLatestMessageText(messages) {
  if (messages.length === 0) {
    return "等待第一张小纸条";
  }

  return `最近更新于 ${formatMessageDate(messages[0].updatedAt || messages[0].createdAt)}`;
}

function renderMessageBoards() {
  if (!elements.messageBoardGrid) return;

  elements.messageBoardGrid.innerHTML = appData.messageBoards
    .map((board) => {
      const messages = getBoardMessages(board.id);
      const canViewMessages = isMessageAuthenticated(board.id);
      const isConfigured = isBoardAuthConfigured(board.id);
      const isLoadingMessages = canViewMessages && messageState.syncStatus === "loading";

      return `
        <button class="message-board-card message-board-card-${board.accent} ${canViewMessages ? "" : "is-locked"}" type="button" data-board-id="${board.id}">
          <span class="message-board-stamp" aria-hidden="true">${board.emoji}</span>
          <span class="message-board-main">
            <span class="message-board-eyebrow">${board.englishTitle}</span>
            <strong>${board.title}</strong>
            <span>${board.line}</span>
          </span>
          <span class="message-board-stats">
            ${isLoadingMessages
          ? `<span><b>同步中</b></span>
                <small>正在读取留言</small>`
          : canViewMessages
            ? `<span><b>${messages.length}</b> 条留言</span>
                <small>${getLatestMessageText(messages)}</small>`
            : `<span><b>${isConfigured ? "Private" : "Pending"}</b></span>
                <small>${isConfigured ? "登录后查看留言" : "等待设置邮箱"}</small>`}
          </span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll(".message-board-card[data-board-id]").forEach((card) => {
    card.addEventListener("click", () => {
      if (!ensureMessageAuth(card.dataset.boardId)) return;
      openMessageModal(card.dataset.boardId);
    });
  });
}

function setMessageFormHint(text = "") {
  if (!elements.messageFormHint) return;
  elements.messageFormHint.textContent = text;
}

function renderMessagePreview() {
  const count = messageState.draftImages.length;

  elements.messageImageLimit.textContent = `${count} / ${MAX_MESSAGE_IMAGES} 张`;
  elements.messagePreview.hidden = count === 0;
  elements.messagePreview.innerHTML = messageState.draftImages
    .map(
      (image, index) => `
        <span class="message-preview-item">
          <img src="${escapeHTML(image.src)}" alt="待留言图片 ${index + 1}">
          <button type="button" aria-label="移除第 ${index + 1} 张图片" data-remove-message-image="${index}"></button>
        </span>
      `,
    )
    .join("");
}

function resetMessageForm() {
  messageState.editingMessageId = null;
  messageState.draftImages = [];
  elements.messageForm.reset();
  elements.messageSubmit.textContent = "留言";
  elements.messageCancelEdit.hidden = true;
  elements.messageForm.hidden = !canEditBoard();
  renderMessagePreview();
  setMessageFormHint("");
}

function readFileAsDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", () => reject(reader.error));
    reader.readAsDataURL(file);
  });
}

async function addMessageImages(files) {
  const remainingSlots = MAX_MESSAGE_IMAGES - messageState.draftImages.length;

  if (remainingSlots <= 0) {
    setMessageFormHint("最多只能放 6 张图片。");
    return;
  }

  const selectedFiles = Array.from(files).slice(0, remainingSlots);

  try {
    const imageSources = await Promise.all(
      selectedFiles.map(async (file) => ({
        src: await readFileAsDataURL(file),
        file,
      })),
    );
    messageState.draftImages = messageState.draftImages.concat(
      imageSources,
    );
    renderMessagePreview();
    setMessageFormHint(
      files.length > selectedFiles.length ? "已经帮你保留前 6 张图片。" : "",
    );
  } catch {
    setMessageFormHint("有图片没有读出来，可以重新选一次。");
  }
}

function getActiveBoardMessages() {
  return getBoardMessages(messageState.activeBoardId);
}

function renderMessageList() {
  const board = getBoard(messageState.activeBoardId);
  const messages = getActiveBoardMessages();
  const isEditableBoard = canEditBoard(board?.id);

  if (!board) return;

  elements.messageFeedTitle.textContent = `${board.owner}的留言记录`;
  elements.messageFeedCount.textContent = `${messages.length} 条`;

  if (messageState.syncStatus === "loading") {
    elements.messageList.innerHTML = `
      <div class="message-empty">
        <strong>正在同步留言</strong>
        <span>稍等一下，小纸条正在赶来。</span>
      </div>
    `;
    return;
  }

  if (messageState.syncStatus === "error") {
    elements.messageList.innerHTML = `
      <div class="message-empty">
        <strong>同步暂时不可用</strong>
        <span>${escapeHTML(messageState.syncError)}</span>
      </div>
    `;
    return;
  }

  if (messages.length === 0) {
    elements.messageList.innerHTML = `
      <div class="message-empty">
        <strong>这里还没有留言</strong>
        <span>${isEditableBoard ? "第一张小纸条，等你来写。" : "这里暂时还没有小纸条。"}</span>
      </div>
    `;
    return;
  }

  elements.messageList.innerHTML = messages
    .map((message) => {
      const author = getAuthor(message.authorId);
      const images = Array.isArray(message.images) ? message.images : [];
      const canManageMessage = canEditMessage(message);

      return `
        <article class="message-item" data-message-id="${message.id}">
          <div class="message-item-head">
            <span class="message-author">
              <span aria-hidden="true">${author.emoji}</span>
              ${author.name}
            </span>
            <time datetime="${escapeHTML(message.updatedAt || message.createdAt)}">${getMessageStatus(message)}</time>
          </div>
          <p>${escapeHTML(message.content)}</p>
          ${images.length > 0
          ? `<div class="message-image-grid">${images
            .map((src, index) => `
              <button class="message-image-button" type="button" data-open-message-image="${escapeHTML(message.id)}" data-message-image-index="${index}" aria-label="查看第 ${index + 1} 张留言图片">
                <img src="${escapeHTML(src)}" alt="留言图片 ${index + 1}">
              </button>
            `)
            .join("")}</div>`
          : ""}
          ${canManageMessage
          ? `<div class="message-item-actions">
              <button type="button" data-edit-message="${message.id}">编辑</button>
              <button class="message-delete-button" type="button" data-delete-message="${message.id}">删除</button>
            </div>`
          : ""}
        </article>
      `;
    })
    .join("");
}

function animateMessageImage(direction) {
  if (direction === 0 || !elements.messageImageFull) return;

  const animationClass = direction > 0 ? "is-sliding-next" : "is-sliding-prev";
  elements.messageImageFull.classList.remove("is-sliding-next", "is-sliding-prev");
  void elements.messageImageFull.offsetWidth;
  elements.messageImageFull.classList.add(animationClass);
}

function renderMessageImage(direction = 0) {
  const images = messageImageState.images;
  const imageCount = images.length;

  if (!elements.messageImageFull || !elements.messageImageCounter) return;

  if (imageCount === 0) {
    elements.messageImageFull.removeAttribute("src");
    elements.messageImageFull.alt = "暂无留言图片";
    elements.messageImageCounter.textContent = "0 / 0";
    elements.messageImagePrev.disabled = true;
    elements.messageImageNext.disabled = true;
    return;
  }

  const safeIndex = Math.min(Math.max(messageImageState.activeIndex, 0), imageCount - 1);
  messageImageState.activeIndex = safeIndex;
  elements.messageImageFull.src = images[safeIndex];
  elements.messageImageFull.alt = `留言图片 ${safeIndex + 1}`;
  elements.messageImageCounter.textContent = `${safeIndex + 1} / ${imageCount}`;
  elements.messageImagePrev.disabled = imageCount <= 1;
  elements.messageImageNext.disabled = imageCount <= 1;
  animateMessageImage(direction);
}

function stepMessageImage(direction) {
  const imageCount = messageImageState.images.length;
  if (imageCount <= 1) return;

  messageImageState.activeIndex = (messageImageState.activeIndex + direction + imageCount) % imageCount;
  renderMessageImage(direction);
}

function openMessageImageViewer(messageId, imageIndex = 0) {
  const message = getActiveBoardMessages().find((item) => item.id === messageId);
  const images = Array.isArray(message?.images) ? message.images : [];

  if (!message || images.length === 0 || !elements.messageImageModal) return;

  messageImageState.messageId = message.id;
  messageImageState.images = images;
  messageImageState.activeIndex = Number.isFinite(imageIndex) ? imageIndex : 0;
  renderMessageImage();
  elements.messageImageModal.hidden = false;
  document.body.classList.add("modal-open");
  elements.messageImageModal.querySelector(".modal-close")?.focus();
}

function closeMessageImageViewer({ preserveBodyLock = false } = {}) {
  if (!elements.messageImageModal || elements.messageImageModal.hidden) return;

  elements.messageImageModal.hidden = true;
  elements.messageImageFull?.removeAttribute("src");
  messageImageState.messageId = null;
  messageImageState.images = [];
  messageImageState.activeIndex = 0;

  if (
    !preserveBodyLock
    && elements.messageModal.hidden
    && elements.tripModal.hidden
    && elements.authModal.hidden
  ) {
    document.body.classList.remove("modal-open");
  }
}

function openMessageModal(boardId) {
  const board = getBoard(boardId);

  if (!board) return;
  if (!ensureMessageAuth(board.id)) return;

  messageState.activeBoardId = board.id;
  elements.messageModalTitle.textContent = board.title;
  elements.messageModalSubtitle.textContent = board.line;
  resetMessageForm();
  updateMessageAuthStatus();
  renderMessageList();
  elements.messageModal.hidden = false;
  document.body.classList.add("modal-open");

  if (canEditBoard(board.id)) {
    elements.messageText.focus();
  } else {
    document.querySelector(".message-modal .modal-close").focus();
  }

  if (messageState.syncStatus !== "ready" && messageState.syncStatus !== "loading") {
    refreshRemoteMessages();
  }
}

function closeMessageModal() {
  closeMessageImageViewer({ preserveBodyLock: true });
  elements.messageModal.hidden = true;
  document.body.classList.remove("modal-open");
  messageState.activeBoardId = null;
  resetMessageForm();
}

function createMessageId() {
  return crypto.randomUUID ? crypto.randomUUID() : `message-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function sanitizeStorageFileName(fileName = "image.jpg") {
  return fileName
    .normalize("NFKD")
    .replace(/[^\w.-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "image.jpg";
}

function dataUrlToBlob(dataUrl) {
  const [header, data] = String(dataUrl).split(",");
  const mimeMatch = header.match(/data:([^;]+)/);
  const mimeType = mimeMatch ? mimeMatch[1] : "image/jpeg";
  const binary = atob(data || "");
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return new Blob([bytes], { type: mimeType });
}

async function uploadDraftMessageImages(messageId, drafts) {
  if (!authState.client || messageState.syncStatus === "error") {
    return drafts.map((image) => image.path || image.src).filter(Boolean);
  }

  const imagePaths = [];

  for (const [index, image] of drafts.entries()) {
    if (image.path) {
      imagePaths.push(image.path);
      continue;
    }

    const fileBody = image.file || dataUrlToBlob(image.src);
    const fileName = sanitizeStorageFileName(image.file?.name || `message-image-${index + 1}.jpg`);
    const storagePath = `${messageState.activeBoardId}/${messageId}/${Date.now()}-${index}-${fileName}`;
    const { error } = await authState.client.storage
      .from(MESSAGE_IMAGE_BUCKET)
      .upload(storagePath, fileBody, {
        cacheControl: "3600",
        contentType: image.file?.type || fileBody.type || "image/jpeg",
        upsert: false,
      });

    if (error) {
      throw error;
    }

    imagePaths.push(storagePath);
  }

  return imagePaths;
}

async function saveMessageFromForm() {
  if (!canEditBoard()) {
    setMessageFormHint("这个信箱你只能查看，不能留言或编辑。");
    return;
  }

  const content = elements.messageText.value.trim();
  const currentAuthor = getCurrentAuthor();
  const authorId = currentAuthor?.id;
  const now = new Date().toISOString();
  const messageId = messageState.editingMessageId || createMessageId();
  let imageSources = messageState.draftImages.map((image) => image.path || image.src);

  if (!authorId) {
    setMessageFormHint("没有识别出当前登录身份，请重新登录。");
    return;
  }

  if (!content && imageSources.length === 0) {
    setMessageFormHint("先写一点文字，或者放一张图片。");
    return;
  }

  setMessageFormHint("正在同步留言...");
  elements.messageSubmit.disabled = true;

  if (authState.client && messageState.syncStatus !== "error") {
    try {
      imageSources = await uploadDraftMessageImages(messageId, messageState.draftImages);

      if (messageState.editingMessageId) {
        const { error } = await authState.client
          .from(REMOTE_TABLES.messages)
          .update({
            content,
            images: imageSources,
            updated_at: now,
          })
          .eq("id", messageState.editingMessageId);

        if (error) throw error;
      } else {
        const { error } = await authState.client
          .from(REMOTE_TABLES.messages)
          .insert({
            id: messageId,
            board_id: messageState.activeBoardId,
            author_id: authorId,
            content,
            images: imageSources,
            created_at: now,
            updated_at: now,
          });

        if (error) throw error;
      }

      elements.messageSubmit.disabled = false;
      resetMessageForm();
      await refreshRemoteMessages();
      setMessageFormHint("已经同步到留言板啦。");
      return;
    } catch (error) {
      elements.messageSubmit.disabled = false;
      setMessageFormHint(getSyncErrorCopy(error));
      return;
    }
  }

  const messages = getLocalMessages();

  if (messageState.editingMessageId) {
    const targetIndex = messages.findIndex((message) => message.id === messageState.editingMessageId);

    if (targetIndex < 0) {
      elements.messageSubmit.disabled = false;
      setMessageFormHint("这条留言没有找到，可以重新打开留言板。");
      return;
    }

    if (!canEditMessage(messages[targetIndex])) {
      elements.messageSubmit.disabled = false;
      setMessageFormHint("这个信箱你只能查看，不能编辑。");
      return;
    }

    messages[targetIndex] = {
      ...messages[targetIndex],
      authorId,
      content,
      images: imageSources,
      updatedAt: now,
    };
  } else {
    messages.push({
      id: messageId,
      boardId: messageState.activeBoardId,
      authorId,
      content,
      images: imageSources,
      createdAt: now,
      updatedAt: now,
    });
  }

  elements.messageSubmit.disabled = false;
  if (!saveLocalMessages(messages)) return;

  messageState.messages = messages.map(normalizeLocalMessage);
  resetMessageForm();
  renderMessageBoards();
  renderMessageList();
  setMessageFormHint("已经放进留言板啦。");
}

function startEditingMessage(messageId) {
  const message = getStoredMessages().find((item) => item.id === messageId);

  if (!message) return;
  if (!canEditMessage(message)) {
    setMessageFormHint("这个信箱你只能查看，不能编辑。");
    return;
  }

  messageState.editingMessageId = message.id;
  elements.messageText.value = message.content || "";
  messageState.draftImages = (message.images || []).map((src, index) => ({
    src,
    path: message.imagePaths?.[index] || src,
  }));
  elements.messageSubmit.textContent = "保存编辑";
  elements.messageCancelEdit.hidden = false;
  renderMessagePreview();
  setMessageFormHint("正在编辑这条留言。");
  elements.messageText.focus();
}

async function deleteMessage(messageId) {
  const message = getStoredMessages().find((item) => item.id === messageId);

  if (!message) return;
  if (!canEditMessage(message)) {
    setMessageFormHint("这个信箱你只能查看，不能删除。");
    return;
  }

  const shouldDelete = window.confirm("确定要删除这条留言吗？删除后不会再显示。");

  if (!shouldDelete) return;

  if (authState.client && messageState.syncStatus !== "error") {
    setMessageFormHint("正在删除...");

    const { error } = await authState.client
      .from(REMOTE_TABLES.messages)
      .delete()
      .eq("id", messageId);

    if (error) {
      setMessageFormHint(getSyncErrorCopy(error));
      return;
    }

    if (messageState.editingMessageId === messageId) {
      resetMessageForm();
    }

    await refreshRemoteMessages();
    setMessageFormHint("这条留言已经删除。");
    return;
  }

  const nextMessages = getLocalMessages().filter((item) => item.id !== messageId);

  if (!saveLocalMessages(nextMessages)) return;
  messageState.messages = nextMessages.map(normalizeLocalMessage);

  if (messageState.editingMessageId === messageId) {
    resetMessageForm();
  }

  renderMessageBoards();
  renderMessageList();
  setMessageFormHint("这条留言已经删除。");
}

function bindMessageBoards() {
  if (!elements.messageModal) return;

  renderMessagePreview();

  elements.messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    saveMessageFromForm();
  });

  elements.messageImages.addEventListener("change", (event) => {
    addMessageImages(event.target.files);
    event.target.value = "";
  });

  elements.messageCancelEdit.addEventListener("click", resetMessageForm);

  elements.messagePreview.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-message-image]");
    if (!removeButton) return;

    const index = Number(removeButton.dataset.removeMessageImage);
    messageState.draftImages.splice(index, 1);
    renderMessagePreview();
  });

  elements.messageList.addEventListener("click", (event) => {
    const imageButton = event.target.closest("[data-open-message-image]");
    const editButton = event.target.closest("[data-edit-message]");
    const deleteButton = event.target.closest("[data-delete-message]");

    if (imageButton) {
      openMessageImageViewer(
        imageButton.dataset.openMessageImage,
        Number(imageButton.dataset.messageImageIndex),
      );
      return;
    }

    if (editButton) {
      startEditingMessage(editButton.dataset.editMessage);
      return;
    }

    if (deleteButton) {
      deleteMessage(deleteButton.dataset.deleteMessage);
    }
  });

  elements.messageAuthStatus.addEventListener("click", (event) => {
    if (event.target.closest("[data-message-sign-out]")) {
      signOutMessageAuth();
    }
  });

  elements.messageModal.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-message-modal]")) {
      closeMessageModal();
    }
  });

  elements.messageImageModal?.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-message-image]")) {
      closeMessageImageViewer();
    }
  });

  elements.messageImagePrev?.addEventListener("click", () => stepMessageImage(-1));
  elements.messageImageNext?.addEventListener("click", () => stepMessageImage(1));

  document.addEventListener("keydown", (event) => {
    if (!elements.messageImageModal?.hidden) {
      if (event.key === "Escape") {
        closeMessageImageViewer();
      }

      if (event.key === "ArrowLeft") {
        stepMessageImage(-1);
      }

      if (event.key === "ArrowRight") {
        stepMessageImage(1);
      }

      return;
    }

    if (elements.messageModal.hidden) return;

    if (event.key === "Escape") {
      closeMessageModal();
    }
  });
}

function getTripPhotos(trip) {
  if (Array.isArray(trip.photos) && trip.photos.length > 0) {
    return trip.photos;
  }

  return trip.photo ? [trip.photo] : [];
}

function getActiveTrip() {
  return appData.trips.find((item) => item.id === tripModalState.activeTripId);
}

function updateTripAuthStatus() {
  if (!elements.tripAuthRow || !elements.tripAuthStatus) return;

  if (!isSiteAuthenticated()) {
    elements.tripAuthRow.hidden = true;
    elements.tripAuthStatus.textContent = "";
    return;
  }

  elements.tripAuthStatus.textContent = `已登录：${getCurrentAuthName()}，可查看专属相册`;
  elements.tripAuthRow.hidden = false;
}

function animateModalPhoto(direction) {
  if (direction === 0) return;

  const animationClass = direction > 0 ? "is-sliding-next" : "is-sliding-prev";
  elements.modalImage.classList.remove("is-sliding-next", "is-sliding-prev");
  void elements.modalImage.offsetWidth;
  elements.modalImage.classList.add(animationClass);
}

function renderModalPhoto(direction = 0) {
  const trip = getActiveTrip();
  if (!trip) return;

  const photos = getTripPhotos(trip);
  const photoCount = photos.length;

  if (photoCount === 0) {
    elements.modalImage.removeAttribute("src");
    elements.modalImage.alt = `${trip.place}暂无旅行照片`;
    elements.modalCounter.textContent = "0 / 0";
    elements.modalPrev.disabled = true;
    elements.modalNext.disabled = true;
    return;
  }

  const safeIndex = Math.min(Math.max(tripModalState.activePhotoIndex, 0), photoCount - 1);

  tripModalState.activePhotoIndex = safeIndex;
  elements.modalImage.src = photos[safeIndex];
  elements.modalImage.alt = `${trip.place}的旅行照片 ${safeIndex + 1}`;
  elements.modalCounter.textContent = `${safeIndex + 1} / ${photoCount}`;
  elements.modalPrev.disabled = photoCount <= 1;
  elements.modalNext.disabled = photoCount <= 1;
  animateModalPhoto(direction);
}

function stepModalPhoto(direction) {
  const trip = getActiveTrip();
  if (!trip) return;

  const photos = getTripPhotos(trip);
  if (photos.length <= 1) return;

  tripModalState.activePhotoIndex =
    (tripModalState.activePhotoIndex + direction + photos.length) % photos.length;
  renderModalPhoto(direction);
}

function openTripModal(tripId) {
  const trip = appData.trips.find((item) => item.id === tripId);

  if (!trip) return;

  tripModalState.activeTripId = trip.id;
  tripModalState.activePhotoIndex = 0;
  renderModalPhoto();
  elements.modalTitle.textContent = trip.place;
  elements.modalEnglish.textContent = trip.englishTitle;
  elements.modalQuote.textContent = trip.quote;
  updateTripAuthStatus();
  elements.tripModal.hidden = false;
  document.body.classList.add("modal-open");
  document.querySelector(".modal-close").focus();
}

function closeTripModal() {
  elements.tripModal.hidden = true;
  document.body.classList.remove("modal-open");
  tripModalState.activeTripId = null;
  tripModalState.activePhotoIndex = 0;
}

function bindModal() {
  elements.tripModal.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-modal]")) {
      closeTripModal();
    }
  });

  elements.modalPrev.addEventListener("click", () => stepModalPhoto(-1));
  elements.modalNext.addEventListener("click", () => stepModalPhoto(1));
  elements.tripSignOut?.addEventListener("click", () => signOutAuth("trip"));

  document.addEventListener("keydown", (event) => {
    if (elements.tripModal.hidden) return;

    if (event.key === "Escape") {
      closeTripModal();
      return;
    }

    if (event.key === "ArrowLeft") {
      stepModalPhoto(-1);
    }

    if (event.key === "ArrowRight") {
      stepModalPhoto(1);
    }
  });
}

function renderNextMeet() {
  if (!appData.nextMeetDate) {
    elements.nextMeetText.textContent = "To be decided...";
    return;
  }

  const target = new Date(appData.nextMeetDate);
  const now = new Date();
  const days = Math.max(0, Math.ceil((target - now) / 86400000));
  elements.nextMeetText.textContent = days === 0 ? "就是今天" : `还有 ${days} 天`;
}

function releaseFloatingHeart(origin) {
  const heart = document.createElement("span");
  const rect = origin.getBoundingClientRect();

  heart.className = "floating-heart";
  heart.style.left = `${rect.left + rect.width / 2}px`;
  heart.style.top = `${rect.top + rect.height / 2}px`;
  document.body.append(heart);
  heart.addEventListener("animationend", () => heart.remove());
}

function bindMissButton() {
  let count = 0;

  elements.missButton.addEventListener("click", () => {
    const message = appData.longingMessages[count % appData.longingMessages.length];
    count += 1;

    elements.missMessage.textContent = message;
    document.body.classList.remove("longing");
    window.requestAnimationFrame(() => {
      document.body.classList.add("longing");
      releaseFloatingHeart(elements.missButton);
    });

    window.setTimeout(() => document.body.classList.remove("longing"), 900);
  });
}

function boot() {
  clearLegacyWishStorage();
  initLeafletMap();
  startLocationClocks();
  initMusicPlayer();
  renderTrips();
  renderTimeline();
  renderMilestones();
  renderWishes();
  renderMessageBoards();
  renderNextMeet();
  bindModal();
  bindAuthModal();
  bindSiteLoginButton();
  bindWishes();
  bindMessageBoards();
  bindMissButton();
  bindTimelineScroll();
  initSupabaseAuth();
  window.addEventListener("resize", () => {
    mapState.map?.invalidateSize();
    updateTimelineFade();
  });
}

boot();
