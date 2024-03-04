import React from "react";
import {
  ProgramBlock,
  ProgramImage,
  ProgramDescription,
  ProgramShortRead,
  ProgramTitle,
  ProgramButton,
} from "../TrainingProgram/TrainingProgramPrevLayout";
import { programStorage } from "../../stores/programsStore";

function TrainingProgramOdd({ id, imageUrl, name, shortText, longText }) {
  return (
    <ProgramBlock>
      <ProgramImage>
        <img src={imageUrl} alt={`program-${id}`} />
      </ProgramImage>
      <ProgramDescription>
        <ProgramTitle>
          <span>{name}</span>
        </ProgramTitle>
        <ProgramShortRead>{shortText}</ProgramShortRead>
        <ProgramButton>
          <span onClick={() => console.log(name)}>Подробнее</span>
        </ProgramButton>
      </ProgramDescription>
    </ProgramBlock>
  );
}

export default TrainingProgramOdd;
