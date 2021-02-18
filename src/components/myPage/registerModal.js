import * as S from './styles'

import React,{useEffect, useState} from 'react'

const RegisterModal = ({style,setModalOn}) => {

    const [modal,setModal] = useState(style);
    useEffect(()=>{
        setModal(style)
    },[style])

    return (
        <S.ModalWrapper
            style={
                modal?{display:"flex"}
                :modal?{display:"none"}
                :{display:"none"}
            }
        >
            <S.ModalContainer>
                <p>애플리케이션 등록</p>
                <S.ModalLine />
                <S.InputApp
                    placeholder="애플리케이션 이름을 입력하세요."
                />
                <S.ModalLine />
                <S.InputApp
                    placeholder="사이트 도메인을 입력하세요."
                />
                <S.ModalLine />
                <S.InputApp
                    placeholder="리다이렉트 url을 입력하세요."
                />
                <S.ModalLine />
                <S.BtnCont>
                    <button
                        style={{border:"1px solid gray"}}
                        onClick={()=>{setModalOn()}}
                    >취소</button>
                    <button
                        style={{border:"none",backgroundColor:"#713EFF",color:"white"}}
                    >등록</button>
                </S.BtnCont>
            </S.ModalContainer>
        </S.ModalWrapper>
    )
}

export default RegisterModal;