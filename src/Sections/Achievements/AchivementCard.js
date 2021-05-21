import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { H2Light, Paragraph } from "Components/Utility/Utility";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-width: 253px;
  max-width: 359px;
  min-height: 130px;
  max-height: 160px;
  margin-bottom: 108px;
`;

const AchivementCard = ({ heading, children }) => {
  return (
    <Wrapper>
      <H2Light>{heading}</H2Light>
      <Paragraph>{children}</Paragraph>
    </Wrapper>
  );
};

AchivementCard.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AchivementCard;
