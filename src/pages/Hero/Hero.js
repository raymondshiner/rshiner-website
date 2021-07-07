import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";
import SocialLinks from "./SocialLinks";
import TerminalAnimation from "./TerminalAnimation";

const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <StyledParticles />
        <FlexBoxColumn>
          <MainText>Raymond Shiner</MainText>
          <TerminalAnimation />
          <SocialLinks />
        </FlexBoxColumn>
      </HeroWrapper>
    </>
  );
};

export default Hero;

const HeroWrapper = styled.div`
  position: relative;
`;

const StyledParticles = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const FlexBoxColumn = styled.div`
  position: relative;
  height: 100%;
  margin-top: 90px;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const MainText = styled.h1`
  background-color: black;
  font-size: clamp(3.3rem, 10vw, 6.5rem);
  width: fit-content;
  min-width: 300px;
  padding: 20px;
  border: ${(props) => `5px solid ${props.theme.primary}`};
`;
