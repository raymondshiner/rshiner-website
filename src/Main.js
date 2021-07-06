import { pages } from "data";
import { Drawer, TopBar } from "navigation";
import React from "react";
import styled from "styled-components";

const Main = () => {
  const colors = ["black", "#191919"];

  return (
    <>
      <TopBar />
      <Drawer />
      {pages.map((page, index) => (
        <Section
          id={page.id}
          key={`section-${page.id}`}
          color={colors[index % 2]}
        >
          {page.component}
        </Section>
      ))}
    </>
  );
};

export default Main;

const Section = styled.section`
  height: 100vh;
  padding: 40px;
  background-color: ${(props) => props.color};
  color: white;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
