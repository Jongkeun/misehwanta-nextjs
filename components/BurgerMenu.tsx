import styled from "styled-components";

type ContainerProps = {
  isOpen: boolean;
  className?: string;
};

type BurgerMenuProps = {
  isOpen: boolean;
  onClick: (event: any) => void;
  className?: string;
};
const Container = styled.div`
  display: inline-block;
  cursor: pointer;

  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    background-color: #fff;
    margin: 6px 0;
    transition: 0.4s;
    margin-left: 100px;
  }

  ${(props: ContainerProps) =>
    props.isOpen
      ? `
    .bar1 {
      -webkit-transform: rotate(-45deg) translate(-9px, 6px);
      transform: rotate(-45deg) translate(-9px, 6px);
    }
  
    .bar2 {
      opacity: 0;
    }
  
    .bar3 {
      -webkit-transform: rotate(45deg) translate(-8px, -8px);
      transform: rotate(45deg) translate(-8px, -8px);
    }
    `
      : ""}
`;

const BurgerMenu = ({
  isOpen,
  onClick,
  className = "menu",
}: BurgerMenuProps) => {
  return (
    <Container className={className} isOpen={isOpen} onClick={onClick}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </Container>
  );
};

export default BurgerMenu;
