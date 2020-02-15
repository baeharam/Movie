import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Wrapper, primaryColor } from 'styles/variables';
import Loader from 'components/Loader/Loader';
import { aroundActions } from 'store/modules/around';
import { AROUND_POPULAR } from 'utils/constants';
import * as S from './AroundCardList.style';

const AroundCardList = () => {
  const { result } = useSelector(state => state.around);
  const loadingState = useSelector(state => state.loading);
  const isLoading = loadingState[aroundActions.TYPE];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(aroundActions.request({ TYPE: AROUND_POPULAR }));
  }, []);

  return !isLoading ? (
    <section>
      <Wrapper>
        <S.Grid>
          {result.map(movie => (
            <S.GridItem key={movie.title}>
              <S.Card backdropPath={movie.backdropPath}></S.Card>
              <S.Content>{movie.title}</S.Content>
            </S.GridItem>
          ))}
        </S.Grid>
      </Wrapper>
    </section>
  ) : (
    <S.LoaderContainer>
      <Loader color={primaryColor} />
    </S.LoaderContainer>
  );
};

export default AroundCardList;
