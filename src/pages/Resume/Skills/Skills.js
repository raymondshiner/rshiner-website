import React, { useState } from "react";
import styled from "styled-components";

const Skills = () => {
  const [searchValue, setSearchValue] = useState();

  return (
    <SkillsWrapper>
      <SearchBar
        type="text"
        value={searchValue}
        placeholder="Search Skills"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div
        style={{
          marginTop: 50,
          color: "darkgreen",
          border: "1px solid darkgreen",
        }}
      >
        Search Value: {searchValue}
      </div>
    </SkillsWrapper>
  );
};

export default Skills;

const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) => props.theme.fadeIn}
`;

const SearchBar = styled.input`
  width: 100%;
  color: white;
  background-color: ${(props) => props.theme.dark};
  border: none;
  padding: 12px 16px;
  border-radius: 20px;
  font-size: 16px;
  font-style: italic;
  box-sizing: inherit;
  :focus {
    outline-width: 0;
  }
`;
