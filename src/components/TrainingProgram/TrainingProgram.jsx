import React from "react";
import { observer } from "mobx-react-lite";

import { ProgramBlock } from "../../common";
import { Description, Image } from "./Description";

export const trainingProgramPosition = Object.freeze({
  left: "left",
  right: "right",
});

function TrainingProgram(props) {
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
}

export default observer(TrainingProgram);
