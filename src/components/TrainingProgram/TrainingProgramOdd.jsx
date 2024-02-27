import React from "react";
import {
  ProgramBlock,
  ProgramImage,
  ProgramDescription,
  ProgramShortRead,
  ProgramTitle,
  ProgramButton,
} from "../TrainingProgram/TrainingProgramPrevLayout";

function TrainingProgramOdd() {
  return (
    <ProgramBlock>
      <ProgramImage>
        <img src="./img/program-1.png" alt="program-1" />
      </ProgramImage>
      <ProgramDescription>
        <ProgramTitle>
          <span>ВЗРЫВной рост мышц</span>
        </ProgramTitle>
        <ProgramShortRead>
          Избавьтесь от тренировочной рутины и приготовьтесь к взрывному росту
          массы и силовых показателей, используя уникальную комбинацию различных
          подходов и упражнений, разработанными нашими тренерами.
        </ProgramShortRead>
        <ProgramButton>
          <span>Подробнее</span>
        </ProgramButton>
      </ProgramDescription>
    </ProgramBlock>
  );
}

export default TrainingProgramOdd;
