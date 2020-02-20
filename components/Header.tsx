import Link from "next/link";
import { useState, useEffect } from "react";
import styled from "styled-components";
import HeaderElement from "./HeaderElement";
import BurgerMenu from "./BurgerMenu";
import { useRouter } from "next/dist/client/router";

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
  }
`;

const Header = (props: any) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const router = useRouter();
  const route = (router && router.route) || "/";

  const clickMenu = (e: any): void => {
    return setIsClicked(!isClicked);
  };

  return (
    <Container isClick={isClicked}>
      <HeaderElement href={"/"} text={"Index"} selected={route === "/"} />
      <HeaderElement
        href={"/home"}
        text={"Home"}
        selected={route === "/home"}
      />
      <HeaderElement
        href={"/about"}
        text={"About"}
        selected={route === "/about"}
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
