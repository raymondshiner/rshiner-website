import React from "react";
import styled, { css } from "styled-components";
import { workHistory } from "./workHistory";

const MobileTabs = ({ activeJob, onJobSelected }) => {
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

export default MobileTabs;

const TabsList = styled.div`
  display: flex;
  width: fit-content;
  max-width: 80vw;
  margin: 10px 0px;

  overflow-x: auto;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    display: block;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 25px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 0;
    background-color: #282828;
    border-radius: 25px;
    cursor: pointer;
  }
`;

const TabWrapper = styled.div`
  padding: 8px 2px;
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

  @media (max-width: 350px) {
    font-size: 14px;
  }

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
