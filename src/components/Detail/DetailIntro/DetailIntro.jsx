import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Wrapper } from 'styles/variables';
import * as S from './DetailIntro.style';
import { Section, Container } from '../Detail.style';
import '../DetailImages/swiper.css';

const DetailIntro = () => {
  const { result } = useSelector(state => state.detail);
  const [isLike, setIsLike] = useState(
    localStorage.getItem(result.id) !== null,
  );

  const onClickLike = () => {
    const newLike = localStorage.getItem(result.id) === null;
    if (newLike) {
      localStorage.setItem(
        result.id,
        JSON.stringify({
          id: result.id,
          title: result.title,
          posterPath: result.posterPath,
        }),
      );
    } else {
      localStorage.removeItem(result.id);
    }
    setIsLike(newLike);
  };

  return (
    <>
      <S.Background backdropPath={result.backdropPath} />
      <Section>
        <Wrapper>
          <Container>
            <S.Poster src={result.posterPath} alt="포스터" />
            <h1>{result.title}</h1>
            <S.Year>({result.releaseDate})</S.Year>
            <S.Info>
              <span>★ {result.rating}</span>
              <span>{result.genres}</span>
              <span>{result.runtime}</span>
            </S.Info>
            <S.Like type="button" onClick={onClickLike}>
              <span data-testid="like-button">
                {isLike ? '좋아요 취소' : '좋아요'}
              </span>
              {isLike ? <S.DislikeIcon /> : <S.LikeIcon />}
            </S.Like>
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
