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
} from 'components/Detail/index';

const Detail = ({ match }) => {
  const loadingState = useSelector(state => state.loading);
  const { result } = useSelector(state => state.detail);
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
        <DetailIntro />
        <DetailCasts />
        <DetailImages />
        <DetailVideos />
      </main>
      <Footer />
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
