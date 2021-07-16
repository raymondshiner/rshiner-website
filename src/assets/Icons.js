import React from "react";
import styled from "styled-components";
import githubLogo from "./githubLogo.svg";
import linkedInLogo from "./linkedInLogo.svg";

export const LinkedInLogo = () => <Icon src={linkedInLogo} alt="linked in" />;

export const GithubLogo = () => {
  return <Icon src={githubLogo} alt="github" />;
};

const Icon = styled.img`
  height: 5vw;
  min-height: 50px;
  max-height: 70px;
  transition: ease 0.3s;
  :hover {
    transform: translateY(-3px);
  }
`;
