import React from "react";
import styled from "styled-components";

const Wrapper = styled.ul`
  list-style-type: none;
  font-size: 24px;
  display: none;

  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    display: flex;
  }
`;

const NavButton = styled.li`
  text-decoration: none;
  margin: 0 18px;
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
