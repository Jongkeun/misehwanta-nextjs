import { fineDustStandMap as standardMap } from "./define";

const width = 10;
const height = 10;

export function getDominantColor(
  ctx: CanvasRenderingContext2D,
  dataArr: string[],
  pos: { pointX: number; pointY: number }
) {
  // loop dataArr
  dataArr.map((image: string) => {
    let colors: any[] = [];
    let Img = new Image();
    Img.src = image;
    Img.width = 820;
    Img.height = 830;
    const standardKeys = Array.from(standardMap.keys());
    if (ctx) {
      Img.onload = function() {
        //ctx.drawImage(Img, posX, posY, 10, 10, 0, 0, 10, 10);
        ctx.drawImage(Img, 0, 0, 820, 830);
        // rect({
        //   ctx,
        //   x: 131 + posX - 5,
        //   y: 160 + posY - 5,
        //   width: 10,
        //   height: 10,
        // });
        const rgba = ctx.getImageData(
          131 + pos.pointX - 5,
          160 + pos.pointY - 5,
          width,
          height
        ).data;

        for (var px = 0, ct = width * height * 4; px < ct; px += 4) {
          var r = rgba[px];
          var g = rgba[px + 1];
          var b = rgba[px + 2];
          // var a = rgba[px + 3];
          if (isInclude(standardKeys, [r, g, b])) colors.push([r, g, b]);
        }
        let dominantColor = dominantElement(colors);
        console.log(
          dominantColor.split(",").map((item: string) => parseInt(item))
        );
      };
    }
  });
}

function isInclude(fullEntries: any, entry: any): boolean {
  for (let i = 0; i < fullEntries.length; i++) {
    if (compare(fullEntries[i], entry)) {
      return true;
    }
  }
  return false;
}

function compare(array1: any, array2: any) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (var i = 0, l = array1.length; i < l; i++) {
    if (array1[i] instanceof Array && array2[i] instanceof Array) {
      if (!array1[i].compare(array2[i])) {
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

function dominantElement(array: any) {
  let map = new Map();
  array.forEach((element: any) => {
    let key = element.toString();
    if (map.has(key)) {
      map.set(key, map.get(key) + 1);
    } else {
      map.set(key, 1);
    }
  });
  const sorted = new Map(
    [...map.entries()].sort((a: any, b: any) => b[1] - a[1])
  );
  return sorted.keys().next().value;
}
