import * as React from 'react';
import { Button, Typography, Container } from '@mui/material';

export default function About() {
  return (
    <>
      <Container>
        {/* ABOUT */}
        <section id="#About">
          <Typography variant="h2">About Me</Typography>
          <Typography variant="subtitle1">
            So, I started my journey in Web2 as the analytics guy bascially running reports and things of that sort. I
            grew tired of that and started learning the code behind the numbers; it opened a new world of creation and
            understanding behavior that I grew fond of.
          </Typography>
          <Typography variant="subtitle1">
            Fast forward through time and I've had the privledge of working at non-profits, government contracts, and
            established organizations. My main focus today is my day job which I'm currently a data engineer building
            and optimizing data workflows which include data gathering, cleaning, sorting etc. My other main focus is
            within the Web3 ethereum ecosystem where I particpate in NFT communities and build Web3 apps. I'm currently
            learning solidity for contract building but here are some other technologies I work with:
          </Typography>
          <ul>
            <li>
              <Typography variant="body2">JavaScript</Typography>
            </li>
            <li>
              <Typography variant="body2">React/Nextjs</Typography>
            </li>
            <li>
              <Typography variant="body2">Typescript</Typography>
            </li>
            <li>
              <Typography variant="body2">Python</Typography>
            </li>
            <li>
              <Typography variant="body2">SQL</Typography>
            </li>
            <li>
              <Typography variant="body2">Node/NPM/Yarn</Typography>
            </li>
            <li>
              <Typography variant="body2">Git/GitLab/Github</Typography>
            </li>
            <li>
              <Typography variant="body2">Google Cloud Platform</Typography>
            </li>
            <li>
              <Typography variant="body2">Google BigQuery</Typography>
            </li>
            <li>
              <Typography variant="body2">Google Analytics</Typography>
            </li>
            <li>
              <Typography variant="body2">Google Tag Manager</Typography>
            </li>
          </ul>

          <Button variant="outlined">Primary</Button>
        </section>
      </Container>
    </>
  );
}
