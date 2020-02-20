import styled from 'styled-components';

const CastContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const CastProfile = styled.img`
  width: 100px;
  margin: 0 auto;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  box-shadow: 0 5px 3px 0 rgba(0, 0, 0, 0.5);
  flex: 1;
`;

const CastName = styled.p`
  font-weight: bold;
  margin-bottom: 0.3em;
`;

const CastRole = styled.p`
  font-size: 0.8rem;
`;

export { CastContent, CastProfile, CastName, CastRole };
