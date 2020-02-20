import styled from "styled-components";

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  max-width: 600px;
  color: white;
  text-align: center;
`;
const Footer = () => {
  return <FooterContainer>@copyright Jongkeun</FooterContainer>;
};

export default Footer;
