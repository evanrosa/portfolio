import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      viewport={{ once: false }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: 'easeIn', duration: 2, delay: 0.1 }}
    >
      <Grid container spacing={2} paddingTop={10}>
        <Grid xs={12} sx={{ textAlign: 'center' }}>
          <Link target={'_blank'} rel="noreferrer" href="https://github.com/evro-eth">
            <Typography variant="subtitle1" component="p" gutterBottom>
              Built by evro.eth
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </motion.footer>
  );
}

export default Footer;
