import React from "react";
import TopBar from "./TopBar";

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

  return (
    <>
      <TopBar />
      <div className="">
        {pages.map((page, index) => (
          <section
            key={`section-${page.id}`}
            id={page.id}
            style={{
              height: "100vh",
              backgroundColor: colors[index % 2],
              padding: 10,
              color: "white",
              fontSize: "2rem",
            }}
          >
            {page.component}
          </section>
        ))}
      </div>
    </>
  );
};

export default Main;
