import { Fragment, useState, useEffect, useRef } from "react";
import { NextPage } from "next";
import axios from "axios";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import ForecastMap from "../components/ForecastMap";
import RefreshTime from "../components/RefreshTime";
import { getDominantColor } from "../utils/calculateTime";
const gifFrames = require("gif-frames");
const concat = require("concat-stream");

type Props = {
  isServer: boolean;
  pathname: string;
  datas: any;
};

const Index: NextPage<Props> = ({ isServer, pathname, datas }) => {
  const [refreshTime, setRefreshTime] = useState<string>();
  const [mapUrl, setMapUrl] = useState<string>();
  const [mapArr, setMapArr] = useState();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    axios.get("/api/getForecastMapUrl?type=PM25&date=2020-02-28").then(data => {
      console.log(data.data.url);
      setMapUrl(data.data.url);
    });
    console.log(datas);
  }, []);

  const callForecaseApi = (location: string): string => {
    function rect(props: any) {
      const { ctx, x, y, width, height } = props;
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(x, y, width, height);
    }

    axios.get(`/api/getPixelLocation?name=${location}`).then(data => {
      console.log(data.data);
      const posX = data.data.pointX;
      const posY = data.data.pointY;
      axios
        .get(`/api/getSeparatedMaps`, {
          params: {
            url: mapUrl,
          },
        })
        .then(data => {
          console.log(data.data.srcArr);
          // setMapUrl(data.data.src);
          setMapArr(data.data.srcArr);
          let Img = new Image();
          Img.src = data.data.srcArr[0];
          Img.width = 820;
          Img.height = 830;

          const width = 10;
          const height = 10;
          if (canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            if (ctx) {
              getDominantColor(ctx, data.data.srcArr, {
                pointX: posX,
                pointY: posY,
              });
            }
          }
        });
    });

    setRefreshTime("11시");
    return "12시";
  };

  return (
    <Layout pathname={pathname}>
      <Fragment>
        <SearchBar onSubmit={callForecaseApi} />
        <RefreshTime time={refreshTime} isVisible={!!refreshTime} />
        <ForecastMap mapUrl={mapUrl} />
        <canvas
          id="my-canvas"
          ref={canvasRef}
          width="820"
          height="830"
          style={{ border: "1px solid #000000" }}
        ></canvas>
      </Fragment>
    </Layout>
  );
};

Index.getInitialProps = async ({ req, pathname }) => {
  const isServer = req ? true : false;
  let data = await axios.get("http://misehwanta.cafe24app.com/page/a");
  // console.log(data.data);
  // const datas = data.data;
  function callback(frameData: any) {
    return new Promise((resolve, reject) => {
      let a = Promise.all(
        frameData.map(async (frame: any) => getBase64(frame)),
      );
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
  // "https://www.airkorea.or.kr/file/viewImage/?atch_id=136808"
  const obj = {
    url: "https://www.airkorea.or.kr/file/viewImage/?atch_id=136808",
    frames: "0-23",
    outputType: "png",
    cumulative: false,
  };

  let a = await gifFrames(obj);
  let b = await callback(a);
  const datas = b;
  return { isServer, pathname, datas };
};

export default Index;
