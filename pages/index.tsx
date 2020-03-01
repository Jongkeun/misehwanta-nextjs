import { Fragment, useState, useEffect } from "react";
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
  useEffect(() => {
    axios.get("/api/getForecastMapUrl?type=PM25&date=2020-02-28").then(data => {
      console.log(data.data.url);
      setMapUrl(data.data.url);
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
        {mapArr &&
          mapArr.map((url: string, index: number) => (
            <ForecastMap key={index} mapUrl={url} />
          ))}
      </Fragment>
    </Layout>
  );
};

Index.getInitialProps = async ({ req, pathname }) => {
  const isServer = req ? true : false;
  return { isServer, pathname };
};

export default Index;
