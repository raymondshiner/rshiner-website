import useActivePage from "hooks/useActivePage";
import useWindowHasScrolled from "hooks/useWindowHasScrolled";
import { pages } from "Main";
import React from "react";
import { HashLink } from "react-router-hash-link";
import "./NavBar.css";

const NavBar = () => {
  const windowHasScrolled = useWindowHasScrolled();
  const activePage = useActivePage();

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
              key={page.id}
              className={activePage === page.id ? "active" : ""}
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
