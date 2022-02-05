import { useActiveNavItem } from "hooks";
import { pages } from "pages";
import React from "react";
import styled from "styled-components";
import NavItem from "../components/NavItem";

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: linear 1s;
`;

const NavMenu = () => {
  const activeItem = useActiveNavItem();

  return (
    <NavList>
      {pages.map((page) => {
        return (
          <NavItem
            key={`nav-${page.id}`}
            to={page.id}
            active={activeItem === page.id}
          >
            {page.copy}
          </NavItem>
        );
      })}
    </NavList>
  );
};

export default NavMenu;
