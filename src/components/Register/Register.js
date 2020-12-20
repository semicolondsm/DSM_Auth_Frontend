import React, { useState, useEffect, useRef } from "react";
import * as S from "./styles";

import logo from "../../assets/ass.svg";

import { Show } from "../../animation";

import axios from "axios";

import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  const [state, setState] = useState([false, false, false]);
  const [email, setEmail] = useState("");
  const inputEmail = useRef();

  useEffect(() => {
    Show("#email");
  }, []);

  const EmailCheck = () => {
    if (state[0] === true) {
      alert("한번만 눌러요 씨ㅡ발");
      return;
    }
    if (email === "") {
      alert("이메일을 입력하세요.");
      return;
    } else if (/@dsm.hs.kr/.exec(email) === null) {
      alert("이메일 양식이 맞지 않습니다.");
      return;
    }

    axios
      .post("/auth/email", {
        data: {
          email,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    inputEmail.current = 100;
    Show("#emailCheck");
    setState([true, false, false]);
  };

  return (
    <S.Section bgColor="black">
      <S.FirstWrapper>
        <S.Img onClick={() => history.push("/")} src={logo} />
        <S.Header>회원가입</S.Header>
        <S.Slide id="email">
          <S.Input
            value={email}
            onChange={(e) => {
              if (inputEmail.current !== 100) setEmail(e.target.value);
            }}
            placeholder="이메일을 입력하세요."
          />
          <S.Button onClick={EmailCheck}>이메일 인증</S.Button>
        </S.Slide>
        <S.Slide none={state[0]} id="emailCheck">
          <S.Input
            onChange={() => {
              if (state[1] === true) {
                return;
              }
              setState([true, true, false]);
              Show("#checkID");
            }}
            placeholder="인증번호를 입력하세요."
          />
        </S.Slide>
        <S.Slide none={state[1]} id="checkID">
          <S.Input type="text" />
        </S.Slide>
        <S.Slide none={state[2]} id="etc">
          asd
        </S.Slide>
      </S.FirstWrapper>
    </S.Section>
  );
};

export default Register;
