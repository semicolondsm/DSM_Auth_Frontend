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
`;

export const FirstWrapper = styled.div`
  height: 750px;
  width: 500px;
  background: white;
  box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 25px;
`;

export const Slide = styled.div`
  position: relative;
  margin: 15px 0;
  padding: 10px 20px;
  color: black;
  font-size: 18px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(props) =>
    props.none === false
      ? css`
          visibility: hidden;
        `
      : css`
          visibility: visible;
        `}

  ${(props) =>
    props.column &&
    css`
      flex-direction: column;
    `}
`;

export const Img = styled.img`
  width: 200px;
  margin: 10px 0 30px;
  cursor: pointer;
`;

export const Header = styled.p`
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 10px;
  color: black;
`;

export const Input = styled.input`
  width: 250px;
  height: 40px;
  border-radius: 5px;
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #757575;
  outline: none;

  ${(props) =>
    props.bottom &&
    css`
      margin-bottom: 20px;
      width: 300px;
    `}
`;

export const Button = styled.button`
  padding: 7px 15px;
  border: none;
  outline: none;
  font-size: 17px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);

  transition: all 0.25s;

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 14px 10px rgba(0, 0, 0, 0.2);
    color: white;
    background: #713eff;
  }
`;

export const CountP = styled.p`
  margin: 0;
  position: absolute;
  left: 50%;
  top: -23px;
  transform: translateX(-50%);
  font-size: 14px;
  display: flex;
  width: 50%;
  justify-content: space-between;
`;

export const LinkA = styled(Link)`
  font-size: 15px;
  margin-top: 20px;
  color: white;
`