import * as React from 'react';
import { Typography, Container, Divider } from '@mui/material';
import Image from 'next/image';
import Grid from '@mui/material/Unstable_Grid2';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import LoserEthEyes from '../public/nfts/loser-club-eth-eyes.jpg';
import LoserCatman from '../public/nfts/loser-club-catman.jpg';
import ClayFriend from '../public/nfts/clayfriend.png';
import Illogic151 from '../public/nfts/illogic151.png';
import Illogic1600 from '../public/nfts/illogic1600.png';
import Illogic2768 from '../public/nfts/illogic2768.png';
import Illogic4739 from '../public/nfts/illogic4739.png';
import Illogic4946 from '../public/nfts/illogic4946.png';
import Illogic6255 from '../public/nfts/illogic6255.png';
import Illogic7298 from '../public/nfts/illogic7298.png';
import Illogic8273 from '../public/nfts/illogic8273.png';
import Tiny219 from '../public/nfts/tiny-astro219.png';
import Tiny1347 from '../public/nfts/tiny-astro1347.png';

export default function About() {
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
              <Carousel
                autoPlay={true}
                infiniteLoop={true}
                interval={3800}
                showArrows={false}
                showIndicators={false}
                showStatus={false}
              >
                <div>
                  <Image
                    src={LoserEthEyes}
                    alt="Picture of the author"
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                </div>
                <div>
                  <Image
                    src={LoserCatman}
                    alt="Picture of the author"
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                </div>
                <div>
                  <Image
                    src={ClayFriend}
                    alt="Picture of the author"
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                </div>
                <div>
                  <Image
                    src={Tiny1347}
                    alt="Picture of the author"
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                </div>
                <div>
                  <Image
                    src={Tiny219}
                    alt="Picture of the author"
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                </div>
                <div>
                  <Image
                    src={Illogic8273}
                    alt="Picture of the author"
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                </div>
                <div>
                  <Image
                    src={Illogic7298}
                    alt="Picture of the author"
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                </div>
                <div>
                  <Image
                    src={Illogic6255}
                    alt="Picture of the author"
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                </div>
                <div>
                  <Image
                    src={Illogic4946}
                    alt="Picture of the author"
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                </div>
                <div>
                  <Image
                    src={Illogic4739}
                    alt="Picture of the author"
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                </div>
                <div>
                  <Image
                    src={Illogic2768}
                    alt="Picture of the author"
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                </div>
                <div>
                  <Image
                    src={Illogic1600}
                    alt="Picture of the author"
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                </div>
                <div>
                  <Image
                    src={Illogic151}
                    alt="Picture of the author"
                    // width={500} automatically provided
                    // height={500} automatically provided
                    // blurDataURL="data:..." automatically provided
                    // placeholder="blur" // Optional blur-up while loading
                  />
                </div>
              </Carousel>
            </Grid>
          </Grid>
        </section>
      </Container>
    </>
  );
}
