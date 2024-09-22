import styled from "styled-components";

const WrapperExperiments = styled.section`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  padding: 30% 0;
  color: white;

  .test {
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: relative;
    background-color: #f0f0f0;
  }

  .test p {
    width: 50px;
    height: 50px;
    position: absolute;
    color: #000000;
    top: 50%;
    transform: translateY(-50%);
    animation: izq 10s linear infinite;
  }

  @keyframes izq {
    0% {
      right: -50px;
    }
    100% {
      right: 100%;
    }
  }
`;

export const Experiments = () => {
  return (
    <>
      <WrapperExperiments>
        <div className="test">
          <p>Experiments</p>
        </div>
      </WrapperExperiments>
    </>
  );
};
