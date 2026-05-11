# Assets

- 地图文件放在 `assets/images/worldmap.png`。
- 旅行照片按地点放在 `assets/trips/<trip-id>/`。
- 每个地点的相册路径在 `script.js` 的 `appData.trips[].photos` 中维护。
- 旅行卡片使用竖向 3:4 比例展示，照片会自动裁切居中。
