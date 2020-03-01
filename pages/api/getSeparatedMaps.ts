// var gifFrames = require("gif-frames");
import { NowRequest, NowResponse } from "@now/node";
import gifFrames from "gif-frames";
import concat from "concat-stream";

function callback(frameData: any) {
  return new Promise((resolve, reject) => {
    let a = Promise.all(frameData.map(async frame => getBase64(frame)));
    resolve(a);
  });
}

async function getBase64(frame: any) {
  return new Promise((resolve, reject) => {
    return frame.getImage().pipe(
      concat({ encoding: "buffer" }, function(buf) {
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
