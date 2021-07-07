import React from "react";
import styled from "styled-components";
import SocialLinks from "./SocialLinks";
import TerminalAnimation from "./TerminalAnimation";

const Hero = () => {
  return (
    <>
      <FlexBoxColumn>
        <MainText>Raymond Shiner</MainText>
        <TerminalAnimation />
        <SocialLinks />
      </FlexBoxColumn>
    </>
  );
};

export default Hero;

const FlexBoxColumn = styled.div`
  height: 100%;
  margin-top: 90px;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const MainText = styled.h1`
  font-size: clamp(3.3rem, 10vw, 6.5rem);
  width: fit-content;
  min-width: 300px;
  padding: 20px;
  border: ${(props) => `5px solid ${props.theme.primary}`};
`;
