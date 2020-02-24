import React from 'react';
import { Wrapper } from 'styles/variables';
import logo from 'images/tmdb.png';
import * as S from './AboutContent.style';

const AboutContent = () => {
  return (
    <section>
      <Wrapper>
        <S.Container>
          <S.Logo src={logo} alt="" />
          <S.Intro>
            TMDB API를 활용한 영화 사이트로, 영화를 검색할 수 있고 영화의
            상세정보를 확인할 수 있습니다. 또한 다양한 방식으로 영화를 둘러볼 수
            있으며 좋아요를 누를 수도 있습니다.
          </S.Intro>
          <S.Intro>
            React.js, Redux, React router, Styled components, Jest, React
            testing library 등을 활용하여 구현하였고 모바일 퍼스트 디자인을
            채택하여 모바일 화면부터 구성하였습니다.
          </S.Intro>
          <S.ViewCode href="https://github.com/baeharam/Movie" target="_blank">
            <S.Github />
            소스코드 보기
          </S.ViewCode>
        </S.Container>
      </Wrapper>
    </section>
  );
};

export default AboutContent;
