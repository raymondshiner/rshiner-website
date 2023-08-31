import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Resume from "./Resume/Resume";

const generatePage = (id, copy, component) => ({
  id,
  copy,
  component,
});

export const pages = [
  generatePage("home", "Home", <Hero />),
  generatePage("about", "About", <AboutMe />),
  generatePage("resume", "Resume", <Resume />),
  generatePage("projects", "Projects", <Projects />),
  generatePage("contact", "Contact", <Contact />),
];
