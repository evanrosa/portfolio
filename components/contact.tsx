import * as React from 'react';
import { Button, Typography, Container, Divider } from '@mui/material';

export default function Contact() {
  return (
    <>
      <Container>
        {/* ABOUT */}
        <section id="Contact">
          <Typography variant="subtitle1">So, after reading all that...</Typography>
          <Divider textAlign="left">
            <Typography variant="h4" component="h2" className="countContent">
              Let's Get In Touch
            </Typography>
          </Divider>

          <Typography variant="body2">
            Even though I'm currently not looking for any new permanent opportunities, as I kinda still like my day job,
            I'm open to after-hour projects especailly if it involves Web3 or NFTs. If you have any questions regarding
            my professional experience or would like to work/discuss anything Web3/NFT related feel free to reach out!
          </Typography>

          <Button variant="outlined" sx={{ paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 1 }}>
            Primary
          </Button>
        </section>
      </Container>
    </>
  );
}
