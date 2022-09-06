import Head from 'next/head';
import React from 'react';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import { m, Variants } from 'framer-motion';
import DrawerAppBar from '../components/navigation';

const interfaceVariants: Variants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: { type: 'spring', when: 'beforeChildren', staggerChildren: 0.2 },
  },
};

function Error() {
  return (
    <>
      <Head>
        <title>evro.eth | 500 Error | NGMI | GG</title>
        <link rel="icon" href="/favicon-32x32.png" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <header>
        <DrawerAppBar />
      </header>
      <m.div variants={interfaceVariants} initial="hidden" animate="visible">
        <Container
          sx={{
            minHeight: '80vh',
            padding: '100px 0px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <m.div
            viewport={{ once: false }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'easeIn', duration: 2, delay: 0.1 }}
          >
            <Typography variant="h1">500</Typography>
            <Typography variant="h2">GGs to my coding skills.</Typography>

            <Typography variant="body1">
              NGMI! If your on this page then there's a big problem going on with the site and I need to fix it.
            </Typography>
          </m.div>
        </Container>
      </m.div>

      {/* Inspired by - https://brittanychiang.com/ */}
    </>
  );
}

export default Error;
