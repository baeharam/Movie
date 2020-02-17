import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as S from './Overlay.style';

const Overlay = () => {
  const { isOpen } = useSelector(state => state.overlay);

  return (
    <S.Overlay data-testid="overlay" open={isOpen}>
      <S.UL>
        <S.LI>
          <Link to="/around" data-testid="around-link">
            둘러보기
          </Link>
        </S.LI>
        <S.LI>좋아요</S.LI>
        <S.LI>소개</S.LI>
      </S.UL>
    </S.Overlay>
  );
};

export default Overlay;
