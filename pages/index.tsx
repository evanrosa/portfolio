import Head from 'next/head';
import React from 'react';
import dynamic from 'next/dynamic';
import IndexLayout from '../components/layouts/interface';
import { Container } from '@mui/system';
import { getAllPostsWithFrontMatter } from '../lib/utils';
import { ProjectsProps } from '../data/types/types';
import { m } from 'framer-motion';
import { GoogleTagManager } from '@next/third-parties/google';

const Intro = dynamic(() => import('../components/intro'));
const About = dynamic(() => import('../components/about'));
const Work = dynamic(() => import('../components/projects'));
const Job = dynamic(() => import('../components/work'));
const Contact = dynamic(() => import('../components/contact'));

const GTM_ID = 'GTM-M8Z3L8M6';

function Home({ projects }: ProjectsProps) {
  function profile() {
    return {
      __html: `{
          "@context": "http://schema.org/",
          "@type": "Person",
          "name": "Evan Rosa",
          "jobTitle": "Lead Data Engineer",
          "url": "https://evro.dev",
          "email": "mailto:evandanrosa@gmail.com",
          "description": "Experienced Data Engineer specializing in batch and streaming ETL, scalable architectures, and workflow orchestration. Skilled in Python, SQL, and cloud technologies, optimizing data pipelines with Airflow, Spark, Kafka, and Flink."
      }`
    };
  }

  return (
    <>
      <GoogleTagManager gtmId={GTM_ID} />
      <Head>
        <title>Evan Rosa | Lead Data Engineer | Scalable ETL & Cloud Solutions</title>
        <meta
          name="description"
          content="Evan Rosa is a Lead Data Engineer specializing in batch ETL, scalable architectures, and workflow orchestration. Expert in Python, SQL, Airflow, Spark, Flink, and cloud-based data pipelines."
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta
          name="keywords"
          content="Lead Data Engineer, ETL Pipelines, Apache Airflow, Apache Flink, Apache Spark, Data Engineering, Cloud Data Architect, BigQuery, Real-time Streaming, Scalable Data Solutions"
        />

        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="canonical" href="https://www.evro.dev" />
        <script type="application/ld+json" dangerouslySetInnerHTML={profile()} />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <meta name="twitter:image" content="https://evro.dev/your-preview-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Evan Rosa | Lead Data Engineer | Scalable ETL & Cloud Solutions" />
        <meta
          name="twitter:description"
          content="Evan Rosa specializes in building high-scale data pipelines, ETL automation, and cloud data solutions."
        />
        <meta name="twitter:url" content="https://evro.dev" />
        <meta property="og:title" content="Evan Rosa | Lead Data Engineer | Scalable ETL & Cloud Solutions" />
        <meta
          property="og:description"
          content="Evan Rosa specializes in batch and streaming ETL, cloud architectures, and workflow orchestration."
        />
        <meta property="og:url" content="https://evro.dev" />
        <meta property="og:image" content="https://evro.dev/your-preview-image.jpg" />
        <meta property="og:type" content="website" />
      </Head>
      <Container fixed>
        <main>
          <Intro />

          <m.div
            viewport={{ once: false }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'easeIn', duration: 2, delay: 0.1 }}
            className="pb-6"
          >
            <About />
          </m.div>

          <m.div
            viewport={{ once: false }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'easeIn', duration: 2, delay: 0.1 }}
            className="pb-6"
          >
            <Work projects={projects} />
          </m.div>

          <m.div
            viewport={{ once: false }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'easeIn', duration: 2, delay: 0.1 }}
            className="pb-6"
          >
            <Job />
          </m.div>


          <Contact />
        </main>
      </Container>
    </>
  );
}

Home.Layout = IndexLayout;
export default Home;

export async function getStaticProps() {
  const projects = await getAllPostsWithFrontMatter('projects');

  return {
    props: {
      projects,
    },
  };
}
