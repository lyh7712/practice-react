import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const globalStyles = createGlobalStyle`
  ${reset};
  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing:border-box;
  }

  body {
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:18px;
    padding-top:30px;
    padding-left:30px;
  }

  h2 {
    padding-left: 24px;
  }
`;

export default globalStyles;
