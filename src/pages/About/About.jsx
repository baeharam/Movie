import React from 'react';
import { Layout, primaryColor } from 'styles/variables';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import AboutContent from 'components/About/AboutContent';

const About = () => {
  return (
    <Layout>
      <Header color={primaryColor} />
      <main>
        <AboutContent />
      </main>
      <Footer color={primaryColor} />
    </Layout>
  );
};

export default About;
