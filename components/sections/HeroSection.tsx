'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import ParticleBackground from '@/components/ui/ParticleBackground';

// Loader takes 1.5s + 0.4s exit = ~1.9s. Start hero animations after that.
const LOADER_DURATION = 1.9;

function AnimatedText({ text, className, delay = 0, ready }: { text: string; className?: string; delay?: number; ready: boolean }) {
  return (
    <span className={className} style={{ display: 'inline-block' }}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
          animate={ready ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 40, filter: 'blur(12px)' }}
          transition={{ duration: 0.4, delay: delay + i * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

const subtitleWords = ['Custom', 'websites,', 'mobile', 'apps,', 'OMR', 'exam', 'systems,', 'and', 'professional', 'training', 'programs.', 'Fast,', 'modern,', 'and', 'built', 'for', 'success.'];

export default function HeroSection() {
  const [ready, setReady] = useState(false);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), LOADER_DURATION * 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f3f1ec] via-[#faf9f7] to-primary-50 dark:from-dark-bg dark:via-dark-bg dark:to-dark-surface">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-mesh-1 dark:bg-mesh-dark" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Particle Background */}
      <ParticleBackground count={12} />

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-secondary-500/8 to-secondary-400/5 dark:from-secondary-500/4 dark:to-secondary-400/3 rounded-full blur-[100px] animate-float" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-secondary-500/8 to-secondary-400/5 dark:from-secondary-500/4 dark:to-secondary-400/3 rounded-full blur-[100px] animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-secondary-500/8 to-secondary-400/5 dark:from-secondary-500/4 dark:to-secondary-400/3 rounded-full blur-[80px] animate-float" style={{ animationDelay: '2s' }} />

        {/* Spinning gradient ring */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 animate-spin-slow opacity-40 dark:opacity-20">
          <div className="w-full h-full rounded-full" style={{
            background: 'conic-gradient(from 0deg, #c9982c, #deb54d, #df6352, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle, transparent 85%, black 86%)',
            maskImage: 'radial-gradient(circle, transparent 85%, black 86%)',
          }} />
        </div>
      </div>

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20"
      >
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
            animate={ready ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="inline-flex items-center space-x-2 px-5 py-2.5 bg-secondary-500/10 dark:bg-secondary-500/15 text-secondary-700 dark:text-secondary-300 rounded-full mb-8 border border-secondary-500/20 backdrop-blur-sm"
          >
            <motion.div
              animate={ready ? { rotate: [0, 15, -15, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            <span className="text-sm font-semibold tracking-wide">MSME Registered Digital Agency</span>
          </motion.div>

          {/* Main Heading - Character by character animation */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-[1.3] font-bold tracking-tight">
            <AnimatedText text="Your All-in-One" className="text-gray-900 dark:text-white" delay={0.2} ready={ready} />
            <br />
            <motion.span
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
              animate={ready ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : {}}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="gradient-text inline-block mt-4 py-2"
              style={{ backgroundSize: '200% 200%', animation: 'gradientShift 8s ease infinite' }}
            >
              Digital Solutions Partner
            </motion.span>
          </h1>

          {/* Animated underline beneath heading */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={ready ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.4, ease: 'easeOut' }}
            className="h-1 w-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-secondary-500 via-secondary-400 to-secondary-500 origin-center"
            style={{ backgroundSize: '200% 100%', animation: 'gradientShift 4s ease infinite' }}
          />

          {/* Subtitle - word by word fade in */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {subtitleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={ready ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 1.5 + i * 0.05 }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={ready ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.7, delay: 2.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                variant="glow"
                onClick={() => handleScroll('#contact')}
                className="group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => handleScroll('#services')}
              >
                Our Services
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 50, suffix: '+', label: 'Projects Completed' },
              { value: 3, suffix: '+', label: 'Years Experience' },
              { value: 99, suffix: '%', label: 'Client Satisfaction' },
              { value: 300, suffix: 'k+', label: 'Lines of Code' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={ready ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 2.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="text-center p-4 rounded-2xl glass-card cursor-default"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1 font-mono">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2} />
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 3.0, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-7 h-11 border-2 border-gray-400 dark:border-gray-600 rounded-full p-1.5 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-3 bg-gradient-to-b from-secondary-500 to-secondary-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
