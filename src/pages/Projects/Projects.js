import styled from "styled-components";
import { ProjectCard } from "./ProjectCard";
import PersonalBlogPic from "./rshiner-blog.png";
import PersonalWebsitePic from "./website.png";

const projects = [
    {
        title: "Personal Website",
        summary: "My Personal Portfolio Website",
        src: PersonalWebsitePic,
        technologies: ["React JS", "CSS", "Styled Components"],
        projectURL: "https://www.raymondshiner.com/",
        githubURL: "https://github.com/raymondshiner/rshiner-website",
    },
    {
        title: "Personal Blog",
        summary:
            "A Simple Blog where I post ideas and things that I've learned",
        src: PersonalBlogPic,
        technologies: ["React TS", "CSS", "Styled Components"],
        projectURL: "https://rshiner-blog.web.app/",
        githubURL: "https://github.com/raymondshiner/rshiner-blog",
    },
];

const Projects = () => {
    return (
        <ProjectsWrapper>
            <Title>My Projects</Title>
            <Divider />
            <WrappingFlexbox>
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </WrappingFlexbox>
        </ProjectsWrapper>
    );
};

export default Projects;

const WrappingFlexbox = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
`;

const ProjectsWrapper = styled.div`
    padding-top: 40px;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const Title = styled.h1`
    font-size: 30pt;
`;

const Divider = styled.div`
    height: 5px;
    width: 50%;
    border-radius: 50px;
    background-color: ${(props) => props.theme.backgroundHighlight};
    margin: 20px;
`;
