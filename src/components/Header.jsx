import styled from "styled-components";
import { LinksMenu } from "./LinksMenu";
import { TypingComponent } from "./TypingComponent";
import { useRef, useEffect, useState } from "react";

const WrapperNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-flow: row nowrap;
  width: 100%;
  max-width: 80%;
  height: 66px;
  border-color: #cbcbcb;
  border-style: none none solid none;
  border-width: thin;
  margin: 0 10%;
  transition: width 0.3s ease;
  position: fixed;
  z-index: 5656;

  &.shrink {
    max-width: 20%;
    margin: 1% 40%;
    background-color: rgba(255, 255, 255, 0.1); /* Fondo semitransparente */
    backdrop-filter: blur(5px); /* Aplica el desenfoque */
    border-style: solid;
    border-radius: 40px;
    padding: 0% 1%;
    font-size: 20px;
    font-weight: 600;
    opacity: 1;
    height: 50px;
  }

  &.shrink a {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    width: 95%;
    max-width: 100%;
    justify-content: space-around;

    &.shrink {
      max-width: 100%;
      width: 90%;
      margin: 1% 0;
    }
  }
`;

const WrapperHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url("/assets/moon1.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0px -20px 20px 20px black;

  nav {
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .textHeader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 10%;
    height: 900px;
  }
  .textHeader h1 {
    font-size: 60px;
    margin: 0;
    color: #cccccc;
  }
  .textHeader p {
    position: absolute;
  }
  .thingsContainer {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    width: 100%;
    padding-left: 52%;
  }
  .btnContainer {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    width: 100%;
    padding: 8% 0 0 0;
  }

  .btnContainer button {
    padding: 10px;
    width: 14%;
    font-size: 18px;
    font-weight: 600;
    border: 2px solid #cbcbcb;
    border-radius: 20px;
    background-color: transparent;
    color: #cbcbcb;
    overflow: hidden;
  }

  .btnContainer a {
    text-decoration: none;
    color: #cbcbcb;
  }

  .btnContainer button:hover {
    box-shadow: 0px 0px 20px #cbcbcb, 0px 0px 20px #cbcbcb;
  }

  .border {
    font-style: italic;
    font-weight: 600;
    color: white;
    font-size: 70px;
    text-align: end;
    margin: 0;
    text-shadow: -1px -1px 0 white, 1px -1px 0 white, 1px 1px 0 white,
      -1px 1px 0 white;
  }
  .wave {
    font-style: italic;
    font-weight: 600;
    color: #698ccd;
    font-size: 70px;
    text-align: end;
    margin: 0;
    animation: wave 3s ease-in-out infinite;
  }

  @media (max-width: 480px) {
    .btnContainer {
      padding: 35% 0 0 0;
    }

    .btnContainer button {
      width: 50%;
    }
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
`;
export const Header = () => {
  const [shrinkNav, setShrinkNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShrinkNav(true); // Activa el estado de "shrink"
      } else {
        setShrinkNav(false); // Resetea cuando el scroll es menor
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [startTyping, setStartTyping] = useState(false);
  const typingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
          observer.disconnect(); // Deja de observar una vez que comienza la animación
        }
      },
      { threshold: 0.5 } // Activar cuando el 50% del componente sea visible
    );

    if (typingRef.current) {
      observer.observe(typingRef.current);
    }

    return () => {
      if (typingRef.current) {
        observer.unobserve(typingRef.current);
      }
    };
  }, []);

  return (
    <>
      <WrapperHeader>
        <nav>
          <WrapperNav className={shrinkNav ? "shrink" : ""}>
            <LinksMenu />
          </WrapperNav>
        </nav>
        <div className="textHeader" ref={typingRef}>
          <TypingComponent
            text={"Creating beautiful websites with beautiful"}
            eraseDelay={3000}
            typingDelay={1000}
            eraseSpeed={50}
            speed={100}
            fontSize={"60px"}
            startTyping={startTyping}
          />
          <div className="thingsContainer">
            <p className="border">things</p>
            <p className="wave">things</p>
          </div>
          <div className="btnContainer">
            <button>
              <a href="#contact">Let's Connect !</a>
            </button>
          </div>
        </div>
      </WrapperHeader>
    </>
  );
};
