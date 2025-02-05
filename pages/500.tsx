import Head from 'next/head';
import React from 'react';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import { motion, Variants } from 'framer-motion';
import DrawerAppBar from '../components/navigation';

const interfaceVariants: Variants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

function Error() {
  return (
    <>
      <Head>
        <title>404 Error | Data Not Found</title>
        <link rel="icon" href="/favicon-32x32.png" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <header>
        <DrawerAppBar />
      </header>
      <motion.div variants={interfaceVariants} initial="hidden" animate="visible">
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
          <motion.div
            viewport={{ once: false }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'easeIn', duration: 2, delay: 0.1 }}
          >
            <Typography variant="h1">404</Typography>
            <Typography variant="h2">Data Not Found</Typography>

            <Typography variant="body1">
              Uh-oh! This query returned no results. Looks like the data you're looking for isn't in the pipeline.
              Maybe it's still processing, or the schema has changed. Try a different endpoint or check your data source!
            </Typography>
          </motion.div>
        </Container>
      </motion.div>
    </>
  );
}

export default Error;
