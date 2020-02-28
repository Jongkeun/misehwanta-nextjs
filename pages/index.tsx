import { NextPage } from "next";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import ForecastMap from "../components/ForecastMap";
import { Fragment, useState, useEffect } from "react";
import RefreshTime from "../components/RefreshTime";
import axios from "axios";

type Props = {
  isServer: boolean;
  pathname: string;
};

const Index: NextPage<Props> = ({ isServer, pathname }) => {
  const [refreshTime, setRefreshTime] = useState<string>();
  const [mapUrl, setMapUrl] = useState<string>();

  useEffect(() => {
    axios.get("/api/getForecastMapUrl?type=PM25&date=2020-02-28").then(data => {
      console.log(data);
      console.log(data.data.url);
      setMapUrl(data.data.url);
    });
  }, []);

  const callForecaseApi = (location: string): string => {
    setRefreshTime("11시");
    return "12시";
  };

  return (
    <Layout pathname={pathname}>
      <Fragment>
        <SearchBar onSubmit={callForecaseApi} />
        <RefreshTime time={refreshTime} isVisible={!!refreshTime} />
        <ForecastMap mapUrl={mapUrl} />
      </Fragment>
    </Layout>
  );
};

Index.getInitialProps = async ({ req, pathname }) => {
  const isServer = req ? true : false;
  return { isServer, pathname };
};

export default Index;
