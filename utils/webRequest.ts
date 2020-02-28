import axios, { AxiosResponse } from "axios";

export function get(url: string, returnType = "json") {
  return new Promise((resolve, reject) =>
    axios
      .get(url)
      .then((response: AxiosResponse) => {
        resolve(response.data);
      })
      .catch(error => {
        console.log("error");
        console.log(error);
        console.log(JSON.stringify(error));
        reject(error);
      }),
  );
}
