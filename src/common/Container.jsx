import styled, { css } from "styled-components";

export const Container = styled.div`
  min-height: 100%;
  width: 1336px;
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
