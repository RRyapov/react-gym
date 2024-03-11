import React from "react";

import { ProgramBlock } from "../../common";
import { Description, Image } from "./Description";

export const trainingProgramPosition = Object.freeze({
  left: "left",
  right: "right",
});

export const TrainingProgram = (props) => {
  return (
    <ProgramBlock>
      {props.position === trainingProgramPosition.right && (
        <>
          <Description {...props} />
          <Image {...props} />
        </>
      )}
      {props.position === trainingProgramPosition.left && (
        <>
          <Image {...props} />
          <Description {...props} />
        </>
      )}
    </ProgramBlock>
  );
};
