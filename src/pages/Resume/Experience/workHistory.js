import React from "react";
import styled from "styled-components";

const WorkHistory = ({ title, location, time, duties, technologies }) => {
  const headerText = `${title} @ ${location}`;
  return (
    <Wrapper>
      <h1>{headerText}</h1>
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
  padding: 15px 30px;
`;

const SubTitle = styled.h3`
  margin: 10px 0px;
`;

const List = styled.ul`
  margin-left: 25px;
  color: ${(props) => props.theme.secondaryText};
`;

const ListItem = styled.li`
  margin: 15px 0px;
`;

const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Technology = styled.div`
  margin: 3px;
  background-color: ${(props) => props.theme.backgroundHighlight};
  padding: 8px;
  border-radius: 15px;
  white-space: nowrap;
`;
