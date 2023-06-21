import * as React from 'react';
import { m, Variants } from 'framer-motion';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { useGTMDispatch } from '@elgorditosalsero/react-gtm-hook';
import { Grid } from '@mui/material';

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
  const sendDataToGTM = useGTMDispatch();

  const handleBtnWalletClick = () =>
    sendDataToGTM({
      event: 'click_external',
      element: 'button',
      detail: 'check_out_my_wallet',
      category: 'web3',
      sub_category: 'nft',
      section: 'intro',
    });

  const handleLinkClick = (e, webEnv) =>
    sendDataToGTM({
      event: 'click_external',
      element: 'link',
      detail: e,
      category: webEnv,
      sub_category: 'work',
      section: 'intro',
    });

  return (
    <>
      {/* INTRO */}

      <Container
        sx={{
          minHeight: '100vh',
          padding: '50px 0px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Typography variant="h1" pb={1} style={{ fontWeight: 600 }} component={m.h1} variants={fontVariants}>
          Evan Rosa
        </Typography>

        <section id="evro">
          <Typography variant="h3" component={m.h2} variants={fontVariants} pb={4} style={{ fontWeight: 900 }}>
            Lead Data Engineer and Full Stack Developer
          </Typography>
          <Typography variant="body1" pb={3} component={m.p} variants={fontVariants}>
            A dedicated Lead Data Engineer at{' '}
            <span style={{ fontWeight: 600 }}>
              <Link
                onClick={() => handleLinkClick('dt', 'web2')}
                href="https://www.digitalturbine.com/"
                target={'_blank'}
                rel="noreferrer"
              >
                Digital Turbine
              </Link>
            </span>
            , specializing in managing data architectures and cloud projects. In my free time, I delve into Full Stack
            Web Development, handling end-to-end creation of web applications. My passion is creating maintainable,
            well-structured code while staying up to date on the latest technologies.
          </Typography>

          <Grid container>
            <Grid item xs={4} md={2}>
              <Box sx={{ maxWidth: '300px' }}>
                <m.div
                  variants={fontVariants}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href="https://www.linkedin.com/in/evan-rosa/"
                    target={'_blank'}
                    rel="noreferrer"
                    onClick={handleBtnWalletClick}
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        paddingLeft: 4,
                        paddingRight: 4,
                        paddingTop: 2,
                        paddingBottom: 1,
                      }}
                    >
                      LinkedIn
                    </Button>
                  </Link>
                </m.div>
              </Box>
            </Grid>

            <Grid item xs={4} md={2}>
              <Box sx={{ maxWidth: '300px' }}>
                <m.div
                  variants={fontVariants}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href="https://drive.google.com/file/d/1rsjh36CA5_hYEUCQr_b5K_xzErsTIwPf/view?usp=sharing"
                    target={'_blank'}
                    rel="noreferrer"
                    onClick={handleBtnWalletClick}
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        paddingLeft: 4,
                        paddingRight: 4,
                        paddingTop: 2,
                        paddingBottom: 1,
                      }}
                    >
                      Resume
                    </Button>
                  </Link>
                </m.div>
              </Box>
            </Grid>
          </Grid>
        </section>
      </Container>
    </>
  );
}
