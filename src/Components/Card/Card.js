import React from "react";
import PropTypes from "prop-types";
import { H4, Paragraph } from "Components/Utility/Utility";
import styled from "styled-components";

const Wrapper = styled.div`
  min-width: 327px;
  max-width: 350px;
  height: 439px;
  border-radius: ${({ theme }) => theme.bdRadius.regular}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 42px 0 45px 0;
  margin: 20px 15px;
  text-align: center;
`;
const Img = styled.img`
  /* margin-bottom: 81px; */
`;

const StyledParagraph = styled(Paragraph)`
  margin-top: 16px;
  font-size: 18px !important;
  line-height: 27px !important;
`;

const Card = ({ src, heading, children }) => {
  return (
    <Wrapper>
      <Img src={src} />
      <div>
        <H4>{heading}</H4>
        <StyledParagraph>{children}</StyledParagraph>
      </div>
    </Wrapper>
  );
};
Card.propTypes = {
  src: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
