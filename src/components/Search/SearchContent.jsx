import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDebounce from 'hooks/useDebounce';
import { Wrapper } from 'styles/variables';
import { searchActions } from 'store/modules/search';
import Loader from 'components/Loader/Loader';
import * as S from './SearchContent.style';

const SearchContent = () => {
  const [searchValue, setSearchValue] = useState('');
  const loadingState = useSelector(state => state.loading);
  const isLoading = loadingState[searchActions.TYPE];
  const { searchSuccess, result } = useSelector(state => state.search);
  const debouncedValue = useDebounce(searchValue, 1000);
  const dispatch = useDispatch();

  const onChangeInput = e => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    if (debouncedValue.length) {
      dispatch(searchActions.request({ movie: searchValue }));
    }
  }, [debouncedValue]);

  const renderSearchResult = () => {
    if (isLoading) {
      return <Loader />;
    }
    if (searchSuccess) {
      return (
        <S.Result>
          {result.map(movie => (
            <S.Item key={movie.id}>{movie.title}</S.Item>
          ))}
        </S.Result>
      );
    }
    return null;
  };

  return (
    <S.Section>
      <Wrapper>
        <S.Container>
          <S.Input
            onChange={onChangeInput}
            type="text"
            placeholder="어떤 영화를 찾으시나요?"
          />
          {renderSearchResult()}
        </S.Container>
      </Wrapper>
    </S.Section>
  );
};

export default SearchContent;
