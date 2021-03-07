import * as S from "./styles";

const Loading = (props) => {
  console.log(props.isOn);
  return (
    <S.Back is={props.isOn}>
      <S.Svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <circle
          class="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke-width="5"
        ></circle>
      </S.Svg>
    </S.Back>
  );
};

export default Loading;
