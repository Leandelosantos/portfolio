import styled from "styled-components";
import { Imagen } from "./Imagen";
import svgLinkd from "../assets/svgLinkd.svg";
import gifArrow from "../assets/gifArrow.gif";

const WrapperFooter = styled.section`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  color: #cbcbcb;
  padding: 5% 0;
  box-shadow: 0px -1px 10px 1px #cbcbcb;

  .rrss {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    width: 50%;
    align-items: center;
  }

  .rrss h3 {
    font-size: 22px;
  }

  .rrss h5 {
    font-size: 15px;
    margin: 0.5% 0 2% 0;
  }
  .nav {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    width: auto;
    align-items: flex-start;
    gap: 10px;
  }
  .resume {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    width: 50%;
    align-items: center;
    gap: 1%;
  }

  .resume img {
    filter: contrast(0);
  }

  a {
    text-decoration: none;
    color: #cbcbcb;
    font-size: 18px;
    text-align: left;
  }

  a:hover {
    text-shadow: 0px 0px 20px #cbcbcb, 0px 0px 20px #cbcbcb,
      0px 0px 20px #cbcbcb, 0px 0px 20px #cbcbcb;
  }
`;

export const Footer = () => {
  return (
    <>
      <WrapperFooter>
        <div className="rrss">
          <h3>Leandro De Los Santos Aboy</h3>
          <h5>Full-Stack Developer</h5>
          <a
            href="https://www.linkedin.com/in/leandrodelossantosaboy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Imagen
              src={svgLinkd}
              width={"30px"}
              height={"30px"}
              alt={"Linkedin"}
            />
          </a>
        </div>
        <div className="nav">
          <a href="#about">About</a>
          <a href="#technologies">Technologies</a>
          <a href="#works">Works</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="resume">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1MGNv61NtyLtkR1Js3B43H-Nowo2clFIK/view?usp=sharing"
          >
            View Resume
          </a>
          <Imagen src={gifArrow} width={"30px"} height={"30px"} alt={"arrow"} />
        </div>
      </WrapperFooter>
    </>
  );
};
