import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(#181a1a, black);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  margin-left: 10%;
  width: 40%;
  height: 60%;
  display: flex;
  flex-direction: column;
  margin-bottom: 7%;
`;

export const SignUp = styled.p`
  color: white;
  font-size: 4vmin;
  font-weight: bold;
  font-family: 나눔스퀘어;
`;

export const InputWrapper = styled.div`
  width: 80%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  margin-top: 5%;
  font-size: 1.5vmin;
  font-weight: bold;
  font-family: "Noto Sans KR", sans-serif;
  :first-of-type {
    margin-top: 0;
  }
`;

export const Input = styled.input`
  width: 70%;
  height: 100%;
  background-color: white;
  border: none;
  border-radius: 3px;
  outline: none;
  padding: 0 20px;
  font-size: 1.7vmin;
  font-weight: bold;
  ::placeholder {
    font-size: 1.7vmin;
    font-weight: bold;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

export const InputBtn = styled.button`
  width: 25%;
  height: 100%;
  background-color: #713eff;
  border: none;
  outline: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 1.7vmin;
  font-weight: 500;
  transform: skew(-0.1deg);
  font-family: "Noto Sans KR", sans-serif;
`;

export const BtnWrapper = styled.div`
  width: 80%;
  height: 40px;
  display: flex;
  justify-content: center;
`;

export const Btn = styled.button`
  width: 100px;
  height: 100%;
  margin-top: 5%;
  background-color: white;
  margin-left: 30px;
  border: none;
  outline: none;
  font-size: 1.5vmin;
  cursor: pointer;
  border-radius: 3px;
  font-family: "Noto Sans KR", sans-serif;
  :last-of-type {
    background-color: #713eff;
    color: white;
  }
`;

export const SingUpDes = styled.span`
  margin-top: 2%;
  color: white;
  font-size: 1.5vmin;
  font-family: "Noto Sans KR", sans-serif;
  color: #c4c4c4;
`;

export const Agree = styled.p`
  width: 80%;
  font-size: 14px;
  color: #b8b8b8;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  letter-spacing: -2px;

  @media only screen and (max-width: 768px) {
    transform: scale(0.9);
  }
`;

export const Label = styled.label`
  width: 18px;
  height: 18px;
  background: #e2e2e2;
  margin: 5px 5px 5px 10px;

  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    width: 13px;
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
    width: 13px;
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
      transform: rotate(40deg) translate(-75%, 130%);
    }
    & + ${Label}::before {
      background: green;
      width: 10px;
      transform: rotate(-43deg) translate(-28%, 80%);
    }
  }
`;
