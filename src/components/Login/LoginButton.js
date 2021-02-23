import * as S from "./styles";

const LoginButton = (props) => {
  return (
    <S.Button id="circleButton" onClick={props.onSubmit}>
      <S.Circle id="circle" />
      <S.ButtonP>LOGIN</S.ButtonP>
    </S.Button>
  );
};

export default LoginButton;
