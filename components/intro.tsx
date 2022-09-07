import * as React from 'react';
import { motion, Variants } from 'framer-motion';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import {  useGTMDispatch } from '@elgorditosalsero/react-gtm-hook';

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
  const sendDataToGTM = useGTMDispatch()

  const handleBtnWalletClick = () => sendDataToGTM({ event: 'click_external', element: 'button', detail: 'check_out_my_wallet', category: 'web3', sub_category: 'nft'  })
  const handleLinkDTClick = () => sendDataToGTM({ event: 'click_external', element: 'link', detail: 'digital_turbine', category: 'web2', sub_category: 'work' })
  const handleLinkNFTLoserClubClick = () => sendDataToGTM({ event: 'click_external', element: 'link', detail: 'loser_club', category: 'web3', sub_category: 'nft' })
  const handleLinkNFTIllogicsClick = () => sendDataToGTM({ event: 'click_external', element: 'link', detail: 'illogics', category: 'web3', sub_category: 'nft' })
  const handleLinkNFTTinyAstroClick = () => sendDataToGTM({ event: 'click_external', element: 'link', detail: 'tiny_astro', category: 'web3', sub_category: 'nft' })

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
            During work hours I'm a data engineer by trade working with APIs, creating and managing Web2 analytic
            architretures, & working on cloud projects for{' '}
            <span style={{ fontWeight: 600 }}>
              <Link onClick={handleLinkDTClick} href="https://www.digitalturbine.com/" target={'_blank'} rel="noreferrer">
                Digital Turbine
              </Link>
            </span>
            . At night, or whenever I have free time, I'm learning how to build Web3 apps. I'm currently a hodler of
            <span style={{ fontWeight: 600 }}>
              {' '}
              <Link onClick={handleLinkNFTLoserClubClick} href="https://twitter.com/loserclubreborn" target={'_blank'} rel="noreferrer">
                Loser Club
              </Link>
            </span>
            ,{' '}
            <span style={{ fontWeight: 600 }}>
              {' '}
              <Link onClick={handleLinkNFTIllogicsClick} href="https://www.illogics.io/" target={'_blank'} rel="noreferrer">
                Illogics
              </Link>
            </span>
            ,{' '}
            <span style={{ fontWeight: 600 }}>
              {' '}
              <Link onClick={handleLinkNFTTinyAstroClick} href="https://tinyastro.io/" target={'_blank'} rel="noreferrer">
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
                <Button onClick={handleBtnWalletClick} variant="outlined" sx={{ paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 1 }}>
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
