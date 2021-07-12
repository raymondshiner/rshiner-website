const generateSkill = (name, level, ...types) => ({
  name,
  level,
  types,
});

export const skills = [
  generateSkill("React", 4, "frontend"),
  generateSkill("React Hooks", 4, "frontend"),
  generateSkill("JavaScript", 3, "frontend", "backend"),
  generateSkill("Jest", 5, "frontend"),
  generateSkill("Enzyme", 4, "frontend"),
  generateSkill("Cypress", 3, "frontend"),
  generateSkill("HTML", 3, "frontend"),
  generateSkill("CSS", 4, "frontend"),
  generateSkill("GraphQL", 3, "frontend", "backend"),
  generateSkill("Apollo Client", 3, "frontend"),
  generateSkill("Apollo Server", 3, "frontend", "backend"),
  generateSkill("Storybook", 2, "frontend"),
  generateSkill("npm", 2, "frontend", "backend", "dev ops"),
  generateSkill("C#/.Net", 3, "frontend", "backend"),
  generateSkill("Microsoft Graph API", 4, "frontend", "backend"),
  generateSkill("NodeJS", 2, "backend"),
  generateSkill("Python", 2, "backend"),
  generateSkill("Java", 2, "backend"),
  generateSkill("Java Spring", 2, "backend"),
  generateSkill("SQL", 1, "backend"),
  generateSkill("Test Driven Development", 5, "frontend", "backend", "dev ops"),
  generateSkill("MicroServices", 3, "dev ops"),
  generateSkill("REST APIs", 4, "frontend", "backend"),
  generateSkill("Git", 3, "dev ops"),
  generateSkill("Linux", 3, "dev ops"),
  generateSkill("Bash", 2, "dev ops"),
  generateSkill("PowerShell", 2, "dev ops"),
  generateSkill("CI/CD", 2, "dev ops"),
  generateSkill("Docker", 1, "dev ops"),
  generateSkill("Kubernetes", 1, "dev ops"),
];

export const skillLegendText = {
  1: "Familiar",
  2: "Novice",
  3: "Proficient",
  4: "Specialized",
  5: "Expert",
};

export const skillLegendPips = {
  1: "•",
  2: "• •",
  3: "• • •",
  4: "• • • •",
  5: "• • • • •",
};
