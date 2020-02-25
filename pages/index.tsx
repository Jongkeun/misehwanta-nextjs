import { NextPage } from "next";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import ForecastMap from "../components/ForecastMap";
import { Fragment } from "react";
import RefreshTime from "../components/RefreshTime";

type Props = {
  isServer: boolean;
  pathname: string;
};

const Index: NextPage<Props> = ({ isServer, pathname }) => (
  <Layout pathname={pathname}>
    <Fragment>
      <SearchBar />
      <RefreshTime />
      <ForecastMap />
    </Fragment>
  </Layout>
);

Index.getInitialProps = async ({ req, pathname }) => {
  const isServer = req ? true : false;
  return { isServer, pathname };
};

export default Index;
