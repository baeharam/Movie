import React from 'react';
import { fireEvent } from '@testing-library/react';
import withRouter from 'utils/withRouter';
import renderWithRedux from 'utils/renderWithRedux';
import Header from '../Header';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('<Header /> 테스트', () => {
  test('로고 버튼이 정상 동작해야 함', () => {
    const { getByTestId } = renderWithRedux(withRouter(<Header />, '/'));
    const logoButton = getByTestId('logo-button');
    fireEvent.click(logoButton);
    expect(getByTestId('location-display')).toHaveTextContent('/');
  });

  test('메뉴 버튼이 정상 동작해야 함', () => {
    const { getByTestId } = renderWithRedux(withRouter(<Header />, '/'));
    expect(getByTestId('overlay')).toHaveStyle('visibility: hidden');
    const menuButton = getByTestId('menu-button');
    fireEvent.click(menuButton);
    expect(getByTestId('overlay')).toHaveStyle('visibility: visible');
  });

  test('[둘러보기] 페이지 링크가 정상 동작해야 함', () => {
    const { getByTestId } = renderWithRedux(withRouter(<Header />));
    const aroundLink = getByTestId('around-link');
    fireEvent.click(aroundLink);
    expect(getByTestId('location-display')).toHaveTextContent('/around');
  });

  test('[좋아요] 페이지 링크가 정상 동작해야 함', () => {
    const { getByTestId } = renderWithRedux(withRouter(<Header />));
    const likesLink = getByTestId('likes-link');
    fireEvent.click(likesLink);
    expect(getByTestId('location-display')).toHaveTextContent('/likes');
  });

  test('[검색] 페이지 링크가 정상 동작해야 함', () => {
    const { getByTestId } = renderWithRedux(withRouter(<Header />));
    const searchButton = getByTestId('search-button');
    fireEvent.click(searchButton);
    expect(getByTestId('location-display')).toHaveTextContent('/search');
  });

  test('[소개] 페이지 링크가 정상 동작해야 함', () => {
    const { getByTestId } = renderWithRedux(withRouter(<Header />));
    const aboutLink = getByTestId('about-link');
    fireEvent.click(aboutLink);
    expect(getByTestId('location-display')).toHaveTextContent('/about');
  });
});
