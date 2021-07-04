import { NavItem } from "components";
import useActiveNavItem from "hooks/useActiveNavItem";
import useWindowHasScrolled from "hooks/useWindowHasScrolled";
import React, { useEffect } from "react";
import { useDrawerState } from "state";
import styled from "styled-components";
import { pages } from "../Main";

const Drawer = () => {
  const activeItem = useActiveNavItem();
  const { drawerOpen, setDrawerOpen } = useDrawerState();
  const windowHasScrolled = useWindowHasScrolled();

  useEffect(() => {
    const closeDrawerOnWindowResize = () => {
      if (window.innerWidth >= 1200) setDrawerOpen(false);
    };

    window.addEventListener("resize", closeDrawerOnWindowResize);

    return () => {
      window.removeEventListener("resize", closeDrawerOnWindowResize);
    };
  }, []);

  const closeDrawerWithDelay = () =>
    setTimeout(() => {
      setDrawerOpen(false);
    }, 250);

  return (
    <StyledDrawer open={drawerOpen} sticky={windowHasScrolled}>
      {pages.map((page) => {
        return (
          <ListItem
            active={activeItem === page.id}
            onClick={closeDrawerWithDelay}
          >
            <NavItem key={page.id} to={page.id}>
              {page.copy}
            </NavItem>
          </ListItem>
        );
      })}
    </StyledDrawer>
  );
};

export default Drawer;

const StyledDrawer = styled.div`
  width: 220px;
  height: 100vh;
  background-color: ${(props) => (props.sticky ? "#191919" : "black")};
  padding: 40px;
  position: fixed;
  top: 0;
  right: ${(props) => (props.open ? "0" : "-220px")};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  transition: 0.5s;
  z-index: 2;
`;

const ListItem = styled.li`
  min-width: fit-content;
  list-style: none;
  margin: 12px 0px;
  padding-right: ${"5px"};

  a {
    color: ${(props) => props.active && "#2bc5e0"};
  }

  border-right: ${(props) => props.active && "2px solid #2bc5e0"};
`;
