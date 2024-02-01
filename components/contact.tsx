import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import { m } from 'framer-motion';
import Link from '@mui/material/Link';
import { useGTMDispatch } from '@elgorditosalsero/react-gtm-hook';
import Footer from './footer';

export default function Contact() {
  const sendDataToGTM = useGTMDispatch();
  const handleContactClick = () =>
    sendDataToGTM({
      event: 'click_external',
      element: 'button',
      detail: 'contact',
      category: 'web2',
      section: 'contact',
    });

  return (
    <>
      <Container sx={{ textAlign: 'center' }}>
        <section id="Contact">
          <Typography variant="subtitle1">
            So, after reading all that...
          </Typography>
          <Divider textAlign="center">
            <Typography variant="h4" component="h2" className="countContent">
              Let's Get In Touch
            </Typography>
          </Divider>

          <Grid
            container
            spacing={2}
            justifyContent={'center'}
            paddingBottom={6}
          >
            <Grid
              display="flex"
              justifyContent="center"
              alignItems="center"
              paddingTop={4}
            >
              <Typography
                maxWidth={'750px'}
                variant="body1"
                textAlign={'center'}
              >
                I'm always open to exploring new opportunities. If you'd like to
                discuss my professional experience as a Lead Data Engineer or
                Full Stack Developer, or if you're interested in collaborating
                on a project involving data architectures, cloud projects, or
                full stack web applications, please don't hesitate to reach out!
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
              onClick={handleContactClick}
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
