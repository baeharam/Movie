import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import withTestRouter from 'utils/withTestRouter';
import Header from '../Header';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

describe('<Header /> 테스트', () => {
  test('로고 버튼이 정상 동작해야 함', () => {
    const { getByTestId } = render(withTestRouter(<Header />, '/'));
    const logoButton = getByTestId('logo-button');
    fireEvent.click(logoButton);
    expect(getByTestId('location-display')).toHaveTextContent('/');
  });

  test('메뉴 버튼이 정상 동작해야 함', () => {
    const { getByTestId } = render(withTestRouter(<Header />, '/'));
    expect(getByTestId('overlay')).toHaveStyle('visibility: hidden');
    const menuButton = getByTestId('menu-button');
    fireEvent.click(menuButton);
    expect(getByTestId('overlay')).toHaveStyle('visibility: visible');
  });

  test('[둘러보기] 페이지 링크가 정상 동작해야 함', () => {
    const { getByTestId } = render(withTestRouter(<Header />));
    const aroundLink = getByTestId('around-link');
    fireEvent.click(aroundLink);
    expect(getByTestId('location-display')).toHaveTextContent('/around');
  });
});
