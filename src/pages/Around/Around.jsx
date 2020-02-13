import React from 'react';
import Header from 'components/Header/Header';
import { primaryColor } from 'styles/variables';
import { AroundType, AroundCardList } from 'components/Around/index';

const Around = () => {
  return (
    <>
      <Header color={primaryColor} />
      <AroundType />
      <AroundCardList />
    </>
  );
};

export default Around;
