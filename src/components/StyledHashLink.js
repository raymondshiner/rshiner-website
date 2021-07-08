import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -69;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

const StyledHashLink = styled(HashLink).attrs((props) => ({
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

export default StyledHashLink;
