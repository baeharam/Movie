import React, { useState } from 'react';
import { Wrapper, device } from 'styles/variables';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import LocationDisplay from 'utils/locationDisplay';
import * as S from './Header.style';

const MenuButton = ({ onClickMenu, open, color }) => {
  return (
    <S.MenuButton
      data-testid="menu-button"
      open={open}
      onClick={onClickMenu}
      color={color}
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
  color: PropTypes.string.isRequired,
};

const Header = ({ color }) => {
  const [open, setOpen] = useState(false);
  const isTabletPortrait = useMediaQuery({ query: device.TabletPortrait });

  const onClickMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <S.Header>
        <Wrapper>
          <S.Container open={open} color={color}>
            <Link to="/">
              <S.LogoButton data-testid="logo-button" type="button" open={open}>
                movie
              </S.LogoButton>
            </Link>
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
                <MenuButton
                  onClickMenu={onClickMenu}
                  open={open}
                  color={color}
                />
              )}
            </S.MenuContainer>
          </S.Container>
          <S.Overlay data-testid="overlay" open={open}>
            <S.OverlayUL>
              <S.OverlayLI>둘러보기</S.OverlayLI>
              <S.OverlayLI>좋아요</S.OverlayLI>
              <S.OverlayLI>소개</S.OverlayLI>
            </S.OverlayUL>
          </S.Overlay>
        </Wrapper>
      </S.Header>
      <LocationDisplay />
    </>
  );
};

Header.defaultProps = {
  color: 'white',
};

Header.propTypes = {
  color: PropTypes.string,
};

export default Header;
