import React from "react";
import { ProgramPageBlock } from "../components/TrainingProgram/TrainingProgramPrevLayout";
import TrainingProgramOdd from "../components/TrainingProgram/TrainingProgramOdd";
import TrainingProgramEven from "../components/TrainingProgram/TrainingProgramEven";
import { ProductsTitlesOnMainPage } from "../components/MainPage/MainPageLayout";

function TrainingPrograms() {
  return (
    <ProgramPageBlock>
      <ProductsTitlesOnMainPage>Программы тренировок</ProductsTitlesOnMainPage>
      <TrainingProgramOdd />
      <TrainingProgramEven />
    </ProgramPageBlock>
  );
  //   <ProductCardOnMainPage>
  //     <ProductCardImage>
  //       <img src="./img/creatine-1.png" alt="creatine-1" />
  //     </ProductCardImage>
  //     <ProductCardTitle>
  //       <span>Optimum Nutrition creatine</span>
  //     </ProductCardTitle>
  //     <ProductCardButton>
  //       <span>Подробнее</span>
  //     </ProductCardButton>
  //   </ProductCardOnMainPage>
  // );
}

export default TrainingPrograms;
