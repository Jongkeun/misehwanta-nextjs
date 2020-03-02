import { NowRequest, NowResponse } from "@now/node";
const gifFrames = require("gif-frames");
const concat = require("concat-stream");

function callback(frameData: any) {
  return new Promise((resolve, reject) => {
    let a = Promise.all(frameData.map(async (frame: any) => getBase64(frame)));
    resolve(a);
  });
}

async function getBase64(frame: any) {
  return new Promise((resolve, reject) => {
    return frame.getImage().pipe(
      concat({ encoding: "buffer" }, function(buf: any) {
        resolve("data:image/png;base64," + buf.toString("base64"));
      }),
    );
  });
}

export default (req: NowRequest, res: NowResponse) => {
  const obj = {
    url: req.query.url,
    frames: "0-23",
    outputType: "png",
    cumulative: false,
  };

  return gifFrames(obj)
    .then(callback)
    .then((data: any) => {
      res.json({ srcArr: data });
    });
};
