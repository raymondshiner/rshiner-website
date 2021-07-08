import { Drawer, TopBar } from "navigation";
import { pages } from "pages";
import React from "react";
import styled, { css, ThemeProvider } from "styled-components";

const theme = {
  primary: "#2bc5e0",
  dark: "#191919",
  secondaryText: "#dddddddd",
  fadeIn: css`
    animation: fade 2s;
    @keyframes fade {
      from {
        opacity: 0;
      }
    }
  `,
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
  justify-content: center;
`;
