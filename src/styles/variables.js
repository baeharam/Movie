import styled from 'styled-components';

// Values

export const headerHeight = '7vh';
export const footerHeight = '7vh';

// Colors

export const primaryColor = '#142850';
export const secondaryColor = '#f2f2f2';

// z-indexes

export const headerZindex = 5;
export const menuZindex = 4;
export const homeIntroZindex = 3;
export const footerZindex = 5;

// Layout components

export const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
`;

// Media query breakpoints

const size = {
  MobileLandscape: '480px',
  TabletPortrait: '768px',
  TabletLandscape: '992px',
  Laptops: '1200px',
};

export const device = {
  MobileLandscape: `(min-width: ${size.MobileLandscape})`,
  TabletPortrait: `(min-width: ${size.TabletPortrait})`,
  TabletLandscape: `(min-width: ${size.TabletLandscape})`,
  Laptops: `(min-width: ${size.Laptops})`,
};
