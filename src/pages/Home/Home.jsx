import React from 'react';
import { HomeIntro } from 'components/Home/index';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { useSelector } from 'react-redux';
import * as S from './Home.style';

const Home = () => {
  const { result } = useSelector(state => state.intro);

  return (
    <>
      <Header />
      <HomeIntro />
      <S.Container backdropPath={result.backdropPath} />
      <Footer />
    </>
  );
};

export default Home;
