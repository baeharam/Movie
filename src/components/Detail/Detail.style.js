import styled from 'styled-components';
import { primaryColor, device } from 'styles/variables';

const Section = styled.section`
  margin-bottom: 2rem;

  @media ${device.Laptops} {
    margin-bottom: 4rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${primaryColor};
  text-align: center;

  @media ${device.Laptops} {
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  margin-bottom: 1rem;

  @media ${device.Laptops} {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

export { Section, Container, Title };
