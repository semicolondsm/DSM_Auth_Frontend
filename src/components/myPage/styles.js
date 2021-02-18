import styled from 'styled-components'

export const Wrapper = styled.div`
    width:100%;
    height:100vh;
    min-height:500px;
    background:linear-gradient(#151717,black);
`

export const MyContainer = styled.div`
    padding:6% 20%;
`

export const UserName = styled.p`
    color:white;
    font-family:나눔스퀘어;
    font-size:6vmin;
    margin-bottom:0;
    b{
        font-size:2.5vmin;
        padding: 0 10px;
        color:#C4C4C4;
        font-weight:500;
    }
`

export const UserEmail = styled.p`
    color:#C4C4C4;
    font-size:2.3vmin;
    letter-spacing:1px;
`

export const UserApp = styled.div`
    display:flex;
    color:white;
    margin-top:7%;
    font-size:3vmin;
    align-items:center;
`

export const AddApp = styled.button`
    width:5vmin;
    height:5vmin;
    margin-left:1%;
    cursor:pointer;
    background-color:#713EFF;
    border:none;
    border-radius:3px;
    color:white;
    font-size:4vmin;
    outline:none;
`

export const NoneApp = styled.div`
    width:50%;
    padding:2% 3%;
    background-color:rgb(50,50,50,0.4);
    margin-top:5%;
    border-radius:15px;
    color:#B1B1B1;
    font-family:나눔스퀘어;
    font-size:2vmin;
`

export const ModalWrapper = styled.div`
    width:100%;
    height:100%;
    position:absolute;
    background-color:rgb(10,10,10,0.7);
    z-index:200;
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:500px;
`

export const ModalContainer = styled.div`
    width:30%;
    height:45%;
    background-color:white;
    border-radius:10px;
    padding:1% 2%;
    display:flex;
    flex-direction:column;
    align-items:center;
    :first-child{
        font-size:2.5vmin;
        font-weight:bold;
        font-family:나눔스퀘어;
    }
`

export const ModalLine = styled.div`
    width:100%;
    height:1px;    
    background-color:#B7B7B7;
    margin-top:4%;
    :first-of-type{
        margin-top:0;
    }
`

export const InputApp = styled.input`
    width:80%;
    height:12%;
    border:1px solid #828282;
    border-radius:3px;
    margin-top:3%;
    padding:0 4%;
    color:gray;
    font-weight:bold;
    font-size:1.8vmin;
    font-family:나눔스퀘어;
    outline:none;
    ::placeholder{
        color:#BFBFBF;
        font-weight:bold;
        font-size:1.8vmin;
        font-family:나눔스퀘어;
    }
`

export const BtnCont = styled.div`
    margin-top:5%;
    width:50%;
    display:flex;
    justify-content:space-between;
    height:9%;
    button{
        width:43%;
        height:100%;
        background-color:white;
        cursor:pointer;
        outline:none;
    }
`