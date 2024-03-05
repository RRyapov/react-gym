import React from "react";

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
} from "../common";
import { programStorage } from "../stores/programsStore";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

function DetailedTrainingProgramPage() {
  const { getProgram } = programStorage;
  const { id } = useParams();
  const { imageUrl, name, longText, price } = getProgram(id) ?? {};
  return (
    <ProgramPageBlock>
      <ProductsTitlesOnMainPage>Программы тренировок</ProductsTitlesOnMainPage>
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
            <span onClick={() => console.log(getProgram())}>Купить</span>
          </ProgramButton>
        </ProgramDescription>
        <ProgramImage>
          <img src={imageUrl} alt="program" />
        </ProgramImage>
      </ProgramBlock>
    </ProgramPageBlock>
  );
}

export default observer(DetailedTrainingProgramPage);
