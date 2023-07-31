import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Link from 'next/link';
import { ProjectPost } from '../data/types/types';
import useMediaQuery from '@mui/material/useMediaQuery';
import { m } from 'framer-motion';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Image from 'next/image';
import { useGTMDispatch } from '@elgorditosalsero/react-gtm-hook';

export default function Work({ projects }: ProjectPost) {
  const IsNotDesktop = useMediaQuery('(max-width:600px)');

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsMobile(IsNotDesktop);
  }, [IsNotDesktop]);

  const sendDataToGTM = useGTMDispatch();
  const handleProjectClick = (e) =>
    sendDataToGTM({
      event: 'click_external',
      element: 'card',
      detail: e,
      category: 'web2',
      section: 'things_ive_built',
    });

  return (
    <>
      <Container>
        <Divider textAlign="left">
          <Typography variant="h4" component="h2" className="countContent">
            Things I've Built
          </Typography>
        </Divider>
        <section id="Projects">
          <Grid
            container
            spacing={4}
            direction="row"
            sx={{
              paddingBottom: 30,
              textAlign: { xs: '-webkit-center' },
            }}
            paddingTop={4}
          >
            {!projects && <div>No projects!</div>}
            {projects &&
              projects.map((projects) => {
                return (
                  <Grid xs={12} sm={6} md={4} lg={4} key={projects.slug}>
                    <m.div
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.5 },
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link
                        href={{
                          pathname: `${projects.frontMatter.website}`,
                        }}
                      >
                        <a
                          target={'_blank'}
                          rel="noreferrer"
                          className="noUnderline"
                          onClick={() => handleProjectClick(`${projects.frontMatter.gtmValue}`)}
                        >
                          {isMobile ? (
                            <Card
                              sx={{
                                maxWidth: 345,
                              }}
                            >
                              <CardMedia>
                                <div
                                  style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '100%',
                                  }}
                                >
                                  <Image
                                    src={projects.frontMatter.thumbnailUrl}
                                    layout="responsive"
                                    width={100}
                                    height={100}
                                    alt="project image"
                                  />
                                </div>
                              </CardMedia>

                              <CardContent>
                                <Typography gutterBottom variant="h4" component="h3">
                                  {projects.frontMatter.title}
                                </Typography>
                                <Typography variant="body1" component="h4">
                                  {projects.frontMatter.headline}
                                </Typography>
                                <Typography variant="body1">{projects.frontMatter.description}</Typography>
                              </CardContent>
                              <CardActions></CardActions>
                            </Card>
                          ) : (
                            <Card
                              sx={{
                                maxWidth: 345,
                                minHeight: 375,
                              }}
                            >
                              <CardMedia
                                component="img"
                                image={projects.frontMatter.thumbnailUrl}
                                height="200"
                              ></CardMedia>
                              <CardContent>
                                <Typography gutterBottom variant="h4" component="h3">
                                  {projects.frontMatter.title}
                                </Typography>
                                <Typography variant="body1" component="h4">
                                  {projects.frontMatter.headline}
                                </Typography>
                                <Typography variant="body2">{projects.frontMatter.description}</Typography>
                              </CardContent>
                              <CardActions></CardActions>
                            </Card>
                          )}
                        </a>
                      </Link>
                    </m.div>
                  </Grid>
                );
              })}
          </Grid>
        </section>
      </Container>
    </>
  );
}
