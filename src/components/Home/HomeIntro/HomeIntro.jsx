import React from 'react';
import { Wrapper } from 'styles/variables';
import { useSelector } from 'react-redux';
import * as S from './HomeIntro.style';

const HomeIntro = () => {
  const { result } = useSelector(state => state.intro);

  return (
    <S.HomeIntro>
      <Wrapper>
        <S.Container>
          <S.Title>오늘의 영화</S.Title>
          <S.Desc data-testid="home-tagline">
            &quot;
            {result.tagline}
            &quot;
          </S.Desc>
          <S.Name data-testid="home-title">{result.title}</S.Name>
          <S.MoreButton>더보기</S.MoreButton>
        </S.Container>
      </Wrapper>
    </S.HomeIntro>
  );
};

export default HomeIntro;
