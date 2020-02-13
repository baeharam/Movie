import styled from 'styled-components';
import { primaryColor, device } from 'styles/variables';

const Container = styled.div`
  padding: 2rem 0;
  margin-bottom: 2rem;
`;

const UL = styled.ul`
  display: flex;
  justify-content: space-around;
  color: ${primaryColor};
`;

const LI = styled.li`
  display: ${({ state }) => (state === 'none' ? 'none' : 'inline')};
  width: 33.3333333333333%;
  text-align: center;
  font-size: 1.2rem;
  font-weight: ${({ state }) => (state === 'cur' ? 'bold' : 'normal')};
  transform: ${({ state }) =>
    state === 'cur' ? 'translateY(20%)' : 'translateY(0)'};
  transition: transform 0.3s;
  opacity: ${({ state }) => (state === 'cur' ? 1 : 0.7)};
  cursor: pointer;

  @media ${device.TabletPortrait} {
    font-size: 2rem;
  }

  @media ${device.Laptops} {
    font-size: 3rem;
  }
`;

export { Container, UL, LI };
