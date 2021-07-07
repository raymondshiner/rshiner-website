import { useWindowDimensions, useWindowHasScrolled } from "hooks";
import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import NavMenu from "./NavMenu";

const NavBar = () => {
  const { width } = useWindowDimensions();
  const windowHasScrolled = useWindowHasScrolled();

  return (
    <Header sticky={windowHasScrolled}>
      <Logo />
      {width > 1200 ? <NavMenu /> : <MenuButton />}
    </Header>
  );
};

export default NavBar;

const Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${(props) => (props.sticky ? props.theme.dark : "")};
  padding: ${(props) => (props.sticky ? "20px 40px;" : "40px")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all ease 0.4s;
  box-shadow: ${(props) => props.sticky && "0px 2px 5px 0px black"};
  z-index: 6;
`;
