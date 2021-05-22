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
  margin: 16px 0;
  font-size: 20px;
  position: relative;
  &::placeholder {
    color: ${({ theme }) => theme.colors.fontSecondaryDark};
  }

  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    height: 50px;
    width: 350px;
  }
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.fontSecondaryDark};
  font-size: 18px;
  position: absolute;
  top: -16px;
`;

const StyledCTAButton = styled(StyledButton)`
  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    position: absolute;
    right: 8px;
    bottom: 50%;
    transform: translateY(50%);
    width: 113px;
    height: 34px;
    font-size: 18px;
    border-radius: 4px;
  }
`;

const Input = ({ label, placeholder, type }) => {
  return (
    <Wrapper>
      <Label htmlFor="mail">{label}</Label>
      <StyledInput id="mail" type={type} placeholder={placeholder} />
      <StyledCTAButton onClick={() => {}}>Get Started</StyledCTAButton>
    </Wrapper>
  );
};

export default Input;
