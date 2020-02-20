import React from 'react';
import { useSelector } from 'react-redux';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { Wrapper } from 'styles/variables';
import { Section, Container, Title } from '../Detail.style';
import * as S from './DetailVideos.style';

const DetailVideos = () => {
  const { result } = useSelector(state => state.detail);
  const params = {
    spaceBetween: 30,
    slidesPerView: 1,
    pagination: {
      clickable: true,
    },
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
          <Title>예고편</Title>
          {result.videos.length ? (
            <Swiper {...params}>
              {result.videos.map(video => (
                <a
                  key={video.path}
                  rel="noopener noreferrer"
                  target="_blank"
                  href={video.path}
                  data-testid="video-link"
                >
                  <S.Video>
                    <S.Thumbnail src={video.thumbnail} alt="썸네일" />
                    <S.Play />
                  </S.Video>
                </a>
              ))}
            </Swiper>
          ) : (
            <p>예고편이 없습니다.</p>
          )}
        </Container>
      </Wrapper>
    </Section>
  );
};

export default DetailVideos;
