import styled, { css } from 'styled-components';
import { IoIosSearch, IoIosMenu } from 'react-icons/io';
import { headerZindex } from 'styles/variables';

const Position = styled.div`
  position: relative;
`;

const Container = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  z-index: ${headerZindex};
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  color: ${({ color }) => color};
`;

const LogoButton = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  color: inherit;
`;

const IconButton = styled.button`
  color: inherit;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const iconStyle = css`
  font-size: 1.5rem;
  stroke-width: 0.7rem;
`;

const SearchIcon = styled(IoIosSearch)`
  ${iconStyle}
`;

const MenuIcon = styled(IoIosMenu)`
  ${iconStyle}
`;

export {
  Position,
  Container,
  LogoButton,
  SearchIcon,
  IconButton,
  MenuIcon,
  IconContainer,
};
