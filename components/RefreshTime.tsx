import styled from "styled-components";

type H1Props = {
  isShown: boolean;
};

const H1 = styled.h1`
  opacity: 0;
  height: 0;
  margin: 0;
  text-align: center;
  transition-timing-function: ease;
  transition: opacity 1s, height 1s, position 1s, margin 1s;
  ${(props: H1Props) => {
    if (props.isShown) {
      return `
      opacity: 1;
      height: 20px;
      margin: 10px 0 0 0;
      `;
    }
  }}
`;

type RefreshTimeProps = {
  time: string | undefined;
  isVisible: boolean;
};

const RefreshTime = ({ time, isVisible }: RefreshTimeProps) => {
  return <H1 isShown={isVisible}>{time}</H1>;
};

export default RefreshTime;
