import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

function Footer() {
  return (
    <Grid container spacing={2} paddingTop={10}>
      <Grid xs={12} sx={{ textAlign: 'center' }}>
        <Link target={'_blank'} rel="noreferrer" href="https://github.com/evro-eth">
          <Typography variant="subtitle1" component="p" gutterBottom>
            Built by Evan Rosa
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Footer;
