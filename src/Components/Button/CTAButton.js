import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { PrimaryButton } from "Components/Utility/Utility";

const StyledButton = styled.button`
  ${PrimaryButton};
  height: 62px;
  width: 100%;
  font-size: ${({ size }) => (size === "small" ? "20x" : "25px")};
  border-radius: ${({ size }) => (size === "small" ? "4px" : "8px")};
  background-color: ${({ theme }) => theme.colors.primary};

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

CTAButton.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
};

export default CTAButton;
