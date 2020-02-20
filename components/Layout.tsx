import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

type LayoutProps = {
  children: JSX.Element;
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 600px;
  margin: auto;
  background-color: #fbcbcb;

  @media screen and (max-height: 600px) {
    height: 110vh;
  }
`;

const Layout = ({ children }: LayoutProps) => (
  <MainContainer>
    <Header />
    {children}
    <Footer />
  </MainContainer>
);

export default Layout;
