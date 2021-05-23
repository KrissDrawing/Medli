import React from "react";
import styled from "styled-components";
import { H2, Paragraph, NoWrap } from "Components/Utility/Utility";
import CTAButton from "Components/Button/CTAButton";
import heroImg from "./heroImg.svg";
import logotype from "assets/img/logo/logotype.svg";

const Wrapper = styled.section`
  height: 531px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 64px;

  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    flex-direction: row-reverse;
    height: 434px;
    margin-bottom: 222px;
  }
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

  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    width: 677px;
    height: 385px;
    margin: 49px 0 0;
  }
`;

const Logotype = styled.img`
  width: 27px;
  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    width: 43px;
  }
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
          Check{" "}
          <NoWrap>
            y
            <Logotype src={logotype} />
            ur
          </NoWrap>{" "}
          <wbr />
          <NoWrap>well-being</NoWrap>
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
