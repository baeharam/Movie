import styled from 'styled-components';
import { footerZindex } from 'styles/variables';

const Footer = styled.footer`
  padding: 1rem 0;
`;

const Container = styled.div`
  z-index: ${footerZindex};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const Copyright = styled.p`
  font-size: 1rem;
  color: ${({ color }) => color};
  opacity: 0.7;
`;

export { Footer, Copyright, Container };
