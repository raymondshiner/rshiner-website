import React from "react";
import { Hero } from "./pages";

const generatePage = (id, copy, component) => ({
  id,
  copy,
  component,
});

export const colors = {
  blue: "#2bc5e0",
  dark: "#191919",
};

export const pages = [
  generatePage("home", "Home", <Hero />),
  generatePage("about", "About Me", <div>I'm an About</div>),
  generatePage("cv", "Resume/CV", <div>I'm an Resume/CV</div>),
  generatePage("portfolio", "Portfolio", <div>I'm an Portfolio</div>),
  generatePage("blog", "Blog", <div>I'm an Blog</div>),
  generatePage("contact", "Contact", <div>I'm an Contact</div>),
];
