import styled from "styled-components";
import Video from "./Video";
import removeSvg from "../assets/removeSvg.svg";
import starSvg from "../assets/starSvg.svg";
import { Imagen } from "./Imagen";
import videoMastin from "../assets/video-mastin.mp4";
import promoYa from "../assets/promoYa2.mp4";
import fenedur from "../assets/fenedur.mp4";
import posterMastin from "../assets/posterMastin.png";
import posterFenedur from "../assets/posterFenedur.png";
import posterPromoya from "../assets/posterPromoYa.png";
import gifArrow from "../assets/gifArrow.gif";

const WrapperWorks = styled.section`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 10% 0;

  .worksContainer {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 2%;
    gap: 20%;
    width: auto;
  }

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
    margin-right: 10%;
    text-shadow: 1px 1px 12px #cbcbcb;
  }

  .thingsContainer {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    width: 100%;
  }

  .border {
    font-style: italic;
    position: absolute;
    font-weight: 600;
    color: white;
    font-size: 52px;
    text-align: center;
    margin: 0 0 0 0.5%;
    text-shadow: -1px -1px 0 white, 1px -1px 0 white, 1px 1px 0 white,
      -1px 1px 0 white;
  }
  .wave {
    position: absolute;
    font-style: italic;
    font-weight: 600;
    color: #d12e1d;
    font-size: 52px;
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
  .work {
    display: flex;
    flex-flow: row nowrap;
    color: #cbcbcb;
    transition: transform 0.3s ease;
    margin: 5% 0;
    width: 80%;
  }

  .descContainer {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: baseline;
    gap: 2%;
  }

  .date {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 10%;
  }

  .date p {
    width: 70%;
    font-weight: 600;
  }

  .desc {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    text-align: justify;
    gap: 2em;
    transition: transform 0.3s ease;
    width: 60%;
  }

  .desc h5 {
    font-size: 18px;
  }

  .desc p {
    font-size: 18px;
  }

  .items {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 5%;
    width: 100%;
  }

  .items p {
    font-size: 18px;
  }

  .visit {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }

  .visit img {
    filter: contrast(0);
  }

  a {
    text-decoration: none;
    color: #cbcbcb;
    display: flex;
    gap: 15%;
    width: 25%;
    font-weight: 600;
  }

  a:hover {
    text-shadow: 0px 0px 20px #cbcbcb, 0px 0px 20px #cbcbcb;
  }

  .work:hover {
    transform: scale(1.1);
  }
  .work video:hover {
    box-shadow: 0 0 20px 0 #cbcbcb;
    border-color: #ffffffa6;
  }

  @media (max-width: 480px) {
    padding: 30% 0;

    .worksContainer {
      width: 100%;
      gap: 40px;
    }

    .descContainer {
      flex-flow: column wrap;
      align-items: center;
    }

    .title {
      width: auto;
    }

    .title h3 {
      margin: 0 1% 0 10%;
    }

    .work {
      width: 90%;
      flex-flow: column nowrap;
    }

    .work video {
      width: 358px;
      height: 250px;
      padding: 10px;
      overflow: hidden;
    }
  }
`;

export const Works = () => {
  return (
    <>
      <WrapperWorks id="works">
        <div className="worksContainer">
          <div className="title">
            <h5>Where technique meets art</h5>
            <h3>
              My Creations in <spam className="border">Action</spam>
              <spam className="wave">Action</spam>
            </h3>
          </div>
          <div className="work">
            <Video src={videoMastin} poster={posterMastin} />
            <div className="descContainer">
              <div className="date">
                <p>June 23'</p>
                <Imagen src={removeSvg} width={"60px"} alt={"remove icon"} />
              </div>
              <div className="desc">
                <h5>Mas - Tin</h5>
                <p>
                  Website for the company Mas-Tin with five sections, user
                  login, database integration, and a CRUD system for product
                  management
                </p>
                <div className="items">
                  <Imagen src={starSvg} width={"20px"} alt={"highlight icon"} />
                  <p>Built the product from 0 → 100</p>
                </div>
                <div className="items">
                  <Imagen src={starSvg} width={"20px"} alt={"highlight icon"} />
                  <p>Full Responsive</p>
                </div>
                <div className="visit">
                  <a
                    href="https://mas-tin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Imagen
                      src={gifArrow}
                      width={"25px"}
                      alt={"highlight icon"}
                    />
                    <p>Visit</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="work">
            <Video src={promoYa} poster={posterPromoya} />
            <div className="descContainer">
              <div className="date">
                <p>Sept 24'</p>
                <Imagen src={removeSvg} width={"60px"} alt={"remove icon"} />
              </div>
              <div className="desc">
                <h5>Movistar</h5>
                <p>
                  Website created in WordPress for the official agent of the
                  international company Movistar. Design, development, and
                  maintenance of the site.
                </p>
                <div className="items">
                  <Imagen src={starSvg} width={"20px"} alt={"highlight icon"} />
                  <p>Complete redesign of the website</p>
                </div>
                <div className="items">
                  <Imagen src={starSvg} width={"20px"} alt={"highlight icon"} />
                  <p>Full Responsive</p>
                </div>
                <div className="visit">
                  <a
                    href="https://promoya.com.ar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Imagen
                      src={gifArrow}
                      width={"25px"}
                      alt={"highlight icon"}
                    />
                    <p>Visit</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="work">
            <Video src={fenedur} poster={posterFenedur} />
            <div className="descContainer">
              <div className="date">
                <p>Jan 21'</p>
                <Imagen src={removeSvg} width={"60px"} alt={"remove icon"} />
              </div>
              <div className="desc">
                <h5>Fenedur</h5>
                <p>
                  Development for Fenedur S.A., an international supplier of
                  well-known adhesive brands worldwide.
                </p>
                <div className="items">
                  <Imagen src={starSvg} width={"20px"} alt={"highlight icon"} />
                  <p>Built the product from 0 → 100</p>
                </div>
                <div className="items">
                  <Imagen src={starSvg} width={"20px"} alt={"highlight icon"} />
                  <p>Full Responsive</p>
                </div>
                <div className="visit">
                  <a
                    href="https://fenedur-institutional.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Imagen
                      src={gifArrow}
                      width={"25px"}
                      alt={"highlight icon"}
                    />
                    <p>Visit</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="work">
            <Video
              src={
                "https://videos.pexels.com/video-files/6994619/6994619-uhd_2560_1440_30fps.mp4"
              }
            />
            <div className="descContainer">
              <div className="date">
                <p>Junio 23'</p>
                <Imagen src={removeSvg} width={"60px"} alt={"remove icon"} />
              </div>
              <div className="desc">
                <h5>Mas - Tin</h5>
                <p>
                  Sitio Web para la empresa Mas-Tin con cinco secciones, login,
                  base de datos y ABM para productos.
                </p>
                <div className="items">
                  <Imagen src={starSvg} width={"20px"} alt={"highlight icon"} />
                  <p>Built the product from 0 → 1</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </WrapperWorks>
    </>
  );
};
