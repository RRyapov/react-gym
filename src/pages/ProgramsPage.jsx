import React from "react";
import { observer } from "mobx-react-lite";

import {
  ProgramPageBlock,
  ProgramPrevWord,
  ProgramFinalWord,
  ProgramButton,
  ProgramButtonContainer,
  ProductsTitlesOnMainPage,
} from "../common";
import {
  trainingProgramPosition,
  Pagination,
  TrainingProgram,
} from "../components";
import { programStorage } from "../stores";

export const ProgramsPage = observer(() => {
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
      {paginatedPrograms.map((program) => {
        const position =
          program.id % 2 === 0
            ? trainingProgramPosition.right
            : trainingProgramPosition.left;
        return (
          <TrainingProgram position={position} key={program.id} {...program} />
        );
      })}
      <Pagination />
    </ProgramPageBlock>
  );
});
