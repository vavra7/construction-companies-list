import { createGlobalStyle } from 'styled-components';

import { typographyMixin } from './typography';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100vh;
  }

  ${typographyMixin}
`;
