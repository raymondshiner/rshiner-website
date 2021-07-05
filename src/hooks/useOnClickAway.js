import { useEffect } from "react";

const useOnClickAway = (ref, onClickAway) => {
  useEffect(
    (event) => {
      const handleClickAway = (event) => {
        const id = event.target.id;

        if (id === "menuButton" || id === "menuButtonLine") {
          return;
        }

        if (ref.current && !ref.current.contains(event.target)) onClickAway();
      };

      window.addEventListener("mousedown", handleClickAway);

      return () => {
        window.removeEventListener("mousedown", handleClickAway);
      };
    },
    [ref, onClickAway]
  );
};

export default useOnClickAway;
