import { useRef, useEffect } from "react";
import styled from "styled-components";

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  video {
    width: 640px;
    height: 370px;
    border-bottom-width: 1px;
    border-color: rgba(241, 241, 241, 0.377);
    border-left-width: 1px;
    border-right-width: 1px;
    border-style: solid;
    border-top-width: 1px;
    border-radius: 23px;
    padding: 17px;
  }
`;

const Video = ({ src, poster }) => {
  // manejo de apoyar el mouse
  const handleMouseEnter = (e) => {
    const vid = e.target;
    vid.muted = true;
    vid.play();
  };
  // manejo de sacar el mouse
  const handleMouseLeave = (e) => {
    const vid = e.target;
    vid.muted = false;
    vid.currentTime = 0;
    vid.pause();
  };

  const videoRef = useRef(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; // Ajusta la velocidad a 1.5x
    }
  }, []);

  return (
    <VideoContainer>
      <video
        loop
        ref={videoRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
    </VideoContainer>
  );
};

export default Video;
