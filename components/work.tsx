import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Paper, Card, CardActions, CardContent, CardMedia, Divider, Typography, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Link from 'next/link';
import { ProjectPost } from '../data/types/types';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Work({ projects }: ProjectPost) {
  const IsNotDesktop = useMediaQuery('(max-width:600px)');

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsMobile(IsNotDesktop);
  });

  return (
    <>
      <Container>
        <Divider textAlign="left">
          <Typography variant="h4" component="h2" className="countContent">
            Things I've Built In Web2
          </Typography>
        </Divider>
        <section id="Work">
          <Grid container spacing={4} direction="row" sx={{paddingTop: 2, paddingBottom: 30}}>
            {!projects && <div>No projects!</div>}
            {projects &&
              projects.map((projects) => {
                return (
                  <Grid xs={12} sm={6} md={4} lg={4}>
                    <Link href={{ pathname: `${projects.frontMatter.website}` }}>
                      <a target={'_blank'} rel="noreferrer" className="noUnderline">
                        {isMobile ? (
                          <Card sx={{ maxWidth: 345 }} key={projects.slug}>
                            <CardMedia
                            component='img'
                            image={projects.frontMatter.thumbnailUrl}
                            >
             
                            </CardMedia>
                            <CardContent>
                              <Typography gutterBottom variant="h4" component="h5">
                                {projects.frontMatter.title}
                              </Typography>
                              <Typography variant="body1" color="text.secondary">
                                {projects.frontMatter.headline}
                              </Typography>
                              <Typography variant="body1" color="text.secondary">
                                {projects.frontMatter.description}
                              </Typography>
                            </CardContent>
                            <CardActions></CardActions>
                          </Card>
                        ) : (
                          <Card sx={{ maxWidth: 345, minHeight: 375 }} key={projects.slug}>
                            <CardMedia
                            component='img'
                            image={projects.frontMatter.thumbnailUrl}
                            height="200"
                            >
                            </CardMedia>
                            <CardContent>
                              <Typography gutterBottom variant="h4" component="h5">
                                {projects.frontMatter.title}
                              </Typography>
                              <Typography variant="body1" color="text.secondary">
                                {projects.frontMatter.headline}
                              </Typography>
                              <Typography variant="body1" color="text.secondary">
                                {projects.frontMatter.description}
                              </Typography>
                            </CardContent>
                            <CardActions></CardActions>
                          </Card>
                        )}
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
