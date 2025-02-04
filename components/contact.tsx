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
          <Typography variant="subtitle1">So, after reading all that...</Typography>
          <Typography variant="h4" component="h2" className="countContent">
            Let's Get In Touch
          </Typography>


          <Grid container spacing={2} justifyContent={'center'} paddingBottom={6}>
            <Grid display="flex" justifyContent="center" alignItems="center" paddingTop={4}>
              <Typography maxWidth={'750px'} variant="body1" textAlign={'center'}>
                I'm always open to exploring new opportunities. If you'd like to discuss my
                professional experience as a Lead Data Engineer, or if you're interested in collaborating on a project involving data architectures, cloud
                projects, or full stack web applications, please don't hesitate to reach out!
              </Typography>
            </Grid>
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
                  paddingLeft: 4,
                  paddingRight: 4,
                  paddingTop: 2,
                  paddingBottom: 1,
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
