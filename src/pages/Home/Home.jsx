import React from 'react';
import { HomeIntro } from 'components/Home/index';
import Header from 'components/Header/Header';
import * as S from './Home.style';

const Home = () => {
  return (
    <>
      <Header />
      <HomeIntro />
      <S.Container />
    </>
  );
};

export default Home;
