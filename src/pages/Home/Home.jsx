import React from 'react';
import { HomeIntro } from 'components/Home/index';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import * as S from './Home.style';

const Home = () => {
  return (
    <>
      <Header />
      <HomeIntro />
      <S.Container />
      <Footer />
    </>
  );
};

export default Home;
