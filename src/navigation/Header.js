import useWindowHasScrolled from "hooks/useWindowHasScrolled";
import React from "react";
import styled from "styled-components";

const Header = (props) => {
  const windowHasScrolled = useWindowHasScrolled();

  return <StyledHeader sticky={windowHasScrolled} {...props} />;
};

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: ${(props) => (props.sticky ? "20px 100px;" : "40px 100px")};
  background-color: ${(props) => props.sticky && "#191919"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;

  @media (max-width: 550px) {
    padding: ${(props) => (props.sticky ? "25px 30px" : "40px 30px")};
  }
`;

export default Header;
