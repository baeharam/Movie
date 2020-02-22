import styled from 'styled-components';
import { primaryColor } from 'styles/variables';

const Section = styled.section`
  background-color: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.7rem 0.5rem;
  border-radius: 5px;
  border: 1px solid ${primaryColor};
  margin-top: 1rem;
`;

const Result = styled.div`
  overflow: scroll;
`;

const Item = styled.p`
  padding: 0.5rem 0;
`;

export { Section, Container, Input, Result, Item };
