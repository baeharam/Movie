import React from 'react';
import { useSelector } from 'react-redux';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import '../DetailImages/swiper.css';
import { Wrapper } from 'styles/variables';
import * as S from './DetailCasts.style';
import { Section, Container, Title } from '../Detail.style';

const DetailCasts = () => {
  const { result } = useSelector(state => state.detail);
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
      },
    },
  };

  return (
    <Section>
      <Wrapper>
        <Container>
          <Title>출연</Title>
          <Swiper {...params}>
            {result.casts.map(cast => (
              <S.CastContent key={cast.name + cast.role}>
                <S.CastProfile src={cast.profilePath} alt="프로필" />
                <S.CastName>{cast.name}</S.CastName>
                <S.CastRole>{cast.role} 역</S.CastRole>
              </S.CastContent>
            ))}
          </Swiper>
        </Container>
      </Wrapper>
    </Section>
  );
};

export default DetailCasts;
