import React, { useReducer } from 'react';
import { Wrapper } from 'styles/variables';
import * as S from './LikesList.style';

const getAllLikes = () => {
  const likes = [];
  for (const item of Object.values(localStorage)) {
    likes.push(JSON.parse(item));
  }
  return likes;
};

const LikesList = () => {
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const likes = getAllLikes();

  const onClickRemove = e => {
    const { id } = e.target.dataset;
    localStorage.removeItem(id);
    forceUpdate();
  };

  return (
    <section>
      <Wrapper>
        <S.Container>
          <S.Title>좋아하는 영화들</S.Title>
          <S.ItemList>
            {likes.map(like => (
              <S.Item key={like.id}>
                <S.ItemLink to={`/detail/${like.id}`}>
                  <img src={like.posterPath} alt="포스터" />
                  <S.MovieTitle>{like.title}</S.MovieTitle>
                </S.ItemLink>
                <S.RemoveButton
                  data-id={like.id}
                  onClick={onClickRemove}
                  type="button"
                >
                  좋아요 취소
                </S.RemoveButton>
              </S.Item>
            ))}
          </S.ItemList>
        </S.Container>
      </Wrapper>
    </section>
  );
};

export default LikesList;
