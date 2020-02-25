import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { primaryColor, headerHeight } from 'styles/variables';

const Section = styled.section`
  background-color: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${headerHeight});
`;

const Input = styled.input`
  padding: 0.7rem 0.5rem;
  border-radius: 5px;
  border: 2px solid ${primaryColor};
  margin: 1rem 0;
  flex-basis: 3%;
`;

const Result = styled.div`
  overflow-y: auto;
  max-height: 90%;
`;

const Item = styled(Link)`
  display: block;
  padding: 0.5rem 0;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export { Section, Container, Input, Result, Item, LoaderContainer };
