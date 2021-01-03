import React, { useState } from 'react'
import * as S from './styles'

const Menu = ({name}) => {
    const [visible, setVisible] = useState(false)

    return (
        <S.MenuWrapper onClick={() => setVisible(!visible)}>
            {name}
            {
                visible === true && (
                    <S.Menu>

                    </S.Menu>
                )
            }
        </S.MenuWrapper>
    )
}

export default Menu