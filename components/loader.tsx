import React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { TypeAnimation } from 'react-type-animation';

const loadingContainer = {
  width: '4rem',
  height: '4rem',
  display: 'flex',
  justifyContent: 'space-around',
};
const loadingCircle = {
  display: 'block',
  width: '1rem',
  height: '1rem',
  backgroundColor: '#3A36DB',
  borderRadius: '0.5rem',
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: '0%',
  },
  end: {
    y: '60%',
  },
};
const loadingCircleTransition = {
  duration: 0.4,
  yoyo: Infinity,
  ease: 'easeInOut',
};
const Loader = () => {
  return (
    <Container
      sx={{
        minHeight: '100vh',
        padding: '100px 0px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          alignText: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingBottom: '5vw',
        }}
      >
        <TypeAnimation
          sequence={[
            'Please wait while our resources load...',
            () => {
              console.log('Done typing!'); // Place optional callbacks anywhere in the array
            },
          ]}
          wrapper="div"
          className="loader-text"
          cursor={true}
          repeat={0}
          speed={5}
        />
      </Box>
      <Box
        sx={{
          alignItems: 'center',
          alignText: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingBottom: '5vw',
        }}
      >
        <motion.div
          style={loadingContainer}
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
        </motion.div>
      </Box>
    </Container>
  );
};
export default Loader;
