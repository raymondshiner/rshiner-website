import React from "react";
import { Hero } from ".";

const generatePage = (id, copy, component) => ({
  id,
  copy,
  component,
});

export const meta = [
  generatePage("home", "Home", <Hero />),
  generatePage("about", "About Me", <div>I'm an About</div>),
  generatePage("cv", "Resume/CV", <div>I'm an Resume/CV</div>),
  generatePage("portfolio", "Portfolio", <div>I'm an Portfolio</div>),
  generatePage("blog", "Blog", <div>I'm an Blog</div>),
  generatePage("contact", "Contact", <div>I'm an Contact</div>),
];
