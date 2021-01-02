import React, { useState, useEffect } from "react";
import * as S from "./styles";

import { HeaderAnimation } from "../../../animation";

import { useHistory } from "react-router-dom";

import logo from "../../../assets/ass.svg";

const Header = ({login, LogOut}) => {
  const history = useHistory();
  const [log, setLog] = useState(false)
  const loginURI = "/login"

  useEffect(() => {
    if(login === true) {
      setLog(true)
    } else {
      setLog(false)
    }
  }, [login])

  useEffect(() => {
    HeaderAnimation();
  }, []);

  return (
    <S.HeaderWrapper id="header">
      <S.LogoImg
        src={logo}
        onClick={() => {
          history.push("/");
        }}
      />
      <S.NaviWrapper>
        <S.NaviWrapper>
          <S.LinkStyle to="/api" activeStyle={{ color: "#350871" }}>
            Open API
          </S.LinkStyle>
        </S.NaviWrapper>
        <S.NaviWrapper>
          {
            log === false ? (
              <S.LinkStyle to={loginURI} activeStyle={{ color: "#350871" }}>로그인</S.LinkStyle>
            ) : (
              <S.LinkStyleButton onClick={LogOut}>로그아웃</S.LinkStyleButton>
            )
          }
        </S.NaviWrapper>
      </S.NaviWrapper>
    </S.HeaderWrapper>
  );
};

export default Header;
