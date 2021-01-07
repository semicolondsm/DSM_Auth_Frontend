import styled from 'styled-components'

export const BodyWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Header = styled.h1`
    margin: 0 0 35px;

`

export const ContentWrapper = styled.div`
    padding: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InputBox = styled.input`
    outline: none;
    border: 1px solid rgb(210, 210, 210);
    font-size: 16px;
    padding: 15px 50px 15px 30px;
    border-radius: 10px;   
    margin: 10px;
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
`

export const Button = styled.button`
    border: none;
    font-size: 22px;
    padding: 15px 28px;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 0 7px 12px rgba(0, 0, 0, 0.3);
    margin-top: 20px;
`

export const Logo = styled.img`
    width: 200px;
    cursor: pointer;
`