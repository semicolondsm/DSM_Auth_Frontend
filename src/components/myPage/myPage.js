import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { useCookies } from 'react-cookie'

import { useHistory } from 'react-router-dom'

import * as S from './styles'

const MyPage = () => {
    const [infor, setInfor] = useState([])
    const [Acookie] = useCookies(['access-token'])
    const history = useHistory()
    
    useEffect(() => {
        if(!Acookie['access-token']) {
            history.push('/')
        }

        axios({
            method: 'get',
            url: '/myservice',
            headers: {
                'access-token': `Bearer ${Acookie['access-token']}`
            }
        })
        .then(res => {
            console.log(res)
            setInfor(res.data)
        })
        .catch(err => {
            console.log(err.response)
        })
    }, [])

    if(infor.length === 0) return <></>

    return (
        <S.Wrapper>
            <S.ContentWrapper>
                {
                    infor.map(inf => (
                        <>
                            {
                                inf.name
                            }<br />
                            {
                                inf.domain_url
                            }<br />
                            {
                                inf.client_id
                            }<br />
                            {
                                inf.client_secret
                            }
                            <br />
                            <br />
                        </>
                    ))
                }
            </S.ContentWrapper>
        </S.Wrapper>
    )
}

export default MyPage