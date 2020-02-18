import Header from "./Header";
import styled from "styled-components";

type LayoutProps = {
  children: JSX.Element;
};

const MainContainer = styled.main`
  min-height: 100vh;
  max-width: 600px;
  margin: auto;
  background-color: #fbcbcb;
`;
const Layout = ({ children }: LayoutProps) => (
  <MainContainer>
    <Header />
    {children}
  </MainContainer>
);

export default Layout;
