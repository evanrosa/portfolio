import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    layout: {
      red: string;
      blue: string;
      yellow: string;
      sky: string;
      gray: string;
    };
  }
}

let baseTheme = createTheme({
  palette: {
    mode: 'dark',
    common: {
      layout: {
        red: '#b3001b',
        blue: '#0a192f',
        yellow: '#ffd23f',
        sky: '#ebf2fa',
        gray: '#8892b0',
      },
    },
  },
  typography: {
    fontFamily: 'Source Code Pro',
  },
});

baseTheme = responsiveFontSizes(baseTheme);

export default baseTheme;
