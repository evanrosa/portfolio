import * as React from 'react';
import { Button, Typography, Container } from '@mui/material';

export default function Contact() {
  return (
    <>
      <Container>
        {/* ABOUT */}
        <section id="Contact">
          <Typography variant="subtitle1">So, after reading all that...</Typography>
          <Typography variant="h2">Let's Get In Touch</Typography>

          <Typography variant="body2">
            Even though I'm currently not looking for any new permanent opportunities, as I kinda still like my day job,
            I'm open to after-hour projects especailly if it involves Web3 or NFTs. If you have any questions regarding
            my professional experience or would like to work/discuss anything Web3/NFT related feel free to reach out!
          </Typography>

          <Button variant="outlined">Primary</Button>
        </section>
      </Container>
    </>
  );
}
