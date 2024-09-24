import styled from "styled-components";
import React, { useEffect } from "react";

const WrapperContact = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;

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
    margin-right: 5%;
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
    color: #68ad8f;
    font-size: 50px;
    text-align: center;
    margin: 0 0 0 0.5%;
    animation: wave 3s ease-in-out infinite;
  }

  .form {
    width: 50%;
  }

  @media (max-width: 480px) {
    padding: 30% 0;
    .title h3 {
      margin-right: 20%;
    }

    .form {
      width: 100%;
    }
  }
`;

export const Contact = () => {
  useEffect(() => {
    // Cargar el script de Typeform de forma dinámica
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Limpiar el script cuando el componente se desmonta
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <WrapperContact>
      <div className="title" id="contact">
        <h5>Let me entertain me</h5>
        <h3>
          Contact <spam className="border">me</spam>
          <spam className="wave">me</spam>
        </h3>
      </div>
      <div data-tf-live="01J88WE4NBP56A3YWGBYXNJSYY" className="form"></div>;
    </WrapperContact>
  );
};
