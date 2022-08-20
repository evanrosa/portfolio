import * as React from 'react';
import { Button, Typography, Container } from '@mui/material';

export default function Intro() {
  return (
    <>
      {/* INTRO */}

      <Container sx={{minHeight:  '100vh', padding: '100px 0px',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
        <Typography variant="h1">evro.eth</Typography>

        <section>
          <Typography variant="h2">Building awesome apps in Web2 while maintaining my sanity in the Web3.</Typography>
          <Typography variant="subtitle1">
            During the day I'm a data engineer working with APIs and writing software, creating and managing Web2
            analytic architretures, and working on cloud projects. At night, or whenever I have free time, I'm learning
            how to build Web3 apps while also being a degen on NFTs within the ethereum blockchain ecosystem. I'm
            currently a hodler of Loser Club, Illogics, Dippies, Tiny Astro among others.
          </Typography>

          <Button variant="outlined">Primary</Button>
        </section>
      </Container>
    </>
  );
}
