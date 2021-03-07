import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 500px;
  background: linear-gradient(#151717, black);
  overflow-y: scroll;
`;

export const MyContainer = styled.div`
  width: 1140px;
  margin: 150px auto;
`;

const ani = keyframes`
  0% {
    background-position: -100px
  }

  40%, 100% {
    background-position: 280px;
  }
`;

export const UserName = styled.p`
  color: white;
  font-family: 나눔스퀘어;
  font-size: 56px;
  margin-bottom: 0;
  display: flex;
  align-items: flex-end;
  b {
    font-size: 34px;
    padding: 0 10px;
    color: #c4c4c4;
    font-weight: 500;
  }

  span {
    background-color: rgb(34, 34, 34);
    border-radius: 3px;
    animation: ${ani} 2.5s infinite linear;
    background-image: linear-gradient(
      90deg,
      rgb(34, 34, 34) 0px,
      #333333 40px,
      rgb(34, 34, 34) 80px
    );
    background-size: 600px;
  }

  span:last-child {
    background-position: -100px;
    animation: ${ani} 2.5s infinite linear 0.45s;
  }
`;

export const UserEmail = styled.p`
  color: #c4c4c4;
  font-size: 22px;
  letter-spacing: 1px;
  span {
    background-color: rgb(34, 34, 34);
    border-radius: 3px;
    animation: ${ani} 2.5s infinite linear;
    background-image: linear-gradient(
      90deg,
      rgb(34, 34, 34) 0px,
      #333333 40px,
      rgb(34, 34, 34) 80px
    );
    background-size: 600px;
  }
`;

export const UserApp = styled.div`
  display: flex;
  color: white;
  margin-top: 7%;
  font-size: 26px;
  align-items: center;
`;

export const AddApp = styled.button`
  width: 45px;
  height: 45px;
  margin-left: 10px;
  cursor: pointer;
  background-color: #713eff;
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 36px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoneApp = styled.div`
  width: 50%;
  background-color: rgb(50, 50, 50, 0.4);
  padding: 10px 20px;
  margin-top: 5%;
  border-radius: 15px;
  color: #b1b1b1;
  font-family: 나눔스퀘어;
  font-size: 20px;
`;

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgb(10, 10, 10, 0.7);
  z-index: 10001;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
`;

export const ModalContainer = styled.div`
  width: 30%;
  height: 430px;
  background-color: white;
  border-radius: 10px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10002;
  :first-child {
    font-size: 26px;
    font-weight: bold;
    font-family: 나눔스퀘어;
  }
`;

export const ModalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #b7b7b7;
  margin-top: 20px;
  :first-of-type {
    margin-top: 0;
  }
`;

export const InputApp = styled.input`
  width: 80%;
  height: 50px;
  border: 1px solid #828282;
  border-radius: 3px;
  margin-top: 3%;
  padding: 10px 18px;
  color: gray;
  font-weight: bold;
  font-size: 22px;
  font-family: 나눔스퀘어;
  outline: none;
  ::placeholder {
    color: #bfbfbf;
    font-weight: 500;
    font-size: 16px;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

export const BtnCont = styled.div`
  margin-top: 5%;
  width: 50%;
  display: flex;
  justify-content: space-between;
  height: 40px;
  & button {
    width: 43%;
    height: 100%;
    background-color: white;
    cursor: pointer;
    outline: none;
  }
  & button:hover {
    filter: brightness(0.9);
  }
`;

export const Application = styled.div`
  width: 100%;
  margin-top: 3%;
  padding: 10px 30px;
  background-color: rgb(50, 50, 50, 0.5);
  color: white;
  font-size: 28px;
  border-radius: 5px;
  font-weight: bold;
  font-family: 나눔스퀘어;
  p {
    margin-top: 1.5%;
    margin-bottom: 0;
  }
  & > p > span {
    background-color: #333333;
    border-radius: 3px;
    animation: ${ani} 2.5s infinite linear;
    background-image: linear-gradient(
      90deg,
      #333333 0px,
      #444444 40px,
      #333333 80px
    );
    background-size: 600px;
  }

  & > p > span:last-child {
    animation: ${ani} 2.5s infinite linear 0.45s;
  }
`;

const ani2 = keyframes`
  0% {
    background-position: -100px
  }

  25%, 100% {
    background-position: 280px;
  }
`;
export const AppDetail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: #a4a4a4;
  font-weight: 500;
  p {
    margin-top: 2%;
    margin-bottom: 2%;
  }
  p span {
    background-color: #333333;
    border-radius: 3px;
    background-position: -100px;
    animation: ${ani2} 2.5s infinite linear 0.425s;
    background-image: linear-gradient(
      90deg,
      #333333 0px,
      #444444 40px,
      #333333 80px
    );
    background-size: 600px;
  }
  p:first-child span {
    animation: ${ani2} 2.5s infinite linear;
  }

  p:last-child span {
    animation: ${ani2} 2.5s infinite linear 0.85s;
  }
`;
