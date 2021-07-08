import React from "react";
import styled from "styled-components";

const Education = () => {
  return <Fade>I'm a Education</Fade>;
};

export default Education;

const Fade = styled.div`
  ${(props) => props.theme.fadeIn}
`;
