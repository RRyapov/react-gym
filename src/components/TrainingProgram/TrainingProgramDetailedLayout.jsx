import styled from "styled-components";
import {
  FlexCenter,
  ArticleFontStyle,
  BlueBlink,
  ButtonStyle,
} from "../../common/Container";
import { MainTitleStyle } from "../MainPage/MainPageLayout";

export const ProgramPageBlock = styled.div`
  width: 100%;
  height: fit-content;
`;

export const ProgramBlock = styled.div`
  width: 100%;
  height: fit-content;

  /* margin-top: 65px; */

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ProgramImage = styled.div`
  width: 500px;
  height: 590px;
  overflow: hidden;

  ${FlexCenter}

  border-radius: 50px;

  transition: all 0.1s ease-in-out;

  &:hover {
    ${BlueBlink}
  }
`;

export const ProgramDescription = styled.section`
  max-width: 540px;
  ${FlexCenter}
  flex-direction: column;
  justify-content: space-around;
`;

export const ProgramTitle = styled.div`
  ${MainTitleStyle}
  text-align: center;
  text-decoration: none;
`;

export const ProgramPrevWord = styled.div`
  ${ArticleFontStyle}
  width: auto;
  font-size: 8mm;
`;

export const ProgramButton = styled.button`
  ${ButtonStyle}
  margin-top: 35px;
  margin-bottom: 35px;
`;
