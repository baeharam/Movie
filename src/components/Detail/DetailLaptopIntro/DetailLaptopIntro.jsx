import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import StarRatings from 'react-star-ratings';
import mediumZoom from 'medium-zoom';
import {
  Background,
  LikeIcon,
  DislikeIcon,
} from 'components/Detail/DetailIntro/DetailIntro.style';
import { Section } from 'components/Detail/Detail.style';
import { Wrapper } from 'styles/variables';
import * as S from './DetailLaptopIntro.style';

const DetailLaptopIntro = () => {
  const { result } = useSelector(state => state.detail);
  const [isLike, setIsLike] = useState(
    localStorage.getItem(result.id) !== null,
  );
  const zoom = mediumZoom({ background: 'rgba(0, 0, 0, 0.8)', margin: 30 });

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
      <Background backdropPath={result.backdropPath} />
      <Section>
        <Wrapper>
          <S.Container>
            <S.Poster
              src={result.posterPath}
              alt="포스터"
              ref={img => zoom.attach(img)}
              data-zoom-src={result.posterPath.replace(/w500/, 'original')}
            />
            <S.Intro>
              <S.Title>
                <h1>{result.title}</h1>
                <S.Year>({result.releaseDate})</S.Year>
                <S.Like type="button" onClick={onClickLike}>
                  <span>{isLike ? '좋아요 취소' : '좋아요'}</span>
                  {isLike ? <DislikeIcon /> : <LikeIcon />}
                </S.Like>
              </S.Title>
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
