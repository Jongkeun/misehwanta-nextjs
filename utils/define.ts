export const squareSize = 10; // croped image size
export const standardMapWidth = 533; // map width
export const standardMapHeight = 583; // map height
export const standardMapPivotX = 131; // start point of X in the map
export const standardMapPivotY = 160; // start point of Y in the map

export const minTmX = 9300; // minimum TmX location value in the map : -9300
export const minTmY = 29968; // minimum TmY location value in the map : -29968
export const totalMapWidth = 551004; // total TmX
export const totalMapHeight = 597720; // total TmY

export const fineDustStandMap = new Map([
  [[104, 0, 0], { level: 35, PM10: 360, PM25: 220, O3: 320 }],
  [[129, 0, 0], { level: 34, PM10: 320, PM25: 200, O3: 300 }],
  [[155, 0, 0], { level: 33, PM10: 280, PM25: 170, O3: 280 }],
  [[179, 0, 0], { level: 32, PM10: 260, PM25: 160, O3: 260 }],
  [[205, 0, 0], { level: 31, PM10: 240, PM25: 150, O3: 240 }],
  [[230, 0, 0], { level: 30, PM10: 220, PM25: 140, O3: 220 }],
  [[255, 0, 0], { level: 29, PM10: 200, PM25: 120, O3: 200 }],
  [[255, 59, 59], { level: 28, PM10: 190, PM25: 110, O3: 190 }],
  [[255, 90, 90], { level: 27, PM10: 180, PM25: 100, O3: 180 }],
  [[255, 120, 120], { level: 26, PM10: 170, PM25: 90, O3: 170 }],
  [[255, 150, 150], { level: 25, PM10: 160, PM25: 80, O3: 160 }],
  [[100, 100, 0], { level: 24, PM10: 150, PM25: 75, O3: 150 }],
  [[115, 115, 0], { level: 23, PM10: 143, PM25: 70, O3: 144 }],
  [[131, 131, 0], { level: 22, PM10: 136, PM25: 65, O3: 138 }],
  [[146, 146, 0], { level: 21, PM10: 129, PM25: 60, O3: 132 }],
  [[162, 162, 0], { level: 20, PM10: 122, PM25: 55, O3: 126 }],
  [[177, 177, 0], { level: 19, PM10: 115, PM25: 50, O3: 120 }],
  [[193, 193, 0], { level: 18, PM10: 108, PM25: 46, O3: 114 }],
  [[208, 208, 0], { level: 17, PM10: 101, PM25: 42, O3: 108 }],
  [[224, 224, 0], { level: 16, PM10: 94, PM25: 39, O3: 102 }],
  [[240, 240, 0], { level: 15, PM10: 87, PM25: 37, O3: 96 }],
  [[0, 119, 0], { level: 14, PM10: 80, PM25: 35, O3: 90 }],
  [[0, 138, 0], { level: 13, PM10: 75, PM25: 33, O3: 84 }],
  [[0, 158, 0], { level: 12, PM10: 70, PM25: 31, O3: 78 }],
  [[0, 177, 0], { level: 11, PM10: 65, PM25: 29, O3: 72 }],
  [[0, 196, 0], { level: 10, PM10: 60, PM25: 27, O3: 66 }],
  [[0, 216, 0], { level: 9, PM10: 55, PM25: 25, O3: 60 }],
  [[0, 235, 0], { level: 8, PM10: 50, PM25: 23, O3: 54 }],
  [[0, 255, 0], { level: 7, PM10: 45, PM25: 21, O3: 48 }],
  [[100, 255, 100], { level: 6, PM10: 40, PM25: 19, O3: 42 }],
  [[150, 255, 150], { level: 5, PM10: 35, PM25: 17, O3: 36 }],
  [[53, 151, 250], { level: 4, PM10: 30, PM25: 15, O3: 30 }],
  [[76, 163, 245], { level: 3, PM10: 24, PM25: 12, O3: 24 }],
  [[100, 175, 240], { level: 2, PM10: 18, PM25: 9, O3: 18 }],
  [[135, 192, 232], { level: 1, PM10: 12, PM25: 6, O3: 12 }],
  [[152, 201, 228], { level: 0, PM10: 6, PM25: 3, O3: 6 }],
]);

export const calStartTime = 9;
export const calEndTime = 18;

export const forecastImgName = "image";
export const parsedImgName = "cropped";

export const PM10 = "PM10";
export const PM25 = "PM25";
export const O3 = "O3";

export const ForecastTypes = [PM10, PM25 /*, O3*/];
