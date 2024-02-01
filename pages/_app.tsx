import '../styles/globals.css';
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  responsiveFontSizes,
} from '@mui/material';
import { deepmerge } from '@mui/utils';
import useMediaQuery from '@mui/material/useMediaQuery';
import { getDesignTokens, getThemedComponents } from '../themes/mainTheme';
import { ColorModeContext } from '../themes/color-context';

import type { NextComponentType } from 'next';
import type { AppProps } from 'next/app';
import { FC, Fragment, useState, useEffect, useMemo } from 'react';
import { GTMProvider } from '@elgorditosalsero/react-gtm-hook';

import Loader from '../components/loader';

type CustomNextComponent = NextComponentType & { Layout?: FC };
type CustomAppProps = AppProps & { Component: CustomNextComponent };

function MyApp({ Component, pageProps }: CustomAppProps) {
  const Layout: CustomNextComponent | typeof Fragment = Component.Layout
    ? Component.Layout
    : Fragment;
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [mode, setMode] = useState<string | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  let theme = useMemo(
    () =>
      createTheme(deepmerge(getDesignTokens(mode), getThemedComponents(mode))),
    [mode]
  );

  theme = responsiveFontSizes(theme);

  const gtmParams = {
    id: 'GTM-NL3W835',
    dataLayerName: 'evroDataLayer',
  };
  return (
    /*     <>
      {loading === false ? (
        <GTMProvider state={gtmParams}>
          <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </ColorModeContext.Provider>
        </GTMProvider>
      ) : (
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Loader />
          </ThemeProvider>
        </ColorModeContext.Provider>
      )}
    </> */
    <GTMProvider state={gtmParams}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </GTMProvider>
  );
}

export default MyApp;
