import styled from 'styled-components';
import { primaryColor } from 'styles/variables';

const Section = styled.section`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${primaryColor};
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

export { Section, Container, Title };
