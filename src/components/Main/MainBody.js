import React, { useState, useEffect } from "react";
import * as S from "./styles";

import Refractor from "react-refractor";

import banner from "../../assets/banner.jpg";
import icon from "../../assets/icon.svg";
import axios from "axios";

import {
  FirstAnimation,
  SlideShow,
  Welcome,
  Count,
  AutoScroll,
} from "../../animation";

const Me = [
  "매번 프로젝트에서 로그인을 만들라니까 너무 귀찮아요.",
  "프로젝트를 이용하는데 매번 계정을 만들기 힘들어요.",
  "아니 귀찮다고",
];

const MainBody = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    FirstAnimation();
    SlideShow();
    Welcome();
    AutoScroll();
    axios({
      method: "get",
      url: "/consumer/list",
    })
      .then((res) => {
        Count(res.data.length);
        setList(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const source = `
    const foo = 'bar'
    const bar = 'foo'
    const baz = foo + bar
  `;

  return (
    <S.BodyWrapper>
      <S.Section id="section1" img={banner} height="500px">
        <S.ContentBox column>
          <S.H1Box id="welcome">
            DSM Auth에 오신 것을 환영합니다.
            <br />
            저희 DSM Auth에서는 마이스터고등학교 OAuth 서비스를
            <br />
            제공하고 있습니다. 지금 바로 사용해보세요 !
            <S.ButtonBox>
              <S.SButton color="white" bgColor="#132FB8">
                Open API
              </S.SButton>
              <S.SButton>로그인</S.SButton>
            </S.ButtonBox>
          </S.H1Box>
        </S.ContentBox>
      </S.Section>
      <S.Section className="headerPoint" bgColor="black" height="auto">
        <S.ContentBox stair column>
          <S.ContentTitle>DSM Auth Services</S.ContentTitle>
          <S.ApiBoxWrapper>
            <S.ApiBox>
              <S.ApiTitle>
                Android SDK
                <S.ApiDes>
                  안드로이드 개발중 DSM Auth를 더욱 쉽게 사용해보세요.
                </S.ApiDes>
              </S.ApiTitle>
              <div>
                <S.ApiButton>시작하기</S.ApiButton>
                <S.ApiButton>문서보기</S.ApiButton>
              </div>
            </S.ApiBox>
            <S.ApiBox>
              <S.ApiTitle>
                iOS SDK
                <S.ApiDes>
                  iOS 개발중 DSM Auth를 더욱 쉽게 사용해보세요.
                </S.ApiDes>
              </S.ApiTitle>
              <div>
                <S.ApiButton>시작하기</S.ApiButton>
                <S.ApiButton>문서보기</S.ApiButton>
              </div>
            </S.ApiBox>
            <S.ApiBox>
              <S.ApiTitle>
                DSM Auth API
                <S.ApiDes>
                  DSM Auth의 Open API를 확인하고 쉽게 사용해보세요.
                </S.ApiDes>
              </S.ApiTitle>
              <div>
                <S.ApiButton>시작하기</S.ApiButton>
                <S.ApiButton>문서보기</S.ApiButton>
              </div>
            </S.ApiBox>
            <S.ApiBox>
              <S.ApiTitle>
                시작하기
                <S.ApiDes>모든 문서를 한눈에 보고 쉽게 사용해보세요.</S.ApiDes>
              </S.ApiTitle>
              <S.ApiButton only>문서보기</S.ApiButton>
            </S.ApiBox>
          </S.ApiBoxWrapper>
        </S.ContentBox>
      </S.Section>
      <S.Section id="slidePoint" bgColor="black" height="auto">
        <S.ContentBox stair column>
          <S.ContentTitle>
            Made By <span style={{ fontWeight: 700 }}>Semicolon;</span>
          </S.ContentTitle>
          <S.SFlexBox center bet>
            <S.SDes id="madeSec">
              이런 문제점들을 DSM Auth가 해결합니다.
              <br /> Semicolon;이 만들어 나갑니다.
            </S.SDes>
            <S.HalfBox height="500px">
              <S.SFlexBox col bet>
                {Me.map((message, i) => (
                  <S.MBox className="aM" i={i}>
                    <img width="60" height="60" src={icon} />
                    <p style={{ margin: "0 0 0 10px" }}>{message}</p>
                  </S.MBox>
                ))}
              </S.SFlexBox>
            </S.HalfBox>
          </S.SFlexBox>
        </S.ContentBox>
      </S.Section>
      <S.Section bgColor="black" height="auto">
        <S.ContentBox stair column>
          <S.BigTitle>
            현재 <span id="count">0</span>개의 서비스가 DSM Auth와 함께합니다.
          </S.BigTitle>
          <S.ListWrapper id="scrollWrap">
            {list.length != 0 &&
              list.map((val) => (
                <S.Item>
                  <span>{val.name}</span>
                  <a style={{ color: "white" }} href={val.domain_url}>
                    {val.domain_url}
                  </a>
                </S.Item>
              ))}
          </S.ListWrapper>
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
