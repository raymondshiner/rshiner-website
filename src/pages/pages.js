import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Portfolio from "./Portfolio/Portfolio";
import Resume from "./Resume/Resume";

const generatePage = (id, copy, component) => ({
  id,
  copy,
  component,
});

export const pages = [
  generatePage("home", "Home", <Hero />),
  generatePage("about", "About Me", <AboutMe />),
  generatePage("cv", "Resume/CV", <Resume />),
  generatePage("portfolio", "Portfolio", <Portfolio />),
  generatePage("blog", "Blog", <Blog />),
  generatePage("contact", "Contact", <Contact />),
];
