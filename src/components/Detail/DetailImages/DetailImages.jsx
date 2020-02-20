import React from 'react';
import { useSelector } from 'react-redux';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { Wrapper, device } from 'styles/variables';
import shortid from 'shortid';
import mediumZoom from 'medium-zoom';
import { useMediaQuery } from 'react-responsive';
import { Section, Container, Title } from '../Detail.style';
import './swiper.css';

const DetailImages = () => {
  const { result } = useSelector(state => state.detail);
  const isTabletPortrait = useMediaQuery({ query: device.TabletPortrait });
  const zoom = mediumZoom({ background: 'rgba(0, 0, 0, 0.8)', margin: 30 });
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

  const imgRef = isTabletPortrait ? img => zoom.attach(img) : null;

  return (
    <Section>
      <Wrapper>
        <Container>
          <Title>갤러리</Title>
          {result.images.length ? (
            <Swiper {...params}>
              {result.images.map(image => (
                <img
                  key={shortid.generate()}
                  src={image}
                  alt="사진"
                  ref={imgRef}
                  data-zoom-src={
                    isTabletPortrait ? image.replace(/w780/, 'original') : null
                  }
                />
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
