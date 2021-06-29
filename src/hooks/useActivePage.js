import { useEffect, useState } from "react";

const useActivePage = () => {
  const [activePage, setActivePage] = useState("home");

  const determineActiveSection = () => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionID = section.getAttribute("id");

      if (sectionID === activePage) return;

      if (window.pageYOffset >= sectionTop) {
        const currentlyActivePage = section.getAttribute("id");

        console.log({ currentlyActivePage, activePage });

        if (currentlyActivePage !== activePage)
          setActivePage(currentlyActivePage);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", determineActiveSection);
    return () => {
      window.removeEventListener("scroll", determineActiveSection);
    };
  }, []);

  return activePage;
};

export default useActivePage;
