import { NextPage } from "next";
import Layout from "../components/Layout";

type Props = {
  isServer: string;
};

const About: NextPage<Props> = ({ isServer }) => {
  return (
    <Layout>
      <h1>about {isServer}</h1>
    </Layout>
  );
};

About.getInitialProps = async ({ req }) => {
  const isServer = req ? "true" : "false";
  return { isServer };
};

export default About;
