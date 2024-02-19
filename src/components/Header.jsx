import React from "react";
import styled from "styled-components";

const HeaderBackground = styled.div`
  min-height: 274px;
  width: 1336px;

  background-repeat: no-repeat;
  background-image: url("./img/header-background.png");
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeaderGraffity = styled.div`
  position: absolute;
  top: -60px;
  left: -25px;
`;

const CartArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 0px;
  width: fit-content;
  margin-left: auto;
`;

const CartCountPlace = styled.div`
  background: rgb(30, 134, 166);
  background: linear-gradient(
    90deg,
    rgba(30, 134, 166, 1) 2%,
    rgba(4, 177, 232, 1) 54%,
    rgba(30, 134, 166, 1) 100%
  );

  margin-top: 15px;
  margin-right: 12px;
  padding-left: 8px;
  padding-right: 8px;
  width: fit-content;
  height: fit-content;
  margin-bottom: 8px;

  border-radius: 8px;

  font-family: "Micro 5", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: xx-large;
  color: white;
`;

const CartImage = styled.div`
  margin-right: 16px;
  margin-bottom: 2px;
  cursor: pointer;
`;

const Navigation = styled.nav`
  max-height: inherit;
  color: aliceblue;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NavigationUL = styled.ul`
  list-style-type: none;
  width: 100%;

  font-family: "Anta", sans-serif;
  font-weight: 800;
  font-style: normal;
  text-shadow: 2px 2px 2px #000;

  display: flex;
  justify-content: space-around;
`;

const NavigationLi = styled.li`
  transition: all 1s ease;
  border-radius: 0px;
  cursor: pointer;
  background: transparent;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  /* border-right: 1px #000 solid; */

  &:hover {
    margin-top: -8px;
    background-color: #20a0db;
    border: 1px #000 solid;
    border-radius: 8px;

    color: #000000;
    text-shadow: none;
  }
`;

function Header() {
  return (
    <HeaderBackground>
      <HeaderGraffity>
        <img src="./img/name-picture.png" alt="header-graffity" />
      </HeaderGraffity>
      <CartArea>
        <CartCountPlace>
          <span>1</span>
        </CartCountPlace>
        <CartImage>
          <img src="./img/cart-minipicture.png" alt="small cart icon" />
        </CartImage>
        <CartCountPlace style={{ "margin-top": "0px" }}>
          <span>1800 ₽</span>
        </CartCountPlace>
      </CartArea>
      <Navigation>
        <NavigationUL>
          <NavigationLi>Программы тренировок</NavigationLi>
          <NavigationLi>Услуги</NavigationLi>
          <NavigationLi>СпортЛикбез</NavigationLi>
          <NavigationLi>Бронирование тренажеров</NavigationLi>
          <NavigationLi>О нас</NavigationLi>
        </NavigationUL>
      </Navigation>
    </HeaderBackground>
  );
}

export default Header;
