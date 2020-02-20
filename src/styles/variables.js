import styled from 'styled-components';

// Values

export const headerHeight = '7vh';
export const headerWidthLaptop = '1200px';

// Colors

export const primaryColor = '#142850';
export const secondaryColor = '#f2f2f2';

// z-indexes

export const headerZindex = 7;
export const overlayZindex = 6;
export const footerZindex = 5;
export const homeIntroZindex = 3;

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

// Layout components

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  main {
    padding-top: ${headerHeight};
    flex: 1;
  }
`;

export const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;

  @media ${device.Laptops} {
    width: ${headerWidthLaptop};
  }
`;
