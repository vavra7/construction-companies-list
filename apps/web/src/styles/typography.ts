import { css } from 'styled-components';

export const typographyMixin = css`
  * {
    font-family: Arial, Helvetica, sans-serif;
  }

  h1 {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
