import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakPoints: {
      lg: string;
      md: string;
      sm: string;
      xs: string;
    };
    colors: {
      background: string;
      primary: string;
    };
    gutter: string;
  }
}
