import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { useCookies } from 'react-cookie'

import * as S from './styles'

const MyPage = () => {
    const [infor, setInfor] = useState([])
    const [Acookie] = useCookies(['access-token'])

    useEffect(() => {
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

    return (
        <S.Wrapper>
            
        </S.Wrapper>
    )
}

export default MyPage