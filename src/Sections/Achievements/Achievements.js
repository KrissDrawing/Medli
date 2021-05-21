import React from "react";
import styled from "styled-components";
import AchivementCard from "./AchivementCard";

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const Achievements = () => {
  return (
    <Wrapper>
      <AchivementCard heading="230+">
        Scientifically <br />
        based tests
      </AchivementCard>
      <AchivementCard heading="10,000+">Medical recommendations</AchivementCard>
      <AchivementCard heading="25M+">Students learning</AchivementCard>
    </Wrapper>
  );
};

export default Achievements;
