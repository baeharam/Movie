import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: 'Noto Sans KR', sans-serif;
    padding: 0;
    overflow: ${({ isOpen }) => (isOpen ? 'hidden' : 'visible')};
  }
  
  *, *:before, *:after {
    outline: none;
    user-select: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style-type: none;
  }

  p,h2 {
    margin: 0;
  }
`;

export default GlobalStyle;
