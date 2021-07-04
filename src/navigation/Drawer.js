import { NavItem } from "components";
import useActiveNavItem from "hooks/useActiveNavItem";
import styled from "styled-components";
import { pages } from "../Main";

const Drawer = ({ open }) => {
  const activeItem = useActiveNavItem();

  if (!open) return null;

  return (
    <StyledDrawer>
      {pages.map((page) => {
        return <NavItem to={page.id}>{page.copy}</NavItem>;
      })}
    </StyledDrawer>
  );
};

export default Drawer;

const StyledDrawer = styled.div`
  width: 300px;
  height: 100vh;
  background-color: inherit;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  z-index: -1;
`;

const ListItem = styled.li`
  min-width: fit-content;
  list-style: none;
  margin: 0 18px;
  transition: linear 0.25s;

  padding-bottom: ${(props) => props.active && "5px"};
  border-bottom: ${(props) => props.active && "2px solid #2bc5e0"};
`;
