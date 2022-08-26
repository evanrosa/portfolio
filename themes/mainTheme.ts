import { amber, deepOrange, grey, blue, common } from '@mui/material/colors';

const palette = {
  light: {
    primary: {
      main: '#ebf2fa' /* Sky */,
      light: '#8892b0' /* Grey */,
      dark: '#0a192f' /* Dark Blue */,
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

          divider: palette.light.primary.dark,
          text: {
            primary: palette.light.primary.dark,
            secondary: palette.light.primary.light,
          },
        }
      : {
          primary: {
            main: palette.light.primary.main,
            light: palette.light.primary.light,
            dark: palette.light.primary.dark,
          },
          divider: palette.light.primary.light,
          background: {
            default: palette.light.primary.dark,
            paper: palette.light.primary.dark,
          },

          text: {
            primary: palette.light.primary.main,
            secondary: palette.light.primary.light,
          },
        }),
  },
  typography: {
    fontFamily: ['Source Code Pro', 'Roboto', 'Arial', 'sans-serif'].join(','),
  },
});

export const getThemedComponents = (mode) => ({
  components: {
    ...(mode === 'light'
      ? {
          MuiAppBar: {
            styleOverrides: {
              colorPrimary: {
                boxShadow:
                  '0px 2px 4px -1px rgb(0 0 0 / 0%), 0px 4px 5px 0px rgb(0 0 0 / 0%), 0px 1px 10px 0px rgb(0 0 0 / 0%);',
                backgroundImage: 'none',
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                color: palette.light.primary.dark,
                borderColor: palette.light.primary.dark,
              },
            },
          },
          MuiLink: {
            styleOverrides: {
              root: {
                color: palette.light.primary.dark,
                textDecoration: 'none',
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              root: {
                color: palette.light.primary.dark,
                '&.Mui-selected': {
                  color: palette.light.primary.light,
                },
              },
            },
          },

          MuiTabs: {
            styleOverrides: {
              indicator: {
                backgroundColor: palette.light.primary.dark,
              },
            },
          },
        }
      : {
          MuiAppBar: {
            styleOverrides: {
              colorPrimary: {
                boxShadow:
                  '0px 2px 4px -1px rgb(0 0 0 / 0%), 0px 4px 5px 0px rgb(0 0 0 / 0%), 0px 1px 10px 0px rgb(0 0 0 / 0%);',
                backgroundImage: 'none',
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                color: palette.light.primary.main,
                borderColor: palette.light.primary.main,
              },
            },
          },
          MuiLink: {
            styleOverrides: {
              root: {
                color: palette.light.primary.light,
                textDecoration: 'none',
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              root: {
                color: palette.light.primary.light,
              },
            },
          },
        }),
  },
});
