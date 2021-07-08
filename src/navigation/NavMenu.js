import { NavItem } from "components";
import { useActiveNavItem } from "hooks";
import { pages } from "pages";
import React from "react";
import styled from "styled-components";

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
  background-color: ${(props) => (props.sticky ? "" : "black")};

  padding-bottom: ${(props) => props.active && "5px"};
  border-bottom: ${(props) =>
    props.active && `2px solid ${props.theme.primary}`};

  :hover {
    transform: translateY(-3px);
  }
  :active {
    transition: none;
    transform: translateY(1px);
  }
`;

const NavMenu = ({ sticky }) => {
  const activeItem = useActiveNavItem();

  return (
    <NavList>
      {pages.map((page) => {
        return (
          <ListItem
            key={`nav-${page.id}`}
            active={activeItem === page.id}
            sticky={sticky}
          >
            <NavItem to={page.id}>{page.copy}</NavItem>
          </ListItem>
        );
      })}
    </NavList>
  );
};

export default NavMenu;
