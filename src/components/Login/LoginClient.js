import React, { useState, useRef, useEffect } from "react";
import * as S from "./styles";

import axios from "axios";
import { useHistory } from "react-router-dom";

import queryString from "query-string";

import logo from "../../assets/ass.svg";

const LoginClient = (props) => {
  const query = queryString.parse(props.location.search);
  const [id, setId] = useState("");
  const [password, setPass] = useState("");
  const [error, setErr] = useState([false, false]);
  const check = useRef();
  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    const { redirect_url, client_id } = query;
    /* if (!check.current.checked) {
      alert("체크항목을 확인하세요.");
      if (!(id === "" || password === "")) {
        return;
      }
    } */
    if (id === "" || password === "") {
      if (id === "") {
        // document.getElementById("id1").style.color = "red";
      }
      if (password === "") {
        // document.getElementById("password1").style.color = "red";
      }
      alert("아이디나 비밀번호를 입력하세요.");
      return;
    }
    axios({
      url: "/dsmauth/login",
      method: "post",
      data: {
        id,
        password,
        redirect_url,
        client_id,
      },
    })
      .then((res) => {
        console.log(res.data);
        window.location.href = res.data.location;
      })
      .catch((err) => {
        alert("아이디나 비밀번호가 틀렸습니다.");
        console.log(err);
      });
  };

  return (
    <S.Section nono>
      <S.Header>
        <img height="100%" src={logo} />
      </S.Header>
      <S.BodyWrapper>
        <S.ContentBox>
          <h2 style={{ color: "black" }}>Login</h2>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
            method="GET"
          >
            <S.CInput
              value={id}
              onChange={(e) => setId(e.target.value)}
              type="text"
              placeholder="ID"
            />
            <S.CInput
              value={password}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <S.CButton onClick={login}>Login</S.CButton>
          </form>
        </S.ContentBox>
      </S.BodyWrapper>
    </S.Section>
  );
};

export default LoginClient;
