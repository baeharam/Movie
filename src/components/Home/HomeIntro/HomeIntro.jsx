import React from 'react';
import { Wrapper } from 'styles/variables';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LocationDisplay from 'utils/locationDisplay';
import * as S from './HomeIntro.style';

const HomeIntro = () => {
  const { result } = useSelector(state => state.intro);

  return (
    <>
      <S.HomeIntro>
        <Wrapper>
          <S.Container>
            <S.Title>오늘의 영화</S.Title>
            <S.Desc data-testid="home-tagline">{result.tagline}</S.Desc>
            <S.Name data-testid="home-title">{result.title}</S.Name>
            <S.MoreButton>
              <Link data-testid="more-link" to={`/detail/${result.id}`}>
                더보기
              </Link>
            </S.MoreButton>
          </S.Container>
        </Wrapper>
      </S.HomeIntro>
      <LocationDisplay />
    </>
  );
};

export default HomeIntro;
