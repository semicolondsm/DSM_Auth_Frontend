import React, { useEffect, useState } from "react";
import Api from "../Api/Api";
import MainBody from "./MainBody";
import Consumer from '../consumer/Consumer'

import * as S from "./styles";

import { Route, Switch } from "react-router-dom";

import { Header } from "../Public";

import { useCookies } from 'react-cookie'

import { useHistory } from 'react-router-dom'

import axios from 'axios'

import queryString from 'query-string'

const Main = (props) => { 
  const query = queryString.parse(props.location.search);
  const [Acookie, Aset, Aremove] = useCookies(['access-token'])
  const [Rcookie, Rset, Rremove] = useCookies(['refresh-token'])
  const [loginState, setLogin] = useState(false)
  const history = useHistory()

  useEffect(() => {
    window.onkeydown = function(event) {
      const kcode = event.keyCode;
      if(kcode == 116) {
        history.replace(window.location.pathname)
      }
    }

    if(query.code && (Acookie['access-token'] === undefined && Rcookie['refresh-token'] === undefined )) {
      axios({
        method: 'post',
        url: '/dsmauth/token',
        data: {
          code: query.code,
          client_id: "123456",
          client_secret: "1234"
        }
      })
      .then(res => {
        console.log(res)
        setLogin(true)

        Aset('access-token', res.data['access-token'], {expires: new Date(Date.now() + 1000 * 60 * 60 * 2)})
        Rset('refresh-token', res.data['refresh-token'], {expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 14)})
      })
      .catch(err => {
        console.log(err.response)
      })
    } else if(Acookie['access-token'] !== undefined) {
      setLogin(true)
    }
  }, [])

  const LogOut = () => {
    Aremove('access-token')
    Rremove('refresh-token')

    setLogin(false)

    history.push('/')
  }

  return (
    <>
      <S.Wrapper>
        <Header login={loginState} LogOut={LogOut} />
        <Switch>
          <Route exact path="/" component={MainBody} />
          <Route path="/api" component={Api} />
          <Route path="/consumer" component={Consumer} />
        </Switch>
      </S.Wrapper>
    </>
  );
};

export default Main;
