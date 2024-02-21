import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1336px;
  margin: 0px auto;
  padding: 0px 10px;
`;

export const MainBackground = styled.div`
  min-height: 100vw;
  width: 100%;

  background-image: url("./img/background-blur.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100vw auto;

  display: flex;
  justify-content: center;
`;

export const Background = styled.div`
  min-height: 100%;
  width: 1440px;

  background-image: url("./img/background.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-attachment: fixed;

  display: flex;
  justify-content: center;
`;

export const Footer = styled.div`
  background-color: transparent;
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
