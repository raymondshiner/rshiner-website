import React, { useState } from "react";
import styled from "styled-components";

const Skills = () => {
  const [searchValue, setSearchValue] = useState();
  const [activeSkillLevel, setActiveSkillLevel] = useState("");
  const [activeSkillTypes, setActiveSkillTypes] = useState({});

  const handleSearchChange = (e) => setSearchValue(e.target.value);

  const toggleActiveSkillTypes = (skill) => {
    setActiveSkillTypes({
      ...activeSkillTypes,
      [skill]: !activeSkillTypes[skill],
    });
  };

  const toggleActiveSkillLevel = (skillLevel) => {
    if (activeSkillLevel === skillLevel) setActiveSkillLevel("");
    else setActiveSkillLevel(skillLevel);
  };

  const skillTypes = ["frontend", "backend", "dev ops"];
  const skillLevels = ["familiar", "novice", "proficient", "expert", "master"];

  const TypeFilters = () => (
    <FilterButtonWrapper>
      {skillTypes.map((skill) => (
        <FilterButton
          key={skill}
          active={activeSkillTypes[skill]}
          onClick={() => toggleActiveSkillTypes(skill)}
        >
          {skill}
        </FilterButton>
      ))}
    </FilterButtonWrapper>
  );

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

  return (
    <>
      <SearchBar
        type="text"
        value={searchValue}
        placeholder="Search Skills"
        onChange={handleSearchChange}
      />
      <FilterWrapper>
        <SubText>Skill Level:</SubText>
        <SkillLevelFilter />
      </FilterWrapper>
      <FilterWrapper>
        <SubText>Skill Type:</SubText>
        <TypeFilters />
      </FilterWrapper>
    </>
  );
};

export default Skills;

const FilterWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 5px 0px;
`;

const SubText = styled.div`
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
  width: 100%;
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
  margin: 0px 8px;
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
