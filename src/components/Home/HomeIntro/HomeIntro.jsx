import React from 'react';
import { Wrapper } from 'styles/variables';
import * as S from './HomeIntro.style';

const HomeIntro = () => {
  return (
    <S.HomeIntro>
      <Wrapper>
        <S.Container>
          <S.Title>오늘의 영화</S.Title>
          <S.Desc>&quot;키미노 나마에와...!&quot;</S.Desc>
          <S.Name>- 너의 이름은 -</S.Name>
          <S.MoreButton>더보기</S.MoreButton>
        </S.Container>
      </Wrapper>
    </S.HomeIntro>
  );
};

export default HomeIntro;
