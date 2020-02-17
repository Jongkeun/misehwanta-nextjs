import { NextPage } from "next";
import Layout from "./components/Layout";

const Home: NextPage<{ userAgent: string; isServer: string }> = ({
  userAgent,
  isServer,
}) => (
  <Layout>
    <h1>
      {isServer} Hello World - user agent : {userAgent}
    </h1>
  </Layout>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  const isServer = req ? "true" : "false";
  return { userAgent, isServer };
};

export default Home;
