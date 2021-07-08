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
      <JobWrapper>{workHistory[activeJob].component}</JobWrapper>
    </>
  );
};

export default Experience;

const TabsList = styled.div`
  display: flex;
  width: 90vw;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: inline;
  }
  ${(props) => props.theme.fadeIn}
`;

const TabWrapper = styled.div`
  padding: 5px;
`;

const Tab = styled.div`
  padding: 10px;
  white-space: nowrap;
  cursor: pointer;
  transition: all ease 0.5s;
  color: ${(props) => (props.active ? "white" : props.theme.secondaryText)};
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

const JobWrapper = styled.div`
  padding: 20px;
`;
