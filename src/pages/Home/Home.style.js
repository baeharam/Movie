import styled from 'styled-components';
import { IMG_PATH_ORG } from 'utils/constants';

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background: ${({ backdropPath }) =>
    `url(${IMG_PATH_ORG}${backdropPath}) center no-repeat`};
  background-size: cover;
  height: 100vh;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.3;
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export { Container, LoaderContainer };
