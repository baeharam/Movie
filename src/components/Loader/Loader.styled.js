import styled, { css, keyframes } from 'styled-components';

const Ring = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const animation1 = css`
  animation-name: ${rotateAnimation};
  animation-delay: -0.45s;
`;

const animation2 = css`
  animation-name: ${rotateAnimation};
  animation-delay: -0.3s;
`;

const animation3 = css`
  animation-name: ${rotateAnimation};
  animation-delay: -0.15s;
`;

const RingItem = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid ${({ color }) => color};
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${({ color }) => color} transparent transparent transparent;

  &:nth-child(1) {
    ${animation1}
  }

  &:nth-child(2) {
    ${animation2}
  }

  &:nth-child(3) {
    ${animation3}
  }
`;

export { Ring, RingItem };
