import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useDebounce from 'hooks/useDebounce';
import useComponentWillMount from 'hooks/useComponentWillMount';
import { Wrapper, primaryColor } from 'styles/variables';
import { searchActions } from 'store/modules/search';
import Loader from 'components/Loader/Loader';
import { Link } from 'react-router-dom';
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

  useComponentWillMount(() => {
    dispatch(searchActions.request({ movie: '' }));
  });

  useEffect(() => {
    dispatch(searchActions.request({ movie: debouncedValue }));
  }, [debouncedValue]);

  const renderSearchResult = () => {
    if (isLoading) {
      return (
        <S.LoaderContainer>
          <Loader color={primaryColor} />
        </S.LoaderContainer>
      );
    }
    if (searchSuccess) {
      return (
        <S.Result>
          {result.map(movie => (
            <S.Item key={movie.id}>
              <Link to={`/detail/${movie.id}`}>{movie.title}</Link>
            </S.Item>
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
