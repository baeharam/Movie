import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Wrapper } from 'styles/variables';
import * as S from './DetailImages.style';

const DetailImages = () => {
  const { result } = useSelector(state => state.detail);
  const setting = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
  };

  return (
    <S.Gallery>
      <Wrapper>
        <S.Container>
          <S.GalleryTitle>갤러리</S.GalleryTitle>
          <Slider {...setting}>
            {result.images.map(image => (
              <S.GalleryImage key={image}>
                <img src={image} alt="사진" />
              </S.GalleryImage>
            ))}
          </Slider>
        </S.Container>
      </Wrapper>
    </S.Gallery>
  );
};

export default DetailImages;
