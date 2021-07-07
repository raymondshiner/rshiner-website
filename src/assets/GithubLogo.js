import React from "react";
import githubLogo from "./githubLogo.svg";

const GithubLogo = () => {
  return (
    <img
      src={githubLogo}
      alt="github"
      style={{ height: "5vw", minHeight: 50, maxHeight: 70 }}
    />
  );
};

export default GithubLogo;
