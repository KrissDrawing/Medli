import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import playButton from "./Play.svg";

const Wrapper = styled.section`
  width: 100%;
  height: 160px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  align-self: center;

  @media (min-width: 425px) {
    height: auto;
    max-height: 603px;
  }

  @media (min-width: ${({ theme }) => theme.screenSize.md}) {
    height: 603px;
    width: 1240px;
  }
`;

const StyledButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & > img {
    @media (min-width: ${({ theme }) => theme.screenSize.md}) {
      width: 130px;
      height: 130px;
    }
  }
`;

const VideoImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const VideoPlayer = ({ src }) => {
  return (
    <Wrapper>
      <VideoImg src={src} />
      <StyledButton>
        <img src={playButton} />
      </StyledButton>
    </Wrapper>
  );
};

VideoPlayer.propTypes = {
  src: PropTypes.node.isRequired,
};

export default VideoPlayer;
