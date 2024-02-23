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
  border: 2px solid;
  border-color: aliceblue;
  /* margin-top: 65px; */

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ProgramImage = styled.div`
  max-width: 500px;
  max-height: 590px;

  ${FlexCenter}

  border-radius: 100px;

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
