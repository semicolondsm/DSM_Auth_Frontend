import React, { useState, useEffect } from "react";
import * as S from "./styles";

import { HeaderAnimation } from "../../../animation";

import { useHistory } from "react-router-dom";

import logo from "../../../assets/ass.svg";

import Menu from './Menu'

import axios from 'axios'

const Header = ({login, LogOut, AToken}) => {
  const history = useHistory();
  const [log, setLog] = useState(false)
  const [name, setName] = useState('')
  const loginURI = "/login"

  useEffect(() => {
    if(login === true) {
      setLog(true)
      if(sessionStorage.getItem('name') == undefined) {
        axios({
          method: 'get',
          url: 'http://54.180.98.91:8090/v1/info/basic',
          headers: {
            'access-token': `Bearer ${AToken}`
          }
        })
        .then(res => {
          console.log(res)
          setName(res.data.name)
        })
        .catch(err => {
          console.log(err.response)
        })
      } else {
        setName(sessionStorage.getItem('name'))
      }
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
              <Menu name={name} LogOut={LogOut} />
            )
          }
        </S.NaviWrapper>
      </S.NaviWrapper>
    </S.HeaderWrapper>
  );
};

export default Header;
