import React from 'react';
import { useSelector } from 'react-redux';
import { Wrapper } from 'styles/variables';
import * as S from './DetailIntro.style';
import { Section, Container } from '../Detail.style';

const DetailIntro = () => {
  const { result } = useSelector(state => state.detail);

  return (
    <>
      <S.Background backdropPath={result.backdropPath} />
      <Section>
        <Wrapper>
          <Container>
            <S.Poster src={result.posterPath} alt="포스터" />
            <h1>{result.title}</h1>
            <S.Info>
              <span>{result.rating}</span>
              <span>{result.genres}</span>
              <span>{result.runtime}</span>
            </S.Info>
            <S.Divider />
            <S.OverviewTitle>줄거리</S.OverviewTitle>
            {result.tagline && <h3>{result.tagline}</h3>}
            <S.OverviewContent>{result.overview}</S.OverviewContent>
          </Container>
        </Wrapper>
      </Section>
    </>
  );
};

export default DetailIntro;
