// import TypingEffect from "react-typing-effect";
// import styled from "styled-components";

// const WrapperTyping = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: flex-start;
//   margin: 0;
//   color: white;
//   height: ${(props) => (props.height ? props.height : "auto")};
//   font-size: ${(props) => (props.fontSize ? props.fontSize : "60px")};
//   width: 100%;
// `;

// export const TypingComponent = ({
//   text,
//   typingDelay,
//   eraseDelay,
//   speed,
//   eraseSpeed,
//   fontSize,
//   height,
// }) => {
//   return (
//     <WrapperTyping fontSize={fontSize} height={height}>
//       <TypingEffect
//         text={[text]}
//         speed={speed}
//         eraseSpeed={eraseSpeed}
//         eraseDelay={eraseDelay}
//         typingDelay={typingDelay}
//       />
//     </WrapperTyping>
//   );
// };

import TypingEffect from "react-typing-effect";
import styled from "styled-components";

const WrapperTyping = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  color: white;
  height: ${(props) => (props.height ? props.height : "auto")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "60px")};
  width: 100%;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  background-color: transparent;

  @media (max-width: 480px) {
    height: auto;
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
}) => {
  return (
    <WrapperTyping fontSize={fontSize} height={height} isVisible={startTyping}>
      {startTyping && (
        <TypingEffect
          key={keyProp}
          text={[text]}
          speed={speed}
          eraseSpeed={eraseSpeed}
          eraseDelay={eraseDelay}
          typingDelay={typingDelay}
        />
      )}
    </WrapperTyping>
  );
};
