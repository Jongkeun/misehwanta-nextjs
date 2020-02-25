import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { Fragment } from "react";

type LayoutProps = {
  children: JSX.Element;
  pathname: string;
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: auto;
  background-color: #fbcbcb;

  @media screen and (max-height: 600px) {
    height: 110vh;
  }
`;

const Wrapper = styled.div`
  min-height: 90vh;
  padding: 10px;
`;

const Layout = ({ pathname, children }: LayoutProps) => (
  <MainContainer>
    <Header pathname={pathname} />
    <Wrapper>{children}</Wrapper>
    <Footer />
  </MainContainer>
);

export default Layout;
