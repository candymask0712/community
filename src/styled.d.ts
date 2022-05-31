import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bgColor: string;
      accentColor: string;
      darkGrey: string;
    };
  }
}
