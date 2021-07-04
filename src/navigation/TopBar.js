import useWindowDimensions from "hooks/useWindowDimensions";
import useWindowHasScrolled from "hooks/useWindowHasScrolled";
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
  background-color: ${(props) => (props.sticky ? "#191919" : "black")};
  padding: ${(props) => (props.sticky ? "20px 40px;" : "40px")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  z-index: 6;
`;
