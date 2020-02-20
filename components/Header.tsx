import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import HeaderElement from "./HeaderElement";
import BurgerMenu from "./BurgerMenu";

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
  .burger-menu {
    display: none;
  }
  @media screen and (max-width: 600px) {
    .burger-menu {
      display: block;
      float: right;
      margin: 5px 10px 0 0;
    }
    & a:not(:first-child) {
      display: ${(props: ConatinerProps) => (props.isClick ? "block" : "none")};
    }
    ${(props: ConatinerProps) =>
      props.isClick
        ? `
      position: relative;
      & a {
        float: none;
        display: block;
        text-align: left;
      }
    `
        : "position: staic"}
`;

const Header = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("Index");

  const clickMenu = (e: any): void => {
    return setIsClicked(!isClicked);
  };

  const clickHeaedElement = (event: any) => {
    setSelected(event.target.text);
  };

  return (
    <Container isClick={isClicked}>
      <HeaderElement
        href={"/"}
        text={"Index"}
        onClick={clickHeaedElement}
        selected={selected === "Index"}
      />
      <HeaderElement
        href={"/home"}
        text={"Home"}
        onClick={clickHeaedElement}
        selected={selected === "Home"}
      />
      <HeaderElement
        href={"/about"}
        text={"About"}
        onClick={clickHeaedElement}
        selected={selected === "About"}
      />
      <BurgerMenu
        className={"burger-menu"}
        isOpen={isClicked}
        onClick={clickMenu}
      />
    </Container>
  );
};

export default Header;
