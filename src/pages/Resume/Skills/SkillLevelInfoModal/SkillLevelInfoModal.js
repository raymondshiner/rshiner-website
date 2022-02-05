import React, { useState } from "react";
import styled from "styled-components";
import { skillLevels } from "../skillLevelData";
import infoIcon from "./infoIcon.svg";
import Modal from "./Modal";

const SkillLevelInfoModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <InfoIcon onClick={() => setShowModal(true)} />
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <ListWrapper>
          {skillLevels.map((skill) => (
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

export default SkillLevelInfoModal;

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
