import { NavItem } from "components";
import useWindowDimensions from "hooks/useWindowDimensions";
import styled from "styled-components";

const LogoNav = styled(NavItem).attrs((props) => ({
  scroll: null,
  to: "#top",
}))`
  font-weight: 700;
  font-size: 1.55rem;
  letter-spacing: 2px;
  min-width: fit-content;
  margin-right: 50px;
  transition: 0.6s;
  border: 2px solid #2bc5e0;
  padding: 5px;
`;

const Logo = () => {
  const { width } = useWindowDimensions();

  const text = width > 450 ? "Raymond Shiner" : "Raymond";

  return <LogoNav>{text}</LogoNav>;
};

export default Logo;