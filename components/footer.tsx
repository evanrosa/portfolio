import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import React from 'react';

function Footer() {
  return (
    <Grid container spacing={2} sx={{ paddingTop: 10 }}>
      <Grid size="grow" sx={{ textAlign: 'center' }}>
        <Link target={'_blank'} rel="noreferrer" href="https://www.linkedin.com/in/evan-rosa/">
          <Typography variant="subtitle1" component="p" gutterBottom>
            Built by Evan Rosa
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Footer;
