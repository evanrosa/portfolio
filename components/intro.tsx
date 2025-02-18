import * as React from 'react';
import { m, Variants } from 'framer-motion';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid2';
import { sendGTMEvent } from '@next/third-parties/google';

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
          minHeight: '70vh',
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
            Lead Data Engineer | Streaming & Batch ETL | Cloud & Big Data Solutions
          </Typography>
          <Typography variant="body1" pb={3} component={m.p} variants={fontVariants}>
            Designing scalable streaming and batch ETL pipelines to transform raw data into actionable insights. Leveraging expertise in Python, SQL, Airflow, Kafka, Spark, Flink, and cloud platforms to drive business intelligence, optimize workflows, and build resilient data architectures.
          </Typography>

          <Grid container spacing={4} sx={{ paddingBottom: 4 }}>
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
                    href="https://drive.google.com/file/d/1eVJJDfaARY-l-4cmbPSjqzHHlEwo-pSb/view?usp=sharing"
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
