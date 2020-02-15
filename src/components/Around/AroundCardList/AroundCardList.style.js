import styled from 'styled-components';
import { device, primaryColor } from 'styles/variables';

const gutter = '10px';
const cardBorderRadius = '5px';

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

const GridItem = styled.div`
  flex-basis: 100%;
  padding: ${gutter};

  @media ${device.TabletPortrait} {
    flex-basis: calc(50% - ${gutter} * 2);
  }

  @media ${device.Laptops} {
    flex-basis: calc(33.33333333333% - ${gutter} * 2);
  }
`;

const Card = styled.div`
  position: relative;
  flex-basis: 100%;
  background: ${({ backdropPath }) => `url(${backdropPath}) center no-repeat`};
  background-size: cover;
  height: 30vh;
  border-top-left-radius: ${cardBorderRadius};
  border-top-right-radius: ${cardBorderRadius};
  overflow: hidden;
  margin-bottom: 3px;
`;

const Content = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  text-align: center;
  overflow: hidden;
  padding: 0.5rem 0;
  border-bottom-left-radius: ${cardBorderRadius};
  border-bottom-right-radius: ${cardBorderRadius};
  background-color: ${primaryColor};
  opacity: 0.8;
  width: 100%;
  box-shadow: 0 5px 3px 0 rgba(0, 0, 0, 0.8);

  @media ${device.TabletPortrait} {
    font-size: 1.5rem;
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

export { Grid, GridItem, Card, Content, LoaderContainer };
