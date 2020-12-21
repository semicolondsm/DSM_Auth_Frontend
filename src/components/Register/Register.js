import React, { useState, useEffect, useRef } from "react";
import * as S from "./styles";

import logo from "../../assets/ass.svg";

import { Show } from "../../animation";

import axios from "axios";

import { useHistory } from "react-router-dom";

const Register = React.memo(() => {
  const history = useHistory();
  const [countTime, setCountTime] = useState(0);
  const [state, setState] = useState([false, false, false]);
  const [email, setEmail] = useState("");
  const [checkNum, setCheckNum] = useState("");
  const [id, setId] = useState("");
  const inputEmail = useRef();
  const checkNumber = useRef();
  const temp = useRef();

  useEffect(() => {
    Show("#email");
  }, []);

  const EmailCheck = () => {
    if (state[0] === true) {
      return;
    }
    if (email === "") {
      alert("이메일을 입력하세요.");
      return;
    } else if (/@dsm.hs.kr/.exec(email) === null) {
      alert("이메일 양식이 맞지 않습니다.");
      return;
    }

    axios({
      url: "/auth/email",
      method: "post",
      data: {
        email,
      },
    })
      .then((res) => {
        checkNumber.current = res.data.message;
      })
      .catch((err) => {
        console.log(err);
      });

    setCountTime(300);

    temp.current = setInterval(() => {
      setCountTime((prev) => prev - 1);
    }, 1000);
    Show("#emailCheck");
    setState([true, false, false]);
  };

  useEffect(() => {
    if (countTime <= 0) {
      clearInterval(temp.current);
    }
  }, [countTime]);

  const checkEmailNumber = () => {
    if (countTime <= 0) {
      alert("인증시간이 만료되었습니다. 다시 시도하세요.");
      return;
    }

    if (state[1] === true) {
      return;
    }

    if (checkNumber.current != Number(checkNum)) {
      alert("인증번호가 틀립니다 !");
      return;
    }

    inputEmail.current = 100;
    setState([true, true, false]);
    Show("#checkID");
  };

  const checkId = () => {
    if (state[2] === true) {
      return;
    }

    axios({
      method: "post",
      url: "/auth/check/id",
      data: {
        id,
      },
    })
      .then((res) => {
        console.log(res);
        alert("아이디가 사용 가능합니다 !");
        setState([true, true, true]);
        Show("etc");
      })
      .catch((err) => {
        console.log(err);
        alert("아이디가 중복됩니다 !");
      });
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
          <S.CountP>
            <span>인증번호를 발송했습니다.</span>
            <span>
              {Math.floor(countTime / 60)}:
              {(countTime % 60).toString().padStart(2, "0")}
            </span>
          </S.CountP>
          <S.Input
            onChange={(e) => {
              if (state[2] === true) {
                return;
              }
              if (inputEmail.current !== 100) setCheckNum(e.target.value);
              if (state[1] === true) {
                return;
              }
            }}
            placeholder="인증번호를 입력하세요."
            value={checkNum}
          />
          <S.Button onClick={checkEmailNumber}>인증번호 확인</S.Button>
        </S.Slide>
        <S.Slide none={state[1]} id="checkID">
          <S.Input
            value={id}
            onChange={(e) => setId(e.target.value)}
            type="text"
            placeholder="아이디를 입력하세요."
          />
          <S.Button onClick={checkId}>중복 체크</S.Button>
        </S.Slide>
        <S.Slide none={state[2]} id="etc">
          asd
        </S.Slide>
      </S.FirstWrapper>
    </S.Section>
  );
});

export default Register;
