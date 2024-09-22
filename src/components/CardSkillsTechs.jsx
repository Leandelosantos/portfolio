import styled from "styled-components";
import { Imagen } from "./Imagen";

const WrapperCard = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-flow: column nowrap;
  width: 22%;
  padding: 2%;
  height: 460px;
  background: radial-gradient(
    112% 70% at 50% 121.3%,
    rgb(245, 181, 99) 0%,
    rgb(163, 57, 37) 49%,
    rgb(4, 20, 36) 100%
  );
  border-radius: 20px;
  box-shadow: 0px 3px 5px #cbcbcb;

  .card {
    display: flex;
    color: #cbcbcb;
    justify-content: flex-start;
    flex-flow: column nowrap;
    width: 100%;
    height: 100%;
    gap: 3%;
  }

  .card h4 {
    font-size: 20px;
  }

  .card h3 {
    font-size: 34px;
  }

  .contentCard {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .contentCard img {
    /* width: 50px;
    height: 50px; */
    position: absolute;
    color: #fff;
    top: 70%;
    transform: translateY(-50%);
    animation: izq 10s linear infinite;
    opacity: 0;
  }

  @keyframes izq {
    0% {
      right: -60%;
      opacity: 2;
    }
    100% {
      right: 100%;
      opacity: 0;
    }
  }

  .contentCard img:nth-child(1) {
    animation-delay: 0s;
  }
  .contentCard img:nth-child(2) {
    animation-delay: 2s;
  }
  .contentCard img:nth-child(3) {
    animation-delay: 4s;
  }
  .contentCard img:nth-child(4) {
    animation-delay: 6s;
  }
  .contentCard img:nth-child(5) {
    animation-delay: 8s;
  }

  .contentCard2 {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }

  .contentCard2 img {
    position: absolute;
    color: #fff;
    top: -10%;
    transform: translateY(50%);
    animation: der 10s linear infinite;
    opacity: 0;
  }

  @keyframes der {
    0% {
      left: -50%;
      opacity: 2;
    }
    100% {
      left: 100%;
      opacity: 0;
    }
  }

  .contentCard2 img:nth-child(1) {
    animation-delay: 0s;
  }
  .contentCard2 img:nth-child(2) {
    animation-delay: 2s;
  }
  .contentCard2 img:nth-child(3) {
    animation-delay: 4s;
  }
  .contentCard2 img:nth-child(4) {
    animation-delay: 6s;
  }
  .contentCard2 img:nth-child(5) {
    animation-delay: 8s;
  }
`;

export const CardSkillsTechs = ({ img, img2, text }) => {
  return (
    <WrapperCard>
      <div className="card">
        <h4>THE INGREDIENTS</h4>
        <h3>My tech stack</h3>
        {text != null && <p>{text}</p>}
        <div className="contentCard">
          {img.map((item) => {
            return (
              <Imagen src={item} alt={"tech"} width={"60px"} height={"60px"} />
            );
          })}
        </div>
        <div className="contentCard2">
          {img2.map((item) => {
            return (
              <Imagen src={item} alt={"tech"} width={"60px"} height={"60px"} />
            );
          })}
        </div>
      </div>
    </WrapperCard>
  );
};
