import React, { useState, useEffect } from "react";
import * as S from "./styles";

import banner from "../../assets/banner.jpg";
import icon from "../../assets/icon.svg";
import arrow from "../../assets/right-arrow.svg";

import axios from "axios";

import { useHistory } from "react-router-dom";

import { SlideShow, Welcome, Count, AutoScroll } from "../../animation";

const Me = [
  "매번 프로젝트에서 로그인을 만들라니까 너무 귀찮아요.",
  "프로젝트를 이용하는데 매번 계정을 만들기 힘들어요.",
  "아니 귀찮다고",
];

const MainBody = (props) => {
  const [list, setList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    SlideShow();
    Welcome();
    axios({
      method: "get",
      url: "/consumer/list",
    })
      .then((res) => {
        Count(res.data.length);
        setList(res.data);
        sessionStorage.setItem("list", JSON.stringify(res.data));
        AutoScroll();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
              <S.SButton
                onClick={() => props.switchPage(null)}
                color="white"
                bgColor="#132FB8"
              >
                Open API
              </S.SButton>
              <S.SButton onClick={() => history.push("/register")}>
                회원가입
              </S.SButton>
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
                <S.ApiButton
                  onClick={() =>
                    (window.location.href =
                      "https://bintray.com/jaewonkim1468/dsm-sdk-v1/dsmauth")
                  }
                >
                  시작하기
                </S.ApiButton>
                <S.ApiButton onClick={() => props.switchPage("android")}>
                  문서보기
                </S.ApiButton>
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
                <S.ApiButton
                  onClick={() =>
                    (window.location.href = "https://cocoapods.org/pods/DSMSDK")
                  }
                >
                  시작하기
                </S.ApiButton>
                <S.ApiButton onClick={() => props.switchPage("ios")}>
                  문서보기
                </S.ApiButton>
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
                <S.ApiButton onClick={() => props.switchPage("api")}>
                  문서보기
                </S.ApiButton>
              </div>
            </S.ApiBox>
            <S.ApiBox>
              <S.ApiTitle>
                시작하기
                <S.ApiDes>모든 문서를 한눈에 보고 쉽게 사용해보세요.</S.ApiDes>
              </S.ApiTitle>
              <S.ApiButton onClick={() => props.switchPage("start")} only>
                문서보기
              </S.ApiButton>
            </S.ApiBox>
          </S.ApiBoxWrapper>
        </S.ContentBox>
      </S.Section>
      <S.Section id="slidePoint" bgColor="black" height="auto">
        <S.ContentBox stair column nono>
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
                    <img width="60" height="60" src={icon} alt="Person Icon" />
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
            {list.length != 0 && Array.isArray(list)
              ? list.map((val) => (
                  <S.Item>
                    <span>{val.name}</span>
                    <a style={{ color: "white" }} href={val.domain_url}>
                      {val.domain_url}
                    </a>
                  </S.Item>
                ))
              : Array.apply(null, Array(5)).map((temp, i) => (
                  <S.LoadingItem index={i}>
                    <span
                      style={{
                        width: "250px",
                        height: "100%",
                        background: "#222222",
                        borderRadius: "3px",
                      }}
                    >
                      ㅤ
                    </span>
                    <span
                      style={{
                        width: "250px",
                        height: "100%",
                        background: "#222222",
                        borderRadius: "3px",
                      }}
                    >
                      ㅤ
                    </span>
                  </S.LoadingItem>
                ))}
          </S.ListWrapper>
        </S.ContentBox>
      </S.Section>
      <S.Section bgColor="black" height="auto">
        <S.ContentBox stair column>
          <S.ContentTitle>Other Information</S.ContentTitle>
          <S.SFlexBox bet>
            <S.ProfileBox
              onClick={() =>
                (window.location.href = "https://semicolondsm.xyz")
              }
            >
              <S.ProfileImg
                size="auto 100%"
                src="https://cdn.pixabay.com/photo/2017/02/26/00/36/borders-2099226_960_720.png"
                alt="Semicolon Logo"
              />
              <S.ProfileBottom>
                <S.ProfileTitle>Semicolon; 대동여지도</S.ProfileTitle>
                <S.ProfileSub href="https://semicolondsm.xyz">
                  semicolon.xyz
                </S.ProfileSub>
                <S.Arrow>
                  <img width="auto" height="40px" src={arrow} />
                </S.Arrow>
              </S.ProfileBottom>
            </S.ProfileBox>
            <S.ProfileBox
              onClick={() =>
                (window.location.href = "https://github.com/semicolonDSM")
              }
            >
              <S.ProfileImg
                size="90% auto"
                src="https://cdn.pixabay.com/photo/2014/07/15/23/36/github-394322__340.png"
                alt="Github"
              />
              <S.ProfileBottom>
                <S.ProfileTitle>Semicolon; Github</S.ProfileTitle>
                <S.ProfileSub href="https://github.com/semicolonDSM">
                  github.com/semicolonDSM
                </S.ProfileSub>
                <S.Arrow>
                  <img width="auto" height="40px" src={arrow} />
                </S.Arrow>
              </S.ProfileBottom>
            </S.ProfileBox>
            <S.ProfileBox
              onClick={() =>
                (window.location.href = "https://ko.wikipedia.org/wiki/OAuth")
              }
            >
              <S.ProfileImg
                size="100% auto"
                src="https://cdn.pixabay.com/photo/2015/10/31/11/59/information-1015298__340.jpg"
                alt="OAuth"
              />
              <S.ProfileBottom>
                <S.ProfileTitle>OAuth란?</S.ProfileTitle>
                <S.ProfileSub href="https://ko.wikipedia.org/wiki/OAuth">
                  ko.wikipedia.org/wiki/OAuth
                </S.ProfileSub>
                <S.Arrow>
                  <img width="auto" height="40px" src={arrow} />
                </S.Arrow>
              </S.ProfileBottom>
            </S.ProfileBox>
            <S.ProfileBox
              onClick={() =>
                (window.location.href =
                  "https://ko.wikipedia.org/wiki/%EC%8C%8D%EB%B0%98%EC%A0%90")
              }
            >
              <S.ProfileImg
                size="auto 100%"
                src="https://cdn.pixabay.com/photo/2015/11/06/12/51/news-1027337__340.jpg"
                alt="Semicolon mean"
              />
              <S.ProfileBottom>
                <S.ProfileTitle>Semicolon; 의 뜻</S.ProfileTitle>
                <S.ProfileSub href="https://ko.wikipedia.org/wiki/%EC%8C%8D%EB%B0%98%EC%A0%90">
                  ko.wikipedia.org/wiki/%EC%8C%8D%EB%B0%98%EC%A0%90
                </S.ProfileSub>
                <S.Arrow>
                  <img width="auto" height="40px" src={arrow} />
                </S.Arrow>
              </S.ProfileBottom>
            </S.ProfileBox>
          </S.SFlexBox>
        </S.ContentBox>
      </S.Section>
    </S.BodyWrapper>
  );
};

export default MainBody;
