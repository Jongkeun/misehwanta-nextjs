import styled from "styled-components";

export interface RefreshTimeProps {}

const H1 = styled.h1`
  opacity: 0;
  height: 0;
  margin: 0;
  text-align: center;
  transition-timing-function: ease;
  transition: opacity 1s, height 1s, position 1s, margin 1s;
  &:hover {
    opacity: 1;
    height: 20px;
    margin: 10px 0 0 0;
  }
`;
const RefreshTime: React.SFC<RefreshTimeProps> = () => {
  return <H1>12시</H1>;
};

export default RefreshTime;
