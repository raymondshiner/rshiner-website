import React, { useState } from "react";
import HamburgerButton from "./HamburgerButton";

const NavDrawer = () => {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };

  return (
    <>
      <HamburgerButton active={active} onClick={toggle} />
    </>
  );
};

export default NavDrawer;
