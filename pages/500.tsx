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
        <title>Evan Rosa | 500 Error | Data Pipeline Failure</title>
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
            <Typography variant="h1">500</Typography>
            <Typography variant="h2">Pipeline Failed: Manual Intervention Required.</Typography>

            <Typography variant="body1">
              Oops! Looks like a critical failure in the data pipeline. DAG execution may have failed,
              or an unexpected error disrupted the ETL process. Check the logs, restart the job, and
              reprocess your queries. If the issue persists, rollback may be necessary.
            </Typography>
          </motion.div>
        </Container>
      </motion.div>

      {/* Inspired by - https://brittanychiang.com/ */}
    </>
  );
}

export default Error;
