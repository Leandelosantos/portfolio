import React from "react";
import styled from "styled-components";

const WrapperRounded = styled.section`
  background-color: transparent;
  margin: 0;
  width: 100%;
  padding: 15% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px; /* Para crear un efecto 3D */
  flex-flow: column nowrap;

  .techsContainer {
    display: flex;
    position: relative;
    transform-style: preserve-3d; /* Mantiene el efecto 3D de los hijos */
    width: 300px;
    height: 300px;
    animation: rotate 50s linear infinite;
  }

  .tech {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
    transform-origin: center;
    width: 100px;
    text-align: center;
    transform: translate(-50%, -50%) rotateY(calc(var(--i) * 40deg))
      translateZ(400px); /* Posiciona los elementos alrededor de un círculo */
  }

  .techSty {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
    transform-origin: center;
    color: #b2b2b2;
    width: 100px;
    text-align: center;
    transform: translate(-50%, -50%) rotateY(calc(var(--i) * 40deg))
      translateZ(400px);
  }
  .techSty img {
    background-color: #ababab;
  }

  .tech p {
    color: #b2b2b2;
  }

  @keyframes rotate {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }
`;

export const RoundedItems = () => {
  return (
    <WrapperRounded>
      <div className="techsContainer">
        <div className="tech" style={{ "--i": 0 }}>
          <Imagen src={svgReact} width={"100px"} alt={"tech"} />
          <p>ReactJs</p>
        </div>
        <div className="tech" style={{ "--i": 1 }}>
          <Imagen src={svgExp} width={"100px"} alt={"tech"} />
          <p>ExpressJs</p>
        </div>
        <div className="tech" style={{ "--i": 2 }}>
          <Imagen src={svgJava} width={"100px"} alt={"tech"} />
          <p>Java</p>
        </div>
        <div className="tech" style={{ "--i": 3 }}>
          <Imagen src={svgMysql} width={"100px"} alt={"tech"} />
          <p>MySQL</p>
        </div>
        <div className="tech" style={{ "--i": 4 }}>
          <Imagen src={svgGit} width={"100px"} alt={"tech"} />
          <p>Git</p>
        </div>
        <div className="tech" style={{ "--i": 5 }}>
          <Imagen src={svgGithub} width={"100px"} alt={"tech"} />
          <p>Github</p>
        </div>
        <div className="tech" style={{ "--i": 6 }}>
          <Imagen src={svgVercel} width={"100px"} alt={"tech"} />
          <p>Vercel</p>
        </div>
        <div className="tech" style={{ "--i": 7 }}>
          <Imagen src={svgSeq} width={"100px"} alt={"tech"} />
          <p>Sequelize</p>
        </div>
        <div className="techSty" style={{ "--i": 8 }}>
          <Imagen src={svgSty} width={"100px"} alt={"tech"} />
          <p>Styled Components</p>
        </div>
      </div>
    </WrapperRounded>
  );
};
