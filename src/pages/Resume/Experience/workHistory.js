import React from "react";
import styled from "styled-components";

const WorkHistory = ({ title, location, time, duties, technologies }) => {
  const headerText = `${title} @ ${location}`;
  return (
    <>
      <Header>{headerText}</Header>
      <SubTitle>{time}</SubTitle>
      <List>
        {duties.map((duty, index) => {
          return <ListItem key={index}>{duty}</ListItem>;
        })}
      </List>
    </>
  );
};

const StorageCraft = () => (
  <WorkHistory
    title="React Developer"
    location="StorageCraft Technologies"
    time="Jan 2020 - Current"
    duties={[
      "Designed and implemented UI software for SaaS Cloud Bacakup Services (Onedrive, GCP, etc)",
      "Lead Frontend Developer on green develop",
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
  stc: generateJob("StorageCraft", StorageCraft),
  tect: generateJob("IntelliTect", IntelliTect),
  ewu: generateJob("Eastern WA University", EasternWA),
};

const Header = styled.h1``;

const SubTitle = styled.h3``;

const List = styled.ul``;

const ListItem = styled.li``;
