import { Drawer, TopBar } from "navigation";
import { Hero } from "pages";
import React from "react";
import styled from "styled-components";

const generatePage = (id, copy, component) => ({
  id,
  copy,
  component,
});

export const pages = [
  generatePage("home", "Home", <Hero />),
  generatePage("about", "About Me", <div>I'm an About</div>),
  generatePage("cv", "Resume/CV", <div>I'm an Resume/CV</div>),
  generatePage("portfolio", "Portfolio", <div>I'm an Portfolio</div>),
  generatePage("blog", "Blog", <div>I'm an Blog</div>),
  generatePage("contact", "Contact", <div>I'm an Contact</div>),
];

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
