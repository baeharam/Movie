import React, { useState } from 'react';
import { Wrapper, device } from 'styles/variables';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import * as S from './Header.style';

const MenuButton = ({ onClickMenu, open }) => {
  return (
    <S.MenuButton
      open={open}
      onClick={onClickMenu}
      type="button"
      aria-label="메뉴"
    >
      <div />
      <div />
      <div />
    </S.MenuButton>
  );
};

MenuButton.propTypes = {
  onClickMenu: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

const Header = ({ color }) => {
  const [open, setOpen] = useState(false);
  const isTabletPortrait = useMediaQuery({ query: device.TabletPortrait });

  const onClickMenu = () => {
    setOpen(!open);
  };

  return (
    <header>
      <Wrapper>
        <S.Container open={open} color={color}>
          <S.LogoButton data-testid="logo-button" type="button" open={open}>
            movie
          </S.LogoButton>
          <S.MenuContainer>
            <S.IconButton
              data-testid="search-button"
              type="button"
              aria-label="검색버튼"
              open={open}
            >
              <S.SearchIcon />
            </S.IconButton>
            {isTabletPortrait ? (
              <S.UL>
                <S.LI>둘러보기</S.LI>
                <S.LI>좋아요</S.LI>
                <S.LI>소개</S.LI>
              </S.UL>
            ) : (
              <MenuButton onClickMenu={onClickMenu} open={open} />
            )}
          </S.MenuContainer>
        </S.Container>
        <S.Overlay open={open}>
          <S.OverlayUL>
            <S.OverlayLI>둘러보기</S.OverlayLI>
            <S.OverlayLI>좋아요</S.OverlayLI>
            <S.OverlayLI>소개</S.OverlayLI>
          </S.OverlayUL>
        </S.Overlay>
      </Wrapper>
    </header>
  );
};

Header.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Header;
