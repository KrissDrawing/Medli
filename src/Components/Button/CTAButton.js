import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "Components/Utility/Utility";

const CTAButton = ({ children }) => {
  return <StyledButton onClick={() => {}}>{children}</StyledButton>;
};

CTAButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CTAButton;
