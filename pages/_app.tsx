import '../styles/globals.css';
import { ThemeProvider, CssBaseline, createTheme, responsiveFontSizes } from '@mui/material';
import { deepmerge } from '@mui/utils';
import useMediaQuery from '@mui/material/useMediaQuery';
import { getDesignTokens, getThemedComponents } from '../themes/mainTheme';
import { ColorModeContext } from '../themes/color-context';
import { GoogleTagManager } from '@next/third-parties/google';

import type { NextComponentType } from 'next';
import type { AppProps } from 'next/app';
import { FC, Fragment, useState, useEffect, useMemo } from 'react';

import Loader from '../components/loader';
import React from 'react';

const GTM_ID = 'GTM-M8Z3L8M6';

type CustomNextComponent = NextComponentType & { Layout?: FC };
type CustomAppProps = AppProps & { Component: CustomNextComponent };

function MyApp({ Component, pageProps }: CustomAppProps) {
  const Layout: CustomNextComponent | typeof Fragment = Component.Layout
    ? Component.Layout
    : Fragment;
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const [mode, setMode] = useState<string | undefined>(prefersDarkMode ? 'dark' : 'light');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  let theme = useMemo(
    () => createTheme(deepmerge(getDesignTokens(mode), getThemedComponents(mode))),
    [mode]
  );

  theme = responsiveFontSizes(theme);

  return (
    <>
      <GoogleTagManager gtmId={GTM_ID} />
      {loading ? (
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Loader />
          </ThemeProvider>
        </ColorModeContext.Provider>
      ) : (
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </ColorModeContext.Provider>
      )}
    </>
  );
}

export default MyApp;
