import React from 'react';
import { useSelector } from 'react-redux';
import { Wrapper } from 'styles/variables';
import * as S from './DetailIntro.style';

const DetailIntro = () => {
  const { result } = useSelector(state => state.detail);

  return (
    <>
      <S.Background backdropPath={result.backdropPath} />
      <S.Intro>
        <Wrapper>
          <S.Container>
            <S.Poster src={result.posterPath} alt="포스터" />
            <h1>{result.title}</h1>
            <S.Info>
              <span>★ {result.rating}</span>
              <span>{result.genres.join(' | ')}</span>
              <span>{result.runtime}분</span>
            </S.Info>
            <S.Divider />
            <S.OverviewTitle>줄거리</S.OverviewTitle>
            <S.OverviewContent>{result.overview}</S.OverviewContent>
          </S.Container>
        </Wrapper>
      </S.Intro>
    </>
  );
};

export default DetailIntro;
