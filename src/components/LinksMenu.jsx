import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapperLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-self: center;
  a {
    text-decoration: none;
    color: #cbcbcb;
    font-size: 24px;
  }
  a:hover {
    font-weight: 500;
    color: #ffffff;
    text-shadow: 0px 0px 7px #cbcbcb, 0px 0px 10px #cbcbcb, 0px 0px 21px #cbcbcb,
      0px 0px 42px #cbcbcb;
    /* text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
      0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa; "neon hover" */
  }

  @media (max-width: 480px) {
    justify-content: space-around;

    a {
      font-size: 20px;
    }
  }
`;

export const LinksMenu = () => {
  return (
    <>
      <WrapperLinks>
        <a href="#about">About</a>
        <a href="#technologies">Technologies</a>
        <a href="#works">Works</a>
        <a href="#contact">Contact</a>
      </WrapperLinks>
    </>
  );
};
