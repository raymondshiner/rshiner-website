import React, { useState } from "react";
import styled, { css } from "styled-components";
import { workHistory } from "./workHistory";
// import { jobs } from "./jobs";

const Experience = () => {
  const [activeJob, setActiveJob] = useState("stc");

  return (
    <>
      <TabsList>
        {Object.keys(workHistory).map((job) => {
          const active = activeJob === job;

          return (
            <TabWrapper key={job}>
              <Tab active={active} onClick={() => setActiveJob(job)}>
                {workHistory[job].header}
              </Tab>
              <TabBottom active={active} />
            </TabWrapper>
          );
        })}
      </TabsList>
      {workHistory[activeJob].component}
    </>
  );
};

export default Experience;

const TabsList = styled.div`
  display: flex;
  ::-webkit-scrollbar {
    display: inline;
  }
  width: fit-content;
  max-width: 90vw;

  ${(props) => props.theme.fadeIn}
  overflow-x: auto;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    height: 3px;
    border-radius: 25px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0;
    background-color: #282828;
  }
`;

const TabWrapper = styled.div`
  padding: 8px;
`;

const Tab = styled.div`
  padding: 10px;
  white-space: nowrap;
  cursor: pointer;
  transition: all ease 0.5s;
  color: ${(props) => (props.active ? "white" : props.theme.secondaryText)};
  background-color: ${(props) =>
    props.active ? props.theme.backgroundHighlight : ""};
  border-radius: 5px;
  font-family: "Courier New", Courier, monospace;

  :hover {
    color: ${(props) => props.theme.primary};
  }

  :active {
    color: white;
    transition: none;
  }
`;

const TabBottom = styled.div`
  background-color: ${(props) => props.theme.secondaryText};
  width: 0;
  height: 2px;
  transition: ease 0.6s;
  ${(props) =>
    props.active &&
    css`
      background-color: ${(props) => props.theme.primary};
      width: 100%;
    `}
`;
