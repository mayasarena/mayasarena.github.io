'use client';
import React from 'react';
import { motion } from 'framer-motion';

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: 0, type: "easeInOut", duration: 1.2, ease: "linear" },
        opacity: { duration: 0.01 }
      }
    }
  };

export function Heart () {
  return (
    <motion.svg 
      width="63" 
      height="53" 
      viewBox="0 0 63 53" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      <motion.path 
        stroke="#F02077" 
        strokeWidth="7" 
        strokeLinecap="round"
        variants={draw}
        d="M28.1371 48.8615C23.3757 47.856 -6.31095 11.2649 6.96842 5.24142C20.2478 -0.782015 27.2304 21.3837 30.0114 23.546C32.7923 25.7083 40.1019 0.337141 55.6694 9.2293C71.2368 18.1215 31.9463 49.6658 28.1371 48.8615Z" 
      />
    </motion.svg>
  );
};

export function Star() {
  return (
    <motion.svg 
      width="74" 
      height="70" 
      viewBox="0 0 74 70" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      <motion.path 
        stroke="#F02077" 
        strokeWidth="7" 
        strokeLinecap="round"
        variants={draw}
        d="M50.189 23.1118C46.3632 22.4534 30.5983 1.76363 28.8211 4.72268C27.044 7.68174 24.5339 28.0866 22.3156 28.6446C20.0972 29.2026 2.07125 33.1082 3.71713 34.8011C5.36301 36.494 24.9301 44.6662 25.6012 47.6577C26.2724 50.6492 26.1227 66.1431 28.3411 65.5851C30.5595 65.0271 39.8664 48.2558 42.8881 47.6578C45.9099 47.0598 60.9971 59.2347 62.0097 57.1163C63.0222 54.9978 54.792 42.5841 55.1732 40.2193C55.5545 37.8544 72.3876 18.7674 69.5572 19.4794C66.7268 20.1913 54.0148 23.7701 50.189 23.1118Z"
      />
    </motion.svg>
  )
};

export function Sparkle() {
  return (
    <motion.svg 
    width="53" 
    height="75" 
    viewBox="0 0 53 75" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    initial="hidden"
    animate="visible"
  >
    <motion.path 
      stroke="#F02077" 
      strokeWidth="7" 
      strokeLinecap="round"
      variants={draw}
      d="M18.332 4.00926C19.2432 17.6302 17.0098 45.5504 0.786133 48.264C17.0098 45.5504 26.9811 63.893 29.9388 73.4035C29.6374 62.2793 33.6609 39.2571 52.166 36.1619C33.6609 39.2571 21.8571 15.7637 18.2684 3.63013" 
    />
  </motion.svg>
  )
};