import CTAButton from "Components/Button/CTAButton";
import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.fontSecondaryDark};
  width: 100%;
  height: 62px;
  border-radius: 8px;
  padding: 15px 16px;
  margin: 16px 0;
  font-size: 20px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.fontSecondaryDark};
  }
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.fontSecondaryDark};
  font-size: 18px;
`;

const Input = ({ label, placeholder, type }) => {
  return (
    <>
      <Label htmlFor="mail">{label}</Label>
      <StyledInput id="mail" type={type} placeholder={placeholder} />
      <CTAButton>Get Started</CTAButton>
    </>
  );
};

export default Input;
