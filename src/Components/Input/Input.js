import { StyledButton } from "Components/Utility/Utility";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.form`
  position: relative;
  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    width: 350px;
  }
`;

const StyledInput = styled.input`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.fontSecondaryDark};
  width: 100%;
  height: 62px;
  border-radius: 8px;
  padding: 15px 16px;
  margin: 0 0 16px 0;
  font-size: 20px;
  position: relative;
  color: ${({ theme }) => theme.colors.fontSecondaryLight};
  &::placeholder {
    color: ${({ theme }) => theme.colors.fontSecondaryDark};
  }

  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    height: 50px;
    width: 350px;
    margin: 0;
  }
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.fontSecondaryDark};
  font-size: 18px;
  position: absolute;
  top: -16px;
  transform: translateY(-100%);
`;

const StyledCTAButton = styled(StyledButton)`
  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    position: absolute;
    right: 8px;
    top: 8px;
    width: 113px;
    height: 34px;
    font-size: 18px;
    border-radius: 4px;
  }
`;

const Input = ({ placeholder, type }) => {
  return (
    <Wrapper>
      <StyledInput id="mail" type={type} placeholder={placeholder} required />
      <StyledCTAButton onClick={() => {}}>Get Started</StyledCTAButton>
    </Wrapper>
  );
};

export default Input;
