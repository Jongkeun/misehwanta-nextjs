import styled from "styled-components";

const FooterContainer = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  max-width: 600px;
  color: white;
  text-align: center;
  @media screen and (max-height: 600px) {
    bottom: -10vh;
  }
`;

const Footer = () => {
  return <FooterContainer>@copyright Jongkeun</FooterContainer>;
};

export default Footer;
