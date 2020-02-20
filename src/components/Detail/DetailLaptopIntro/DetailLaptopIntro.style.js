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

const Year = styled.span`
  font-size: 1.3rem;
  margin-right: 1rem;
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

const Title = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin-right: 1rem;
  }
`;

const Like = styled.button`
  display: flex;
  justify-content: space-around;
  background-color: ${primaryColor};
  color: white;
  font-size: 1.2rem;
  border-radius: 5px;
  padding: 0.5rem 1rem;

  span {
    margin-right: 1rem;
  }
`;

export {
  Container,
  Intro,
  Poster,
  Year,
  Info,
  Divider,
  Tagline,
  Overview,
  Title,
  Like,
};
