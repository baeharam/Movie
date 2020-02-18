import styled from 'styled-components';
import { primaryColor } from 'styles/variables';

const Background = styled.section`
  position: relative;
  z-index: -1;
  background: url(${({ backdropPath }) => backdropPath}) no-repeat center;
  background-size: cover;
  height: 40vh;
  filter: grayscale(100%);
`;

const Intro = styled.section`
  margin-bottom: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${primaryColor};
  text-align: center;
`;

const Poster = styled.img`
  display: block;
  width: 50vw;
  margin-top: -150px;
  box-shadow: 0 5px 2px 0 rgba(0, 0, 0, 0.5);
`;

const Info = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const Divider = styled.div`
  width: 100%;
  border-top: 2px solid ${primaryColor};
  opacity: 0.5;
  margin: 2rem 0;
`;

const OverviewTitle = styled.h2`
  margin-bottom: 1rem;
`;

const OverviewContent = styled.div`
  line-height: 1.5;
`;

export {
  Background,
  Intro,
  Container,
  Poster,
  Info,
  Divider,
  OverviewTitle,
  OverviewContent,
};
