import useWindowHasScrolled from "hooks/useWindowHasScrolled";
import { pages } from "Main";
import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import "./NavBar.css";

const NavBar = () => {
  const windowHasScrolled = useWindowHasScrolled();

  useEffect(() => {
    window.addEventListener("scroll", setActiveNavItem);
    return () => {
      window.removeEventListener("scroll", setActiveNavItem);
    };
  }, []);

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -69;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <header className={windowHasScrolled ? "sticky" : ""}>
      <HashLink className="logo" to={`#top`} smooth>
        Raymond Shiner
      </HashLink>
      <ul>
        {pages.map((page) => {
          return (
            <li
              key={`nav-${page.id}`}
              id={`nav-${page.id}`}
              className={page.id === "home" ? "active" : ""}
            >
              <HashLink to={`#${page.id}`} smooth scroll={scrollWithOffset}>
                {page.copy}
              </HashLink>
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default NavBar;

const setActiveNavItem = () => {
  const sections = document.querySelectorAll("section[id]");

  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 250;
    const sectionId = current.getAttribute("id");

    const haveScrolledPastSectionTop = scrollY > sectionTop;
    const haventScrolledPastSection = scrollY <= sectionTop + sectionHeight;

    if (haveScrolledPastSectionTop && haventScrolledPastSection) {
      document
        .querySelector(`header li[id='nav-${sectionId}']`)
        .classList.add("active");
    } else {
      document
        .querySelector(`header li[id='nav-${sectionId}']`)
        .classList.remove("active");
    }
  });
};
