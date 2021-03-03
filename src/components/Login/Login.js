import React, { useState, useRef, useEffect } from "react";
import * as S from "./styles";

import axios from "axios";
import { useHistory } from "react-router-dom";

import { useCookies } from "react-cookie";

import queryString from "query-string";

import logo from "../../assets/ass.svg";

import LoginButton from "./LoginButton";

const Login = (props) => {
  const query = queryString.parse(props.location.search);
  const [id, setId] = useState("");
  const [password, setPass] = useState("");
  const check = useRef();
  const history = useHistory();
  const [Rcookie] = useCookies(["refresh-token"]);
  const [Acookie, Aset] = useCookies(["access-token"]);

  useEffect(() => {
    history.replace(
      "login?redirect_url=https://developer.dsmkr.com&client_id=e6c15ee16718494f89de21eb19b4aae9"
    );
    if (Rcookie["refresh-token"] !== undefined) {
      axios({
        method: "get",
        url: "/dsmauth/refresh",
        headers: {
          "refresh-token": `Bearer ${Rcookie["refresh-token"]}`,
        },
      })
        .then((res) => {
          Aset("access-token", res.data["access-token"], {
            expires: new Date(Date.now() + 1000 * 60 * 60 * 2),
          });
          history.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const login = (e) => {
    e.preventDefault();
    const { redirect_url, client_id } = query;
    if (!check.current.checked) {
      alert("체크항목을 확인하세요.");
      if (!(id === "" || password === "")) {
        return;
      }
    }
    if (id === "" || password === "") {
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
        window.location.href = res.data.location;
      })
      .catch((err) => {
        switch (err.response.status) {
          case 401:
            alert("아이디나 비밀번호가 틀렸습니다.");
            break;
          default:
            alert("에러가 났습니다 !");
            break;
        }
      });
  };

  if (Object.keys(query).length === 0) return <>Error</>;

  return (
    <S.Section bgColor="black">
      <S.Img
        onClick={() => {
          props.my === true && history.push("/");
        }}
        src={logo}
        width="200"
      />
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={login}
        method="GET"
      >
        <S.InputWrapper>
          <S.Input
            value={id}
            type="text"
            onChange={(e) => setId(e.target.value)}
          />
          <S.Inter id="id1" on={id != "" ? true : false}>
            ID
          </S.Inter>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Input
            value={password}
            type="password"
            onChange={(e) => setPass(e.target.value)}
            style={{ fontSize: "30px", paddingBottom: "5px" }}
          />
          <S.Inter id="password1" on={password != "" ? true : false}>
            PASSWORD
          </S.Inter>
        </S.InputWrapper>
        <S.Agree>
          개인정보 수집 이용 동의
          <S.CheckBox id="asd" type="checkbox" ref={check} />
          <S.Label htmlFor="asd" />
        </S.Agree>
        <LoginButton onSubmit={login} />
      </form>
      <S.LinkA to="/register">계정이 없으신가요?</S.LinkA>
    </S.Section>
  );
};

export default Login;
