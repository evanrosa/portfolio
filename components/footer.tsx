import Link from 'next/link';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

function Footer() {
  return (
    <footer>
      <Grid container spacing={2} paddingTop={10}>
        <Grid xs={12} sx={{ textAlign: 'center' }}>
          <Link target={'_blank'} rel="noreferrer" href="https://github.com/evro-eth">
            <Typography variant="subtitle1" component="p" gutterBottom>
              Built by evro.eth
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
