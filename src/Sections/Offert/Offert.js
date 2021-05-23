import React from "react";
import styled from "styled-components";
import Card from "Components/Card/Card";
import FreeChatImg from "./Img/FreeChat.svg";
import PersonalCoachImg from "./Img/PersonalCoach.svg";
import TextChatImg from "./Img/TextChat.svg";
import { H2, Paragraph } from "Components/Utility/Utility";

const Wrapper = styled.div`
  margin-bottom: 64px;
`;

const CardWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledParagraph = styled(Paragraph)`
  display: block;
  max-width: 596px;
  margin-bottom: calc(36px - 15px);

  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    margin-bottom: calc(72px - 15px);
  }
`;

const Offert = () => {
  return (
    <Wrapper>
      <H2>What you’re getting?</H2>
      <StyledParagraph>
        We bring you personalized development programs that are backed by research and crafted from
        the years of experience
      </StyledParagraph>
      <CardWrapper>
        <Card src={FreeChatImg} heading="1 FREE chat session">
          Start with a free text <br />
          based chat session online
        </Card>
        <Card src={PersonalCoachImg} heading="Personal Coach">
          A dedicated coach to help <br /> you through your journey
        </Card>
        <Card src={TextChatImg} heading="Text chat session">
          An excellent way of preaparing <br /> a projects wireframe
        </Card>
      </CardWrapper>
    </Wrapper>
  );
};

export default Offert;
