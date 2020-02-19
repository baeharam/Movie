import React from 'react';
import { useSelector } from 'react-redux';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { Wrapper } from 'styles/variables';
import * as S from './DetailCasts.style';

const DetailCasts = () => {
  const { result } = useSelector(state => state.detail);
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
  };

  return (
    <S.Casts>
      <Wrapper>
        <S.Container>
          <S.CastTitle>출연</S.CastTitle>
          <Swiper {...params}>
            {result.casts.map(cast => (
              <S.CastContent key={cast.name}>
                <S.CastProfile src={cast.profilePath} alt="프로필" />
                <S.CastName>{cast.name}</S.CastName>
                <S.CastRole>{cast.role} 역</S.CastRole>
              </S.CastContent>
            ))}
          </Swiper>
        </S.Container>
      </Wrapper>
    </S.Casts>
  );
};

export default DetailCasts;
