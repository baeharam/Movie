import styled from 'styled-components';
import { overlayZindex, secondaryColor } from 'styles/variables';

const Overlay = styled.div`
  position: fixed;
  z-index: ${overlayZindex};
  left: 0;
  right: 0;
  width: 100%;
  height: ${({ open }) => (open ? '100%' : '0')};
  background-color: ${secondaryColor};
  transition: all 0.3s linear;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? 1 : 0)};
`;

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const LI = styled.li`
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
  color: black;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;

export { Overlay, UL, LI };
