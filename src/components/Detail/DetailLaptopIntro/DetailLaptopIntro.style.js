import styled from 'styled-components';
import { primaryColor } from 'styles/variables';

const Container = styled.div`
  display: flex;
  color: ${primaryColor};
`;

const Poster = styled.img`
  width: 300px;
  margin-top: -5rem;
  margin-right: 2rem;
`;

const Intro = styled.div`
  flex: 1;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
`;

const Divider = styled.div`
  height: 2px;
  background-color: ${primaryColor};
  margin: 1rem 0;
  width: 100%;
  opacity: 0.6;
`;

const Tagline = styled.h2`
  margin-bottom: 1rem;
`;

const Overview = styled.div`
  line-height: 1.5;
`;

export { Container, Intro, Poster, Info, Divider, Tagline, Overview };
