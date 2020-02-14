import React from 'react';
import { HomeIntro } from 'components/Home/index';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { useSelector } from 'react-redux';
import { introActions } from 'store/modules/intro';
import Loader from 'components/Loader/Loader';
import { primaryColor } from 'styles/variables';
import * as S from './Home.style';

const Home = () => {
  const { result } = useSelector(state => state.intro);
  const loadingState = useSelector(state => state.loading);
  const isLoading = loadingState[introActions.TYPE];

  return !isLoading ? (
    <>
      <Header />
      <HomeIntro />
      <S.Container backdropPath={result.backdropPath} />
      <Footer />
    </>
  ) : (
    <S.LoaderContainer>
      <Loader color={primaryColor} />
    </S.LoaderContainer>
  );
};

export default Home;
