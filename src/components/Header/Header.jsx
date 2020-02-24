import React from 'react';
import { Wrapper, device } from 'styles/variables';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LocationDisplay from 'utils/locationDisplay';
import Overlay from 'components/Overlay/Overlay';
import * as S from './Header.style';
import OverlayButton from './OverlayButton/OverlayButton';

const Header = ({ color, bgColor, isSearching }) => {
  const isTabletPortrait = useMediaQuery({ query: device.TabletPortrait });
  const { isOpen } = useSelector(state => state.overlay);
  const history = useHistory();

  const onClickSearchCancel = () => {
    history.goBack();
  };

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
              {!isSearching ? (
                <S.IconButton
                  data-testid="search-button"
                  type="button"
                  aria-label="검색버튼"
                  isOpen={isOpen}
                >
                  <Link to="/search">
                    <S.SearchIcon />
                  </Link>
                </S.IconButton>
              ) : (
                <S.SearchCancel onClick={onClickSearchCancel} type="button">
                  검색취소
                </S.SearchCancel>
              )}
              {isTabletPortrait ? (
                <S.UL>
                  <S.LI>
                    <Link to="/around">둘러보기</Link>
                  </S.LI>
                  <S.LI>
                    <Link to="/likes">좋아요</Link>
                  </S.LI>
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
  isSearching: false,
};

Header.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  isSearching: PropTypes.bool,
};

export default Header;
