import styled from 'styled-components';

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export { Grid, LoaderContainer };
