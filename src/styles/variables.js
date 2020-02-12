import styled from 'styled-components';

// Colors

export const primaryColor = '#455d7e';
export const secondaryColor = '#f2f2f2';

// z-indexes

export const headerZindex = 5;
export const menuZindex = 4;

// Layout components

export const Wrapper = styled.div`
  max-width: 90vw;
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
