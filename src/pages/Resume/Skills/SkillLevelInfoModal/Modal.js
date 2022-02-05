import { useOnClickAway } from "hooks";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";

const Modal = ({ open, onClose, children }) => {
  const ref = useRef(null);
  useOnClickAway(ref, () => {
    onClose();
  });

  useEffect(() => {
    if (open) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [open]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <ModalBackground />
      <ModalContent ref={ref}>
        <CloseIcon onClick={onClose} />
        <ScrollWrapper>{children}</ScrollWrapper>
      </ModalContent>
    </>,
    document.getElementById("portal")
  );
};

<img
  src="https://img.icons8.com/ios-filled/35//close-window.png"
  alt="close"
/>;

const CloseIcon = styled.img.attrs((props) => ({
  src: `https://img.icons8.com/ios-filled/35/606060/close-window.png`,
  alt: "close",
}))`
  margin-left: auto;
  margin-bottom: 8px;
  cursor: pointer;
`;

export default Modal;

const quickFade = css`
  animation: fade 0.7s;

  @keyframes fade {
    from {
      opacity: 0;
    }
  }
`;

const ModalContent = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  color: white;
  background-color: ${(props) => props.theme.dark};
  padding: 30px;
  border-radius: 15px;
  z-index: 1000;
  ${quickFade}
`;

const ScrollWrapper = styled.div`
  max-height: 80vh;
  overflow-y: auto;
  padding: 5px;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  ${quickFade}
`;
