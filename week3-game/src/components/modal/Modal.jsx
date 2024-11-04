import React from "react";
import ModalContainer from "./ModalContainer";
import * as S from "./Modal.style";

const Modal = ({ onClose, time }) => {
  const handleClose = () => {
    onClose?.();
  };

  return (
    <ModalContainer>
      <S.Overlay>
        <S.ModalWrap>
          <h1>게임 끝</h1>
          <p>{time}초 소요</p>
          <S.Button onClick={handleClose}>Close</S.Button>
        </S.ModalWrap>
      </S.Overlay>
    </ModalContainer>
  );
};

export default Modal;
