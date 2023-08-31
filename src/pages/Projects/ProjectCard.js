import { ExternalLink } from "components/ExternalLink";
import { GithubLogo } from "components/icons/Icons";
import styled from "styled-components";

export const ProjectCard = ({
    src,
    title,
    summary,
    technologies,
    projectURL,
    githubURL,
}) => {
    return (
        <MainWrapper>
            <ExternalLink url={projectURL}>
                <Picture src={src} />
            </ExternalLink>
            <SpaceBetweenFlexbox>
                <TitleLink url={projectURL}>{title}</TitleLink>
                <ExternalLink url={githubURL}>
                    <GithubLogo />
                </ExternalLink>
            </SpaceBetweenFlexbox>
            <Summary>{`• ${summary}`}</Summary>
            <WrappingFlexbox>
                {technologies?.map((skill) => (
                    <Chip key={skill}>{skill}</Chip>
                ))}
            </WrappingFlexbox>
        </MainWrapper>
    );
};

const Chip = styled.div`
    margin: 3px;
    background-color: ${(props) => props.theme.backgroundHighlight};
    padding: 8px 12px;
    border-radius: 15px;
    white-space: nowrap;
    width: fit-content;
`;

const TitleLink = styled(ExternalLink)`
    color: white;
    font-size: 24px;
    font-weight: 500;
    text-decoration: none;
    padding-bottom: 1px;
    border-bottom: 1px solid white;
    transition: ease 0.3s;
    :hover {
        transform: translateY(-3px);
    }
`;

const SpaceBetweenFlexbox = styled.div`
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const WrappingFlexbox = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
`;

const Summary = styled.i`
    font-size: 16px;
    color: ${(props) => props.theme.secondaryText};
    margin-bottom: 3px;
    padding: 0 8px;
`;

const MainWrapper = styled.div`
    width: 340px;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Picture = styled.img.attrs((props) => ({
    src: props.src,
}))`
    width: 100%;
    border-radius: 10px;
    aspect-ratio: 4/3;
`;
