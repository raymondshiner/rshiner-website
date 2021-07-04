import { Drawer, TopBar } from "navigation";
import React from "react";
import { useDrawerState } from "state";

const generatePage = (id, copy, component) => ({
  id,
  copy,
  component,
});

export const pages = [
  generatePage("home", "Home", <div></div>),
  generatePage("about", "About Me", <div>I'm an About</div>),
  generatePage("cv", "Resume/CV", <div>I'm an Resume/CV</div>),
  generatePage("portfolio", "Portfolio", <div>I'm an Portfolio</div>),
  generatePage("blog", "Blog", <div>I'm an Blog</div>),
  generatePage("contact", "Contact", <div>I'm an Contact</div>),
];

const Main = () => {
  const colors = ["black", "#191919"];
  const { drawerOpen } = useDrawerState();

  return (
    <>
      <div
        style={{
          backdropFilter: "blur(10px)",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
        }}
      />
      <TopBar />
      <Drawer />
      {pages.map((page, index) => (
        <section
          key={`section-${page.id}`}
          id={page.id}
          style={{
            height: "100vh",
            backgroundColor: colors[index % 2],
            padding: 40,
            color: "white",
            zIndex: 1,
          }}
        >
          {page.component}
        </section>
      ))}
    </>
  );
};

export default Main;
