import React from 'react'

import { useHistory } from 'react-router-dom'

import * as S from './styles'

const Api = () => {
    const history = useHistory()

    return (
        <S.Wrapper>
            <S.Section center bgColor="black" height="500px">
                <S.ListWrapper>

                </S.ListWrapper>
            </S.Section>
            <S.Section center id="headerPoint" height="500px">
                <S.Button onClick={() => history.push("/consumer")}>사용자 등록하기</S.Button>
            </S.Section>
            <S.Section height="500px">
                
            </S.Section>
            <S.Section height="500px">
                
            </S.Section>
        </S.Wrapper>
    )
}

export default Api