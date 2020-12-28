import React from "react";
import Api from "../Api/Api";
import MainBody from "./MainBody";
import Consumer from '../consumer/Consumer'

import * as S from "./styles";

import { Route, Switch } from "react-router-dom";

import { Header } from "../Public";

const Main = () => {
  return (
    <>
      <S.Wrapper>
        <Header />
        <Switch>
          <Route exact path="/" component={MainBody} />
          <Route path="/api" component={Api} />
          <Route path="/comsumer" component={Consumer} />
        </Switch>
      </S.Wrapper>
    </>
  );
};

export default Main;
