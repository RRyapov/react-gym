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

function TrainingProgramEven({ id, imageUrl, name, shortText, longText }) {
  const { getNextIdProgram } = programStorage;
  return (
    <ProgramBlock>
      <ProgramDescription>
        <ProgramTitle>
          <span>{name}</span>
        </ProgramTitle>
        <ProgramShortRead>{shortText}</ProgramShortRead>
        <ProgramButton>
          <span
            onClick={() => {
              console.log("aaa", getNextIdProgram(id));
            }}
          >
            Подробнее
          </span>
        </ProgramButton>
      </ProgramDescription>
      <ProgramImage>
        <img src={imageUrl} alt={`program-${id}`} />
      </ProgramImage>
    </ProgramBlock>
  );
}

export default TrainingProgramEven;
