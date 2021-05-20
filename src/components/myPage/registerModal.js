import * as S from "./styles";

import { useCookies } from "react-cookie";

import axios from "axios";

import React, { useEffect, useState } from "react";

import Loading from "../Public/Loading/Loading";

import { useHistory } from "react-router-dom";

const RegisterModal = ({ style, setModalOn }) => {
    const [Acookie, removeA] = useCookies(["access-token"]);
    const history = useHistory();
    const [AppValue, setValue] = useState({
        name: "",
        domain: "",
        url: "",
    });
    const [modal, setModal] = useState(style);
    useEffect(() => {
        setModal(style);
    }, [style]);
    const [loading, setLoading] = useState(false);
    const InputVal = (e) => {
        const { name, value } = e.target;
        setValue({
            ...AppValue,
            [name]: value,
        });
    };

    const registerApp = () => {
        if (
            /^https\:\/\/|http\:\/\//.exec(AppValue.domain) === null ||
            /^https\:\/\/|http\:\/\//.exec(AppValue.url) === null
        ) {
            alert("도메인이나 리다이렉트 URL이 유효하지 않습니다 !");
            return;
        }
        setLoading(true);
        if (loading) {
            alert("등록 중 입니다.");
            return;
        }
        axios({
            method: "post",
            url: "/consumer/registration",
            headers: {
                Authorization: `Bearer ${Acookie["access-token"]}`,
            },
            data: {
                consumer: AppValue.name,
                domain_url: AppValue.domain,
                redirect_url: AppValue.url,
            },
        })
            .then(() => {
                window.location.href = "/mypage";
                sessionStorage.removeItem("services");
                /*             history.replace('/api') */
            })
            .catch((err) => {
                setLoading(false);
                switch (err.response.status) {
                    case 401:
                        removeA("access-token");
                        history.replace("/");
                        alert("다시 로그인 하세요");
                    default:
                        alert("서버 에러");
                        return;
                }
            });
    };

    return (
        <>
            {loading && <Loading isOn={loading} />}
            <S.ModalWrapper
                style={
                    modal
                        ? { display: "flex" }
                        : modal
                        ? { display: "none" }
                        : { display: "none" }
                }
                onClick={() => {
                    setModalOn();
                }}
            />
            <S.ModalContainer
                style={
                    modal
                        ? { display: "flex" }
                        : modal
                        ? { display: "none" }
                        : { display: "none" }
                }
            >
                <h2>애플리케이션 등록</h2>
                <S.ModalLine />
                <S.InputApp
                    placeholder="애플리케이션 이름을 입력하세요."
                    onChange={InputVal}
                    name="name"
                    value={AppValue.name}
                />
                <S.ModalLine />
                <S.InputApp
                    placeholder="사이트 도메인을 입력하세요."
                    onChange={InputVal}
                    name="domain"
                    value={AppValue.domain}
                />
                <S.ModalLine />
                <S.InputApp
                    placeholder="리다이렉트 url을 입력하세요."
                    onChange={InputVal}
                    name="url"
                    value={AppValue.url}
                />
                <S.ModalLine />
                <S.BtnCont>
                    <button
                        style={{ border: "1px solid gray" }}
                        onClick={setModalOn}
                    >
                        취소
                    </button>
                    <button
                        style={{
                            border: "none",
                            backgroundColor: "#713EFF",
                            color: "white",
                        }}
                        onClick={registerApp}
                    >
                        등록
                    </button>
                </S.BtnCont>
            </S.ModalContainer>
        </>
    );
};

export default RegisterModal;
