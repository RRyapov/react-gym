import React from "react";
import { ModalContent, ModalStyle, ModalIsClosed, ModalButton } from "./style";
import { ProgramButtonContainer } from "../../common";

function ModalWindow({ activeModal, setActiveModal, children }) {
  return (
    <div>
      {activeModal === true ? (
        <ModalStyle onClick={() => setActiveModal(false)}>
          <ModalContent>
            {children}
            <ProgramButtonContainer>
              <ModalButton>OK</ModalButton>
            </ProgramButtonContainer>
          </ModalContent>
        </ModalStyle>
      ) : (
        <ModalIsClosed />
      )}
    </div>
  );
}

export default ModalWindow;
