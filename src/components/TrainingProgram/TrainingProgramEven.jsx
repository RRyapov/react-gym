import React from "react";
import {
  ProgramBlock,
  ProgramImage,
  ProgramDescription,
  ProgramShortRead,
  ProgramTitle,
  ProgramButton,
} from "../TrainingProgram/TrainingProgramPrevLayout";

function TrainingProgramEven({ id, imageUrl, name, shortText, longText }) {
  return (
    <ProgramBlock>
      <ProgramDescription>
        <ProgramTitle>
          <span>{name}</span>
        </ProgramTitle>
        <ProgramShortRead>{shortText}</ProgramShortRead>
        <ProgramButton>
          <span>Подробнее</span>
        </ProgramButton>
      </ProgramDescription>
      <ProgramImage>
        <img src={imageUrl} alt={`program-${id}`} />
      </ProgramImage>
    </ProgramBlock>
  );
}

export default TrainingProgramEven;
