import React, {useState} from 'react'
import * as S  from './styles'

import {useCookies} from 'react-cookie'

import axios from 'axios'

import {useHistory} from 'react-router-dom'

import logo from '../../assets/ass.svg'

const Consumer = () => {
    const [name, setName] = useState('')
    const [domain, setDomain] = useState('')
    const [redirect, setRedirect] = useState('')
    const [Acookie, Aset, Aremove] = useCookies(['access-token'])
    const history = useHistory()

    const register = () => {
        axios({
            method: 'post',
            url: '/consumer/registration',
            headers: {
                'access-token': `Bearer ${Acookie['access-token']}`
            },
            data: {
                consumer: name,
                domain_url: domain,
                redirect_url: redirect
            }
        })
        .then(res => {
            console.log(res)
            history.replace('/api')
        })
        .catch(err => {
            console.log(err.response)
        })
    }

    return (
        <S.BodyWrapper>
            <S.Logo onClick={() => history.replace('/api')} src={logo} />
            <S.ContentWrapper>
                <S.Header>사용자 등록하기</S.Header>
                <S.InputBox value={name} onChange={e => setName(e.target.value)} type="text" placeholder="서비스 이름을 입력해주세요." />
                <S.InputBox value={domain} onChange={e => setDomain(e.target.value)} type="text" placeholder="도메인을 입력해주세요." />
                <S.InputBox value={redirect} onChange={e => setRedirect(e.target.value)} type="text" placeholder="Redirect_URL을 입력해주세요." />
                <S.Button onClick={register}>등록하기</S.Button>
            </S.ContentWrapper>
        </S.BodyWrapper>
    )
}

export default Consumer