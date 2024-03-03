import React, { useEffect } from "react";
import {
  ProgramPageBlock,
  ProgramPrevWord,
  ProgramFinalWord,
  ProgramButton,
  ProgramButtonContainer,
} from "../components/TrainingProgram/TrainingProgramPrevLayout";
import TrainingProgramOdd from "../components/TrainingProgram/TrainingProgramOdd";
import TrainingProgramEven from "../components/TrainingProgram/TrainingProgramEven";
import { ProductsTitlesOnMainPage } from "../components/MainPage/MainPageLayout";
import Pagination from "../components/Pagination/Pagination";

import { programStorage } from "../stores/programsStore";
import { observer } from "mobx-react-lite";

function TrainingProgramsPage() {
  const { paginatedPrograms } = programStorage;

  return (
    <ProgramPageBlock>
      <ProductsTitlesOnMainPage>Программы тренировок</ProductsTitlesOnMainPage>
      <ProgramPrevWord>
        Составление тренировок представляет собой сложный процесс, требующий
        большого опыта и специальных знаний. К счастью, Вам не придется тратить
        свое время на это - просто доверьтесь профессионалам. Наши тренеры
        составили программы тренировок, среди которых Вы можете выбрать или
        подобрать под себя именно то, что подходит именно Вам, воспользовавшись
        нашим сервисом подбора программы тренировок. Желаем удачи на тропе
        спорта!
      </ProgramPrevWord>
      <ProgramFinalWord>С уважением, команда React Gym</ProgramFinalWord>
      <ProgramButtonContainer>
        <ProgramButton>Подобрать программу тренировок</ProgramButton>
      </ProgramButtonContainer>
      {paginatedPrograms.map((obj) =>
        obj.id % 2 === 0 ? (
          <TrainingProgramEven key={obj.id} {...obj} />
        ) : (
          <TrainingProgramOdd key={obj.id} {...obj} />
        )
      )}
      <Pagination />
    </ProgramPageBlock>
  );
}

export default observer(TrainingProgramsPage);
