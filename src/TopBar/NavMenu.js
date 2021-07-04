import useActiveNavItem from "hooks/useActiveNavItem";
import { pages } from "Main";
import React from "react";
import styled from "styled-components";
import { NavItem } from "./NavItems";

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: linear 1s;
`;

const ListItem = styled.li`
  min-width: fit-content;
  list-style: none;
  margin: 0 18px;
  transition: linear 0.25s;

  padding-bottom: ${(props) => props.active && "5px"};
  border-bottom: ${(props) => props.active && "2px solid #2bc5e0"};
`;

const NavMenu = () => {
  const activeItem = useActiveNavItem();

  return (
    <NavList>
      {pages.map((page) => {
        return (
          <ListItem key={`nav-${page.id}`} active={activeItem === page.id}>
            <NavItem to={page.id}>{page.copy}</NavItem>
          </ListItem>
        );
      })}
    </NavList>
  );
};

export default NavMenu;
