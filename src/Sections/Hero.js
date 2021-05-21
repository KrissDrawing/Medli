import React from "react";
import styled from "styled-components";
import { H2, Paragraph } from "Components/Utility/Utility";
import CTAButton from "Components/Button/CTAButton";
import heroImg from "./heroImg.svg";
import logotype from "assets/img/logo/logotype.svg";

const Wrapper = styled.section`
  height: 531px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 64px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Img = styled.img`
  width: 308px;
  height: 175px;
  margin-bottom: 42px;
`;
const StyledParagraph = styled(Paragraph)`
  margin: 16px 0 30px 0;
`;

const Hero = () => {
  return (
    <Wrapper>
      <Img src={heroImg} />
      <InfoWrapper>
        <H2>
          Check y
          <img src={logotype} />
          ur well-being
        </H2>
        <StyledParagraph>
          We’re sure that deciding to check on your health is a big step, even if it doesn’t bother
          in any way.
        </StyledParagraph>
        <CTAButton>Get Started</CTAButton>
      </InfoWrapper>
    </Wrapper>
  );
};

export default Hero;
