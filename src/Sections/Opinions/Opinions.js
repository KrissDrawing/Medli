import { H2, Paragraph } from "Components/Utility/Utility";
import React from "react";
import styled from "styled-components";
import VideoPlayer from "Components/VideoPlayer/VideoPlayer";
import opinionImage from "./opinionImage.png";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 64px;

  &::after {
    content: "";
    width: 100vw;
    height: 497px;
    position: absolute;
    top: -64px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: -1;

    @media (min-width: ${({ theme }) => theme.screenSize.md}) {
      height: 811px;
    }
  }

  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    text-align: center;
    margin-bottom: 151px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 75px;
  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    margin-bottom: 56px;
  }
`;

const Opinions = () => {
  return (
    <Wrapper>
      <H2>
        What our community
        <br /> is saying?
      </H2>
      <StyledParagraph>
        A mission-driven company that invest <br /> in and builds healthier living
      </StyledParagraph>
      <VideoPlayer src={opinionImage} />
    </Wrapper>
  );
};

export default Opinions;
