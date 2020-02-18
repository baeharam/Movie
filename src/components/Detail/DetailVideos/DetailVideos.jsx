import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Wrapper } from 'styles/variables';
import * as S from './DetailVideos.style';

const DetailVideos = () => {
  const { result } = useSelector(state => state.detail);
  const setting = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
  };

  return (
    <S.Videos>
      <Wrapper>
        <S.Container>
          <S.VideoTitle>예고편</S.VideoTitle>
          <Slider {...setting}>
            {result.videos.map(video => (
              <S.VideoIframe key={video}>
                <iframe title={video} src={video} frameBorder="0" />
              </S.VideoIframe>
            ))}
          </Slider>
        </S.Container>
      </Wrapper>
    </S.Videos>
  );
};

export default DetailVideos;
