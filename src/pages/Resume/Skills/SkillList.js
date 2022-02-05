import React from "react";
import styled from "styled-components";
import { skillLevelPips, skillLevelText } from "./skillLevelData";

const SkillList = ({ skills }) => {
  return (
    <CardList>
      {skills.map((skill) => (
        <Card key={skill.name}>
          <HeaderWrapper>
            <Header>{skill.name}</Header>
            <SkillInfo>
              <div>{skillLevelPips[skill.level]}</div>
              <div>{skillLevelText[skill.level]}</div>
            </SkillInfo>
          </HeaderWrapper>
          <SkillTypesList>
            {skill.types.map((skillType) => (
              <SkillType key={skillType}>{skillType}</SkillType>
            ))}
          </SkillTypesList>
        </Card>
      ))}
    </CardList>
  );
};

export default SkillList;

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-height: 500px;
  overflow-y: scroll;
  margin-top: 15px;
  max-width: 1100px;

  ::-webkit-scrollbar {
    display: block;
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    width: 12px;
    background-color: ${(props) => props.theme.backgroundHighlight};
    border-radius: 25px;
  }
`;

const SkillInfo = styled.i`
  text-align: right;
`;

const Card = styled.div`
  flex: 1 0 30%;
  background-color: ${(props) => props.theme.dark};
  /* background-color: black; */
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 10px;

  min-width: 310px;
  max-width: 400px;
`;

const Header = styled.h1`
  color: ${(props) => props.theme.primary};
  margin-right: auto;
  padding-right: 10px;
`;

const SkillTypesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const SkillType = styled.div`
  margin: 3px;
  background-color: ${(props) => props.theme.backgroundHighlight};
  padding: 8px;
  border-radius: 15px;
  text-transform: capitalize;
  white-space: nowrap;
`;

const HeaderWrapper = styled.div`
  display: flex;
`;
