import { H2, Paragraph } from "Components/Utility/Utility";
import React from "react";
import styled from "styled-components";
import VideoPlayer from "Components/VideoPlayer/VideoPlayer";
import communityImage from "./communityImage.png";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;

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
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 75px;
  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    margin-bottom: 56px;
  }
`;

const CommunitySection = () => {
  return (
    <Wrapper>
      <H2>
        What our community
        <br /> is saying?
      </H2>
      <StyledParagraph>
        A mission-driven company that invest <br /> in and builds healthier living
      </StyledParagraph>
      <VideoPlayer src={communityImage} />
    </Wrapper>
  );
};

export default CommunitySection;
