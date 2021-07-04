import useActiveNavItem from "hooks/useActiveNavItem";
import { pages } from "Main";
import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { Logo, NavItem } from "./NavItems";

const NavBar = () => {
  const activeItem = useActiveNavItem();

  const DesktopNav = () => {
    return (
      <HideOnSmallScreen>
        <Logo />
        <NavList>
          {pages.map((page) => {
            return (
              <ListItem key={`nav-${page.id}`} active={activeItem === page.id}>
                <NavItem to={page.id}>{page.copy}</NavItem>
              </ListItem>
            );
          })}
        </NavList>
      </HideOnSmallScreen>
    );
  };

  const MobileNav = () => {
    return (
      <HideOnLargeScreen>
        <Logo />
      </HideOnLargeScreen>
    );
  };

  return (
    <Header>
      <DesktopNav />
      <MobileNav />
    </Header>
  );
};

export default NavBar;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListItem = styled.li`
  min-width: fit-content;
  list-style: none;
  margin: 0 18px;
  transition: linear 0.25s;

  padding-bottom: ${(props) => props.active && "5px"};
  border-bottom: ${(props) => props.active && "2px solid #2bc5e0"};
`;

const HideOnSmallScreen = styled.div`
  @media (max-width: 1180px) {
    display: none;
  }
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HideOnLargeScreen = styled.div`
  @media (min-width: 1180px) {
    display: none;
  }
`;
