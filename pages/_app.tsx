import '../styles/globals.css';
import baseTheme from '../themes/darkTheme';
import { ThemeProvider, CssBaseline } from '@mui/material';

import type { NextComponentType } from 'next';
import type { AppProps } from 'next/app';
import { FC, Fragment } from 'react';

type CustomNextComponent = NextComponentType & { Layout?: FC };
type CustomAppProps = AppProps & { Component: CustomNextComponent };

function MyApp({ Component, pageProps }: CustomAppProps) {
  const Layout: CustomNextComponent | typeof Fragment = Component.Layout ? Component.Layout : Fragment;
  return (
    <ThemeProvider theme={baseTheme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
