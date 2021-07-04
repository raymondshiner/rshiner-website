import useActiveNavItem from "hooks/useActiveNavItem";
import { pages } from "Main";
import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { Logo, NavItem } from "./NavItems";

const NavBar = () => {
  const activeItem = useActiveNavItem();

  return (
    <Header>
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
