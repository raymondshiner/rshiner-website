import styled from "styled-components"

const WorkHistory = ({ title, location, time, duties, technologies }) => {
  return (
    <Wrapper>
      <Header>
        {title}
        <Location> @ {location}</Location>
      </Header>
      <SubTitle>{time}</SubTitle>
      <List>
        {duties.map((duty, index) => {
          return <ListItem key={index}>{duty}</ListItem>
        })}
      </List>
      <SubTitle>Technologies Used</SubTitle>
      <TechnologiesList>
        {technologies.map((tech) => (
          <Technology key={tech}>{tech}</Technology>
        ))}
      </TechnologiesList>
    </Wrapper>
  )
}

const DivisionsMaintenanceGroup = () => (
    <WorkHistory
      title="Senior Frontend Engineer"
      location={"Divisions Maintenance Group"}
      time="May 2023 - Current"
      duties={[
        "Frontend Engineer responsible for delivering high quality UI features for our SASS B2B marketplace application using Typescript React ",
        "Specific focus on excellent User Experience and highly responsive interfaces",
        "Main developer on an inherited React TS project, responsible for continually improving the projects code quality and maintainability",
        "Fully Remote Position",
      ]}
      technologies={[
        "TypeScript",
        "React",
        "React Hooks",
        "React Query",
        "GraphQL",
        "Rest",
        "Material UI v5",
      ]}
    />
  )


const GeodeIP = () => (
  <WorkHistory
    title="Founding Engineer / Senior React Engineer"
    location={"GeodeIP"}
    time="May 2022 - Dec 2022"
    duties={[
      "Founding engineer at a 7 person startup company for an Online SASS IP Managment tool.",
      "Chief React Engineer responsible helping to architect, build, and maintain our core frontend project using Typescript React with Nx.Dev",
      "Responsible for deciding, teaching, documenting, and enforcing clean code and unit testing standards for our team.",
      "Fully Remote Position",
    ]}
    technologies={[
      "TypeScript",
      "React",
      "React Hooks",
      "Apollo Client v3",
      "GraphQL",
      "Cypress",
      "Rest",
      "NX.Dev",
    ]}
  />
)

const EvolveMEP = () => (
  <WorkHistory
    title="Senior React Engineer / Team Lead"
    location="EvolveMEP"
    time="Sept 2021 - Mar 2022"
    duties={[
      "Working as a Team Leader on a green project managing 4+ developers as well as the functional JS React code base for our team, in addition to developing new features for our application.",
      "Responsible for defining, teaching, and enforcing clean code and testing standards across our code base to ensure product maintainability.",
      "Regularly involved in the architecture and product design of our application, as well as training new hires, and handling our teams' processes documentation.",
      "Fully remote position",
    ]}
    technologies={[
      "React",
      "React Hooks",
      "Apollo Client v3",
      "AWS Appsync",
      "GraphQL",
      "Cypress",
      "Rest",
      "Material UI v5",
    ]}
  />
)

const StorageCraft = () => (
  <WorkHistory
    title="React Developer"
    location="StorageCraft Technologies"
    time="Jan 2020 - Aug 2021"
    duties={[
      "Designed and implemented UI software for SaaS Cloud Bacakup Services (Onedrive, GCP, etc). Dealt with managing and browsing upwards of 100,000 items at a time",
      "Lead Frontend Developer on green development project. Responsible for managing direction, tooling, design, and testing of the product",
      "Fully remote position",
    ]}
    technologies={[
      "React",
      "React Hooks",
      "Apollo Server/Client v2",
      "GraphQL",
      "Jest",
      "Rest",
      "Material UI v4",
    ]}
  />
)

const IntelliTect = () => (
  <WorkHistory
    title="Technical Writer - Internship"
    location="IntelliTect"
    time="Feb 2019 - May 2019"
    duties={[
      "Hired to design, research, and write articles about various computer science topics",
    ]}
    technologies={["C#", "Technical Writing", "Test Driven Development"]}
  />
)

const EasternWA = () => (
  <WorkHistory
    title="Computer Science Tutor"
    location="Eastern Washington University"
    time="Sept 2018 - Sept 2019"
    duties={[
      "Acted as an expert for Computer Science courses",
      "Instructed students in comprehension of both core and advanced course material",
      "Frequently taught and assisted an abundance of students simultaneously",
    ]}
    technologies={["Teaching", "Communication", "Unit Testing"]}
  />
)

const generateJob = (header, component) => ({
  header,
  component,
})

export const workHistory = {
  dmg: generateJob("DMG", <DivisionsMaintenanceGroup />),
  geode: generateJob("Geode IP", <GeodeIP />),
  mep: generateJob("EvolveMEP", <EvolveMEP />),
  stc: generateJob("StorageCraft", <StorageCraft />),
  tect: generateJob("IntelliTect", <IntelliTect />),
  ewu: generateJob("East WA University", <EasternWA />),
}

const Wrapper = styled.div`
  margin: 0px 15px;
  max-width: 550px;
  width: 80vw;
`

const Location = styled.div`
  font-size: 18px;
  color: ${(props) => props.theme.secondaryText};
  display: inline;
`

const Header = styled.h1`
  margin-bottom: 10px;
`

const SubTitle = styled.h3`
  border-bottom: ${(props) => `1px solid ${props.theme.primary}`};
  width: fit-content;
  padding-bottom: 2px;
`

const List = styled.ul`
  margin-left: 25px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.secondaryText};
`

const ListItem = styled.li`
  margin: 15px 0px;
`

const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`

const Technology = styled.div`
  margin: 3px;
  background-color: ${(props) => props.theme.backgroundHighlight};
  padding: 8px;
  border-radius: 15px;
  white-space: nowrap;
`
