import React, { useState } from "react";
import styled from "styled-components";
import { skillLevelText } from "./skillLevelData";
import SkillLevelInfoModal from "./SkillLevelInfoModal/SkillLevelInfoModal";
import SkillList from "./SkillList";
import { skills } from "./skillsData";

const Skills = () => {
  const [searchValue, setSearchValue] = useState();
  const [activeSkillLevel, setActiveSkillLevel] = useState(0);

  const handleSearchChange = (e) => setSearchValue(e.target.value);

  const toggleActiveSkillLevel = (skillLevel) => {
    if (activeSkillLevel === skillLevel) setActiveSkillLevel(0);
    else setActiveSkillLevel(skillLevel);
  };

  const SkillLevelFilter = () => (
    <FilterButtonWrapper>
      {Object.keys(skillLevelText).map((skillLevelString) => {
        const skillLevel = Number(skillLevelString);

        return (
          <FilterButton
            key={`skill-level-fitler-${skillLevel}`}
            active={skillLevel === activeSkillLevel}
            onClick={() => toggleActiveSkillLevel(skillLevel)}
          >
            {skillLevel}
          </FilterButton>
        );
      })}
    </FilterButtonWrapper>
  );

  const skillsFilteredByLevel = activeSkillLevel
    ? skills.filter((skill) => {
        return skill.level === activeSkillLevel;
      })
    : skills;

  const skillsFilteredBySearchAndLevel = searchValue
    ? skillsFilteredByLevel.filter((skill) => {
        return skill.name
          .toLowerCase()
          .includes(searchValue.toLowerCase().trim());
      })
    : skillsFilteredByLevel;

  return (
    <SkillsWrapper>
      <SearchBar
        type="text"
        value={searchValue}
        placeholder="Search Skills"
        onChange={handleSearchChange}
      />
      <FilterWrapper>
        <SubText>
          <SkillLevelInfoModal /> Skill Level:
        </SubText>
        <SkillLevelFilter />
      </FilterWrapper>
      <SkillList skills={skillsFilteredBySearchAndLevel} />
    </SkillsWrapper>
  );
};

export default Skills;

const SkillsWrapper = styled.div`
  width: fit-content;
  max-width: 1100px;
  ${(props) => props.theme.fadeIn}
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterWrapper = styled.div`
  display: flex;
  margin: 10px;
  max-height: 100px;
`;

const SubText = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  color: ${(props) => props.theme.secondaryText};
  flex: 1;
  white-space: nowrap;
`;

const FilterButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const SearchBar = styled.input`
  color: white;
  background-color: ${(props) => props.theme.dark};
  width: 30vw;
  min-width: 300px;
  border: none;
  padding: 12px 16px;
  border-radius: 20px;
  font-size: 16px;
  font-style: italic;
  box-sizing: inherit;
  :focus {
    outline-width: 0;
  }
  margin-bottom: 10px;
`;

const FilterButton = styled.i`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 15px;
  padding: 5px;
  margin: 2px 8px;
  cursor: pointer;
  border-radius: 8px;
  transition: all ease 0.4s;
  background: ${(props) => props.active && props.theme.backgroundHighlight};

  :hover {
    transform: translateY(-3px);
  }

  :active {
    transition: none;
    transform: translateX(1px);
  }
`;
