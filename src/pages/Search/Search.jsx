import React from 'react';
import Header from 'components/Header/Header';
import { Layout, primaryColor } from 'styles/variables';
import SearchContent from 'components/Search/SearchContent';

const Search = () => {
  return (
    <Layout>
      <Header color={primaryColor} isSearching />
      <main>
        <SearchContent />
      </main>
    </Layout>
  );
};

export default Search;
