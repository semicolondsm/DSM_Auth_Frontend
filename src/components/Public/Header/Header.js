import React, { useState, useEffect } from "react";
import * as S from "./styles";

import { HeaderAnimation } from "../../../animation";

import { useHistory } from "react-router-dom";

import logo from "../../../assets/ass.svg";
import logo2 from "../../../assets/logo.png";
import logo3 from "../../../assets/logo2.png";

import Menu from "./Menu";

import axios from "axios";

const Header = ({ login, LogOut, AToken, switchPage }) => {
    const history = useHistory();
    const [log, setLog] = useState(false);
    const [name, setName] = useState("");
    const loginURI = "/login";

    useEffect(() => {
        if (login === true) {
            setLog(true);
            if (!sessionStorage.getItem("infor")) {
                axios({
                    method: "get",
                    url: "/v1/info/basic",
                    headers: {
                        Authorization: `Bearer ${AToken}`,
                    },
                })
                    .then((res) => {
                        setName(res.data.name);
                        sessionStorage.setItem(
                            "infor",
                            JSON.stringify(res.data)
                        );
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                const infor = JSON.parse(sessionStorage.getItem("infor"));
                setName(infor.name);
            }
        } else {
            setLog(false);
        }
    }, [login]);

    useEffect(() => {
        if (window.location.pathname === "/") {
            HeaderAnimation();
            document.getElementById("header").style.height = "85px";
        } else {
            document.getElementById("header").style.background =
                "rgba(26, 26, 28, 1)";
            document.getElementById("header").style.height = "70px";
        }
    });

    return (
        <S.HeaderWrapper id="header">
            <S.HeaderContent>
                <S.LogoImg
                    src={logo3}
                    onClick={() => {
                        history.push("/");
                    }}
                    style={{ height: "75%" }}
                />
                <S.NaviWrapper>
                    <S.NaviWrapper>
                        <S.LinkStyle
                            to="/docs"
                            activeStyle={{ color: "#350871" }}
                            onClick={() => switchPage(null)}
                        >
                            Open API
                        </S.LinkStyle>
                    </S.NaviWrapper>
                    <S.NaviWrapper>
                        {log === false ? (
                            <S.LinkStyle
                                to={loginURI}
                                activeStyle={{ color: "#350871" }}
                            >
                                로그인
                            </S.LinkStyle>
                        ) : (
                            <Menu name={name} LogOut={LogOut} />
                        )}
                    </S.NaviWrapper>
                </S.NaviWrapper>
            </S.HeaderContent>
        </S.HeaderWrapper>
    );
};

export default Header;
