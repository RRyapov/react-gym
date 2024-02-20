import React from "react";
import {
  HeaderBackground,
  HeaderGraffity,
  CartArea,
  CartCountPlace,
  CartImage,
  Navigation,
  NavigationUL,
  NavigationLi,
  HeaderStrongMan,
  CartContainer,
} from "./HeaderLayout";

function Header() {
  return (
    <HeaderBackground>
      <HeaderGraffity>
        <img src="./img/name-picture.png" alt="header-graffity" />
      </HeaderGraffity>

      <HeaderStrongMan src="./img/yellow-strong-man.png" alt="strong-man" />

      <CartArea>
        <CartContainer>
          <CartCountPlace>
            <span>1</span>
          </CartCountPlace>
          <CartImage>
            <img src="./img/cart-minipicture.png" alt="small cart icon" />
          </CartImage>
          <CartCountPlace style={{ "margin-top": "0px" }}>
            <span>1800 ₽</span>
          </CartCountPlace>
        </CartContainer>
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
