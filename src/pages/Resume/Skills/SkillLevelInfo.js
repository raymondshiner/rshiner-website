import infoIcon from "assets/infoIcon.svg";
import { Modal } from "components";
import React, { useState } from "react";
import styled from "styled-components";

const generateInfo = (name, pips, desc) => ({
  name,
  pips,
  desc,
});

const info = [
  generateInfo(
    "Familiar",
    "•",
    "This means that I can tell you what this skill is and how it is used. I may have even used it once or twice. I am confident in my ability to learn this skill should I be required to use it."
  ),
  generateInfo(
    "Novice",
    "• •",
    "This means that I have used this skill before and understand the core principles in action. I could use this skill to cover for someone if needed."
  ),
  generateInfo(
    "Proficient",
    "• • •",
    "This means I have this skill. I have real-world experience using this skill and am confident in my ability to handle day to day responsiblities. I can learn how to solve the more nuanced challenges this skill may present."
  ),
  generateInfo(
    "Specialized",
    "• • • •",
    "This is a reason to hire me. I have extensive experience using this skill in complicated and nuanced situations. I am qualified to instruct other developers in how to use this skill proficiently."
  ),
  generateInfo(
    "Expert",
    "• • • • •",
    "I have mastered this skill and am one of the best out there. I may have some holes in my knowledge, but I've likely read all the documentation for this skill twice over. I'd be willing to pit my skills against anyone. "
  ),
];

export const skillLegendPips = {
  1: "•",
  2: "• •",
  3: "• • •",
  4: "• • • •",
  5: "• • • • •",
};

const SkillLevelInfo = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <InfoIcon onClick={() => setShowModal(true)} />
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <ListWrapper>
          {info.map((skill) => (
            <>
              <TitleWrapper>
                <h1>{skill.name}</h1>
                <h5>{skill.pips}</h5>
              </TitleWrapper>
              <Description>{skill.desc}</Description>
            </>
          ))}
        </ListWrapper>
      </Modal>
    </>
  );
};

export default SkillLevelInfo;

const InfoIcon = styled.img.attrs({
  src: infoIcon,
  alt: "skill info",
})`
  margin-right: 5px;
  cursor: pointer;
`;

const TitleWrapper = styled.div`
  display: Flex;
  align-items: center;
  justify-content: space-between;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  max-width: 400px;
  margin-top: 5px;
  margin-bottom: 10px;
  font-size: clamp(12px, 4vw, 15px);
`;
