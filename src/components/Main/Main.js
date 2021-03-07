import React, { useEffect, useState } from "react";
import Api from "../Api/Api";
import MainBody from "./MainBody";
import Mypage from "../myPage/myPage";

import * as S from "./styles";

import { Route, Switch } from "react-router-dom";

import { Header } from "../Public";

import { useCookies } from "react-cookie";

import { useHistory } from "react-router-dom";

import axios from "axios";

import queryString from "query-string";

const Main = (props) => {
  const query = queryString.parse(props.location.search);
  const [Acookie, Aset, Aremove] = useCookies(["access-token"]);
  const [Rcookie, Rset, Rremove] = useCookies(["refresh-token"]);
  const [loginState, setLogin] = useState(false);
  const [number, setNumber] = useState(null);
  const history = useHistory();

  useEffect(() => {
    window.onkeydown = function (event) {
      const kcode = event.keyCode;
      if (kcode === 116) {
        history.replace(window.location.pathname);
      }
    };
    if (Acookie["access-token"] !== undefined) {
      setLogin(true);
    }
  }, []);

  const LogOut = () => {
    Aremove("access-token");
    Rremove("refresh-token");
    sessionStorage.removeItem("infor");
    sessionStorage.removeItem("services");

    setLogin(false);

    history.push("/");
  };

  const switchPage = (name) => {
    let page = "";
    switch (name) {
      case "android":
        setNumber(1);
        page = 2;
        break;
      case "ios":
        setNumber(2);
        page = 3;
        break;
      case "api":
        setNumber(3);
        page = 4;
        break;
      case "start":
        setNumber(0);
        page = 1;
        break;
      default:
        setNumber(null);
        page = "";
        break;
    }
    history.push(`/docs/${page}`);
  };

  return (
    <>
      <S.Wrapper>
        <Header
          AToken={Acookie["access-token"]}
          login={loginState}
          LogOut={LogOut}
          switchPage={switchPage}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <MainBody switchPage={switchPage} />}
          />
          <Route path="/docs" render={() => <Api number={number} />} />
          <Route
            path="/mypage"
            render={() => <Mypage AToken={Acookie["access-token"]} />}
          />
        </Switch>
      </S.Wrapper>
    </>
  );
};

export default Main;
