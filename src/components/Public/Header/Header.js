import React, { useState, useEffect } from "react";
import * as S from "./styles";

import { HeaderAnimation } from "../../../animation";

import { useHistory } from "react-router-dom";

import logo from "../../../assets/ass.svg";

const Header = () => {
  const history = useHistory();

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
          <S.LinkStyle to="/login" activeStyle={{ color: "#350871" }}>
            로그인
          </S.LinkStyle>
          <S.LinkStyle to="/register" activeStyle={{ color: "#350871" }}>
            회원가입
          </S.LinkStyle>
        </S.NaviWrapper>
      </S.NaviWrapper>
    </S.HeaderWrapper>
  );
};

export default Header;
