import { useEffect, useState } from "react";

const useActiveNavItem = () => {
  const [activeItem, setActiveItem] = useState("home");

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
        setActiveItem(sectionId);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", setActiveNavItem);
    return () => {
      window.removeEventListener("scroll", setActiveNavItem);
    };
  }, []);

  return activeItem;
};

export default useActiveNavItem;
