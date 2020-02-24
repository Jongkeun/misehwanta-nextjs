import { NextPage } from "next";
import styled from "styled-components";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";

type Props = {
  isServer: boolean;
  pathname: string;
};

const Container = styled.div`
  padding: 10px;
`;
const Index: NextPage<Props> = ({ isServer, pathname }) => (
  <Layout pathname={pathname}>
    <Container>
      <SearchBar />
    </Container>
  </Layout>
);

Index.getInitialProps = async ({ req, pathname }) => {
  const isServer = req ? true : false;
  return { isServer, pathname };
};

export default Index;
