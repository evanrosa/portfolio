import Head from 'next/head';
import React from 'react';
import IndexLayout from '../components/layouts/interface';
import Button from '@mui/material/Button';
import VerticalTabs from '../components/work';
import { Box, Typography, Tab, Tabs } from '@mui/material';

function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <main>
        {/* INTRO */}
      
          <Typography variant="h1">evro.eth</Typography>

        <section>
          <Typography variant="h2" >Building awesome apps in Web2 while maintaining my sanity in the Web3.</Typography>
          <Typography variant="subtitle1">During the day I'm a data engineer working with APIs and writing software, creating and managing Web2 analytic architretures,
            and working on cloud projects. At night, or whenever I have free time, I'm learning how to build Web3 apps while also being a degen on NFTs
            within the ethereum blockchain ecosystem. I'm currently a hodler of Loser Club, Illogics, Dippies, Tiny Astro among others.</Typography>

          <Button variant="outlined">Primary</Button>
        </section>

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
            <li><Typography variant="body2">JavaScript</Typography></li>
            <li><Typography variant="body2">React/Nextjs</Typography></li>
            <li><Typography variant="body2">Typescript</Typography></li>
            <li><Typography variant="body2">Python</Typography></li>
            <li><Typography variant="body2">SQL</Typography></li>
            <li><Typography variant="body2">Node/NPM/Yarn</Typography></li>
            <li><Typography variant="body2">Git/GitLab/Github</Typography></li>
            <li><Typography variant="body2">Google Cloud Platform</Typography></li>
            <li><Typography variant="body2">Google BigQuery</Typography></li>
            <li><Typography variant="body2">Google Analytics</Typography></li>
            <li><Typography variant="body2">Google Tag Manager</Typography></li>
          </ul>

          <Button variant="outlined">Primary</Button>
        </section>

        {/* WHERE I'VE WORKED */}
        <section id="#Experience">
          <Typography variant="h2">Where I've worked</Typography>
          <VerticalTabs />
        </section>
        <section>
          <p>gi</p>
        </section>
      </main>
    </div>
  );
}

Home.Layout = IndexLayout;
export default Home;
