import React, { useState } from "react";
import styled from "styled-components";
import { skills } from "./skillData";
import SkillLevelInfo from "./SkillLevelInfo";
import SkillList from "./SkillList";

const Skills = () => {
  const [searchValue, setSearchValue] = useState();
  const [activeSkillLevel, setActiveSkillLevel] = useState("");

  const handleSearchChange = (e) => setSearchValue(e.target.value);

  const toggleActiveSkillLevel = (skillLevel) => {
    if (activeSkillLevel === skillLevel) setActiveSkillLevel("");
    else setActiveSkillLevel(skillLevel);
  };

  const skillLevels = [
    "familiar",
    "novice",
    "proficient",
    "specialized",
    "expert",
  ];

  const skillLevelsLegend = {
    familiar: 1,
    novice: 2,
    proficient: 3,
    specialized: 4,
    expert: 5,
  };

  const SkillLevelFilter = () => (
    <FilterButtonWrapper>
      {skillLevels.map((skillLevel) => (
        <FilterButton
          key={skillLevel}
          active={skillLevel === activeSkillLevel}
          onClick={() => toggleActiveSkillLevel(skillLevel)}
        >
          {skillLevel}
        </FilterButton>
      ))}
    </FilterButtonWrapper>
  );

  const skillsFilteredByLevel = activeSkillLevel
    ? skills.filter((skill) => {
        return skill.level === skillLevelsLegend[activeSkillLevel];
      })
    : skills;

  const filteredBySearch = searchValue
    ? skillsFilteredByLevel.filter((skill) => {
        return skill.name.toLowerCase().includes(searchValue.toLowerCase());
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
          <SkillLevelInfo /> Skill Level:
        </SubText>
        <SkillLevelFilter />
      </FilterWrapper>
      <SkillList skills={filteredBySearch} />
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
  width: 50%;
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
