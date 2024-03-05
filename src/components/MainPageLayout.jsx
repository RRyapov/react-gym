import styled, { css } from "styled-components";
import { FlexCenter, ButtonStyle } from "../common/ui/Container";
import {
  TitlePattern,
  ArticleFontStyle,
  BlackTextShadow,
} from "../common/ui/Title";

export const MainSpace = styled.div`
  height: fit-content;
  max-height: max-content;
`;

export const BoldTitles = css`
  ${FlexCenter}

  width: 100%;
  height: fit-content;
  margin-top: 30px;
  transition: all 1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const GeneralTitle = styled.div`
  ${BoldTitles}
`;

export const ProductsOnMainPage = styled.div`
  height: fit-content;
`;

export const MainTitleStyle = css`
  ${BoldTitles}

  font-family: "Anton", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 14mm;
  height: fit-content;
  color: #1dd6ff;
  text-shadow: 15px 15px 15px #012133;
  text-decoration: underline;
`;

export const ProductsTitlesOnMainPage = styled.div`
  ${MainTitleStyle}
  margin-bottom: 55px;
`;

export const ProductContainer = styled.div`
  ${FlexCenter}
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductCardOnMainPage = styled.div`
  ${FlexCenter}
  flex-direction: column;
`;

export const ProductCardImage = styled.div`
  ${FlexCenter};
  margin-top: 70px;
  margin-bottom: 25px;
  height: 315px;
  transition: all 0.3s ease-in-out;

  &: hover {
    transform: scale(1.1);
  }
`;

export const ProductCardTitle = styled.div`
  ${TitlePattern}
`;

export const ProductCardButton = styled.button`
  ${ButtonStyle}
`;

export const BlueLine = styled.div`
  ${FlexCenter}
  margin-top: 65px;
`;

export const TrainerAdviceContainer = styled.div`
  ${FlexCenter}
  flex-direction: column;
`;

export const TrainerAdviceArticle = styled.section`
  ${ArticleFontStyle}
`;

export const TrainerAvatar = styled.div`
  margin: 45px;
  margin-bottom: 30px;
  box-shadow: 0px 0px 66px 11px rgba(46, 175, 255, 0.9);
  border-radius: 47%;
`;

export const SportArticleTitle = styled.div`
  ${FlexCenter}

  margin-top: 90px;

  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: italic;
  font-size: 13mm;

  color: aliceblue;
  ${BlackTextShadow}
  transition: all 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.975);
    transition: none;
  }
`;

export const ShortReadSportArticle = styled.div`
  ${FlexCenter}
  flex-direction: column;
`;
