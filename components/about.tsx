import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';

declare const window: any;

export default function About() {
  return (
    <>
      <Container sx={{ paddingBottom: '60px' }}>
        {/* ABOUT */}
        <section id="About">
          <Grid container>
            <Grid size={{ xs: 12, md: 12 }}>
              <Typography variant="h4" component="h2">
                🚀 Data Engineer | Scaling Data Pipelines | Cloud & Distributed Computing
              </Typography>

              <Typography variant="body1" paddingTop={4}>
                As a Lead Data Engineer, I specialize in building scalable, efficient, and high-performing data
                pipelines that power data-driven decision-making. With expertise in Python, SQL, Spark, Airflow,
                Flink, and Cloud technologies, I design, optimize, and orchestrate ETL workflows
                to handle billions of records and terabytes of data daily.
              </Typography>
              <Typography variant="body1" sx={{ padding: '10px 0px' }}>
                My experience spans advertising, government, and tech industries, leading data engineering teams to cut
                costs, improve data reliability, and drive business insights. Whether enhancing legacy workflows or
                implementing real-time streaming solutions, I thrive on solving complex data challenges and leveraging
                big data technologies to deliver impactful results.
              </Typography>
              <Typography variant="body1" sx={{ padding: '10px 0px' }}>
                Let’s connect if you’re looking for scalable data solutions, cloud architecture guidance, or
                high-performance ETL workflows!
              </Typography>


              <Typography variant="h5" sx={{ padding: '20px 0px' }}>
                Technologies I Work With Regularly:
              </Typography>
              <Grid container spacing={4}>
                <Grid size="auto">
                  <ul>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>Apache Airflow</li>
                    <li>Apache Kafka</li>
                    <li>Apache Spark</li>
                    <li>Apache Flink</li>
                    <li>Docker</li>
                  </ul>
                </Grid>

                <Grid size="auto">
                  <ul>
                    <li>BigQuery</li>
                    <li>Databricks</li>
                    <li>GCP</li>
                    <li>Data Modeling</li>
                    <li>Notebooks</li>
                    <li>Pandas</li>
                    <li>REST APIs</li>
                  </ul>
                </Grid>

                <Grid size="auto">
                  <ul>
                    <li>TypeScript</li>
                    <li>ReactJS/NextJS (App Router)</li>
                    <li>Git/GitLab/GitHub</li>
                    <li>Google Marketing Platform</li>
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
