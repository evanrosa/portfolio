import * as React from 'react';
import { Box, Button, Typography, Container, Link } from '@mui/material';
import { motion, Variants } from 'framer-motion';

const fontVariants: Variants = {
  hidden: {
    y: '5vw',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: { type: 'spring', duration: 1 },
  },
};

export default function Intro() {
  return (
    <>
      {/* INTRO */}

      <Container
        sx={{
          minHeight: '100vh',
          padding: '100px 0px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Typography variant="h1" pb={1} style={{ fontWeight: 600 }} component={motion.h1} variants={fontVariants}>
          evro.eth
        </Typography>

        <section id="evro">
          <Typography variant="h3" component={motion.h2} variants={fontVariants} pb={4} style={{ fontWeight: 900 }}>
            Building in Web2 while maintaining my sanity in Web3.
          </Typography>
          <Typography variant="body1" pb={3} component={motion.p} variants={fontVariants}>
            Data engineer by trade working with APIs, creating and managing Web2 analytic architretures, & working on
            cloud projects for{' '}
            <span style={{ fontWeight: 600 }}>
              <Link href="https://www.digitalturbine.com/" target={'_blank'} rel="noreferrer">
                Digital Turbine
              </Link>
            </span>
            . At night, or whenever I have free time, I'm learning how to build Web3 apps. I'm currently a hodler of
            <span style={{ fontWeight: 600 }}>
              {' '}
              <Link
                href="https://twitter.com/loserclubreborn"
                target={'_blank'}
                rel="noreferrer"
              >
                Loser Club
              </Link>
            </span>
            ,{' '}
            <span style={{ fontWeight: 600 }}>
              {' '}
              <Link href="https://www.illogics.io/" target={'_blank'} rel="noreferrer">
                Illogics
              </Link>
            </span>
            ,{' '}
            <span style={{ fontWeight: 600 }}>
              {' '}
              <Link href="https://tinyastro.io/" target={'_blank'} rel="noreferrer">
                Tiny Astro
              </Link>
            </span>{' '}
            among others.
          </Typography>

          <Box sx={{ maxWidth: '300px' }}>
            <motion.div
              variants={fontVariants}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href="https://opensea.io/0xA662C6253AF152807660Fb7DB6776ca7a35a380C"
                target={'_blank'}
                rel="noreferrer"
              >
                <Button variant="outlined" sx={{ paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 1 }}>
                  Check out my wallet
                </Button>
              </Link>
            </motion.div>
          </Box>
        </section>
      </Container>
    </>
  );
}
