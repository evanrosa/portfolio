import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <>
      <Container sx={{ textAlign: 'center' }}>
        {/* ABOUT */}
        <section id="Contact">
          <Typography variant="subtitle1">So, after reading all that...</Typography>
          <Divider textAlign="center">
            <Typography variant="h4" component="h2" className="countContent">
              Let's Get In Touch
            </Typography>
          </Divider>

          <Grid container spacing={2} justifyContent={'center'} paddingBottom={6}>
            <Grid display="flex" justifyContent="center" alignItems="center" paddingTop={4}>
              <Typography maxWidth={'750px'} variant="body1" textAlign={'center'}>
                Even though I'm currently not looking for any new permanent opportunities, as I kinda still like my day
                job, I'm open to after-hour projects especailly if it involves Web3 or NFTs. If you have any questions
                regarding my professional experience or would like to work/discuss anything Web3/NFT related feel free
                to reach out!
              </Typography>
            </Grid>
          </Grid>

          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Button variant="outlined" sx={{ paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 1 }}>
              crypto.evro@gmail.com
            </Button>
          </motion.div>
        </section>
      </Container>
    </>
  );
}
