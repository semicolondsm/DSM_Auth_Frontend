import styled, { keyframes, css } from "styled-components";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg)
    }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

export const Svg = styled.svg`
  animation: ${rotate} 2s linear infinite;
  width: 50px;
  height: 50px;
  & circle {
    stroke: white;
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`;

export const Back = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 20000;
  display: none;
  top: 0;
  left: 0;
  opacity: 0;
  background: rgba(0, 0, 0, 0.7);
  align-items: center;
  justify-content: center;
  transition: 0.25s all linear;
  ${(props) =>
    props.is &&
    css`
      display: flex;
      opacity: 1;
    `}
`;
