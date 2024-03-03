import React from "react";
import { ProgramPageBlock } from "../components/TrainingProgram/TrainingProgramPrevLayout";
import TrainingProgramOdd from "../components/TrainingProgram/TrainingProgramOdd";
import TrainingProgramEven from "../components/TrainingProgram/TrainingProgramEven";
import { ProductsTitlesOnMainPage } from "../components/MainPage/MainPageLayout";
import Pagination from "../components/Pagination/Pagination";

import { programStorage } from "../stores/programsStore";
import { observer } from "mobx-react-lite";

function DetailedTrainingProgramPage() {
  return <h1>DetailedTrainingProgramPage</h1>;
}

export default observer(DetailedTrainingProgramPage);
