const generateJob = (
  id,
  header,
  title,
  location,
  time,
  duties,
  technologies
) => ({ id, header, title, location, time, duties, technologies });

export const jobs = [
  generateJob(
    "stc",
    "StorageCraft",
    "React Developer",
    "StorageCraft Technologies",
    "Jan 2020 - Current",
    [
      "Designed and implemented UI software for SaaS Cloud Bacakup Services (Onedrive, GCP, etc)",
      "Lead Frontend Developer on green develop",
    ],
    [
      "React",
      "React Hooks",
      "Apollo Server/Client",
      "GraphQL",
      "Jest",
      "Rest",
      "Material UI",
    ]
  ),
  generateJob(
    "int",
    "Intellitect",
    "Technical Writer - Internship",
    "IntelliTect",
    "Feb 2019 - May 2019",
    [
      "Hired to design, research, and write articles about various computer science topics",
    ],
    ["C#", "Technical Writing", "Test Driven Development"]
  ),
  generateJob(
    "ewu",
    "Eastern WA University",
    "Computer Science Tutor",
    "Eastern Washington University",
    "Sept 2018 - Sept 2019",
    [
      "Acted as an expert for Computer Science courses",
      "Instructed students in comprehension of both core and advanced course material",
      "Frequently taught and assisted an abundance of students simultaneously",
    ],
    ["Teaching", "Communication", "Unit Testing"]
  ),
];
