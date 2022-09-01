import React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, 30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut',
      },
    },
  },
};

const Loader = ({ finishLoading }) => {
  return (
    <Box
      sx={{
        borderRadius: 50,
        width: 300,
        height: 300,
        backgroundColor: 'primary.light',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      component={motion.div}
      variants={loaderVariants}
      animate="animationOne"
    ></Box>
  );
};
export default Loader;
