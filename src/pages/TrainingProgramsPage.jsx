import React from "react";
import {
  ProgramPageBlock,
  ProgramBlock,
  ProgramImage,
  ProgramDescription,
  ProgramShortRead,
  ProgramTitle,
  ProgramButton,
} from "../components/TrainingProgram/TrainingProgramPrevLayout";
import {
  ProductsTitlesOnMainPage,
  ProductCardButton,
} from "../components/MainPage/MainPageLayout";

function TrainingPrograms() {
  return (
    <ProgramPageBlock>
      <ProductsTitlesOnMainPage>Программы тренировок</ProductsTitlesOnMainPage>
      <ProgramBlock>
        <ProgramImage>
          <img src="./img/program-1-picture.png" alt="program-1" />
        </ProgramImage>
        <ProgramDescription>
          <ProgramTitle>
            <span>ВЗРЫВной рост мышц</span>
          </ProgramTitle>
          <ProgramShortRead>
            Избавьтесь от тренировочной рутины и приготовьтесь к взрывному росту
            массы и силовых показателей, используя уникальную комбинацию
            различных подходов и упражнений, разработанными нашими тренерами.
          </ProgramShortRead>
          <ProgramButton>
            <span>Подробнее</span>
          </ProgramButton>
        </ProgramDescription>
      </ProgramBlock>
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
