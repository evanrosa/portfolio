import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Unstable_Grid2';

declare const window: any;

export default function About() {
  return (
    <>
      <Container sx={{ paddingBottom: '100px' }}>
        {/* ABOUT */}
        <section id="About">
          <Grid container spacing={6} direction={{ xs: 'column-reverse', md: 'row' }}>
            <Grid xs={12} md={12}>
              <Divider textAlign="left">
                <Typography variant="h4" component="h2" className="countContent">
                  About Me
                </Typography>
              </Divider>

              <Typography variant="body1" paddingTop={4}>
                My professional journey began in the realm of analytics, where I was immersed in running reports and
                deciphering data. As I delved into the code that powered these numbers, I found myself captivated by a
                new world of creativity and behavioral understanding.
              </Typography>
              <Typography variant="body1" sx={{ padding: '10px 0px' }}>
                As time progressed, I've had the privilege of contributing to a diverse range of environments, from
                non-profits and government contracts to established organizations. Today, I serve as a Lead Data
                Engineer, where I am responsible for building and optimizing data workflows. This includes data
                gathering, cleaning, and sorting, with the ultimate goal of transforming raw data into actionable
                insights.
              </Typography>
              <Typography variant="body1" sx={{ padding: '10px 0px' }}>
                In my free time, I channel my passion for coding and problem-solving into full-stack development. I
                handle end-to-end development of applications as personal projects, utilizing a variety of technologies
                such as Python, TypeScript, SQL, and more. These projects allow me to explore the latest technologies
                and continue honing my skills in creating maintainable, well-structured code.
              </Typography>

              <Typography variant="body1" sx={{ padding: '10px 0px' }}>
                Currently, I am expanding my expertise by learning the Google Cloud Platform (GCP), which further equips
                me to handle large-scale data flows and cloud computing solutions. Here are some of the technologies I
                work with:
              </Typography>

              <Grid container spacing={2}>
                <Grid xs={6}>
                  <ul>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Python
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        JavaScript
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        TypeScript
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        SQL
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        NoSQL
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Postgres
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        MySQL
                      </Typography>
                    </li>
                  </ul>
                </Grid>
                <Grid xs={6}>
                  <ul>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Node/NPM/Yarn
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Git/GitLab/Github
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        JIRA
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        ReactJS and NextJS
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Prisma
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        REST APIs
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Google Cloud Platform
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Docker
                      </Typography>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </section>
      </Container>
    </>
  );
}
