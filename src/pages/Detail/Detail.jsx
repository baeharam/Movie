import React, { useEffect } from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Layout, primaryColor } from 'styles/variables';
import { useSelector, useDispatch } from 'react-redux';
import { detailActions } from 'store/modules/detail';
import PropTypes from 'prop-types';
import {
  DetailIntro,
  DetailCasts,
  DetailImages,
  DetailVideos,
  DetailSimilars,
} from 'components/Detail/index';
import Loader from 'components/Loader/Loader';
import * as S from './Detail.style';

const Detail = ({ match }) => {
  const loadingState = useSelector(state => state.loading);
  const dispatch = useDispatch();
  const { id } = match.params;
  const isLoading = loadingState[detailActions.TYPE];

  useEffect(() => {
    dispatch(detailActions.request({ id }));
  }, [dispatch]);

  return (
    <Layout>
      <Header color={primaryColor} bgColor="white" />
      <main>
        {isLoading ? (
          <S.LoaderContainer>
            <Loader color={primaryColor} />
          </S.LoaderContainer>
        ) : (
          <>
            <DetailIntro />
            <DetailCasts />
            <DetailImages />
            <DetailVideos />
            <DetailSimilars />
          </>
        )}
      </main>
      <Footer color={primaryColor} />
    </Layout>
  );
};

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Detail;
