import React from 'react';
import { Wrapper } from 'styles/variables';
import * as S from './AroundCardList.style';

const AroundCardList = () => {
  const img =
    'https://image.tmdb.org/t/p/original/7OMAfDJikBxItZBIug0NJig5DHD.jpg';
  const data = [
    { src: img, title: '인셉션1' },
    { src: img, title: '인셉션2' },
    { src: img, title: '인셉션3' },
    { src: img, title: '인셉션4' },
  ];

  return (
    <section>
      <Wrapper>
        <S.Grid>
          {data.map(item => (
            <S.GridItem key={item.title}>
              <S.Card src={item.src}></S.Card>
              <S.Content>{item.title}</S.Content>
            </S.GridItem>
          ))}
        </S.Grid>
      </Wrapper>
    </section>
  );
};

export default AroundCardList;
