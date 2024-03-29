// @ts-nocheck

import React, { useEffect, useRef } from "react";
import styled from "styled-components";

export const VideoBackground = ({ autoPlay, src }) => {
  const videoRef = useRef();
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, [videoRef]);

  // RENDER
  return (
    <StyledVideoBackground>
      <video ref={videoRef} autoPlay={autoPlay} loop muted>
        <source src={src} type="video/mp4" />
      </video>
    </StyledVideoBackground>
  );
};

const StyledVideoBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  // background: rgba(0, 0, 0, 0.75);
  video {
    width: 100%;
    object-fit: cover;
    z-index: -1;
    @media (max-width: 720px) {
      transform: scale(2.5);
    }
  }
`;
