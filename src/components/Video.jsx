import styled from "styled-components";

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  video {
    width: 100%;
    border-bottom-width: 1px;
    border-color: rgba(241, 241, 241, 0.377);
    border-left-width: 1px;
    border-right-width: 1px;
    border-style: solid;
    border-top-width: 1px;
    border-radius: 23px;
    padding: 10px;
  }
`;

const Video = ({ src }) => {
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

  return (
    <VideoContainer>
      <video onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <source src={src} type="video/mp4" />
      </video>
    </VideoContainer>
  );
};

export default Video;
