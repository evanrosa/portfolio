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
                  About Me: Turning Data Into Actionable Insights
                </Typography>
              </Divider>

              <Typography variant="body1" paddingTop={4}>
                My professional journey began in analytics, where I was deeply engaged in managing government website analytics, running reports, and identifying patterns to inform decision-making. As I delved into the underlying systems and code powering these insights, I discovered a passion for the technical challenges and creativity involved in building data solutions. This fascination drove me to expand my expertise into data engineering and full-stack development.
              </Typography>
              <Typography variant="body1" sx={{ padding: '10px 0px' }}>
                Over the years, I’ve had the privilege of contributing to diverse environments, including government contracts, non-profits, and established organizations. Today, as a Lead Data Engineer, I design and optimize scalable data architectures and workflows. My work spans the entire data lifecycle—gathering, cleaning, transforming, and processing data—to deliver actionable insights that empower businesses to make informed decisions.
              </Typography>
              <Typography variant="body1" sx={{ padding: '10px 0px' }}>
                In my free time, I channel my passion for coding into full-stack development projects. From concept to deployment, I create applications using technologies such as Python, TypeScript, React/NextJS (App Router), Redis, and Postgres. These projects allow me to explore the latest technologies and refine my ability to write maintainable, modular code. Currently, I am focused on a side project using NextJS, Prisma, and REST APIs to automate marketing data flows at scale.
              </Typography>

              <Typography variant="body1" sx={{ padding: '10px 0px' }}>
                Here are some of the technologies I work with regularly:
              </Typography>

              <Grid container spacing={2}>
                <Grid xs={4}>
                  <ul>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Python
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        SQL
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        BigQuery
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Apache Airflow
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Notebooks
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Pandas
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        REST APIs
                      </Typography>
                    </li>
                  </ul>
                </Grid>

                <Grid xs={4}>
                  <ul>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Redis
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Docker
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Postgres
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Apache Kafka
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Apache Flink
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Data Modeling
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Google Marketing Platform
                      </Typography>
                    </li>
                  </ul>
                </Grid>


                <Grid xs={4}>
                  <ul>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        TypeScript
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        ReactJS/NextJS (App Router)
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Prisma
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        Git/GitLab/GitHub
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="subtitle1" component="p">
                        JIRA
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
