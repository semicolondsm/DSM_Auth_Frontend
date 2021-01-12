import React, { useEffect } from "react";
import * as S from "./styles";

import Refractor from "react-refractor";

import banner from "../../assets/banner.png";

import { FirstAnimation } from "../../animation";

const MainBody = () => {
  useEffect(() => {
    FirstAnimation();
  }, []);

  const source = `
    const foo = 'bar'
    const bar = 'foo'
    const baz = foo + bar
  `;

  return (
    <S.BodyWrapper>
      <S.Section id="section1" img={banner} height="500px">
        <S.ContentBox column></S.ContentBox>
      </S.Section>
      <S.Section className="headerPoint" bgColor="black" height="500px">
        <S.ContentBox></S.ContentBox>
      </S.Section>
      <S.Section bgColor="black" height="500px">
        <S.ContentBox column>
          <S.Title id="first">안녕하세요</S.Title>
        </S.ContentBox>
      </S.Section>
      <S.Section bgColor="black" height="500px">
        <S.ContentBox column>
          <Refractor language="js" value={source} />
        </S.ContentBox>
      </S.Section>
      <S.Section bgColor="black" height="500px">
        <S.ContentBox column></S.ContentBox>
      </S.Section>
      <S.Section bgColor="black" height="500px">
        <S.ContentBox column></S.ContentBox>
      </S.Section>
    </S.BodyWrapper>
  );
};

export default MainBody;
