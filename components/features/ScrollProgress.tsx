'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-secondary-500 via-secondary-400 to-secondary-500 transform origin-left z-50"
        style={{ scaleX }}
      />
      {/* Glow effect below the bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-secondary-500/30 via-secondary-400/30 to-secondary-500/30 transform origin-left z-50 blur-sm"
        style={{ scaleX }}
      />
    </>
  );
}
