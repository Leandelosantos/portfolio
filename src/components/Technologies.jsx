import styled from "styled-components";
import svgReact from "../assets/svgReact.svg";
import svgJava from "../assets/svgJava.svg";
import svgMysql from "../assets/svgMysql.svg";
import svgGit from "../assets/svgGit.svg";
import svgGithub from "../assets/svgGithubLight.svg";
import svgVercel from "../assets/vercelSvg.svg";
import svgSeq from "../assets/seqSvg.svg";
import svgSty from "../assets/stySvg.svg";
import svgExp from "../assets/svgExpress.svg";
import svgFigma from "../assets/svgFigma.svg";
import gifDev from "../assets/dev.gif";
import gifIa from "../assets/ia.gif";
import gifTrue from "../assets/gifTrue.gif";
import { CardSkills } from "./CardSkills";
import { CardSkillsTechs } from "./CardSkillsTechs";

const img = [svgJava, svgExp, svgReact, svgSeq, svgSty];
const img2 = [svgGit, svgGithub, svgVercel, svgMysql, svgFigma];

const WrapperTech = styled.section`
  background-color: transparent;
  margin: 0;
  width: 100%;
  padding: 10% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;

  .title {
    display: flex;
    width: 80%;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    color: #cbcbcb;
    gap: 2em;
    margin-bottom: 5%;
  }

  .title h5 {
    font-weight: 600;
    font-size: 20px;
  }

  .title h3 {
    font-size: 50px;
    margin-right: 8%;
    text-shadow: 1px 1px 12px #cbcbcb;
  }

  .border {
    font-style: italic;
    position: absolute;
    font-weight: 600;
    color: white;
    font-size: 50px;
    text-align: center;
    margin: 0 0 0 0.5%;
    text-shadow: -1px -1px 0 white, 1px -1px 0 white, 1px 1px 0 white,
      -1px 1px 0 white;
  }
  .wave {
    font-style: italic;
    position: absolute;
    font-weight: 600;
    color: #d98a49;
    font-size: 50px;
    text-align: center;
    margin: 0 0 0 0.5%;
    animation: wave 3s ease-in-out infinite;
  }

  @keyframes wave {
    0%,
    100% {
      clip-path: polygon(
        0% 47%,
        10% 48%,
        33% 54%,
        54% 60%,
        70% 61%,
        84% 59%,
        100% 52%,
        100% 100%,
        0% 100%
      );
    }
    50% {
      clip-path: polygon(
        0% 60%,
        15% 65%,
        34% 66%,
        51% 62%,
        67% 50%,
        84% 45%,
        100% 46%,
        100% 100%,
        0% 100%
      );
    }
  }

  .cards {
    display: flex;
    justify-content: space-around;
    flex-flow: row nowrap;
    padding: 3% 2%;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 30% 0;
    .title {
      width: auto;
    }
    .cards {
      flex-flow: column wrap;
      align-items: center;
      gap: 30px;
    }
  }
`;

export const Technologies = () => {
  return (
    <WrapperTech id="technologies">
      <div className="title">
        <h5>My Skills</h5>
        <h3>
          The Secret <spam className="border">Sauce</spam>
          <spam className="wave">Sauce</spam>
        </h3>
      </div>
      <div className="cards">
        <CardSkills
          title={"THE BASE"}
          skill={"A developer with the brain of an designer"}
          gradient={
            "radial-gradient(112% 70% at 50% 117.6%, rgb(148, 246, 202) 0%, rgb(52, 145, 150) 49%, rgb(4, 20, 36) 100%)"
          }
          img={gifDev}
          width="224px"
          height="170px"
        />
        <CardSkillsTechs
          img={img}
          img2={img2}
          text={"The daily work-bench essentials"}
        />
        <CardSkills
          title={"THE FLAVOUR"}
          skill={"Marketing Buff"}
          gradient={
            "radial-gradient(112% 70% at 50% 117.6%, rgb(142, 126, 233) 0%, rgb(87, 56, 175) 49%, rgb(4, 20, 36) 100%)"
          }
          text={"Crafting stories that connect with art of persuasion"}
          img={gifTrue}
          width="240px"
          height="160px"
        />
        <CardSkills
          title={"THE MAGIC INGREDIENT"}
          skill={"Gen-AI aficionado"}
          gradient={
            "radial-gradient(112% 70% at 50% 121.3%, rgb(158, 173, 0) 0%, rgb(3, 137, 66) 49%, rgb(4, 20, 36) 100%)"
          }
          img={gifIa}
          width="240px"
          height="200px"
        />
      </div>
    </WrapperTech>
  );
};
