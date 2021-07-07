import { GithubLogo, LinkedInLogo } from "assets";
import { ExternalLink } from "components";
import React from "react";
import styled from "styled-components";

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
