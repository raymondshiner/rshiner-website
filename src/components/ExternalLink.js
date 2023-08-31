import styled from "styled-components";

export const ExternalLink = styled.a.attrs((props) => ({
    href: props.url,
    target: "_blank",
    rel: "noopener noreferrer",
}))``;
