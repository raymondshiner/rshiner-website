import styled from "styled-components";

const HamburgerButton = ({ active, onClick }) => {
  return (
    <HamburgerWrapper active={active} onClick={onClick}>
      <span />
      <span />
      <span />
    </HamburgerWrapper>
  );
};

const HamburgerWrapper = styled.div`
  width: 32px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

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

export default HamburgerButton;
