import styled from "styled-components";
import Video from "./Video";
import removeSvg from "../assets/removeSvg.svg";
import starSvg from "../assets/starSvg.svg";
import { Imagen } from "./Imagen";

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
    width: 80%;
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
    gap: 3em;
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

  .work:hover {
    transform: scale(1.1);
  }
  .work video:hover {
    box-shadow: 0 0 20px 0 #cbcbcb;
    border-color: #ffffffa6;
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
            {/* <div className="thingsContainer">
              <h3 className="border">My Creations in Action</h3>
              <h3 className="wave">My Creations in Action</h3>
            </div> */}
          </div>
          <div className="work">
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
          </div>
          <div className="work">
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
          </div>
          <div className="work">
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
          </div>
          <div className="work">
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
          </div>
        </div>
      </WrapperWorks>
    </>
  );
};
