import styled from "styled-components";

import Picture from "../Gallery/Picture";
import ButtonIcon from "../ButtonIcon";

const StyledOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const StyledDialog = styled.dialog`
  background-color: #001634;
  position: fixed;
  top: 14vh;
  border-radius: 20px;
  border: none;
  padding: 0;
  width: 40%;

  .button-close-modal {
    position: absolute;
    top: 16px;
    right: 16px;
  }

  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;

  @-webkit-keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }
`;

const ZoomModal = ({ picture, onCloseModal }) => {
  return (
    <>
      {picture && (
        <>
          <StyledOverlay />

          <StyledDialog open={!!picture}>
            <ButtonIcon
              type="button"
              className="button-close-modal"
              onClick={onCloseModal}
            >
              <img src="/icons/close.png" alt="Ícone de expandir" />
            </ButtonIcon>

            <Picture picture={picture} expanded />
          </StyledDialog>
        </>
      )}
    </>
  );
};

export default ZoomModal;
