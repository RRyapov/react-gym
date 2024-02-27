import React from "react";
import { ProgramPageBlock } from "../components/TrainingProgram/TrainingProgramPrevLayout";
import TrainingProgramOdd from "../components/TrainingProgram/TrainingProgramOdd";
import TrainingProgramEven from "../components/TrainingProgram/TrainingProgramEven";
import { ProductsTitlesOnMainPage } from "../components/MainPage/MainPageLayout";

import { programStorage } from "../stores/programsStore";
import { observer } from "mobx-react-lite";

function TrainingProgramsPage() {
  const { allPrograms } = programStorage;

  return (
    <ProgramPageBlock>
      <ProductsTitlesOnMainPage>Программы тренировок</ProductsTitlesOnMainPage>
      {allPrograms.map((obj) =>
        obj.id % 2 === 0 ? (
          <TrainingProgramEven key={obj.id} {...obj} />
        ) : (
          <TrainingProgramOdd key={obj.id} {...obj} />
        )
      )}
      {/* {console.log(allPrograms)}
      <TrainingProgramOdd />
      <TrainingProgramEven />  */}
    </ProgramPageBlock>
  );
}

export default observer(TrainingProgramsPage);
