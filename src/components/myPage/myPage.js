import React, { useState, useEffect } from "react";

import axios from "axios";

import { useCookies } from "react-cookie";

import { useHistory } from "react-router-dom";

import RegisterModal from "./registerModal";

import * as S from "./styles";

const MyPage = (props) => {
  const [Acookie] = useCookies(["access-token"]);
  const history = useHistory();
  const [infor, setInfor] = useState([]);
  const [myinfor, setMyinfor] = useState({});
  const [modal, modalOn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  // 마이페이지 토큰 없으면 접근 불가....
  useEffect(() => {
    if (!Acookie["access-token"]) {
      alert("토큰 만료 !");
      window.location.href = "/";
    }
    if (!sessionStorage.getItem("infor")) {
      setLoading(true);
      axios({
        method: "get",
        url: "/v1/info/basic",
        headers: {
          "access-token": `Bearer ${props.AToken}`,
        },
      })
        .then((res) => {
          setMyinfor(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log(JSON.parse(sessionStorage.getItem("infor")));
      setMyinfor(JSON.parse(sessionStorage.getItem("infor")));
    }

    if (!sessionStorage.getItem("services")) {
      setLoading2(true);
      axios({
        method: "get",
        url: "/myservice",
        headers: {
          "access-token": `Bearer ${Acookie["access-token"]}`,
        },
      })
        .then((res) => {
          setInfor(res.data);
          setLoading2(false);
          sessionStorage.setItem("services", JSON.stringify(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setInfor(JSON.parse(sessionStorage.getItem("services")));
    }
  }, []);

  const ModalOn = () => {
    modalOn(!modal);
  };

  return (
    <>
      <RegisterModal style={modal} setModalOn={ModalOn} />
      {loading || loading2 ? (
        <S.Wrapper>
          <S.MyContainer>
            <S.UserName>
              <span>ㅤㅤㅤ</span>
              <b>
                <span>ㅤㅤㅤㅤ</span>
              </b>
            </S.UserName>
            <S.UserEmail>
              <span>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</span>
            </S.UserEmail>
            <S.UserApp>
              내가 등록한 애플리케이션
              <S.AddApp onClick={ModalOn}>+</S.AddApp>
            </S.UserApp>
            {Array.apply(null, new Array(3)).map(() => (
              <S.Application>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                  }}
                >
                  <span>ㅤㅤㅤㅤㅤㅤㅤ</span>
                  <span style={{ fontSize: "16px" }}>
                    <span>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</span>
                  </span>
                </p>
                <S.AppDetail>
                  <p>
                    <span>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</span>
                  </p>
                  <p>
                    <span>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</span>
                  </p>
                  <p>
                    <span>ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</span>
                  </p>
                </S.AppDetail>
              </S.Application>
            ))}
          </S.MyContainer>
        </S.Wrapper>
      ) : (
        <S.Wrapper>
          <S.MyContainer>
            <S.UserName>
              {myinfor.name}
              <b>{myinfor.gcn}</b>
            </S.UserName>
            <S.UserEmail>{myinfor.email}</S.UserEmail>
            <S.UserApp>
              내가 등록한 애플리케이션
              <S.AddApp onClick={ModalOn}>+</S.AddApp>
            </S.UserApp>
            {infor.length === 0 && (
              <S.NoneApp>아직 등록된 애플리케이션이 없습니다!</S.NoneApp>
            )}

            {infor.map(
              (
                { name, domain_url, redirect_url, client_secret, client_id },
                index
              ) => (
                <S.Application key={index}>
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                    }}
                  >
                    {name}
                    <p style={{ fontSize: "16px", margin: 0 }}>
                      클라이언트 아이디: {client_id}
                    </p>
                  </p>
                  <S.AppDetail>
                    <p>도메인 : {domain_url}</p>
                    <p>리다이렉트 도메인 : {redirect_url}</p>
                    <p>서비스 시크릿 코드 : {client_secret}</p>
                  </S.AppDetail>
                </S.Application>
              )
            )}
          </S.MyContainer>
        </S.Wrapper>
      )}
    </>
  );
};

export default MyPage;
