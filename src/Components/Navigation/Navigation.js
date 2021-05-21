import { PrimaryButton } from "Components/Utility/Utility";
import React from "react";
import styled from "styled-components";

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

const Navigation = () => {
  return (
    <Wrapper>
      <NavButton>Home</NavButton>
      <NavButton>About</NavButton>
      <NavButton>Courses</NavButton>
      <NavButton>News</NavButton>
      <NavButton>Contact</NavButton>
      <NavButton>Log in</NavButton>
    </Wrapper>
  );
};

export default Navigation;
