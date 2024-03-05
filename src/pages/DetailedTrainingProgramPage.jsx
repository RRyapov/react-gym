import React, { Children, useState } from "react";

import { ProductsTitlesOnMainPage } from "../common/ui/MainPage";
import { SportArticleTitle } from "../common/ui/MainPage";
import {
  ProgramBlock,
  ProgramImage,
  ProgramDescription,
  ProgramTitleBlock,
  ProgramTitle,
  ProgramButton,
  ProgramPageBlock,
  ProgramLongRead,
  GeneralProgramPageBlock,
  ProgramShortRead,
} from "../common";
import { programStorage } from "../stores/programsStore";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import ModalWindow from "../components/ModalWindow/ModalWindow";
import { ModalTitle } from "../components/ModalWindow/style";

function DetailedTrainingProgramPage() {
  const { getProgram } = programStorage;
  const { id } = useParams();
  const { imageUrl, name, longText, price } = getProgram(id) ?? {};

  const [activeModal, setActiveModal] = useState(false);
  console.log(activeModal);
  return (
    <GeneralProgramPageBlock>
      <ProgramPageBlock>
        <ProductsTitlesOnMainPage>
          Программы тренировок
        </ProductsTitlesOnMainPage>
        <ProgramTitleBlock>
          <ProgramTitle>
            <span>{name}</span>
          </ProgramTitle>
        </ProgramTitleBlock>
        <ProgramBlock>
          <ProgramDescription>
            <ProgramLongRead>{longText}</ProgramLongRead>
            <SportArticleTitle>{price} руб.</SportArticleTitle>
            <ProgramButton>
              <span onClick={() => setActiveModal(true)}>Купить</span>
            </ProgramButton>
          </ProgramDescription>
          <ProgramImage>
            <img src={imageUrl} alt="program" />
          </ProgramImage>
        </ProgramBlock>
      </ProgramPageBlock>
      <ModalWindow activeModal={activeModal} setActiveModal={setActiveModal}>
        <ModalTitle>
          Программа тренировок "{name}" добавлена в корзину.
        </ModalTitle>
      </ModalWindow>
    </GeneralProgramPageBlock>
  );
}

export default observer(DetailedTrainingProgramPage);
