import Head from 'next/head';
import React from 'react';
import IndexLayout from '../components/layouts/interface';
import Job from '../components/jobs';
import Work from '../components/work';
import Intro from '../components/intro';
import About from '../components/about';
import Contact from '../components/contact';
import { Container } from '@mui/system';
import { getAllPostsWithFrontMatter } from '../lib/utils';
import { ProjectsProps } from '../data/types/types';
import { motion, useScroll, Variants } from 'framer-motion';

const sectionVariants: Variants = {
  hidden: {
    y: '100vw',
  },
  visible: {
    y: '0',
    transition: { type: 'tween', duration: 1 },
  },
};

function Home({ projects }: ProjectsProps) {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Container fixed>
        <main>
          <motion.div variants={sectionVariants} initial="hidden" animate="visible">
            <Intro />
          </motion.div>

          <About />
          <Job />
          <Work projects={projects} />
          <Contact />
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
