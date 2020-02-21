import { NextPage } from "next";
import Layout from "../components/Layout";

type Props = {
  isServer: boolean;
  pathname: string;
};

const Index: NextPage<Props> = ({ isServer, pathname }) => (
  <Layout pathname={pathname}>
    <div>
      <h1>Hello World - this is index page.</h1>
      <h2>
        This page was rendering by <b>{isServer ? "SERVER" : "CLIENT"}</b>
      </h2>
    </div>
  </Layout>
);

Index.getInitialProps = async ({ req, pathname }) => {
  const isServer = req ? true : false;
  return { isServer, pathname };
};

export default Index;
