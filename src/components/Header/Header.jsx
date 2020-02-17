import React from 'react';
import { Wrapper, device } from 'styles/variables';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LocationDisplay from 'utils/locationDisplay';
import Overlay from 'components/Overlay/Overlay';
import * as S from './Header.style';
import OverlayButton from './OverlayButton/OverlayButton';

const Header = ({ color, bgColor }) => {
  const isTabletPortrait = useMediaQuery({ query: device.TabletPortrait });
  const { isOpen } = useSelector(state => state.overlay);

  return (
    <>
      <S.Header bgColor={bgColor}>
        <Wrapper>
          <S.Container isOpen={isOpen} color={color}>
            <Link to="/">
              <S.LogoButton
                data-testid="logo-button"
                type="button"
                isOpen={isOpen}
              >
                movie
              </S.LogoButton>
            </Link>
            <S.MenuContainer>
              <S.IconButton
                data-testid="search-button"
                type="button"
                aria-label="검색버튼"
                isOpen={isOpen}
              >
                <S.SearchIcon />
              </S.IconButton>
              {isTabletPortrait ? (
                <S.UL>
                  <S.LI>
                    <Link to="/around">둘러보기</Link>
                  </S.LI>
                  <S.LI>좋아요</S.LI>
                  <S.LI>소개</S.LI>
                </S.UL>
              ) : (
                <OverlayButton color={color} />
              )}
            </S.MenuContainer>
          </S.Container>
          <Overlay />
        </Wrapper>
      </S.Header>
      <LocationDisplay />
    </>
  );
};

Header.defaultProps = {
  color: 'white',
  bgColor: 'transparent',
};

Header.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Header;
