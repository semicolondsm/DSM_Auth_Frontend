import React, { useState } from "react";
import * as S from "./styles";

import { useHistory } from "react-router-dom";

const Menu = ({ name, LogOut }) => {
  const [visible, setVisible] = useState(false);
  const history = useHistory();

  return (
    <S.MenuWrapper onClick={() => setVisible(!visible)}>
      {name}
      {visible === true && (
        <S.Menu>
          <button onClick={LogOut}>로그아웃</button>
          <button onClick={() => history.push("/mypage")}>내 정보</button>
        </S.Menu>
      )}
    </S.MenuWrapper>
  );
};

export default Menu;
