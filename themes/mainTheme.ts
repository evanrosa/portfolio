import { amber, deepOrange, grey, blue, common } from '@mui/material/colors';

const palette = {
  light: {
    primary: {
      main: '#EBF2FA',
      light: '#EBF2FA',
      dark: '#0a192f',
    },
  },
  dark: {
    primary: {
      main: '#0a192f',
      light: '#EBF2FA',
      dark: '#0a192f',
    },
  },
};

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: palette.light.primary.main,
            light: palette.light.primary.light,
            dark: palette.light.primary.dark,
          },
          background: {
            default: palette.light.primary.main,
            paper: palette.light.primary.main,
          },

          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          primary: {
            main: palette.dark.primary.main,
            light: palette.dark.primary.light,
            dark: palette.dark.primary.dark,
          },
          divider: palette.dark.primary.dark,
          background: {
            default: palette.dark.primary.dark,
            paper: palette.dark.primary.dark,
          },
          text: {
            primary: palette.dark.primary.light,
            secondary: grey[500],
          },
        }),
  },
  typography: {
    fontFamily: [
      'Source Code Pro',
      'Oswald',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    body1: {
      fontFamily: 'Source Code Pro, Poppins, Arial, sans-serif',
    },
  },
});

export const getThemedComponents = (mode) => ({
  components: {
    ...(mode === 'light'
      ? {
          MuiAppBar: {
            styleOverrides: {
              colorPrimary: {
                backgroundColor: palette.light.primary.main,
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                color: palette.light.primary.dark,
              },
            }
          },
        }
      : {
          MuiAppBar: {
            styleOverrides: {
              colorPrimary: {
                backgroundColor: palette.light.primary.dark,
              },
            },
          },
        }),
  },
});
