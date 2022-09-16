import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import Grid from '@mui/material/Unstable_Grid2';

import { Alchemy, Network } from 'alchemy-sdk';

declare const window: any;

let ownedNFTs;
let cleanOwnedNFTs;

const config = {
  apiKey: process.env.ALCHEMY_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(config);

(async () => {
  const nfts = await alchemy.nft.getNftsForOwner('evro.eth');
  console.log(nfts); /* NEed to filter at top level, clean out undefined and other nfts you don't want shown */
  
  ownedNFTs = nfts['ownedNfts'].map(data => data.rawMetadata);
  
  
  for (let i = 0; i < ownedNFTs.length; i++) {
    const element = ownedNFTs[i];
    if ((element.image || '').includes('ipfs://')){
        ownedNFTs[i].image = 'https://ipfs.io/ipfs/' + element.image.replace("ipfs://","")
      }
      else{
        null
      }   
  }


})();

export default function About() {
  console.log(ownedNFTs);
  return (
    <>
      <Container sx={{ paddingBottom: '100px' }}>
        {/* ABOUT */}
        <section id="About">
          <Grid container spacing={6} direction={{ xs: 'column-reverse', md: 'row' }}>
            <Grid xs={12} md={8}>
              <Divider textAlign="left">
                <Typography variant="h4" component="h2" className="countContent">
                  About Me
                </Typography>
              </Divider>

              <Typography variant="body1" paddingTop={4}>
                So, I started my journey in Web2 as the analytics guy bascially running reports and things of that sort.
                I grew tired of that and started learning the code behind the numbers; it opened a new world of creation
                and understanding behavior that I grew fond of.
              </Typography>
              <Typography variant="body1" sx={{ padding: '10px 0px' }}>
                Fast forward through time and I've had the privledge of working at non-profits, government contracts,
                and established organizations. My main focus today is my day job which I'm currently a data engineer
                building and optimizing data workflows which include data gathering, cleaning, sorting etc. My other
                main focus is within the Web3 ethereum ecosystem where I particpate in NFT communities and build Web3
                apps.
              </Typography>
              <Typography variant="body1" sx={{ padding: '10px 0px' }}>
                I'm currently learning GCP and solidity for ethereum smart contract building but here are some other
                technologies I work with:
              </Typography>

              <Grid container spacing={2}>
                <Grid xs={6}>
                  <ul>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        JavaScript
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        React/Nextjs
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Typescript
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Python
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        SQL
                      </Typography>
                    </li>
                  </ul>
                </Grid>
                <Grid xs={6}>
                  <ul>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Node/NPM/Yarn
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Git/GitLab/Github
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Google BigQuery
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Google Analytics
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Google Tag Manager
                      </Typography>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
            <Grid xs={12} md={4}>
              <div></div>

              {ownedNFTs && ownedNFTs.map(({ image, name }) => {
                return (
                  <Image
                    key={name}
                    src={`${image}`}
                    alt={`${name}`}
                    width={200}
                    height={200}
                    layout="fill"
                    sizes="(min-width: 75em) 33vw,
                      (min-width: 48em) 50vw,
                      100vw"
                  />
                );
              })}
            </Grid>
          </Grid>
        </section>
      </Container>
    </>
  );
}
