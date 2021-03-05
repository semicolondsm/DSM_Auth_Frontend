import * as s from "./newStyle";

import React, { useEffect, useState, useRef } from "react";

import axios from "axios";

import { useHistory } from "react-router-dom";

// 비번 확인 됨
// 인증번호 확인 성공
// 아이디 중복 체크 성공

const NewRegister = React.memo(() => {
  const history = useHistory();
  const [value, setValue] = useState({
    email: "",
    id: "",
    code: "",
    psw: "",
    checkPsw: "",
    name: "",
  });
  const [state, setState] = useState({
    psw: false,
    id: false,
  });
  const [count, setCount] = useState(false);
  const timer = useRef();
  const check = useRef();
  // 처음 비번 / 두번째 인증코드 / 세번째 ???

  // 인풋값 받기
  const InputVal = (e) => {
    const { name } = e.target;
    if (name === "id") {
      setState({ ...state, id: false });
    }
    if (name === "name" && e.target.value === "성예인") {
      window.location.href = "https://www.naver.com";
    }
    setValue({
      ...value,
      [name]: e.target.value,
    });
  };

  useEffect(() => {
    if (value.psw === value.checkPsw && value.psw !== "") {
      setState({
        ...state,
        psw: true,
      });
    } else {
      setState({
        ...state,
        psw: false,
      });
    }
  }, [value]);

  // 회원가입 확인 버튼
  const register = () => {
    if (!check.current.checked) {
      alert("체크항목을 확인하세요.");
      return;
    }
    const { id, psw, name, email, code } = value;
    if (state.id === true && state.psw === true) {
      axios({
        url: "/auth/signup",
        method: "post",
        data: {
          id,
          password: psw,
          name,
          email,
          authcode: code,
        },
      })
        .then(() => {
          alert("회원가입 성공 !");
          history.push("/");
        })
        .catch((err) => {
          console.log(err);
          alert("회원가입 실패 !");
        });
    } else {
      alert("모든 양식을 마쳐주세요!");
    }
  };

  useEffect(() => {
    if (count <= 0) {
      clearInterval(timer.current);
      setCount(false);
    }
  }, [count]);

  // 이메일 인증코드 받기
  const EmailCheck = () => {
    if (value.email === "") {
      alert("이메일을 입력하세요.");
      return;
    } else if (/@dsm.hs.kr/.exec(value.email) === null) {
      alert("이메일 양식이 맞지 않습니다.");
      return;
    } else if (count > 0) {
      alert("아직 인증번호를 다시 받을 수 없습니다.");
      return;
    }

    axios({
      url: "/auth/email",
      method: "post",
      data: {
        email: value.email.replace(" "),
      },
    })
      .then(() => {
        alert("인증번호를 보냈습니다.");
        setCount(30);
        timer.current = setInterval(() => {
          setCount((prev) => prev - 1);
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.code === 403) {
          alert("이미 회원가입한 이메일입니다.");
        } else {
          alert("인증코드 발송에 실패했습니다. 이메일을 확인하세요.");
        }
      });
  };

  // 아이디 중복 체크 함수
  const checkId = () => {
    if (value.id === "") {
      alert("아이디를 입력해주세요");
      return;
    }
    if (state.id === true) {
      alert("이미 확인된 아이디 입니다.");
      return;
    }
    axios({
      method: "post",
      url: "/auth/check/id",
      data: {
        id: value.id,
      },
    })
      .then((res) => {
        alert("아이디가 사용 가능합니다 !");
        setState({
          ...state,
          id: true,
        });
      })
      .catch((err) => {
        console.log(err);
        if (err.response.code === 405) {
          alert("아이디가 중복됩니다 !");
        } else {
          alert("요청 오류");
        }
      });
  };

  return (
    <s.Wrapper>
      <s.Container>
        <s.SignUp>SIGN UP</s.SignUp>
        <s.InputWrapper>
          <s.Input
            placeholder="인증할 이메일을 입력해주세요."
            onChange={InputVal}
            name="email"
            value={value.email}
            type="email"
          ></s.Input>
          <s.InputBtn onClick={EmailCheck}>인증코드 받기</s.InputBtn>
        </s.InputWrapper>
        <s.SingUpDes
          style={count === false ? { color: "#42a54a" } : { color: "tomato" }}
        >
          {count === false
            ? "인증번호를 받을 수 있습니다."
            : `${count}초 뒤 인증코드를 다시 받을 수 있습니다.`}
        </s.SingUpDes>
        <s.InputWrapper>
          <s.Input
            placeholder="인증번호를 입력해주세요."
            onChange={InputVal}
            name="code"
            value={value.code}
            style={{ width: "100%" }}
            type="number"
          ></s.Input>
        </s.InputWrapper>
        <s.InputWrapper>
          <s.Input
            placeholder="사용할 아이디를 입력해주세요."
            onChange={InputVal}
            name="id"
            value={value.id}
            type="id"
          ></s.Input>
          <s.InputBtn onClick={checkId}>중복확인</s.InputBtn>
        </s.InputWrapper>
        <s.SingUpDes>
          {!state.id
            ? "아이디 중복을 확인해주세요!"
            : "아이디를 사용할 수 있습니다."}
        </s.SingUpDes>
        <s.InputWrapper style={{ marginTop: "2%" }}>
          <s.Input
            placeholder="사용하실 비밀번호를 입력해주세요."
            style={{ width: "100%" }}
            type="password"
            onChange={InputVal}
            name="psw"
            value={value.psw}
          ></s.Input>
        </s.InputWrapper>
        <s.InputWrapper>
          <s.Input
            placeholder="비밀번호를 확인하세요."
            style={{ width: "100%" }}
            type="password"
            onChange={InputVal}
            name="checkPsw"
            value={value.checkPsw}
          ></s.Input>
        </s.InputWrapper>
        <s.SingUpDes
          style={state.psw ? { color: "#42a54a" } : { color: "tomato" }}
        >
          {state.psw && value.psw !== ""
            ? "비밀번호가 확인되었습니다!"
            : "비밀번호가 맞지 않습니다!"}
        </s.SingUpDes>
        <s.InputWrapper style={{ marginTop: "2%" }}>
          <s.Input
            placeholder="성함을 입력하세요."
            onChange={InputVal}
            name="name"
            value={value.name}
            style={{ width: "100%" }}
            type="text"
          />
        </s.InputWrapper>
        <s.Agree>
          개인정보 수집 이용 동의
          <s.CheckBox id="asd" type="checkbox" ref={check} />
          <s.Label htmlFor="asd" />
        </s.Agree>
        <s.BtnWrapper>
          <s.Btn onClick={() => history.goBack()}>취소</s.Btn>
          <s.Btn onClick={register}>확인</s.Btn>
        </s.BtnWrapper>
      </s.Container>
    </s.Wrapper>
  );
});

export default NewRegister;
