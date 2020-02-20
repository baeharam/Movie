import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { primaryColor, Layout } from 'styles/variables';
import LikesList from 'components/Likes/LikesList';

const Likes = () => {
  return (
    <Layout>
      <Header color={primaryColor} bgColor="white" />
      <main>
        <LikesList />
      </main>
      <Footer color={primaryColor} />
    </Layout>
  );
};

export default Likes;
