import React, { useEffect } from "react";
import { ProgramPageBlock } from "../components/TrainingProgram/TrainingProgramPrevLayout";
import TrainingProgramOdd from "../components/TrainingProgram/TrainingProgramOdd";
import TrainingProgramEven from "../components/TrainingProgram/TrainingProgramEven";
import { ProductsTitlesOnMainPage } from "../components/MainPage/MainPageLayout";
import Pagination from "../components/Pagination/Pagination";

import { programStorage } from "../stores/programsStore";
import { observer } from "mobx-react-lite";

function TrainingProgramsPage() {
  const { allPrograms, getAllPrograms } = programStorage;

  useEffect(() => {
    getAllPrograms();
  }, []);

  return (
    <ProgramPageBlock>
      <ProductsTitlesOnMainPage>Программы тренировок</ProductsTitlesOnMainPage>
      {allPrograms
        // .filter((obj) => obj.id <= 3)
        .map((obj) =>
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
