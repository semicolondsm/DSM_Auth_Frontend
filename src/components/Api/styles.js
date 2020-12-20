import styled from 'styled-components'

export const Wrapper = styled.div`
    max-width: 100%;
`

export const Section = styled.div`
    background: ${props => props.bgColor || "white"};
    width: 100%;
    height: ${props => props.height || "800px"};
`

export const ContentBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`