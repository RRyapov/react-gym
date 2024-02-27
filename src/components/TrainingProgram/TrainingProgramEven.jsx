import React from "react";
import {
  ProgramBlock,
  ProgramImage,
  ProgramDescription,
  ProgramShortRead,
  ProgramTitle,
  ProgramButton,
} from "../TrainingProgram/TrainingProgramPrevLayout";

function TrainingProgramEven() {
  return (
    <ProgramBlock>
      <ProgramDescription>
        <ProgramTitle>
          <span>Жиросжигание по-королевски</span>
        </ProgramTitle>
        <ProgramShortRead>
          Данная программа представляет собой комплексную процедуру,
          предполагающую особую схему питания и регулярные силовые тренировки.
          Основным ее назначением является уменьшение подкожного слоя жира для
          конечной демонстрации своих результатов в виде наработанной мышечной
          массы.
        </ProgramShortRead>
        <ProgramButton>
          <span>Подробнее</span>
        </ProgramButton>
      </ProgramDescription>
      <ProgramImage>
        <img src="./img/program-2.png" alt="program-2" />
      </ProgramImage>
    </ProgramBlock>
  );
}

export default TrainingProgramEven;
