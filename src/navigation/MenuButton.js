import { useDrawerState } from "state";
import styled from "styled-components";

const MenuButton = () => {
  const { drawerOpen, setDrawerOpen } = useDrawerState();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <HamburgerButton id="menuButton" active={drawerOpen} onClick={toggleDrawer}>
      <span id="menuButtonLine" />
      <span id="menuButtonLine" />
      <span id="menuButtonLine" />
    </HamburgerButton>
  );
};

const HamburgerButton = styled.div`
  width: 32px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  background-color: ${(props) => (props.sticky ? "" : "black")};

  span {
    transform-origin: left;
    transition: all ease 1s;
    width: 100%;
    height: 3px;
    background-color: white;
    &:first-child {
      transform: ${(props) => props.active && "rotate(45deg)"};
    }
    &:nth-child(2) {
      opacity: ${(props) => props.active && "0"};
    }
    &:last-child {
      transform: ${(props) => props.active && "rotate(-45deg)"};
    }
  }
`;

export default MenuButton;
