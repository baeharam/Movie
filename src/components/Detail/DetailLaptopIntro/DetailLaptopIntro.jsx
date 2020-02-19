import React from 'react';
import { useSelector } from 'react-redux';
import StarRatings from 'react-star-ratings';
import { Background } from 'components/Detail/DetailIntro/DetailIntro.style';
import { Section } from 'components/Detail/Detail.style';
import { Wrapper } from 'styles/variables';
import * as S from './DetailLaptopIntro.style';

const DetailLaptopIntro = () => {
  const { result } = useSelector(state => state.detail);

  return (
    <>
      <Background backdropPath={result.backdropPath} />
      <Section>
        <Wrapper>
          <S.Container>
            <S.Poster src={result.posterPath} alt="" />
            <S.Intro>
              <h1>{result.title}</h1>
              <S.Info>
                <StarRatings
                  rating={result.rating / 2}
                  starRatedColor="#ffda33"
                  numberOfStars={5}
                  starDimension="30px"
                  starSpacing="2px"
                />
                <span>{result.genres}</span>
                <span>{result.runtime}</span>
              </S.Info>
              <S.Divider />
              <S.Tagline>{result.tagline}</S.Tagline>
              <S.Overview>{result.overview}</S.Overview>
            </S.Intro>
          </S.Container>
        </Wrapper>
      </Section>
    </>
  );
};

export default DetailLaptopIntro;
