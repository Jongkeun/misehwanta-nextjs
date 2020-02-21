import { NextPage } from "next";
import Layout from "../components/Layout";

type Props = {
  isServer: string;
  pathname: string;
};

const About: NextPage<Props> = ({ isServer, pathname }) => {
  return (
    <Layout pathname={pathname}>
      <h1>about {isServer}</h1>
    </Layout>
  );
};

About.getInitialProps = async ({ req, pathname }) => {
  const isServer = req ? "true" : "false";
  return { isServer, pathname };
};

export default About;
