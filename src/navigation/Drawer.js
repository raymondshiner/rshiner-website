import { NavItem } from "components";
import { useActiveNavItem, useOnClickAway, useWindowHasScrolled } from "hooks";
import { pages } from "pages";
import React, { useEffect, useRef } from "react";
import { useDrawerState } from "state";
import styled from "styled-components";

const Drawer = () => {
  const drawerRef = useRef(null);
  const { drawerOpen, setDrawerOpen } = useDrawerState();
  const activeItem = useActiveNavItem();
  const windowHasScrolled = useWindowHasScrolled();

  const closeDrawerIgnoreMenuButton = (event) => {
    if (
      event?.target.id === "menuButton" ||
      event?.target.id === "menuButtonLine"
    )
      return;

    setDrawerOpen(false);
  };

  useOnClickAway(drawerRef, closeDrawerIgnoreMenuButton);

  useEffect(() => {
    const closeDrawerOnWindowResize = () => {
      if (window.innerWidth >= 1200) setDrawerOpen(false);
    };

    window.addEventListener("resize", closeDrawerOnWindowResize);

    return () => {
      window.removeEventListener("resize", closeDrawerOnWindowResize);
    };
  }, [setDrawerOpen]);

  const closeDrawerWithDelay = () =>
    setTimeout(() => {
      setDrawerOpen(false);
    }, 250);

  return (
    <StyledDrawer open={drawerOpen} sticky={windowHasScrolled} ref={drawerRef}>
      {pages.map((page) => {
        return (
          <NavItem
            key={page.id}
            to={page.id}
            active={activeItem === page.id}
            onClick={closeDrawerWithDelay}
            drawer
          >
            {page.copy}
          </NavItem>
        );
      })}
    </StyledDrawer>
  );
};

export default Drawer;

const StyledDrawer = styled.div`
  width: 220px;
  height: 100vh;
  background-color: ${(props) => (props.sticky ? props.theme.dark : "black")};
  padding: 40px;
  position: fixed;
  top: 0;
  right: ${(props) => (props.open ? "0" : "-230px")};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  transition: 0.5s;
  box-shadow: -2px 0px 10px 1px
    ${(props) => (props.sticky ? "black" : props.theme.dark)};
  z-index: 2;
`;
