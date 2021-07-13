import infoIcon from "assets/infoIcon.svg";
import React from "react";
import styled from "styled-components";

const SkillLevelInfo = () => {
  return <InfoIcon />;
};

export default SkillLevelInfo;

const InfoIcon = styled.img.attrs({
  src: infoIcon,
  alt: "skill info",
})`
  margin-right: 5px;
  cursor: pointer;
`;
