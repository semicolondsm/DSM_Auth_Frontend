import React, { useState } from "react";
import * as S from "./styles";
import Loading from "../Public/Loading/Loading";

import axios from "axios";

import queryString from "query-string";

import logo from "../../assets/logo2.png";

const LoginClient = (props) => {
  const query = queryString.parse(props.location.search);
  const [id, setId] = useState("");
  const [password, setPass] = useState("");
  const [loading, setLoading] = useState(false);

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
      alert("아이디나 비밀번호를 입력하세요.");
      return;
    }
    setLoading(true);
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
        window.location.href = res.data.location;
      })
      .catch((err) => {
        setLoading(false);
        switch (err.response.status) {
          case 401:
            alert("아이디나 비밀번호가 틀렸습니다.");
            break;
          case 400:
            alert("어플리케이션을 다시 등록하세요");
            break;
          default:
            alert("에러가 났습니다 !");
            break;
        }
      });
  };

  return (
    <S.Section nono>
      {loading && <Loading isOn={loading} />}
      <S.Header>
        <img height="100%" src={logo} alt="DSMAUTH" />
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
              style={{ letterSpacing: "0.5px" }}
            />
            <S.CPInput
              value={password}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Password"
              style={{ letterSpacing: "1.2px" }}
            />
            <S.CButton onClick={login}>Login</S.CButton>
          </form>
        </S.ContentBox>
      </S.BodyWrapper>
    </S.Section>
  );
};

export default LoginClient;
