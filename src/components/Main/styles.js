import styled, { css, keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const BodyWrapper = styled.div`
  max-width: 100%;
`;

export const Section = styled.div`
  background: ${(props) => props.bgColor || "white"};
  width: 100%;
  height: ${(props) => props.height || "800px"};
  background-image: url(${(props) => props.img || "none"});
  ${(props) =>
    props.img &&
    css`
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    `}
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}
`;

const fadeIn = keyframes`
    from {
        transform: translateX(-50px);
        opacity: 0;
    }

    to {
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const Title = styled.p`
  font-size: ${(props) => props.fontSize || "18px"};
  ${(props) =>
    props.bold &&
    css`
      font-weight: 600;
    `}
  color: ${(props) => props.color || "white"};
  ${(props) =>
    props.ani &&
    css`
      transform: translateX(-20px);
      opacity: 0;
      animation-name: ${fadeIn};
      animation-duration: 1.5s;
      animation-fill-mode: forwards;
    `}
  margin: ${(props) => props.margin || "0"};
  color: white;
`;

export const Button = styled.button`
  padding: 15px 45px;
  font-size: 22px;
  color: white;
  background: black;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  border: none;

  transition: all 0.1s;

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 4px 4px 7px rgba(0, 0, 0, 0.3);
  }
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  ${(props) =>
    props.just &&
    css`
      justify-content: space-between;
    `}
  width: ${(props) => props.width || "auto"};
  overflow: visible;
`;
