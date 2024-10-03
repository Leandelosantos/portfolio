import TypingEffect from "react-typing-effect";
import styled from "styled-components";

const WrapperTyping = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  color: white;
  height: ${(props) => (props.height ? props.height : "auto")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "60px")};
  width: 100%;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  background-color: transparent;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "")};

  @media (max-width: 480px) {
    height: 400px;
    text-align: center;
  }
`;

export const TypingComponent = ({
  text,
  typingDelay,
  eraseDelay,
  speed,
  eraseSpeed,
  fontSize,
  height,
  startTyping,
  keyProp,
  fontWeight,
}) => {
  return (
    <WrapperTyping
      fontSize={fontSize}
      height={height}
      isVisible={startTyping}
      fontWeight={fontWeight}
    >
      {startTyping && (
        <TypingEffect
          key={keyProp}
          text={[text]}
          speed={speed}
          eraseSpeed={eraseSpeed}
          eraseDelay={eraseDelay}
          typingDelay={typingDelay}
          cursor={" "}
        />
      )}
    </WrapperTyping>
  );
};
