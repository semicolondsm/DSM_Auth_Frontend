import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
`;

export const LogoImg = styled.img`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const NaviWrapper = styled.div`
  display: flex;
  margin-left: 35px;
`;

export const LinkStyle = styled(NavLink)`
  text-decoration: none;
  //color: #713EFF;
  color: white;
  font-size: 18px;

  margin-left: 15px;
`;
