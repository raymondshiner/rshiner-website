import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Typed from "react-typed";
import styled from "styled-components";

const TerminalAnimation = () => (
  <TerminalBox>
    <TerminalIcon />
    <VerticalDivider />
    <TypeWriter
      strings={[
        "React Developer",
        "JavaScript Developer",
        "Technical Writer",
        "Unit Tester",
      ]}
      typeSpeed={30}
      backSpeed={80}
      backDelay={1700}
      cursorChar={"_"}
      loop
    />
  </TerminalBox>
);

const TerminalBox = styled.div`
  margin: 25px;
  padding: 20px;

  @media (min-width: 700px) {
    padding: 40px;
  }
  display: flex;
  align-items: center;
  height: clamp(100px, 25vw, 240px);
  width: clamp(300px, 90%, 850px);
  background-color: ${(props) => props.theme.dark};
  border-radius: 20px;
  overflow: hidden;
  transition: all ease 0.5s;
`;

const TerminalIcon = styled(FontAwesomeIcon).attrs({
  icon: faTerminal,
})`
  font-size: clamp(3rem, 10vw, 5rem);
  color: ${(props) => props.theme.primary};
  transition: all ease 0.5s;
`;

const VerticalDivider = styled.div`
  height: clamp(50px, 100%, 150px);
  border-left: 2px solid grey;

  margin: 0px 15px;

  @media (min-width: 40px) {
    margin: 0px 20px;
  }

  @media (min-width: 800px) {
    margin: 0px 40px;
  }

  transition: all ease 0.5s;
`;

const TypeWriter = styled(Typed)`
  font-size: clamp(1rem, 7vw, 4rem);
  letter-spacing: 3px;
  transition: all ease 0.5s;
`;

export default TerminalAnimation;
