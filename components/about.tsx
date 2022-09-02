import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import Grid from '@mui/material/Unstable_Grid2';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import LoserEthEyes from '../public/nfts/loser-club-eth-eyes.webp';
import LoserCatman from '../public/nfts/loser-club-catman.webp';
import ClayFriend from '../public/nfts/clayfriend.webp';
import Illogic151 from '../public/nfts/illogic151.webp';
import Illogic1600 from '../public/nfts/illogic1600.webp';
import Illogic2768 from '../public/nfts/illogic2768.webp';
import Illogic4739 from '../public/nfts/illogic4739.webp';
import Illogic4946 from '../public/nfts/illogic4946.webp';
import Illogic6255 from '../public/nfts/illogic6255.webp';
import Illogic7298 from '../public/nfts/illogic7298.webp';
import Illogic8273 from '../public/nfts/illogic8273.webp';
import Tiny219 from '../public/nfts/tiny-astro219.webp';
import Tiny1347 from '../public/nfts/tiny-astro1347.webp';

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
                showThumbs={false}
              >
                <div>
                  <Image
                    src="/nfts/loser-club-eth-eyes.webp"
                    alt="Loser Club 5297"
                    width={200}
                    height={200}
                    layout="responsive"
                  />
                </div>
                <div>
                  <Image
                    src="/nfts/loser-club-catman.webp"
                    alt="Loser Club 8614"
                    width={200}
                    height={200}
                    layout="responsive"
                  />
                </div>
                <div>
                  <Image
                    src="/nfts/ClayFriend.webp"
                    alt="ClayFriends 742"
                    width={200}
                    height={200}
                    layout="responsive"
                  />
                </div>
                <div>
                  <Image
                    src="/nfts/Tiny1347.webp"
                    alt="Tiny Astro Token 1347"
                    width={200}
                    height={200}
                    layout="responsive"
                  />
                </div>
                <div>
                  <Image src="/nfts/Tiny219.webp" alt="tiny Astro 219" width={200} height={200} layout="responsive" />
                </div>
                <div>
                  <Image src="/nfts/Illogic8273.webp" alt="Illogic 8273" width={200} height={200} layout="responsive" />
                </div>
                <div>
                  <Image src="/nfts/Illogic7298.webp" alt="Illogic 7298" width={200} height={200} layout="responsive" />
                </div>
                <div>
                  <Image src="/nfts/Illogic6255.webp" alt="Illogic 6255" width={200} height={200} layout="responsive" />
                </div>
                <div>
                  <Image src="/nfts/Illogic4946.webp" alt="Illogic 4946" width={200} height={200} layout="responsive" />
                </div>
                <div>
                  <Image src="/nfts/Illogic4739.webp" alt="Illogic 4739" width={200} height={200} layout="responsive" />
                </div>
                <div>
                  <Image src="/nfts/Illogic2768.webp" alt="Illogic 2768" width={200} height={200} layout="responsive" />
                </div>
                <div>
                  <Image src="/nfts/Illogic1600.webp" alt="Illogic 1600" width={200} height={200} layout="responsive" />
                </div>
                <div>
                  <Image src="/nfts/Illogic151.webp" alt="Illogic 151" width={200} height={200} layout="responsive" />
                </div>
              </Carousel>
            </Grid>
          </Grid>
        </section>
      </Container>
    </>
  );
}
