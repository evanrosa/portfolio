import Head from 'next/head';
import React from 'react';
import dynamic from 'next/dynamic';
import IndexLayout from '../components/layouts/interface';
import { Container } from '@mui/system';
import { getAllPostsWithFrontMatter } from '../lib/utils';
import { ProjectsProps } from '../data/types/types';
import { m } from 'framer-motion';

const Intro = dynamic(() => import('../components/intro'));
const About = dynamic(() => import('../components/about'));
const Work = dynamic(() => import('../components/projects'));
const Job = dynamic(() => import('../components/career'));
const Contact = dynamic(() => import('../components/contact'));

function Home({ projects }: ProjectsProps) {
  function profile() {
    return {
      __html: `{
          "@context": "http://schema.org/",
          "@type": "Person",
          "name": "evro.eth",
          "jobTitle": "Web2 Lead Data Engineer and Web3 Enthusiast",
          "url": "http://evro.dev",
          "email": "mailto:crypto.evro@gmail.com",
      }
    `,
    };
  }

  return (
    <>
      <Head>
        <title>evro.eth | Web2 Big Data Developer and Web3 NFT Degen</title>
        <meta
          name="description"
          content="evro.eth is a Lead Data Engineer exploring Web3."
        />
        <link rel="icon" href="/favicon-32x32.png" />
        <link rel="canonical" href="https://www.evro.dev" />
        <script type="application/ld+json" dangerouslySetInnerHTML={profile()} />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <meta name="twitter:title" content="evro.eth | Lead Data Engineer and Web3 Enthusiast" />
        <meta
          name="twitter:description"
          content="evro.eth is a Lead Data Engineer exploring Web3."
        />
        <meta name="twitter:url" content="https://evro.dev" />
      </Head>
      <Container fixed>
        <main>
          <Intro />

          <m.div
            viewport={{ once: false }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'easeIn', duration: 2, delay: 0.1 }}
          >
            <About />
          </m.div>

          <m.div
            viewport={{ once: false }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'easeIn', duration: 2, delay: 0.1 }}
          >
            <Job />
          </m.div>

          <m.div
            viewport={{ once: false }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'easeIn', duration: 2, delay: 0.1 }}
          >
            <Work projects={projects} />
          </m.div>

          <m.div
            viewport={{ once: false }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'easeIn', duration: 2, delay: 0.1 }}
          >
            <Contact />
          </m.div>
        </main>
      </Container>

      {/* Inspired by - https://brittanychiang.com/ */}
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
