import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { sendGTMEvent } from '@next/third-parties/google'
import Grid from '@mui/material/Grid2';
import { m } from 'framer-motion';
import Link from '@mui/material/Link';
import Footer from './footer';

export default function Contact() {
  return (
    <>
      <Container sx={{ textAlign: 'center' }}>
        <section id="Contact">
          <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>So, after reading all that...</Typography>
          <Typography variant="h4" component="h2" sx={{ paddingBottom: 4 }}>
            📬 Let's Get In Touch
          </Typography>


          <Grid container justifyContent={'center'} sx={{ paddingBottom: 3 }}>
              <Typography maxWidth={'750px'} variant="body1" textAlign={'center'}>
                I'm actively seeking new opportunities as a Lead Data Engineer, ready to bring my expertise in scalable data architectures, cloud platforms, and ETL pipeline optimization to a forward-thinking team. If you're looking for someone skilled in building high-performance batch and streaming data systems with tools like Spark, Flink, Airflow, and Kafka, let's connect!
              </Typography>
          </Grid>

          <m.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href="mailto:evandanrosa@gmail.com"
              target={'_blank'}
              rel="noreferrer"
              onClick={() => sendGTMEvent({ event: 'link_clicked', value: 'contact' })}
            >
              <Button
                variant="outlined"
                sx={{
                  paddingLeft: 6,
                  paddingRight: 6,
                  paddingTop: 3,
                  paddingBottom: 2,
                }}
              >
                evandanrosa@gmail.com
              </Button>
            </Link>
          </m.div>
        </section>
      </Container>
      <Footer />
    </>
  );
}
