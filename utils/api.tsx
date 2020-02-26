// 대기질 예보통보 조회
const AIRKOREA_API_DATA =
  "http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc";
const AIR_FORECAST = "/getMinuDustFrcstDspth";

function baseUrl(type: string, url: string): string {
  return `${type}${url}?serviceKey=${process.env.APIKEY}`;
}
console.log(process.env.APIKEY);
export function getAirForecastUrl(
  date: string,
  code: string,
  numOfRows = 1,
  pageNo = 1,
): string {
  return (
    `${baseUrl(AIRKOREA_API_DATA, AIR_FORECAST)}` +
    `&numOfRows=${numOfRows}` +
    `&pageNo=${pageNo}` +
    `&searchDate=${date}` +
    `&InformCode=${code}` +
    `&ver=1.1`
  );
}
