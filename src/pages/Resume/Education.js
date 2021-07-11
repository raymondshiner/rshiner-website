import React from "react";
import styled from "styled-components";

const Education = () => {
  return (
    <EducationWrapper>
      <Meta>Eastern Washington University</Meta>
      <Divider />
      <Meta>Summa Cum Laude</Meta>
      <Major>
        Bachelor of Arts in <Colored>Philosophy</Colored>
      </Major>
      <Minors>
        <div>
          Minor in <Colored>Computer Science</Colored>*
        </div>
        <div>
          Minor in <Colored>Japanese</Colored>
        </div>
      </Minors>
      <Divider />
      <Meta>Jan 2014 - Mar 2020</Meta>
      <Meta>
        *Because of timing issues with my first Job, capstone, and graduation,
        My <Emphasis>2 years of full-time computer science education </Emphasis>
        appears on my degree as a minor instead of a Double Major.
      </Meta>
    </EducationWrapper>
  );
};

export default Education;

const EducationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) => props.theme.fadeIn}
  background-color: ${(props) => props.theme.dark};
  padding: 20px;
  border-radius: 20px;
  max-width: 400px;
`;

const Meta = styled.i`
  font-size: 15px;
  color: ${(props) => props.theme.secondaryText};
  margin-bottom: 3px;
`;

const Emphasis = styled.div`
  font-size: 16px;
  display: inline;
  color: ${(props) => props.theme.primary};
`;

const Divider = styled.div`
  min-height: 2px;
  width: 100%;
  background-color: #484848;
  margin: 10px 0px;
`;

const Major = styled.h1`
  margin-bottom: 20px;
  font-size: clamp(10px, 10vw, 24px);
`;

const Minors = styled.div`
  font-size: clamp(10px, 10vw, 20px);
`;

const Colored = styled.div`
  display: inline;
  color: ${(props) => props.theme.primary};
`;
