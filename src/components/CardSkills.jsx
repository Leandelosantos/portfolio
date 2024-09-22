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
  background: ${(props) =>
    props.$gradient ||
    "radial-gradient(112% 70% at 50% 121.3%,rgb(245, 181, 99) 0%,rgb(163, 57, 37) 49%,rgb(4, 20, 36) 100%)"};
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
    display: flex;
    justify-content: center;

    align-items: center;
  }

  .border {
    border: 1px solid #cbcbcb;
    border-radius: 10px;
  }
`;

export const CardSkills = ({
  title,
  skill,
  img,
  gradient,
  width = "20px",
  height = "20px",
  text,
}) => {
  return (
    <WrapperCard $gradient={gradient}>
      <div className="card">
        <h4>{title}</h4>
        <h3>{skill}</h3>
        {text != null && <p>{text}</p>}
        <div className="contentCard">
          <Imagen src={img} alt={"tech"} width={width} height={height} />
        </div>
      </div>
    </WrapperCard>
  );
};
