import React from "react";
import styled from "styled-components";
import githubLogo from "./githubLogo.svg";
import linkedInLogo from "./linkedInLogo.svg";

const SocialLinks = () => (
  <IconWrapper>
    <ExternalLink url="https://github.com/raymondshiner">
      <GithubLogo />
    </ExternalLink>
    <ExternalLink url="https://www.linkedin.com/in/raymond-shiner/">
      <LinkedInLogo />
    </ExternalLink>
  </IconWrapper>
);

export default SocialLinks;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  max-width: 400px;
  padding: 20px 5px;
  border-radius: 50px;
  background-color: ${(props) => props.theme.dark};
`;

const Icon = styled.img`
  height: 5vw;
  min-height: 50px;
  max-height: 70px;
  transition: ease 0.3s;
  :hover {
    transform: translateY(-3px);
  }
`;

export const LinkedInLogo = () => <Icon src={linkedInLogo} alt="linked in" />;

export const GithubLogo = () => {
  return <Icon src={githubLogo} alt="github" />;
};

const ExternalLink = styled.a.attrs((props) => ({
  href: props.url,
  target: "_blank",
  rel: "noopener noreferrer",
}))``;
