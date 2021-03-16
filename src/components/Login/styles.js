import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.div`
  background: ${(props) => props.bgColor || "white"};
  width: 100%;
  height: ${(props) => props.height || "100%"};
  background-image: url(${(props) => props.img || "none"});
  ${(props) =>
    props.img &&
    css`
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    `}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  font-size: 23px;
  background: linear-gradient(#181a1a, black);
  ${(props) =>
    props.nono &&
    css`
      justify-content: flex-start;
      background: white !important;
    `}
`;

export const InputWrapper = styled.div`
  border-radius: 6px;
  background: #ebebeb;
  width: 350px;
  height: 45px;
  padding: 3px 5px;
  margin: 16px 35px 20px;
  position: relative;

  @media only screen and (max-width: 768px) {
    width: -webkit-fill-available;
    margin: 16px 25px;
  }
`;

export const Inter = styled.label`
  position: absolute;
  top: 0;
  left: 15px;
  transition: all 0.25s;
  transform: translateY(35%);
  font-size: 17px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
  color: #4a4a4a;
  cursor: text;
  user-select: none;

  @media only screen and (max-width: 768px) {
    font-size: 15px;
    top: 10%;

    ${(props) =>
      props.on === true &&
      css`
        top: 0;
        transform: translateY(-125%);
        left: 12px;
        font-size: 16px;
        color: white;
      `}
  }

  ${(props) =>
    props.on === true &&
    css`
      top: 0;
      transform: translateY(-125%);
      left: 12px;
      font-size: 16px;
      color: white;
    `}
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 6px;
  color: #111111;
  letter-spacing: 0;
  background: #ebebeb;
  padding: 0 2%;
  font-family: "Noto Sans KR", sans-serif;

  &:focus + ${Inter} {
    top: 0;
    transform: translateY(-125%);
    left: 12px;
    font-size: 16px;
    color: white;
  }
`;

export const Img = styled.img`
  margin-bottom: 20px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 200px;
    margin-bottom: 10px;
  }
`;

export const ButtonP = styled.p`
  font-size: 2.1vmin;
  color: white;
  text-shadow: 0 8px 15px rgba(0, 0, 0, 0.6);
  transition: all 0.25s;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: bold;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  margin-top: 30px;
  width: 350px;
  height: 50px;
  outline: none;
  cursor: pointer;
  background: #713eff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 6px;

  transition: all 0.25s;

  &:hover {
    background: #5f32e5;
  }

  &:active {
    background: black;
    border: 1px solid #713eff;
  }

  &:active ${ButtonP} {
    font-size: 23px;
    color: #713eff;
  }

  @media only screen and (max-width: 768px) {
    width: 200px;
    height: 50px;

    &:active ${ButtonP} {
      font-size: 15px;
    }
  }
`;

export const Circle = styled.div`
  background: #6335ea;
  height: 360px;
  width: 360px;
  position: absolute;
  border-radius: 50%;
  transition: all 0.2s linear;
  transform: scale(0);
`;

export const Header = styled.div`
  width: 100%;
  height: 60px;
  padding: 8px 15px;
  display: flex;
  border-bottom: 2px solid rgb(200, 200, 200);
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin: -30px 0 0 0;
    transform: scale(0.8);
  }
`;

export const ContentBox = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CInput = styled.input`
  border: none;
  border-bottom: 1px solid rgb(230, 230, 230);
  width: 100%;
  height: 40px;
  padding: 8px 0;
  margin: 10px 0;
  outline: none;
  font-size: 15px;

  &::placeholder {
    color: rgb(210, 210, 210);
    font-size: 15px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
export const CPInput = styled.input`
  border: none;
  border-bottom: 1px solid rgb(230, 230, 230);
  width: 100%;
  height: 40px;
  padding: 8px 0;
  margin: 10px 0;
  outline: none;
  font-size: 22px;

  &::placeholder {
    color: rgb(210, 210, 210);
    font-size: 15px;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 21px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 19px;
  }
`;

export const CButton = styled.button`
  width: 100%;
  height: 50px;
  background: #713eff;
  padding: 8px 0;
  color: white;
  border: none;
  outline: none;
  border-radius: 4px;
  margin-top: 20px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background: #6a3fea;
  }
`;

export const CA = styled.a`
  color: rgb(150, 150, 150);
  font-size: 12px;
  align-self: center;
  margin-top: 40px;
`;

export const LinkA = styled(Link)`
  font-size: 1.5vmin;
  margin-top: 30px;
  color: rgb(200, 200, 200);
`;

export const SignIn = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 4vmin;
  font-weight: bold;
  font-family: 나눔스퀘어;
  margin-bottom: 30px;
`;

export const Register = styled.a`
  cursor: pointer;
  color: #111111;
  font-size: 14px;
  letter-spacing: -0.4px;
  text-decoration: underline;
  margin: 20px auto;
`;
