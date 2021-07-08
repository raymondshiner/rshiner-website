import React, { useState } from "react";
import styled, { css } from "styled-components";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

const tabs = {
  experience: <Experience />,
  skills: <Skills />,
  education: <Education />,
};

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <Wrapper>
      <TabWrapper>
        {Object.keys(tabs).map((tab) => (
          <Tab
            key={tab}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Tab>
        ))}
      </TabWrapper>
      <ComponentWrapper>{tabs[activeTab]}</ComponentWrapper>
    </Wrapper>
  );
};

export default Resume;

const Tab = styled.div`
  text-transform: uppercase;
  margin: 0px 8px;
  padding: 10px;
  border-radius: 20px;
  border: ${(props) => `2px solid ${props.theme.primary}`};
  font-weight: 500;
  transition: background ease 0.5s, color ease 0.5s, transform ease 0.3s;
  cursor: pointer;

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

const Wrapper = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TabWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ComponentWrapper = styled.div`
  margin-top: 40px;
`;
