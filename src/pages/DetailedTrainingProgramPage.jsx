import React from "react";

import { ProductsTitlesOnMainPage } from "../components/MainPageLayout";

import {
  ProgramBlock,
  ProgramImage,
  ProgramDescription,
  ProgramShortRead,
  ProgramTitle,
  ProgramButton,
  ProgramPageBlock,
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

      <ProgramBlock>
        <ProgramImage>
          <img src={imageUrl} alt="program" />
        </ProgramImage>
        <ProgramDescription>
          <ProgramTitle>
            <span>{name}</span>
          </ProgramTitle>
          <ProgramShortRead>{longText}</ProgramShortRead>
          <ProgramButton>
            <span onClick={() => console.log(getProgram())}>Купить</span>
          </ProgramButton>
          {price}
        </ProgramDescription>
      </ProgramBlock>
    </ProgramPageBlock>
  );
}

export default observer(DetailedTrainingProgramPage);
