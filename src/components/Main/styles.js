import styled, { css, keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const BodyWrapper = styled.div`
  max-width: 100%;
  min-width: 1600px;
`;

export const Section = styled.div`
  position: relative;
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
  padding-bottom: 100px;
`;

export const ContentBox = styled.div`
  overflow: hidden;
  width: 1600px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}
  ${(props) =>
    props.stair &&
    css`
      align-items: flex-start;
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

export const H1Box = styled.h1`
  font-size: 28px;
  color: white;
  text-align: right;
  position: absolute;
  right: 0;
  top: 50%;
  letter-spacing: -1px;
  font-weight: 500;
  transition: 0.5s transform ease-out, 0.3s opacity linear;
  opacity: 0;
  transform: translate(100px, -50%);
`;

export const SButton = styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
  width: 180px;
  color: ${(props) => props.color || "#333333"};
  background: ${(props) => props.bgColor || "white"};
  font-weight: 700;
  margin-left: 15px;
  cursor: pointer;
  transition: 0.15s all linear;
  &:hover {
    filter: brightness(80%);
  }
`;

export const ButtonBox = styled.div`
  margin-top: 20px;
`;

export const ContentTitle = styled.h1`
  font-family: "NanumSquare", sans-serif !important;
  font-size: 34px;
  color: white;
  font-weight: 700;
  text-align: left;
  width: 100%;
  letter-spacing: -1px;
  margin-top: 60px;
`;

export const ApiBoxWrapper = styled.div`
  width: 100%;
  height: 350px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 90px;
  justify-items: center;
  margin-top: 50px;
`;

export const ApiBox = styled.div`
  width: 100%;
  padding: 30px;
  background-color: #222222;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ApiTitle = styled.h2`
  font-size: 28px;
  color: white;
  margin: 0;
  text-align: left;
`;

export const ApiDes = styled.p`
  font-size: 15px;
  font-weight: 500;
  color: #dddddd;
  width: 100%;
  white-space: pre-line;
`;

export const ApiButton = styled.button`
  padding: 9px 0;
  width: 49%;
  font-size: 15px;
  font-weight: 700;
  margin-left: 2%;
  background: #444444;
  &:first-child {
    margin-left: 0;
  }

  ${(props) =>
    props.only &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.first &&
    css`
      background: #132fb8;
    `}

  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.15s background ease-out;

  &:hover {
    background: #494949;
  }
`;

export const SFlexBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  ${(props) =>
    props.center &&
    css`
      align-items: center;
    `}

  ${(props) =>
    props.bet &&
    css`
      justify-content: space-between;
    `}

    ${(props) =>
    props.col &&
    css`
      flex-direction: column;
    `}
`;

export const SDes = styled.p`
  font-size: 28px;
  font-weight: 500;
  color: white;
`;

export const HalfBox = styled.div`
  width: 50%;
  height: ${(props) => props.height || "auto"};
`;

export const MBox = styled.div`
  width: 600px;
  height: 140px;
  background: #222222;
  margin-bottom: 35px;
  padding: 25px 20px;
  font-size: 19px;
  color: white;
  font-weight: 500;
  display: flex;
  transform: translate(${(props) => props.i * 85 - 50}px);
  opacity: 0;
  transition: 0.5s transform ease-out, 0.25s opacity linear;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const BigTitle = styled.h2`
  font-size: 32px;
  color: white;
  font-weight: 700;
  align-self: center;
`;

export const ListWrapper = styled.div`
  width: 70%;
  height: 350px;
  margin-top: 30px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-self: center;
  scroll-behavior: unset;
  &::-webkit-scrollbar {
    background: none;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 25px;
    background: #dddddd;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
  color: white;
  border-bottom: 2px solid rgb(190, 190, 190);
  padding: 20px;
  font-size: 18px;
  font-weight: 700;
  color: #eeeeee;
  &:first-child {
    border-top: 1px solid rgb(190, 190, 190);
  }
`;

export const ProfileBottom = styled.div`
  width: 100%;
  height: 45%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 25px;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    right: 100%;
    top: 0;
    z-index: 1;
    background: #333333;
    transition: 0.2s all ease-out;
  }
`;

export const Arrow = styled.div`
  position: absolute;
  bottom: 10px;
  left: 13px;
  z-index: 3;
  opacity: 0;
  transition: 0.2s opacity linear, 0.35s transform ease-out;
`;

export const ProfileBox = styled.div`
  overflow: hidden;
  width: 22.5%;
  height: 400px;
  background: #222222;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  &:hover ${ProfileBottom}::before {
    transform: translateX(100%);
  }
  &:hover ${Arrow} {
    opacity: 1;
    transform: translateX(15px);
  }
`;

export const ProfileImg = styled.div`
  height: 55%;
  width: 100%;

  background-image: url(${(props) => props.src || ""});
  background-repeat: no-repeat;
  background-size: ${(props) => props.size};
  background-position: center;
`;

export const ProfileTitle = styled.h4`
  margin: 0;
  font-size: 20px;
  color: white;
  font-weight: 700;
  text-align: left;
  position: relative;
  z-index: 2;
`;

export const ProfileSub = styled.a`
  margin: 10px 0 0;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 700;
  text-align: left;
  position: relative;
  z-index: 2;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
