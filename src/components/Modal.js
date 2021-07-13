import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";

const Modal = ({ open, onClose, children }) => {
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
      <ModalContent>
        <button onClick={onClose}>CLOSE MODAL</button>
        {children}
      </ModalContent>
    </>,
    document.getElementById("portal")
  );
};

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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 300px;
  background-color: ${(props) => props.theme.backgroundHighlight};
  padding: 50px;
  border-radius: 25px;
  z-index: 1000;
  ${quickFade}
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
