import React from "react";
import { HashLink } from "react-router-hash-link";
import styled, { css } from "styled-components";

const NavItem = ({ active, onClick, to, drawer, children }) => {
  return (
    <ListItem onClick={onClick} drawer={drawer} active={active}>
      <StyledHashLink to={to}>{children}</StyledHashLink>
    </ListItem>
  );
};

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -69;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const ListItem = styled.li`
  min-width: fit-content;
  list-style: none;
  margin: 0 14px;
  padding: 2px;
  cursor: pointer;

  a {
    color: ${(props) => props.active && props.theme.primary};
  }

  border-bottom: ${(props) =>
    props.active && `2px solid ${props.theme.primary}`};

  transition: all 0.3s;

  :hover {
    transform: translateY(-3px);
  }
  :active {
    transition: none;
    transform: translateY(1px);
  }

  ${(props) =>
    props.drawer &&
    css`
      border-bottom: none;
      border-right: ${props.active && `2px solid ${props.theme.primary}`};
      margin: 12px 0px;
      padding-right: 6px;
    `}
`;

const StyledHashLink = styled(HashLink).attrs((props) => ({
  smooth: true,
  scroll: scrollWithOffset,
  to: `#${props.to}`,
}))`
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  font-size: 1.2rem;
  letter-spacing: 1.5px;
  font-weight: 500;
`;

export default NavItem;

/* border-right: ${(props) => */
/* props.active && `2px solid ${props.theme.primary}`}; */
