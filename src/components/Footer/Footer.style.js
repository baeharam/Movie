import styled from 'styled-components';
import { footerZindex } from 'styles/variables';

const Container = styled.div`
  position: relative;
  z-index: ${footerZindex};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  box-sizing: border-box;
`;

const Copyright = styled.p`
  font-size: 1rem;
  color: ${({ color }) => color};
  opacity: 0.7;
`;

export { Copyright, Container };
