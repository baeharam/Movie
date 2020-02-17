import React, { useEffect } from 'react';
import { HomeIntro } from 'components/Home/index';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { introActions } from 'store/modules/intro';
import Loader from 'components/Loader/Loader';
import { primaryColor, Layout } from 'styles/variables';
import * as S from './Home.style';

const Home = () => {
  const { result } = useSelector(state => state.intro);
  const loadingState = useSelector(state => state.loading);
  const isLoading = loadingState[introActions.TYPE];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(introActions.request());
  }, [dispatch]);

  return !isLoading ? (
    <Layout>
      <Header />
      <S.Main>
        <HomeIntro />
      </S.Main>
      <S.Container backdropPath={result.backdropPath} />
      <Footer />
    </Layout>
  ) : (
    <S.LoaderContainer>
      <Loader color={primaryColor} />
    </S.LoaderContainer>
  );
};

export default Home;
