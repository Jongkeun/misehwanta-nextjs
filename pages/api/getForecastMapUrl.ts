import * as urls from "../../utils/urls";
import convert from "xml-js";
import { get } from "../../utils/webRequest";
import { NowRequest, NowResponse } from "@now/node";
import { rejects } from "assert";

function getAirForecast(date: string, code: string) {
  return get(urls.getAirForecastUrl(date, code), "xml")
    .then(parseToJson)
    .then(parseData)
    .then(getMapUrl)
    .then(httpTohttps);
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
  return new Promise((resolve, reject) => {
    const type = data[0].informCode._text;
    if (type === "PM10") resolve(data[0].imageUrl7._text);
    else if (type === "PM25") resolve(data[0].imageUrl8._text);
    else reject();
  });
}

function httpTohttps(url: any) {
  return Promise.resolve(url.replace("http://", "https://"));
}

export default (req: NowRequest, res: NowResponse) => {
  const date: string = req.query.date.toString();
  const type: string = req.query.type.toString();

  return getAirForecast(date, type).then((url: any) => {
    return res.json({ url: url });
  });
};
