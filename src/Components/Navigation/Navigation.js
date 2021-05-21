import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PrimaryButton } from "Components/Utility/Utility";

const Wrapper = styled.ul`
  list-style-type: none;
  font-size: 24px;
  display: none;

  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    display: flex;
    align-content: center;
  }
`;

const NavButton = styled.li`
  text-decoration: none;
  margin: 0 18px;
  align-self: center;
  &:last-of-type {
    padding: 7px 31px;
    ${PrimaryButton}
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.fontPrimaryDark};
  position: relative;
  &.active {
    &::after {
      content: "";
      border-radius: 50%;
      width: 8px;
      height: 8px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 100%);
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Navigation = () => {
  return (
    <Wrapper>
      <NavButton>
        <StyledLink to="/">Home</StyledLink>
      </NavButton>
      <NavButton>
        <StyledLink to="/about">About</StyledLink>
      </NavButton>
      <NavButton>
        <StyledLink to="/courses">Courses</StyledLink>
      </NavButton>
      <NavButton>
        <StyledLink to="/news">News</StyledLink>
      </NavButton>
      <NavButton>
        <StyledLink to="/contact">Contact</StyledLink>
      </NavButton>
      <NavButton>
        <StyledLink to="/login">Log in</StyledLink>
      </NavButton>
    </Wrapper>
  );
};

export default Navigation;
