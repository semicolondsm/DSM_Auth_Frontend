import React, { useEffect, useState } from 'react'

import { useHistory } from 'react-router-dom'

import { useCookies } from 'react-cookie'

import axios from 'axios'

import * as S from './styles'

const Api = () => {
    const history = useHistory()
    const [Acookie] = useCookies(['access-token'])
    const [list, setList] = useState([])

    const movePage = () => {
        if(Acookie['access-token'] == undefined) {
            alert("로그인을 해주세요 !")
            return
        }

        history.push("/consumer")
    }

    useEffect(() => {
        axios({
            method: 'get',
            url: '/consumer/list',  
        })
        .then(res => {
            console.log(res)
            setList(res.data)
        })
        .catch(err => {
            console.log(err.response)
        })
    }, [])

    return (
        <S.Wrapper>
            <S.Section center bgColor="black" height="500px">
                <S.ListWrapper>
                    {
                        list.length != 0 && list.map(val => (
                            <S.Item>
                                <span>{val.name}</span>
                                <span>{val.domain_url}</span>
                            </S.Item>
                        ))
                    }
                </S.ListWrapper>
            </S.Section>
            <S.Section center id="headerPoint" height="500px">
                <S.Button onClick={movePage}>사용자 등록하기</S.Button>
            </S.Section>
            <S.Section height="500px">
                
            </S.Section>
            <S.Section height="500px">
                
            </S.Section>
        </S.Wrapper>
    )
}

export default Api