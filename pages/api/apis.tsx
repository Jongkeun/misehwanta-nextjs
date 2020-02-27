import * as urls from "./urls";
import convert from "xml-js";
import axios, { AxiosResponse } from "axios";
import { NowRequest, NowResponse } from "@now/node";

function getAirForecast(date: string, code: string) {
  return getRequest(urls.getAirForecastUrl(date, code), "xml").then(
    (data: any) => {
      let parsed = JSON.parse(convert.xml2json(data.data, { compact: true }));

      if (parsed.response.header.resultCode._text != "00")
        console.log("Data: %j", parsed.response.body.items.item);

      return parsed.response.body.items.item;
    }
  );
}

function getRequest(url: string, returnType = "json") {
  return new Promise((resolve, reject) =>
    axios
      .get(url)
      .then((data: AxiosResponse) => {
        resolve(data);
      })
      .catch(error => {
        console.log("error");
        console.log(error);
        console.log(JSON.stringify(error));
        reject(error);
      })
  );
}

export default (req: NowRequest, res: NowResponse) => {
  getAirForecast("2020-02-27", "PM10").then(data =>
    res.json({ dataArr: data })
  );
};
