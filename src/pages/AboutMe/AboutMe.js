import headshot from "assets/headshot.jpeg";
import React from "react";
import styled from "styled-components";

const AboutMe = () => {
  return (
    <>
      <Picture />
      <MainText>About Me</MainText>
    </>
  );
};

export default AboutMe;

const Picture = styled.img.attrs((props) => ({
  src: headshot,
}))`
  height: 40vh;
  min-height: 400px;
  max-height: 100px;
  border-radius: 7px;
`;

const MainText = styled.h1`
  text-transform: uppercase;
  margin-top: 16px;
  font-size: clamp(2.3rem, 10vw, 6.5rem);
`;
