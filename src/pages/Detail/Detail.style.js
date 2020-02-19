import styled from 'styled-components';
import { secondaryColor } from 'styles/variables';

const Main = styled.main`
  background-color: ${secondaryColor};
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export { Main, LoaderContainer };
