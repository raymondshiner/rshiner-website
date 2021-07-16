import { useEffect } from "react";

const useOnClickAway = (ref, onClickAway) => {
  useEffect(
    (event) => {
      const handleClickAway = (event) => {
        if (ref.current && !ref.current.contains(event.target))
          onClickAway(event);
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
