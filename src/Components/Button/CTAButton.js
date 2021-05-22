import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "Components/Utility/Utility";

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
