import React, { useState } from 'react'
import * as S from './styles'

const Menu = ({name, LogOut}) => {
    const [visible, setVisible] = useState(false)

    return (
        <S.MenuWrapper onClick={() => setVisible(!visible)}>
            {name}
            {
                visible === true && (
                    <S.Menu>
                        <button onClick={LogOut}>로그아웃</button>
                    </S.Menu>
                )
            }
        </S.MenuWrapper>
    )
}

export default Menu