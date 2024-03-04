import { css } from "styled-components";
import { FlexCenter } from "./Container";

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
