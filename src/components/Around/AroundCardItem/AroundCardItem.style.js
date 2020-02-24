import styled from 'styled-components';
import { device } from 'styles/variables';

const gutter = '10px';

const GridItem = styled.div`
  position: relative;
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
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 3px;
  box-shadow: 0 5px 3px 0 rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  text-align: center;

  span {
    margin-bottom: 1rem;
    padding: 0 1rem;
  }

  @media ${device.TabletPortrait} {
    font-size: 1.5rem;
  }
`;

export { GridItem, Card, Content };
