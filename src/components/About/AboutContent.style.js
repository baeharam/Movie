import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { device } from 'styles/variables';

const Container = styled.div`
  @media ${device.TabletPortrait} {
    font-size: 1.3rem;
  }
`;

const Intro = styled.p`
  margin: 1rem 0;
  line-height: 1.5;
`;

const Logo = styled.img`
  max-width: 100%;
  margin: 1rem 0;
`;

const ViewCode = styled.a`
  display: flex;
  align-items: center;
  padding: 1rem 1rem 1rem 0;
  font-weight: bold;
`;

const Github = styled(FaGithub)`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

export { Container, Intro, Logo, ViewCode, Github };
