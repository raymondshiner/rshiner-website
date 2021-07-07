import styled from "styled-components";

const ExternalLink = styled.a.attrs((props) => ({
  href: props.url,
  target: "_blank",
  rel: "noopener noreferrer",
}))``;

export default ExternalLink;
