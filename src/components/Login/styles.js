import styled, { css } from "styled-components";
import { Link } from 'react-router-dom'

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
  ${(props) =>
    props.nono &&
    css`
      justify-content: flex-start;
    `}
`;

export const InputWrapper = styled.div`
  border-radius: 2px;
  background: white;
  width: 350px;
  height: 45px;
  padding: 3px 5px;
  margin: 16px 30px;
  position: relative;

  @media only screen and (max-width: 768px) {
    width: -webkit-fill-available;
    margin: 16px 25px;
  }
`;

export const Inter = styled.p`
  position: absolute;
  top: 0;
  left: 10px;
  transition: all 0.25s;
  transform: translateY(-30%);
  font-size: 17px;
  color: black;

  @media only screen and (max-width: 768px) {
    font-size: 15px;
    top: 10%;

    ${(props) =>
      props.on === true && css`
        top: -50%;
        transform: translateY(-100%);
        left: 12px;
        font-size: 16px;
        color: white;
      `}
  }

  ${(props) =>
    props.on === true && css`
      top: -50%;
      transform: translateY(-100%);
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
  color: black;
  letter-spacing: 1px;

  &:focus {
    & + ${Inter} {
      top: -50%;
      transform: translateY(-100%);
      left: 12px;
      font-size: 16px;
      color: white;
    }
  }
`;

export const Img = styled.img`
  margin-bottom: 55px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 200px;
    margin-bottom: 40px;
  }
`;

export const ButtonP = styled.p`
  font-size: 26px;
  color: white;
  text-shadow: 0 8px 15px rgba(0, 0, 0, 0.6);
  transition: all 0.25s;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  margin-top: 30px;
  width: 350px;
  height: 60px;
  outline: none;
  cursor: pointer;
  background: #713eff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

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

export const Agree = styled.p`
  font-size: 14px;
  margin: 10px 0 -5px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    transform: scale(0.9);
  }
`;

export const Label = styled.label`
  width: 18px;
  height: 18px;
  background: white;
  margin: 5px 5px 5px 10px;
  border-radius: 3px;

  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    width: 15px;
    height: 1.5px;
    background: red;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: left center;
    transform: rotate(45deg) translate(-50%, -50%);
    transition: all 0.25s;
  }

  &::before {
    content: "";
    width: 15px;
    height: 1.5px;
    background: red;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: left center;
    transform: rotate(-45deg) translate(-50%, -50%);
    transition: all 0.25s;
  }
`;

export const CheckBox = styled.input`
  display: none;
  cursor: pointer;

  &:checked {
    & + ${Label}::after {
      background: green;
      width: 8px;
      transform: rotate(45deg) translate(-70%, 120%);
    }
    & + ${Label}::before {
      background: green;
      width: 11px;
      transform: rotate(-45deg) translate(-30%, 50%);
    }
  }
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
  }

  @media only screen and (max-width: 768px) {
    font-size: 18px;
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
  border-radius: 5px;
  margin-top: 20px;
  font-size: 16px;
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
  font-size: 15px;
  margin-top: 20px;
  color: rgb(200, 200, 200);
`