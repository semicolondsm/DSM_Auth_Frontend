import React, { useState, useRef, useEffect } from "react";
import * as S from "./styles";

import axios from "axios";
import { useHistory } from "react-router-dom";

import { useCookies } from "react-cookie";

import logo from "../../assets/logo2.png";

import LoginButton from "./LoginButton";

import Loading from "../Public/Loading/Loading";

const Login = (props) => {
    const [id, setId] = useState("");
    const [password, setPass] = useState("");
    const history = useHistory();
    const [Rcookie, Rset] = useCookies(["refresh-token"]);
    const [AToken, Aset] = useCookies(["access-token"]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (Rcookie["refresh-token"] !== undefined) {
            setLoading(true);
            axios({
                method: "get",
                url: "/dsmauth/refresh",
                headers: {
                    "x-refresh-token": `Bearer ${Rcookie["refresh-token"]}`,
                },
            })
                .then((res) => {
                    Aset("access-token", res.data["access_token"], {
                        expires: new Date(Date.now() + 1000 * 60 * 60 * 2),
                    });
                    axios({
                        method: "get",
                        url: "/v1/info/basic",
                        headers: {
                            Authorization: `Bearer ${AToken}`,
                        },
                    })
                        .then((res) => {
                            sessionStorage.setItem(
                                "infor",
                                JSON.stringify(res.data["access_token"])
                            );
                            history.push("/");
                        })
                        .catch((err) => {
                            console.log(err);
                            setLoading(false);
                            history.push("/");
                        });
                })
                .catch((err) => {
                    setLoading(false);
                    console.log(err);
                });
        }
    }, []);

    const login = (e) => {
        e.preventDefault();
        const redirect_url = 'https://dsm-auth.vercel.app/oauth/dsmauth/redirect';
        const client_id = 'e6c15ee16718494f89de21eb19b4aae9';
        if (id === "" || password === "") {
            alert("아이디나 비밀번호를 입력하세요.");
            return;
        }
        setLoading(true);
        axios({
            url: "/dsmauth/login",
            method: "post",
            data: {
                id,
                password,
                redirect_url,
                client_id,
            },
        })
            .then((res) => {
                const code = res.data.location.split("?code=")[1];
                const client_id = 'e6c15ee16718494f89de21eb19b4aae9';
                const client_secret = '3fde1f3dd29f4d3aa81f423c7731b4a9';
                axios({
                    method: "post",
                    url: "/dsmauth/token",
                    data: {
                        code,
                        client_id,
                        client_secret,
                    },
                })
                    .then((res) => {
                        Aset("access-token", res.data["access_token"], {
                            expires: new Date(Date.now() + 1000 * 60 * 60 * 2),
                        });
                        Rset("refresh-token", res.data["refresh_token"], {
                            expires: new Date(
                                Date.now() + 1000 * 60 * 60 * 24 * 14
                            ),
                        });
                        axios({
                            method: "get",
                            url: "/v1/info/basic",
                            headers: {
                                Authorization: `Bearer ${res.data["access_token"]}`,
                            },
                        })
                            .then((res) => {
                                sessionStorage.setItem(
                                    "infor",
                                    JSON.stringify(res.data)
                                );
                                history.push("/");
                            })
                            .catch((err) => {
                                console.log(err);
                                setLoading(false);
                                history.push("/");
                            });
                    })
                    .catch(() => {
                        history.push("/");
                    });
            })
            .catch((err) => {
                setLoading(false);
                switch (err.response.status) {
                    case 401:
                        alert("아이디나 비밀번호가 틀렸습니다.");
                        break;
                    default:
                        alert("에러가 났습니다 !");
                        break;
                }
            });
    };
    return (
        <S.Section bgColor="black">
            {loading && <Loading isOn={loading} />}
            <S.Img
                onClick={() => {
                    props.my === true && history.push("/");
                }}
                src={logo}
                width="200"
            />
            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                onSubmit={login}
                method="GET"
            >
                <S.InputWrapper>
                    <S.Input
                        value={id}
                        type="text"
                        onChange={(e) => setId(e.target.value)}
                        id="id2"
                    />
                    <S.Inter
                        htmlFor="id2"
                        id="id1"
                        on={id != "" ? true : false}
                    >
                        ID
                    </S.Inter>
                </S.InputWrapper>
                <S.InputWrapper>
                    <S.Input
                        value={password}
                        type="password"
                        onChange={(e) => setPass(e.target.value)}
                        style={{ fontSize: "30px", paddingBottom: "5px" }}
                        id="ps1"
                    />
                    <S.Inter
                        htmlFor="ps1"
                        id="password1"
                        on={password != "" ? true : false}
                    >
                        PASSWORD
                    </S.Inter>
                </S.InputWrapper>
                <LoginButton onSubmit={login} />
            </form>
            <S.LinkA to="/register">계정이 없으신가요?</S.LinkA>
        </S.Section>
    );
};

export default Login;
