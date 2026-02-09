'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Zap, DollarSign, Headphones, Award } from 'lucide-react';
import { whyChooseItems } from '@/lib/data/whychoose';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';
import TiltCard from '@/components/ui/TiltCard';

const iconMap = {
  Settings,
  Zap,
  DollarSign,
  Headphones,
  Award,
};

const accentColors = [
  { gradient: 'from-secondary-500 to-secondary-400', glow: 'group-hover:shadow-[0_0_30px_rgba(201,152,44,0.15)]', bg: 'bg-secondary-500/10 dark:bg-secondary-500/20' },
  { gradient: 'from-secondary-600 to-secondary-500', glow: 'group-hover:shadow-[0_0_30px_rgba(176,125,30,0.15)]', bg: 'bg-secondary-600/10 dark:bg-secondary-600/20' },
  { gradient: 'from-accent-500 to-accent-400', glow: 'group-hover:shadow-[0_0_30px_rgba(223,99,82,0.12)]', bg: 'bg-accent-500/10 dark:bg-accent-500/20' },
  { gradient: 'from-secondary-400 to-secondary-300', glow: 'group-hover:shadow-[0_0_30px_rgba(222,181,77,0.15)]', bg: 'bg-secondary-400/10 dark:bg-secondary-400/20' },
  { gradient: 'from-accent-600 to-accent-500', glow: 'group-hover:shadow-[0_0_30px_rgba(203,71,53,0.12)]', bg: 'bg-accent-600/10 dark:bg-accent-600/20' },
];

export default function WhyChooseSection() {
  return (
    <section className="section-padding bg-[#f3f1ec] dark:bg-dark-surface relative overflow-hidden">
      {/* Dot pattern decoration */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
        backgroundImage: 'radial-gradient(circle, #c9982c 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="Why Us"
          title="Why Choose"
          highlight="HMGenX"
          subtitle="We deliver exceptional digital solutions with unmatched quality and support"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {whyChooseItems.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            const accent = accentColors[index % accentColors.length];
            return (
              <motion.div key={item.id} variants={fadeInUp}>
                <TiltCard tiltAmount={8} scale={1.02}>
                  <div className={`group relative h-full p-8 rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border transition-all duration-300 ${accent.glow} hover:border-gray-200 dark:hover:border-gray-600`}>
                    {/* Decorative number */}
                    <span className="absolute top-4 right-6 text-6xl font-bold text-primary-100 dark:text-[#1e1c18] select-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className={`relative z-10 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${accent.gradient} mb-6 shadow-depth-sm`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="relative z-10 text-lg font-semibold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                    <p className="relative z-10 text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
