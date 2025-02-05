import React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { TypeAnimation } from 'react-type-animation';

const loadingContainer = {
  width: '6rem',
  height: '6rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
};
const loadingCircle = {
  display: 'block',
  width: '1.2rem',
  height: '1.2rem',
  backgroundColor: '#0a192f',
  borderRadius: '50%',
  boxShadow: '0px 0px 10px rgba(10, 25, 47, 0.6)',
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.25,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: '0%',
    scale: 1,
  },
  end: {
    y: '100%',
    scale: 1.3,
  },
};
const loadingCircleTransition = {
  duration: 0.6,
  repeat: Infinity, // Ensures continuous animation
  repeatType: "reverse", // Makes the bounce go up and down smoothly
  ease: "easeInOut",
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
        alignItems: 'center',
        color: '#0a192f',
      }}
    >
      <Box sx={{ textAlign: 'center', marginBottom: '3rem' }}>
        <TypeAnimation
          sequence={['Loading evro.dev...', 'Almost there...', 'Just a moment...']}
          wrapper="div"
          className="loader-text"
          cursor={true}
          repeat={Infinity}
          speed={10}
        />
      </Box>
      <Box>
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