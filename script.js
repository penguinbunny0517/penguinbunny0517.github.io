const appData = {
  couple: {
    penguin: {
      id: "penguin",
      name: "麦麦小鹅 🩶",
      animal: "penguin",
      location: {
        label: "美国·北卡罗莱纳州·达勒姆",
        city: "达勒姆",
        lat: 35.9833,
        lng: -78.9,
        timeZone: "America/New_York",
      },
      note: "",
    },
    rabbit: {
      id: "rabbit",
      name: "兔兔公主 🧡",
      animal: "rabbit",
      location: {
        label: "中国·北京",
        city: "北京",
        lat: 39.9042,
        lng: 116.4074,
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
  ],
  trips: [
    {
      id: "dalian",
      place: "大连",
      shortName: "中国·大连",
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
      shortName: "中国·北京·野生动物园",
      englishTitle: "Beijing Wildlife Park",
      date: "2025.11.16",
      season: "动物和晴天",
      icon: "园",
      photos: ["assets/trips/beijing-zoo/beiye1.jpg"],
      quote: "“都可以随便的，你说的，我都愿意去，小火车摆动的旋律。”",
    },
    {
      id: "tianjin",
      place: "天津",
      shortName: "中国·天津",
      englishTitle: "Tianjin",
      date: "2025.12.13 - 2025.12.14",
      season: "城市和烟火",
      icon: "津",
      photos: ["assets/trips/tianjin/tianjin1.jpg"],
      quote: "“パッと光って咲いた、花火を見ていた。”",
    },
    {
      id: "universal",
      place: "北京环球影城",
      shortName: "中国·北京·环球影城",
      englishTitle: "Universal Beijing Resort",
      date: "2026.02.28",
      season: "魔法和拥抱",
      icon: "影",
      photos: ["assets/trips/universal/huanqiu1.jpg"],
      quote: "“要说说笑笑，随风飘飘，永不坠落。”",
    },
    {
      id: "jeju",
      place: "济州岛",
      shortName: "韩国·济州岛",
      englishTitle: "Jeju Island",
      date: "2026.03.25 - 2026.03.29",
      season: "橘子和海岸线",
      icon: "橘",
      photos: ["assets/trips/jeju/jeju1.jpg"],
      quote: "“你记得我最纯净的轮廓，握住小小风车和放肆的梦。”"
    },
  ],
  longingMessages: [
    "麦麦小鹅刚刚向兔兔公主发送了一颗小心心。",
    "兔兔公主收到一份来自地图另一端的抱抱。",
    "今天的想念已经盖章，正在慢慢飞过去。",
    "两只小动物又在同一张地图上靠近了一点点。",
  ],
  timeline: [
    {
      date: "2025.04.27",
      tag: "鹅与兔的相识！",
      text: "“我中过最惊喜的彩券...”",
    },
    {
      date: "2025.05.11",
      tag: "鹅兔初见：第一天 & 暖暖～",
      text: "“爱是腾空的魔幻，第一天的纯真色彩它总是永远那么灿烂。”",
    },
    {
      date: "2025.05.17",
      tag: "在一起啦！❤️",
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
      text: "\"I can take you far far away, faw enough for us to dissappear.\"",
    },
    {
      date: "2025.11.16",
      tag: "北野一日游！",
      text: "“我们小手拉大手，一起郊游，今天别想太多～”",
    },
    {
      date: "2025.12.12",
      tag: "一起过第一次初雪 ❄️",
      text: "小鹅冰面滑行失败，小兔直接倒下开睡！",
    },
    {
      date: "2025.12.13-2025.12.14",
      tag: "天津两日小旅行～",
      text: "居然在超高层酒店幸运地看到了烟花！",
    },
    {
      date: "2026.01.01",
      tag: "第一次一起跨年",
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
      text: "\"나가서 바람이나 좀 쐐, 아무도 찾지 않는 곳에.\"",
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
  volume: 0.58,
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
  tripGrid: document.querySelector("#tripGrid"),
  timelineViewport: document.querySelector("#timelineViewport"),
  timelineTrack: document.querySelector("#timelineTrack"),
  tripModal: document.querySelector("#tripModal"),
  modalImage: document.querySelector("#modalImage"),
  modalPrev: document.querySelector("#modalPrev"),
  modalNext: document.querySelector("#modalNext"),
  modalCounter: document.querySelector("#modalCounter"),
  modalTitle: document.querySelector("#modalTitle"),
  modalEnglish: document.querySelector("#modalEnglish"),
  modalQuote: document.querySelector("#modalQuote"),
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
  return `${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`;
}

function renderLocationStrip() {
  elements.locationStrip.innerHTML = getPeople()
    .map(
      (person) => `
        <div class="location-pill" data-person="${person.id}">
          <strong>${person.name}</strong>
          <span class="location-details">
            ${person.location.label}
            <small>${formatCoordinate(person.location)}</small>
          </span>
          <time class="location-clock" data-time-zone="${person.location.timeZone}" aria-label="${person.location.city}当前时间">--:--:--</time>
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
    <span>${person.location.label}</span>
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
    mapState.map.setView(points[0], 4);
    return;
  }

  mapState.map.fitBounds(L.latLngBounds(points), {
    maxZoom: 5,
    padding: [70, 106],
  });
}

function initLeafletMap() {
  renderDistance();
  renderLocationStrip();

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

function updateMusicDisplay() {
  const currentTrack = getCurrentTrack();

  elements.musicToggle.classList.toggle("is-playing", musicState.isPlaying);
  elements.musicLabel.textContent = currentTrack ? currentTrack.title : "";

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

function setMusicMenuOpen(isOpen) {
  musicState.isMenuOpen = isOpen;
  elements.musicMenu.hidden = !isOpen;
  elements.musicToggle.setAttribute("aria-expanded", String(isOpen));
  elements.musicPlayer.classList.toggle("is-open", isOpen);
}

function renderMusicMenu() {
  elements.musicMenu.innerHTML = `
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

  document.querySelectorAll(".music-option").forEach((option) => {
    option.addEventListener("click", () => playMusicTrack(option.dataset.musicId));
  });

  updateVolumeDisplay();
}

function playMusicTrack(trackId) {
  const track = appData.musicTracks.find((item) => item.id === trackId);
  const isSameTrack = musicState.currentId === trackId;

  if (!track) return;

  if (isSameTrack && musicState.isPlaying) {
    elements.bgmAudio.pause();
    setMusicMenuOpen(false);
    return;
  }

  if (!isSameTrack) {
    elements.bgmAudio.src = track.src;
    musicState.currentId = track.id;
  }

  elements.bgmAudio.loop = true;
  elements.bgmAudio
    .play()
    .then(() => {
      musicState.isPlaying = true;
      updateMusicDisplay();
      setMusicMenuOpen(false);
    })
    .catch(() => {
      musicState.isPlaying = false;
      updateMusicDisplay();
    });
}

function initMusicPlayer() {
  if (!elements.musicPlayer) return;

  elements.bgmAudio.volume = musicState.volume;
  renderMusicMenu();
  updateMusicDisplay();

  elements.musicToggle.addEventListener("click", () => {
    setMusicMenuOpen(!musicState.isMenuOpen);
  });

  elements.bgmAudio.addEventListener("play", () => {
    musicState.isPlaying = true;
    updateMusicDisplay();
  });

  elements.bgmAudio.addEventListener("pause", () => {
    musicState.isPlaying = false;
    updateMusicDisplay();
  });

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
    <article class="trip-card trip-card-loading" aria-label="麦麦和兔兔的故事将会持续loading">
      <span class="trip-photo trip-photo-loading" aria-hidden="true">
        <span>Loading...</span>
      </span>
      <span class="trip-title-group trip-loading-copy">
        <h3>麦麦和兔兔的故事将会持续loading...</h3>
      </span>
    </article>
  `;

  document.querySelectorAll(".trip-card[data-trip-id]").forEach((card) => {
    card.addEventListener("click", () => openTripModal(card.dataset.tripId));
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

function getTripPhotos(trip) {
  if (Array.isArray(trip.photos) && trip.photos.length > 0) {
    return trip.photos;
  }

  return trip.photo ? [trip.photo] : [];
}

function getActiveTrip() {
  return appData.trips.find((item) => item.id === tripModalState.activeTripId);
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
  initLeafletMap();
  startLocationClocks();
  initMusicPlayer();
  renderTrips();
  renderTimeline();
  renderNextMeet();
  bindModal();
  bindMissButton();
  bindTimelineScroll();
  window.addEventListener("resize", () => {
    mapState.map?.invalidateSize();
    updateTimelineFade();
  });
}

boot();
