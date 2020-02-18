import styled from 'styled-components';
import { primaryColor } from 'styles/variables';

const Casts = styled.section`
  margin-bottom: 2rem;
`;

const Container = styled.div`
  text-align: center;
  color: ${primaryColor};
`;

const CastContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CastTitle = styled.h2`
  margin-bottom: 1rem;
`;

const CastProfile = styled.img`
  width: 100px;
  margin: 0 auto;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  box-shadow: 0 5px 3px 0 rgba(0, 0, 0, 0.5);
`;

const CastName = styled.p`
  font-weight: bold;
  margin-bottom: 0.3em;
`;

const CastRole = styled.p`
  font-size: 0.8rem;
`;

export {
  Casts,
  Container,
  CastContent,
  CastTitle,
  CastProfile,
  CastName,
  CastRole,
};
