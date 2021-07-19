import React from "react";
import styled from "styled-components";

const WorkHistory = ({ title, location, time, duties, technologies }) => {
  return (
    <Wrapper>
      <Header>
        {title}
        <Location> @ {location}</Location>
      </Header>
      <SubTitle>{time}</SubTitle>
      <List>
        {duties.map((duty, index) => {
          return <ListItem key={index}>{duty}</ListItem>;
        })}
      </List>
      <SubTitle>Technologies Used</SubTitle>
      <TechnologiesList>
        {technologies.map((tech) => (
          <Technology key={tech}>{tech}</Technology>
        ))}
      </TechnologiesList>
    </Wrapper>
  );
};

const StorageCraft = () => (
  <WorkHistory
    title="React Developer"
    location="StorageCraft Technologies"
    time="Jan 2020 - Current"
    duties={[
      "Designed and implemented UI software for SaaS Cloud Bacakup Services (Onedrive, GCP, etc). Dealt with managing and browsing upwards of 100,000 items at a time",
      "Lead Frontend Developer on green development project. Responsible for managing direction, tooling, design, and testing of the product",
    ]}
    technologies={[
      "React",
      "React Hooks",
      "Apollo Server/Client",
      "GraphQL",
      "Jest",
      "Rest",
      "Material UI",
    ]}
  />
);

const IntelliTect = () => (
  <WorkHistory
    title="Technical Writer - Internship"
    location="IntelliTect"
    time="Feb 2019 - May 2019"
    duties={[
      "Hired to design, research, and write articles about various computer science topics",
    ]}
    technologies={["C#", "Technical Writing", "Test Driven Development"]}
  />
);

const EasternWA = () => (
  <WorkHistory
    title="Computer Science Tutor"
    location="Eastern Washington University"
    time="Sept 2018 - Sept 2019"
    duties={[
      "Acted as an expert for Computer Science courses",
      "Instructed students in comprehension of both core and advanced course material",
      "Frequently taught and assisted an abundance of students simultaneously",
    ]}
    technologies={["Teaching", "Communication", "Unit Testing"]}
  />
);

const generateJob = (header, component) => ({
  header,
  component,
});

export const workHistory = {
  stc: generateJob("StorageCraft", <StorageCraft />),
  tect: generateJob("IntelliTect", <IntelliTect />),
  ewu: generateJob("Eastern WA University", <EasternWA />),
};

const Wrapper = styled.div`
  margin: 0px 15px;
  max-width: 550px;
  width: 80vw;
`;

const Location = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.secondaryText};
  display: inline;
`;

const Header = styled.h1`
  margin-bottom: 10px;
`;

const SubTitle = styled.h3`
  border-bottom: ${(props) => `1px solid ${props.theme.primary}`};
  width: fit-content;
  padding-bottom: 2px;
`;

const List = styled.ul`
  margin-left: 25px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.secondaryText};
`;

const ListItem = styled.li`
  margin: 15px 0px;
`;

const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const Technology = styled.div`
  margin: 3px;
  background-color: ${(props) => props.theme.backgroundHighlight};
  padding: 8px;
  border-radius: 15px;
  white-space: nowrap;
`;
