import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from 'styles/variables';
import * as S from './Footer.style';

const Footer = ({ color }) => {
  return (
    <footer>
      <Wrapper>
        <S.Container>
          <S.Copyright color={color}>만든이. 배하람</S.Copyright>
        </S.Container>
      </Wrapper>
    </footer>
  );
};

Footer.defaultProps = {
  color: 'white',
};

Footer.propTypes = {
  color: PropTypes.string,
};

export default Footer;
