import React, { useState, useEffect } from "react";
import * as S from "./styles";

import { HeaderAnimation } from "../../../animation";

import { useHistory } from "react-router-dom";

import { useCookies } from 'react-cookie'

import logo from "../../../assets/ass.svg";

const Header = (props) => {
  const history = useHistory();
  const [Acookie, Aset, Aremove] = useCookies(['access-token'])
  const [Rcookie, Rset, Rremove] = useCookies(['refresh-token'])
  const [log, setLog] = useState(false)

  useEffect(() => {
    if(Acookie['access-token'] !== undefined || Rcookie['refresh-token'] !== undefined) {
      setLog(true)
    }
  }, [])

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
          <S.LinkStyle to={log === false ? "/login" : "/consumer"} activeStyle={{ color: "#350871" }}>
            {
              log === false ? "로그인" : "사용자 등록하기"
            }
          </S.LinkStyle>
        </S.NaviWrapper>
      </S.NaviWrapper>
    </S.HeaderWrapper>
  );
};

export default Header;
