import React from 'react';
import { useSelector } from 'react-redux';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { Wrapper } from 'styles/variables';
import * as S from './DetailVideos.style';

const DetailVideos = () => {
  const { result } = useSelector(state => state.detail);
  const params = {
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
  };

  return (
    <S.Videos>
      <Wrapper>
        <S.Container>
          <S.VideoTitle>예고편</S.VideoTitle>
          {result.videos.length ? (
            <Swiper {...params}>
              {result.videos.map(video => (
                <S.VideoIframe key={video}>
                  <iframe title={video} src={video} frameBorder="0" />
                </S.VideoIframe>
              ))}
            </Swiper>
          ) : (
            <p>예고편이 없습니다.</p>
          )}
        </S.Container>
      </Wrapper>
    </S.Videos>
  );
};

export default DetailVideos;
