import { NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage<{
  userAgent: string;
  isServer: string;
  pathname: string;
}> = ({ userAgent, isServer, pathname }) => (
  <Layout pathname={pathname}>
    <h1>
      {isServer} Hello World - user agent : {userAgent}
    </h1>
  </Layout>
);

Home.getInitialProps = async ({ req, pathname }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  const isServer = req ? "true" : "false";
  return { userAgent, isServer, pathname };
};

export default Home;
