import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Paper, Card, CardActions, CardContent, CardMedia, Button, Typography, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Link from 'next/link';
import { ProjectPost } from '../data/types/types';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Work({ projects }: ProjectPost) {
  return (
    <>
      <Container>
        <section>
          <a href="https://ayobafoods.com/" target={'_blank'}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                  m: 1,
                  width: 700,
                  height: 500,
                },
              }}
            >
              <Paper elevation={24}>
                <Typography gutterBottom variant="h5" component="div">
                  01. Ayoba Foods
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Premium Cuts of Homemade South African Biltong
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  I collaborated with Ayoba Foods to rebuild their e-commerce shopify website. This was one of the first
                  websites I've built and I still hold a strong relationship to the Ayoba team to this day.
                </Typography>
              </Paper>
            </Box>
          </a>
          <Grid container spacing={2} direction="row">
            {!projects && <div>No projects!</div>}
            {projects &&
              projects.map((projects) => {
                return (
                  <Grid xs={12} sm={6} md={3}>
                    <Link href={{ pathname: `${projects.frontMatter.website}` }}>
                      <a target={'_blank'}>
                        <Card sx={{ maxWidth: 345 }} key={projects.slug}>
                          <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              {projects.frontMatter.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {projects.frontMatter.headline}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {projects.frontMatter.description}
                            </Typography>
                          </CardContent>
                          <CardActions></CardActions>
                        </Card>
                      </a>
                    </Link>
                  </Grid>
                );
              })}
          </Grid>
        </section>
      </Container>
    </>
  );
}
