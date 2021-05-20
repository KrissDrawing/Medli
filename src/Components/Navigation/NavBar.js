import React from "react";
import styled from "styled-components";
import burger from "./burger.svg";
import logo from "assets/img/logo/Logo.svg";

const Wrapper = styled.nav`
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
`;

const BurgerButton = styled.button`
  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    display: none;
  }
`;

const NavBar = () => {
  return (
    <Wrapper>
      <img src={logo} alt="Medli logo" />
      <BurgerButton>
        <img src={burger} alt="toggle navigation" />
      </BurgerButton>
    </Wrapper>
  );
};

export default NavBar;
