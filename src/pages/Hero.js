import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <>
      <MainText>Raymond Shiner</MainText>
    </>
  );
};

export default Hero;

const MainText = styled.h1`
  font-size: clamp(3.3rem, 10vw, 5rem);
  border-bottom: 2px;
`;
