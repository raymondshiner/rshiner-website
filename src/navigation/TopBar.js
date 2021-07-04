import useWindowDimensions from "hooks/useWindowDimensions";
import React from "react";
import Header from "./Header";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import NavMenu from "./NavMenu";

const NavBar = () => {
  const { width } = useWindowDimensions();

  return (
    <Header>
      <Logo />
      {width > 1200 ? <NavMenu /> : <MenuButton />}
    </Header>
  );
};

export default NavBar;
