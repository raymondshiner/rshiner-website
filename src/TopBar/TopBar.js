import useWindowDimensions from "hooks/useWindowDimensions";
import React from "react";
import Drawer from "./Drawer";
import Header from "./Header";
import { Logo } from "./NavItems";
import NavMenu from "./NavMenu";

const NavBar = () => {
  const { width } = useWindowDimensions();

  return (
    <Header>
      <Logo />
      {width > 1200 ? <NavMenu /> : <Drawer />}
    </Header>
  );
};

export default NavBar;
