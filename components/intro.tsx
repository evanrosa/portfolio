import * as React from 'react';
import { Button, Typography, Container } from '@mui/material';

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
        <Typography variant="h1" pb={1} style={{ fontWeight: 600 }}>
          evro.eth
        </Typography>

        <section>
          <Typography variant="h2" pb={4} style={{ fontWeight: 400 }}>
            Building awesome apps in Web2 while maintaining my sanity in the Web3.
          </Typography>
          <Typography variant="subtitle2" pb={3}>
            Data engineer by trade working with APIs, creating and managing Web2 analytic architretures, & working on
            cloud projects for{' '}
            <span style={{ fontWeight: 600 }}>
              <a href="https://www.digitalturbine.com/" target={'_blank'}>
                Digital Turbine
              </a>
            </span>
            . At night, or whenever I have free time, I'm learning how to build Web3 apps. I'm currently a hodler of
            Loser Club, Illogics, Tiny Astro among others.
          </Typography>

          <Button variant="outlined">Check out my wallet</Button>
        </section>
      </Container>
    </>
  );
}