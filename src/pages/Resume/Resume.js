import React, { useState } from "react";
import styled, { css } from "styled-components";
import Education from "./Education";
import Experience from "./Experience/Experience";
import Skills from "./Skills/Skills";

const tabs = {
  experience: <Experience />,
  skills: <Skills />,
  education: <Education />,
};

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <ResumeWrapper>
      <Title>My Resume</Title>
      <Divider />
      <ButtonWrapper>
        {Object.keys(tabs).map((tab) => (
          <Button
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Button>
        ))}
      </ButtonWrapper>
      <ComponentWrapper>{tabs[activeTab]}</ComponentWrapper>
    </ResumeWrapper>
  );
};

export default Resume;

const ResumeWrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 20px;
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

const ButtonWrapper = styled.div`
  display: flex;
  width: 30%;
  min-width: 310px;
  margin: 0px 20px;
  justify-content: space-evenly;
`;

const Button = styled.div`
  text-transform: uppercase;
  margin: 0px 8px;
  padding: 10px;
  border-radius: 20px;
  border: ${(props) => `2px solid ${props.theme.primary}`};
  font-weight: 500;
  transition: background ease 0.5s, color ease 0.5s, transform ease 0.3s,
    font-size ease 0.3s;
  cursor: pointer;
  @media (max-width: 400px) {
    font-size: 12px;
  }

  :hover {
    transform: translateY(-3px);
  }

  :active {
    transition: none;
    transform: translateY(1px);
  }

  ${(props) =>
    props.active &&
    css`
      color: black;
      background-color: ${props.theme.primary};
    `}
`;

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 100%;
`;
