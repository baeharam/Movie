import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { primaryColor, Layout } from 'styles/variables';
import { AroundType, AroundCardList } from 'components/Around/index';

const Around = () => {
  return (
    <Layout>
      <Header color={primaryColor} bgColor="white" />
      <main>
        <AroundType />
        <AroundCardList />
      </main>
      <Footer color={primaryColor} />
    </Layout>
  );
};

export default Around;
