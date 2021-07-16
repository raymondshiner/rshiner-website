import { useEffect, useState } from "react";

const useWindowHasScrolled = () => {
  const [windowHasScrolled, setWindowHasScrolled] = useState(false);

  const detectScroll = () => {
    if (window.scrollY > 0) setWindowHasScrolled(true);
    else setWindowHasScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", detectScroll);
    return () => {
      window.removeEventListener("scroll", detectScroll);
    };
  }, []);

  return windowHasScrolled;
};

export default useWindowHasScrolled;
