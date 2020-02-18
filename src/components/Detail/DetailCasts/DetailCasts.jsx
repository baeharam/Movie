import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Wrapper } from 'styles/variables';
import * as S from './DetailCasts.style';

const DetailCasts = () => {
  const { result } = useSelector(state => state.detail);
  const setting = {
    dots: false,
    infinite: false,
    slidesToShow: 2,
  };

  return (
    <S.Casts>
      <Wrapper>
        <S.Container>
          <S.CastTitle>출연</S.CastTitle>
          <Slider {...setting}>
            {result.casts.map(cast => (
              <S.CastContent key={cast.name}>
                <S.CastProfile src={cast.profilePath} alt="프로필" />
                <S.CastName>{cast.name}</S.CastName>
                <S.CastRole>{cast.role} 역</S.CastRole>
              </S.CastContent>
            ))}
          </Slider>
        </S.Container>
      </Wrapper>
    </S.Casts>
  );
};

export default DetailCasts;
