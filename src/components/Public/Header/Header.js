import React from 'react'
import * as S from './styles'

import logo from '../../../assets/logo-removebg-preview.png'

const Header = () => {
    return (
        <S.HeaderWrapper>
            <S.LogoImg src={logo} />
            <S.NaviWrapper>
                <S.NaviWrapper>
                    <S.LinkStyle to="/asd" activeStyle={{color: "#350871"}}></S.LinkStyle>
                    <S.LinkStyle to="/qwe" activeStyle={{color: "#350871"}}>Open API</S.LinkStyle>
                </S.NaviWrapper>
                <S.NaviWrapper>
                    <S.LinkStyle to="/agq" activeStyle={{color: "#350871"}}>로그인</S.LinkStyle>
                    <S.LinkStyle to="/zxc" activeStyle={{color: "#350871"}}>회원가입</S.LinkStyle>
                </S.NaviWrapper>
            </S.NaviWrapper>
        </S.HeaderWrapper>
    )
}

export default Header