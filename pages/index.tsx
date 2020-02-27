import { NextPage } from "next";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import ForecastMap from "../components/ForecastMap";
import { Fragment, useState, useEffect } from "react";
import RefreshTime from "../components/RefreshTime";

type Props = {
  isServer: boolean;
  pathname: string;
};

const Index: NextPage<Props> = ({ isServer, pathname }) => {
  const [refreshTime, setRefreshTime] = useState<string>();
  const [mapUrl, setMapUrl] = useState<string>();

  useEffect(() => {
    setMapUrl("https://www.airkorea.or.kr/file/viewImage/?atch_id=136675");
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
