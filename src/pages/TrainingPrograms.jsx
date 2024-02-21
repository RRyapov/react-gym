import React from "react";
import {
  ProductCardOnMainPage,
  ProductCardImage,
  ProductCardTitle,
  ProductCardButton,
} from "../components/MainPage/MainPageLayout";

function TrainingPrograms() {
  return (
    <ProductCardOnMainPage>
      <ProductCardImage>
        <img src="./img/creatine-1.png" alt="creatine-1" />
      </ProductCardImage>
      <ProductCardTitle>
        <span>Optimum Nutrition creatine</span>
      </ProductCardTitle>
      <ProductCardButton>
        <span>Подробнее</span>
      </ProductCardButton>
    </ProductCardOnMainPage>
  );
}

export default TrainingPrograms;
