import { Drawer, TopBar } from "navigation";
import { pages } from "pages";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

const theme = {
  primary: "#2bc5e0",
  dark: "#191919",
};

const Main = () => {
  const colors = ["black", "#191919"];

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default Main;

const Section = styled.section`
  background-color: ${(props) => props.color};
  color: white;
  min-height: 500px;
  z-index: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
