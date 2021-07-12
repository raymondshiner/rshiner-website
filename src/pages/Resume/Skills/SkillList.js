import React from "react";
import styled from "styled-components";

const generateSkill = (name, level, ...types) => ({
  name,
  level,
  types,
});

const skills = [
  generateSkill("React", 4, "frontend"),
  generateSkill("React Hooks", 4, "frontend"),
  generateSkill("JavaScript", 3, "frontend", "backend"),
  generateSkill("Jest", 5, "frontend"),
  generateSkill("Enzyme", 4, "frontend"),
  generateSkill("Cypress", 3, "frontend"),
  generateSkill("HTML", 3, "frontend"),
  generateSkill("CSS", 4, "frontend"),
  generateSkill("GraphQL", 3, "frontend", "backend"),
  generateSkill("Apollo Client", 3, "frontend"),
  generateSkill("Apollo Server", 3, "frontend", "backend"),
  generateSkill("Storybook", 2, "frontend"),
  generateSkill("npm", 2, "frontend", "backend", "dev ops"),
  generateSkill("C#/.Net", 3, "frontend", "backend"),
  generateSkill("Microsoft Graph API", 4, "frontend", "backend"),
  generateSkill("NodeJS", 2, "backend"),
  generateSkill("Python", 2, "backend"),
  generateSkill("Java", 2, "backend"),
  generateSkill("Java Spring", 2, "backend"),
  generateSkill("SQL", 1, "backend"),
  generateSkill("Test Driven Development", 5, "frontend", "backend", "dev ops"),
  generateSkill("MicroServices", 3, "dev ops"),
  generateSkill("REST APIs", 4, "frontend", "backend"),
  generateSkill("Git", 3, "dev ops"),
  generateSkill("Linux", 3, "dev ops"),
  generateSkill("Bash", 2, "dev ops"),
  generateSkill("PowerShell", 2, "dev ops"),
  generateSkill("CI/CD", 2, "dev ops"),
  generateSkill("Docker", 1, "dev ops"),
  generateSkill("Kubernetes", 1, "dev ops"),
];

const skillLegendText = {
  1: "Familiar",
  2: "Novice",
  3: "Proficient",
  4: "Specialized",
  5: "Expert",
};

const skillLegendPips = {
  1: "•",
  2: "• •",
  3: "• • •",
  4: "• • • •",
  5: "• • • • •",
};

const SkillList = () => {
  return (
    <CardList>
      {skills.map((skill) => (
        <Card key={skill.name}>
          <HeaderWrapper>
            <Header>{skill.name}</Header>
            <SkillInfo>
              <div>{skillLegendPips[skill.level]}</div>
              <div>{skillLegendText[skill.level]}</div>
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
