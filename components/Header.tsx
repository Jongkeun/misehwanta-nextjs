import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import HeaderElement from "./HeaderElement";

type ConatinerProps = {
  isClick: boolean;
};

const Container = styled.div`
  overflow: hidden;
  background-color: #333;

  & a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  & a:hover {
    background-color: #ddd;
    color: black;
  }

  & a.active {
    background-color: #4caf50;
    color: white;
  }

  & .icon {
    display: none;
  }

  @media screen and (max-width: 600px) {
    & a:not(:first-child) {
      display: none;
    }
    .topnav a.icon {
      float: right;
      display: block;
    }
  }

  @media screen and (max-width: 600px) {
    & {
      position: ${(props: ConatinerProps) =>
        props.isClick ? "relative" : "static"};
    }
    &.responsive .icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    &.responsive a {
      float: none;
      display: block;
      text-align: left;
    }
  }
`;
const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("Index");

  const clickMenu = (e: any): void => {
    return setIsMobile(!isMobile);
  };

  const clickHeaedElement = (event: any) => {
    setSelected(event.target.text);
  };

  return (
    <Container isClick={isMobile}>
      <HeaderElement
        text={"Index"}
        onClick={clickHeaedElement}
        selected={selected === "Index"}
      />
      <HeaderElement
        text={"Home"}
        onClick={clickHeaedElement}
        selected={selected === "Home"}
      />
      <HeaderElement
        text={"About"}
        onClick={clickHeaedElement}
        selected={selected === "About"}
      />
      <a className="icon" onClick={clickMenu}>
        <i className="fa fa-bars"></i>
      </a>
    </Container>
  );
};

export default Header;
