import Head from 'next/head';
import React from 'react';
import dynamic from 'next/dynamic';
import IndexLayout from '../components/layouts/interface';
import { Container } from '@mui/system';
import { getAllPostsWithFrontMatter } from '../lib/utils';
import { ProjectsProps } from '../data/types/types';
import { motion } from 'framer-motion';

const Intro = dynamic(() => import('../components/intro'), {
  suspense: true,
});
const About = dynamic(() => import('../components/about'), {
  ssr: false,
});
const Work = dynamic(() => import('../components/work'), {
  ssr: false,
});
const Job = dynamic(() => import('../components/jobs'), {
  ssr: false,
});
const Contact = dynamic(() => import('../components/contact'), {
  ssr: false,
});

function Home({ projects }: ProjectsProps) {
  return (
    <>
      <Head>
        <title>evro.eth | Web2 Big Data Dev and Web3 NFT Degen</title>
        <link rel="icon" href="/favicon-32x32.png" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Container fixed>
        <main>
          <Intro />

          <motion.div
            viewport={{ once: false }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'easeIn', duration: 2, delay: 0.1 }}
          >
            <About />
          </motion.div>

          <motion.div
            viewport={{ once: false }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'easeIn', duration: 2, delay: 0.1 }}
          >
            <Job />
          </motion.div>

          <motion.div
            viewport={{ once: false }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'easeIn', duration: 2, delay: 0.1 }}
          >
            <Work projects={projects} />
          </motion.div>

          <motion.div
            viewport={{ once: false }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'easeIn', duration: 2, delay: 0.1 }}
          >
            <Contact />
          </motion.div>
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
