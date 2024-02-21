import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 1336px;
  margin: 0px auto;
  padding: 0px 10px;
  height: fit-content;
  background-size: cover;
  /* position: relative; */
`;

export const MainBackground = styled.div`
  background-image: url("./img/background-blur.png");

  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Background = styled.div`
  height: auto;
  min-height: calc(100vh - 30px);
  width: 1440px;
  margin: 0 auto;

  background-image: url("./img/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  /* position: fixed; */

  display: flex;
  justify-content: center;
`;

export const Footer = styled.div`
  /* position: fixed; */
  margin-bottom: auto;

  z-index: 10;
  width: 100%;
  height: 30px;

  background: #000;
`;

export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BlackTextShadow = css`
  text-shadow: -0 -2px 2px #000000, 0 -2px 2px #000000, -0 2px 2px #000000,
    0 2px 2px #000000, -2px -0 2px #000000, 2px -0 2px #000000,
    -2px 0 2px #000000, 2px 0 2px #000000, -1px -2px 2px #000000,
    1px -2px 2px #000000, -1px 2px 2px #000000, 1px 2px 2px #000000,
    -2px -1px 2px #000000, 2px -1px 2px #000000, -2px 1px 2px #000000,
    2px 1px 2px #000000, -2px -2px 2px #000000, 2px -2px 2px #000000,
    -2px 2px 2px #000000, 2px 2px 2px #000000, -2px -2px 2px #000000,
    2px -2px 2px #000000, -2px 2px 2px #000000, 2px 2px 2px #000000;
`;

export const TitlePattern = css`
  ${FlexCenter}
  font-family: "Arial", cursive;
  font-weight: 400;
  font-size: 11mm;
  font-style: italic;

  color: #37dbff;
  ${BlackTextShadow}

  margin-bottom: 25px;
`;

export const BlueBlink = css`
  background: rgb(30, 134, 166);
  background: linear-gradient(
    90deg,
    rgba(30, 134, 166, 1) 2%,
    rgba(4, 177, 232, 1) 54%,
    rgba(30, 134, 166, 1) 100%
  );

  box-shadow: 0px 0px 66px 11px rgba(46, 175, 255, 0.9);
`;
