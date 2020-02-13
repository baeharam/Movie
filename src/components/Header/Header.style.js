import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';
import {
  headerZindex,
  device,
  secondaryColor,
  menuZindex,
  headerHeight,
} from 'styles/variables';

const menuMargin = '1rem';

const Header = styled.header`
  height: ${headerHeight};
`;

const Container = styled.div`
  position: fixed;
  width: 90vw;
  z-index: ${headerZindex};
  display: flex;
  justify-content: ${({ open }) => (open ? 'flex-end' : 'space-between')};
  align-items: center;
  height: ${headerHeight};
  color: ${({ color }) => color};
`;

const LogoButton = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  color: inherit;
  display: ${({ open }) => (open ? 'none' : 'block')};
`;

const IconButton = styled.button`
  color: inherit;
  margin-right: ${menuMargin};
  display: ${({ open }) => (open ? 'none' : 'block')};

  @media ${device.TabletPortrait} {
    margin-right: calc(${menuMargin} + 1rem);
  }

  &:last-child {
    margin-right: 0;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchIcon = styled(IoIosSearch)`
  font-size: 2rem;
  stroke-width: 0.7rem;
`;

const MenuButton = styled.button`
  width: 2rem;
  height: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: transparent;
  cursor: pointer;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? 'black' : ({ color }) => color)};
    transition: all 0.2s linear;

    &:first-child {
      width: ${({ open }) => (open ? '2rem' : '1.3rem')};
      transform-origin: top left;
      transform: ${({ open }) => (open ? 'rotateZ(45deg)' : 'rotateZ(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:nth-child(3) {
      width: ${({ open }) => (open ? '2rem' : '1.3rem')};
      margin-left: auto;
      transform-origin: bottom left;
      transform: ${({ open }) => (open ? 'rotateZ(-45deg)' : 'rotateZ(0)')};
    }
  }
`;

const UL = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const LI = styled.li`
  font-size: 1.3rem;
  margin-right: ${menuMargin};
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  @media ${device.TabletPortrait} {
    margin-right: calc(${menuMargin} + 1rem);
  }
`;

const Overlay = styled.div`
  position: fixed;
  z-index: ${menuZindex};
  left: 0;
  right: 0;
  width: 100%;
  height: ${({ open }) => (open ? '100%' : '0')};
  background-color: ${secondaryColor};
  transition: all 0.3s linear;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? 1 : 0)};
`;

const OverlayUL = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const OverlayLI = styled.li`
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: bold;
  color: black;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }
`;

export {
  Header,
  Container,
  LogoButton,
  SearchIcon,
  IconButton,
  MenuButton,
  MenuContainer,
  UL,
  LI,
  Overlay,
  OverlayUL,
  OverlayLI,
};
