const palette = {
  light: {
    primary: {
      main: '#ebf2fa' /* Sky */,
      light: '#8892b0' /* Grey */,
      dark: '#0a192f' /* Dark Blue */,
      yellow: '#FFD23F',
      red: '#B3001B',
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
    fontFamily: ['Anek Telugu', 'Roboto', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontFamily: ['Source Code Pro', 'Anek Telugu', 'Arial', 'sans-serif'].join(','),
    },
    h6: {
      fontFamily: ['Source Code Pro', 'Anek Telugu', 'Arial', 'sans-serif'].join(','),
    },
    body2: {
      fontFamily: ['Source Code Pro', 'Anek Telugu', 'Arial', 'sans-serif'].join(','),
    },
    subtitle1: {
      fontFamily: ['Source Code Pro', 'Anek Telugu', 'Arial', 'sans-serif'].join(','),
      fontSize: 14,
    },
    body1: {
      fontSize: 18,
    },
    subtitle2: {
      fontSize: 16,
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
                '&:hover': {
                  color: palette.light.primary.light,
                  borderColor: palette.light.primary.light,
                },
              },
            },
          },
          MuiLink: {
            styleOverrides: {
              root: {
                color: palette.light.primary.red,
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
                color: palette.light.primary.yellow,
                textDecoration: 'none',
              },
            },
          },
          MuiTab: {
            styleOverrides: {
              root: {
                color: palette.light.primary.light,
                fontFamily: ['Source Code Pro', 'Anek Telugu', 'Arial', 'sans-serif'].join(','),
                textTransform: 'none',
              },
            },
          },
          MuiTypography: {
            styleOverrides: {
              root: {
                color: palette.light.primary.light,
              },
              h1: {
                color: palette.light.primary.main,
              },
              h4: {
                color: palette.light.primary.main,
              },
              body2: {
                color: palette.light.primary.main,
              },
              h6: {
                color: palette.light.primary.main,
              },
            },
          },
        }),
  },
});
