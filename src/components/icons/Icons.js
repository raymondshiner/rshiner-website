import styled from "styled-components";
import githubLogo from "./githubLogo.svg";
import linkedInLogo from "./linkedInLogo.svg";

const Icon = styled.img`
    height: 32px;
    width: 32px;
    transition: ease 0.3s;
    :hover {
        transform: translateY(-3px);
    }
`;

export const LinkedInLogo = styled(Icon)({});

LinkedInLogo.defaultProps = {
    alt: "linked in",
    src: linkedInLogo,
};

export const GithubLogo = styled(Icon)({});

GithubLogo.defaultProps = {
    alt: "github",
    src: githubLogo,
};
