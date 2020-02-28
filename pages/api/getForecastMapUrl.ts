import * as urls from "./urls";
import convert from "xml-js";
import { get } from "../../utils/webRequest";
import { NowRequest, NowResponse } from "@now/node";

function getAirForecast(date: string, code: string) {
  return get(urls.getAirForecastUrl(date, code), "xml")
    .then(parseToJson)
    .then(parseData)
    .then(getMapUrl);
}

function parseToJson(xml: any) {
  return new Promise((resolve, reject) => {
    resolve(JSON.parse(convert.xml2json(xml, { compact: true })));
  });
}

function parseData(data: any) {
  return new Promise((resolve, reject) => {
    if (data.response.header.resultCode._text != "00") {
      console.log("Data: %j", data.response.body.items.item);
      reject();
    }
    resolve(data.response.body.items.item);
  });
}

function getMapUrl(data: any) {
  return new Promise((resolve, rejext) => {
    resolve(data[0].imageUrl7._text);
  });
}

export default (req: NowRequest, res: NowResponse) => {
  const date: string = req.query.date.toString();
  const type: string = req.query.type.toString();

  return getAirForecast(date, type).then((url: any) => {
    return res.json({ url: url });
  });
};
