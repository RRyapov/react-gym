import React from "react";
import {
  MainSpace,
  GeneralTitle,
  ProductsOnMainPage,
  ProductsTitlesOnMainPage,
  ProductCardOnMainPage,
  ProductCardImage,
  ProductCardTitle,
  ProductCardButton,
  ProductContainer,
  BlueLine,
  TrainerAdviceContainer,
  TrainerAdviceArticle,
  TrainerAvatar,
  SportArticleTitle,
  ShortReadSportArticle,
} from "../common";

function MainPage() {
  return (
    <MainSpace>
      <GeneralTitle>
        <img src="./img/to-be-strong-title.png" alt="generalTitle" />
      </GeneralTitle>
      <ProductsOnMainPage>
        <ProductsTitlesOnMainPage>
          <span>Товары недели</span>
        </ProductsTitlesOnMainPage>

        <ProductContainer>
          <ProductCardOnMainPage>
            <ProductCardImage>
              <img src="./img/products/product-1.png" alt="protein-1" />
            </ProductCardImage>
            <ProductCardTitle>
              <span>Optimum Nutrition protein</span>
            </ProductCardTitle>
            <ProductCardButton>
              <span>Подробнее</span>
            </ProductCardButton>
          </ProductCardOnMainPage>

          <ProductCardOnMainPage>
            <ProductCardImage>
              <img src="./img/bcaa-1.png" alt="bcaa-1" />
            </ProductCardImage>
            <ProductCardTitle>
              <span>Mutant bcaa</span>
            </ProductCardTitle>
            <ProductCardButton>
              <span>Подробнее</span>
            </ProductCardButton>
          </ProductCardOnMainPage>

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
        </ProductContainer>
      </ProductsOnMainPage>
      <BlueLine>
        <img src="./img/blue-line.png" alt="blue-line-division" />
      </BlueLine>
      <TrainerAdviceContainer>
        <ProductsTitlesOnMainPage>
          <span>Совет тренера</span>
        </ProductsTitlesOnMainPage>
        <TrainerAdviceArticle>
          Люди думают, что знаменитости проводят в спортзале по полдня, поэтому
          так хорошо и выглядят. Но это не так: у большинства селебрити есть
          максимум час на тренировку. Дело не в том, как долго вы работаете, а в
          том, насколько усердно. Своим подопечным я рекомендую интервальные
          тренировки, например, по такой схеме: 15 секунд отжиманий, 10 секунд
          отдыха, 15 секунд выпадов, 10 секунд отдыха, 15 секунд бега с высоким
          подъемом коленей, 10 секунд отдыха, 15 секунд прыжков из стороны в
          стороны, 10 секунд отдыха». Если выполнить несколько таких «кругов»
          подряд, то даже получасовая тренировка будет весьма эффективной
        </TrainerAdviceArticle>
        <TrainerAvatar>
          <img src="./img/trainer-1.png" alt="trainer-1" />
        </TrainerAvatar>
        <ProductCardTitle>
          <span style={{ "font-size": "9mm" }}>Алексей</span>
        </ProductCardTitle>

        <ProductCardButton>
          <span>Подробнее</span>
        </ProductCardButton>
      </TrainerAdviceContainer>
      <BlueLine>
        <img src="./img/blue-line.png" alt="blue-line-division" />
      </BlueLine>
      <ShortReadSportArticle>
        <ProductsTitlesOnMainPage>
          <span>Узнай больше</span>
        </ProductsTitlesOnMainPage>
        <SportArticleTitle>
          <span>Как тренироваться на развитие максимальной силы?</span>
        </SportArticleTitle>
        <SportArticleTitle>
          <span>Асимметрия мышц - что это и как с этим бороться?</span>
        </SportArticleTitle>
        <SportArticleTitle>
          <span>Первая помощь при растяжениях мышц и связок</span>
        </SportArticleTitle>
        <ProductCardButton style={{ "margin-top": "90px" }}>
          <span>Подробнее</span>
        </ProductCardButton>
      </ShortReadSportArticle>
    </MainSpace>
  );
}

export default MainPage;
