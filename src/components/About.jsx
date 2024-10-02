import styled from "styled-components";
import { Imagen } from "./Imagen";
import foto from "../assets/foto.jpg";
import { TypingComponent } from "./TypingComponent";
import { useRef, useEffect, useState } from "react";

const WrapperAbout = styled.section`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 10% 0;
  gap: 20%;
  .imgContainer {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin: 0 10% 0 0;
    width: 100%;
  }
  .imgContainer img {
    filter: grayscale(1);
    border: 1px solid #cbcbcb;
    border-radius: 30px;
    box-shadow: 0px 0px 4px 2px #cbcbcb;
  }
  .descContainer {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-color: transparent;
    color: white;
    margin: 0 0 0 10%;
    width: 100%;
  }
  .descContainer p {
    text-align: right;
    font-size: 15px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 0;
    margin: 30% 0;

    .descContainer {
      overflow: hidden;
      padding: 5%;
      margin: 0 0 10% 0;
    }

    .imgContainer {
      margin: 0;
      width: 70%;
    }
  }
`;

export const About = () => {
  const [startTyping, setStartTyping] = useState(false);
  const [keyProp, setKeyProp] = useState(0);
  const typingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true);
          setKeyProp((prevKey) => prevKey + 1);
          //observer.disconnect(); // Deja de observar una vez que comienza la animación
        } else {
          setStartTyping(false);
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
      <WrapperAbout>
        <div className="descContainer" ref={typingRef}>
          <TypingComponent
            text={
              "Passionate about learning and perfecting every detail. I transform ideas into efficient and scalable solutions, ensuring quality and exceptional results. Always ready to face new challenges and add value to every project."
            }
            eraseDelay={3000}
            typingDelay={1000}
            eraseSpeed={50}
            speed={100}
            fontSize={"40px"}
            height={innerWidth <= 480 ? "auto" : "450px"}
            startTyping={startTyping}
            keyProp={keyProp}
            fontWeight={300}
          />
        </div>
        <div className="imgContainer" id="about">
          <Imagen src={foto} alt="icon" width={"80%"} />
        </div>
      </WrapperAbout>
    </>
  );
};
