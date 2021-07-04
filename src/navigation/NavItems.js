import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -69;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const NavItem = styled(HashLink).attrs((props) => ({
  smooth: true,
  scroll: scrollWithOffset,
  to: `#${props.to}`,
}))`
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  font-size: 1.2rem;
  letter-spacing: 1.5px;
  font-weight: 500;
`;

const Logo = styled(NavItem).attrs((props) => ({
  scroll: null,
  to: "#top",
  children: "Raymond Shiner",
}))`
  font-weight: 700;
  font-size: 1.55rem;
  letter-spacing: 2px;
  min-width: fit-content;
  margin-right: 30px;
  transition: 0.6s;
  border: 2px solid #2bc5e0;
  padding: 5px;
`;

export { NavItem, Logo };
