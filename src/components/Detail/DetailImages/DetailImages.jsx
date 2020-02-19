import React from 'react';
import { useSelector } from 'react-redux';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { Wrapper } from 'styles/variables';
import * as S from './DetailImages.style';

const DetailImages = () => {
  const { result } = useSelector(state => state.detail);
  const params = {
    spaceBetween: 30,
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
    },
  };

  return (
    <S.Gallery>
      <Wrapper>
        <S.Container>
          <S.GalleryTitle>갤러리</S.GalleryTitle>
          {result.images.length ? (
            <Swiper {...params}>
              {result.images.map(image => (
                <img key={image} src={image} alt="사진" />
              ))}
            </Swiper>
          ) : (
            <p>사진이 없습니다.</p>
          )}
        </S.Container>
      </Wrapper>
    </S.Gallery>
  );
};

export default DetailImages;
