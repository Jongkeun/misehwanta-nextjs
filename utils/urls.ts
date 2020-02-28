/*Air Korea API-------------------------------------------------------------------------------------------- */
// Air quality forecast report
const AIRKOREA_API_DATA =
  "http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc";
const AIR_FORECAST = "/getMinuDustFrcstDspth";
/*-------------------------------------------------------------------------------------------------------- */
// set url with API KEY
function baseUrl(type: string, url: string): string {
  return `${type}${url}?serviceKey=${process.env.API_KEY}`;
}
// forecast image qeury url
export function getAirForecastUrl(date: string, code: string): string {
  return (
    `${baseUrl(AIRKOREA_API_DATA, AIR_FORECAST)}` +
    `&numOfRows=1` +
    `&pageNo=1` +
    `&searchDate=${date}` +
    `&InformCode=${code}` +
    `&ver=1.1`
  );
}
