import infoIcon from "assets/infoIcon.svg";
import { Modal } from "components";
import React, { useState } from "react";
import styled from "styled-components";

const SkillLevelInfo = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <InfoIcon onClick={() => setShowModal(true)} />
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        Fancy Modal
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
