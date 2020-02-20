import { NextPage } from "next";
import Layout from "../components/Layout";

type Props = {
  isServer: boolean;
};
const Index: NextPage<Props> = ({ isServer }) => (
  <Layout>
    <div>
      <h1>Hello World - this is index page.</h1>
      <h2>
        This page was rendering by <b>{isServer ? "SERVER" : "CLIENT"}</b>
      </h2>
    </div>
  </Layout>
);

Index.getInitialProps = async ({ req }) => {
  const isServer = req ? true : false;
  return { isServer };
};

export default Index;
