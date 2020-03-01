import { Fragment, useState, useEffect, useRef } from "react";
import { NextPage } from "next";
import axios from "axios";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import ForecastMap from "../components/ForecastMap";
import RefreshTime from "../components/RefreshTime";

type Props = {
  isServer: boolean;
  pathname: string;
};

const Index: NextPage<Props> = ({ isServer, pathname }) => {
  const [refreshTime, setRefreshTime] = useState<string>();
  const [mapUrl, setMapUrl] = useState<string>();
  const [mapArr, setMapArr] = useState();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    axios.get("/api/getForecastMapUrl?type=PM25&date=2020-02-28").then(data => {
      console.log(data.data.url);
      setMapUrl(data.data.url);
      const width = 10;
      const height = 10;
      // if (canvasRef.current) {
      //   const canvas = canvasRef.current;
      //   const ctx = canvas.getContext("2d");
      //   if (ctx) {
      //     ctx.drawImage(data.data.url, 0, 0, width, height);
      //     const rgba = ctx.getImageData(0, 0, width, height).data;
      //     let colors = [];
      //     for (var px = 0, ct = width * height * 4; px < ct; px += 4) {
      //       var r = rgba[px];
      //       var g = rgba[px + 1];
      //       var b = rgba[px + 2];
      //       // var a = rgba[px + 3];
      //       //if (Utils.isInclude(standardMp, [r, g, b])) colors.push([r, g, b]);
      //     }
      //   }
      // }
    });
  }, []);

  const callForecaseApi = (location: string): string => {
    // axios.get(`/api/getPixelLocation?name=${location}`).then(data => {
    //   console.log(data.data);
    // });
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
        <canvas ref={canvasRef}></canvas>
      </Fragment>
    </Layout>
  );
};

Index.getInitialProps = async ({ req, pathname }) => {
  const isServer = req ? true : false;
  return { isServer, pathname };
};

export default Index;
