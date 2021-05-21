import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "Components/Utility/Utility";

const StyledButton = styled.button`
  ${PrimaryButton};
  font-size: ${({ size }) => (size === "small" ? "20x" : "25px")};
  border-radius: ${({ size }) => (size === "small" ? "4px" : "8px")};
  background-color: ${({ theme }) => theme.colors.primary};
  height: 62px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    width: ${({ size }) => (size === "small" ? "113px" : "255px")};
    height: ${({ size }) => (size === "small" ? "34px" : "70px")};
  }
`;

const CTAButton = ({ children, size }) => {
  return (
    <StyledButton size={size} onClick={() => {}}>
      {children}
    </StyledButton>
  );
};

export default CTAButton;
