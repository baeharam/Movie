import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Loader.styled';

const Loader = ({ color }) => {
  return (
    <S.Ring>
      <S.RingItem color={color} />
      <S.RingItem color={color} />
      <S.RingItem color={color} />
    </S.Ring>
  );
};

Loader.defaultProps = {
  color: 'white',
};

Loader.propTypes = {
  color: PropTypes.string,
};

export default Loader;
