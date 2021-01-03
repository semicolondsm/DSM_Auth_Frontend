import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 65px;
  padding: 5px 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(26, 26, 28, 0);
  z-index: 10000;

  @media screen and (max-width: 768px) {
    height: 50px;
    padding: 7px 30px;
  }

  @media screen and (max-width: 424px) {
    padding: 7px 20px;
  }
`;

export const LogoImg = styled.img`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const NaviWrapper = styled.div`
  display: flex;
  margin-left: 15px;
`;

const LStyle = `
text-decoration: none;
//color: #713EFF;
color: white;
font-size: 18px;
background: rgba(0, 0, 0, 0);
border: none;
cursor: pointer;
outline: none;

margin-left: 15px;

@media screen and (max-width: 424px) {
  font-size: 14.5px;
}
`;

export const LinkStyle = styled(Link)`${LStyle}`

export const LinkStyleButton = styled.button`${LStyle}`

export const MenuWrapper = styled.div`
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  cursor: pointer;

`

export const Menu = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
  display: flex;
  background: rgb(30, 30, 30);
  border-radius: 3px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
  color: white;
`