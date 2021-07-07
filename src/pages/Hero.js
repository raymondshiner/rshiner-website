import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Typed from "react-typed";
import styled from "styled-components";

const Hero = () => {
  return (
    <>
      <FlexBoxColumn>
        <MainText>Raymond Shiner</MainText>
        <RoundedBox>
          <TerminalIcon />
          <TypeWriter
            strings={[
              "React Dev",
              "JavaScript Dev",
              "Technical Writer",
              "Unit Tester",
            ]}
            typeSpeed={30}
            backSpeed={65}
            backDelay={3000}
            cursorChar={"_"}
            loop
          />
        </RoundedBox>
      </FlexBoxColumn>
    </>
  );
};

export default Hero;

const RoundedBox = styled.div`
  padding-bottom: 20px;
  /* border-radius: 25px; */
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
`;

const TerminalIcon = styled(FontAwesomeIcon).attrs({
  icon: faTerminal,
})`
  font-size: 3.5rem;
  margin-right: 20px;
  color: ${(props) => props.theme.primary};
`;

const TypeWriter = styled(Typed)`
  font-size: 3rem;
  letter-spacing: 4px;
  white-space: nowrap;
  max-width: 50%;
  min-width: 50vw;
`;

const FlexBoxColumn = styled.div`
  width: 100%;
  height: 100%;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const MainText = styled.h1`
  font-size: clamp(3.3rem, 15vw, 6rem);
  margin-bottom: 20px;
`;
