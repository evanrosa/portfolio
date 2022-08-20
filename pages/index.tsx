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

function Home({ projects }: ProjectsProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Container fixed>
        <main>
          <Intro />
          <About />
          <Job />
          <Work projects={projects} />
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
