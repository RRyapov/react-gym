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
  min-height: 680px;
  margin-bottom: 35px;

  ${FlexCenter}
  justify-content: space-around;

  border: 3px solid #2fb3ff;
  border-radius: 35px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ProgramImage = styled.div`
  width: 500px;
  height: 590px;
  overflow: hidden;

  ${FlexCenter}

  border-radius: 50px;
  box-sizing: border-box;

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

export const ProgramShortRead = styled.div`
  ${ArticleFontStyle}
  max-width: 530px;
  font-size: 8mm;
`;

export const ProgramButton = styled.button`
  ${ButtonStyle}
  margin-top: 35px;
  margin-bottom: 35px;
`;
// export const ProgramButtonStyle = styled.button`
//   ${ButtonStyle}
//   margin-top: 35px;
//   margin-bottom: 35px;
// `;

export const ProgramPrevWord = styled.div`
  ${ArticleFontStyle}
  width: auto;
  font-size: 8mm;
  margin-bottom: 55px;
`;

export const ProgramFinalWord = styled.div`
  ${ArticleFontStyle}
  width: auto;
  font-size: 8mm;
  margin-bottom: 2dvb5px;
  display: flex;
  justify-content: end;
`;

export const ProgramButtonContainer = styled.div`
  ${FlexCenter}
`;
