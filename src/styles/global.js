import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');

  body {
    font-family: 'Noto Sans KR', sans-serif;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
