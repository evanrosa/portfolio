import * as React from 'react';
import { m, Variants } from 'framer-motion';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid2';
import { sendGTMEvent } from '@next/third-parties/google'

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
          minHeight: '80vh',
          padding: '0px 0px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Typography
          variant="h1"
          pb={1}
          style={{ fontWeight: 600 }}
          component={m.h1}
          variants={fontVariants}
        >
          Evan Rosa
        </Typography>

        <section id="evro">
          <Typography
            variant="h3"
            component={m.h2}
            variants={fontVariants}
            style={{ fontWeight: 900 }}
          >
            Experienced Data Engineer Specializing in Scalable Data Solutions
          </Typography>
          <Typography variant="body1" pb={3} component={m.p} variants={fontVariants}>
            Empowering businesses with innovative data pipelines, cloud architectures, and real-time streaming solutions. Leveraging expertise in Python, SQL, and GCP to deliver impactful, data-driven insights.
          </Typography>

          <Grid container spacing={4}>
            <Grid size="auto">
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
                    onClick={() => sendGTMEvent({ event: 'button_clicked', value: 'linkedin' })}
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

            <Grid size="auto">
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
                    href="https://github.com/evanrosa"
                    target={'_blank'}
                    rel="noreferrer"
                    onClick={() => sendGTMEvent({ event: 'button_clicked', value: 'git' })}
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
                      GitHub
                    </Button>
                  </Link>
                </m.div>
              </Box>
            </Grid>
            <Grid size="auto">
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
                    href="https://drive.google.com/file/d/1n9ga9fpCzPKbVcLzDDhuiZ9_PuFlARut/view?usp=sharing"
                    target={'_blank'}
                    rel="noreferrer"
                    onClick={() => sendGTMEvent({ event: 'button_clicked', value: 'resume' })}
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
