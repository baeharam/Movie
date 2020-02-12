import React from 'react';
import { Wrapper } from 'styles/variables';
import PropTypes from 'prop-types';
import * as S from './Header.style';

const Header = ({ color }) => {
  return (
    <header>
      <Wrapper>
        <S.Position>
          <S.Container color={color}>
            <S.LogoButton data-testid="logo-button" type="button">
              movie
            </S.LogoButton>
            <S.IconContainer>
              <S.IconButton
                data-testid="search-button"
                type="button"
                aria-label="검색버튼"
              >
                <S.SearchIcon />
              </S.IconButton>
              <S.IconButton
                data-testid="menu-button"
                type="button"
                aria-label="메뉴버튼"
              >
                <S.MenuIcon />
              </S.IconButton>
            </S.IconContainer>
          </S.Container>
        </S.Position>
      </Wrapper>
    </header>
  );
};

Header.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Header;
