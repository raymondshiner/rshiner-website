import React from "react";
import styled from "styled-components";

const Skills = () => {
  return <Fade>I'm a Skills</Fade>;
};

export default Skills;

const Fade = styled.div`
  ${(props) => props.theme.fadeIn}
`;
