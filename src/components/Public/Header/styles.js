import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderWrapper = styled.div`
    width: auto;
    height: 55px;
    margin: 5px 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoImg = styled.img`
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const NaviWrapper = styled.div`
    display: flex;
    margin-left: 35px;
`

export const LinkStyle = styled(NavLink)`
    text-decoration: none;
    color: #713EFF;
    font-size: 18px;
    
    margin-left: 15px;
`