import styled from 'styled-components';
import { footerHeight, footerZindex } from 'styles/variables';

const Container = styled.div`
  position: relative;
  z-index: ${footerZindex};
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${footerHeight};
  padding: 1rem 0;
  box-sizing: border-box;
`;

const Copyright = styled.p`
  font-size: 1.2rem;
  color: ${({ color }) => color};
`;

export { Copyright, Container };
