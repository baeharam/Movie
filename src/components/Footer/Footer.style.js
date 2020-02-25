import styled from 'styled-components';
import { footerZindex } from 'styles/variables';
import { FaGithub } from 'react-icons/fa';

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

const Copyright = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: ${({ color }) => color};
  opacity: 0.7;
`;

const Author = styled.p`
  margin-right: 1rem;
`;

const Github = styled(FaGithub)`
  font-size: 1.2rem;
`;

export { Footer, Copyright, Container, Author, Github };
