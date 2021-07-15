import React from "react";
import styled, { css } from "styled-components";
import { workHistory } from "./workHistory";

const DesktopTabs = ({ activeJob, onJobSelected }) => {
  return (
    <TabsList>
      {Object.keys(workHistory).map((job) => {
        const active = activeJob === job;

        return (
          <TabWrapper key={job}>
            <Tab active={active} onClick={() => onJobSelected(job)}>
              {workHistory[job].header}
            </Tab>
            <TabBottom active={active} />
          </TabWrapper>
        );
      })}
    </TabsList>
  );
};

export default DesktopTabs;

const TabWrapper = styled.div`
  margin-top: 4px;
`;

const TabsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  max-width: 90vw;
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
