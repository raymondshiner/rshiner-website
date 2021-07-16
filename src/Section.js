import useInViewPort from "hooks/useInViewPort";
import React from "react";
import styled, { css } from "styled-components";

const Section = ({ children, ...props }) => {
  const { elementRef, isInViewPort } = useInViewPort();

  return (
    <StyledSection {...props}>
      <SectionContent ref={elementRef} isInViewPort={isInViewPort}>
        {children}
      </SectionContent>
    </StyledSection>
  );
};

export default Section;

const SectionContent = styled.div`
  min-height: 500px;
  z-index: 1;
  display: flex;
  justify-content: center;
  color: white;

  ${(props) =>
    props.isInViewPort &&
    css`
      animation: fade 3s;
      @keyframes fade {
        from {
          opacity: 0;
        }
      }
    `}
`;

const StyledSection = styled.section`
  background-color: ${(props) => props.color};
  padding: 10px;
`;
