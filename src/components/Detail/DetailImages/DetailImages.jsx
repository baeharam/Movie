import React from 'react';
import { useSelector } from 'react-redux';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { Wrapper } from 'styles/variables';
import shortid from 'shortid';
import { Section, Container, Title } from '../Detail.style';
import ImageContainer from './DetailImages.style';
import './swiper.css';

const DetailImages = () => {
  const { result } = useSelector(state => state.detail);
  const params = {
    spaceBetween: 30,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <Section>
      <Wrapper>
        <Container>
          <Title>갤러리</Title>
          {result.images.length ? (
            <Swiper {...params}>
              {result.images.map(image => (
                <ImageContainer key={shortid.generate()}>
                  <img src={image} alt="사진" />
                </ImageContainer>
              ))}
            </Swiper>
          ) : (
            <p>사진이 없습니다.</p>
          )}
        </Container>
      </Wrapper>
    </Section>
  );
};

export default DetailImages;
