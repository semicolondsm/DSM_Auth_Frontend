import React, { useEffect } from "react";
import * as S from "./styles";

import Refractor from "react-refractor";

import { useCookies } from 'react-cookie'

import axios from 'axios'

import queryString from 'query-string'

import { FirstAnimation } from "../../animation";

const MainBody = (props) => {
  const query = queryString.parse(props.location.search);
  const [Acookie, Aset, Aremove] = useCookies(['access-token'])
  const [Rcookie, Rset, Rremove] = useCookies(['refresh-token'])

  useEffect(() => {
    if(query.code) {
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

        Aset('access-token', res.data['access-token'], {expires: new Date(Date.now() + 1000 * 60 * 60 * 2)})
        Rset('refresh-token', res.data['refresh-token'], {expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 14)})
      })
      .catch(err => {
        console.log(err.response)
      })
    }
  }, [])

  useEffect(() => {
    FirstAnimation();
  }, []);

  const source = `
    const foo = 'bar'
    const bar = 'foo'
    const baz = foo + bar
  `;

  return (
    <S.BodyWrapper>
      <S.Section
        id="section1"
        img="https://www.itl.cat/pngfile/big/109-1092015_huge-interstellar-photos-pictures-outer-space.png"
        height="500px"
      >
        <S.ContentBox column></S.ContentBox>
      </S.Section>
      <S.Section id="headerPoint" bgColor="black" height="500px">
        <S.ContentBox></S.ContentBox>
      </S.Section>
      <S.Section bgColor="black" height="500px">
        <S.ContentBox column>
          <S.Title id="first">안녕하세요</S.Title>
        </S.ContentBox>
      </S.Section>
      <S.Section bgColor="black" height="500px">
        <S.ContentBox column>
          <Refractor language="js" value={source} />
        </S.ContentBox>
      </S.Section>
      <S.Section bgColor="black" height="500px">
        <S.ContentBox column></S.ContentBox>
      </S.Section>
      <S.Section bgColor="black" height="500px">
        <S.ContentBox column></S.ContentBox>
      </S.Section>
    </S.BodyWrapper>
  );
};

export default MainBody;
