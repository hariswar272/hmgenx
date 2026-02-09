'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight: string;
  subtitle: string;
  align?: 'center' | 'left';
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeInUp}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.25em] bg-secondary-500/10 text-secondary-700 dark:bg-secondary-500/15 dark:text-secondary-400 border border-secondary-500/20 mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4 font-serif">
        {title}{' '}
        <span className="gradient-text">{highlight}</span>
      </h2>
      <p className={`text-lg text-gray-600 dark:text-gray-400 ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}>
        {subtitle}
      </p>
    </motion.div>
  );
}
