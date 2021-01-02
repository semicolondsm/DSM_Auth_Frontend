import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    max-width: 100%;
`

export const Section = styled.div`
    background: ${props => props.bgColor || "white"};
    width: 100%;
    height: ${props => props.height || "800px"};

    ${props => props.center && css`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
`

export const ContentBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ListWrapper = styled.div`
    width: 70%;
    height: 80%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    color: white;
    width: 300px;
    height: 65px;
    border: none;
    background: black;
    cursor: pointer;
    border-radius: 10px;
`