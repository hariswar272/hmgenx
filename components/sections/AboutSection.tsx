'use client';

import React from 'react';
import { CheckCircle, Building2, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';

const milestones = [
  { icon: Building2, title: 'Founded', description: 'Started with a vision to transform digital solutions', color: 'from-secondary-500 to-secondary-400' },
  { icon: Award, title: 'MSME Registered', description: 'Officially recognized as a trusted digital firm', color: 'from-accent-500 to-accent-400' },
  { icon: TrendingUp, title: 'Growing Strong', description: '50+ projects delivered with 99% satisfaction', color: 'from-secondary-600 to-secondary-500' },
];

const features = [
  'MSME-registered digital solutions firm',
  'Custom websites & mobile applications',
  'OMR exam management systems',
  'Professional training & internship programs',
  'Fast, modern & easy to use products',
  'Reliable support & maintenance',
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-[#faf9f7] dark:bg-dark-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-secondary-500/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="About Us"
          title="About"
          highlight="HMGenX"
          subtitle="We are an MSME-registered firm specializing in creating innovative digital solutions that drive business growth and success."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Timeline */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary-500 via-secondary-400 to-accent-500 rounded-full" />

              <div className="space-y-10">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex items-start space-x-6 relative"
                  >
                    {/* Timeline dot */}
                    <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-depth-sm`}>
                      <milestone.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="pt-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mission card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10 p-6 rounded-2xl gradient-border"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Our Mission</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To empower businesses and individuals with cutting-edge digital solutions
                that are fast, secure, and modern. From startups to established businesses,
                we provide comprehensive solutions tailored to your unique needs.
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInRight}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-[#f3f1ec] dark:bg-dark-card border border-gray-100 dark:border-dark-border hover:border-secondary-300 dark:hover:border-secondary-600 transition-all duration-300 hover:shadow-soft group"
                >
                  <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-secondary-500/10 dark:bg-secondary-500/20 flex items-center justify-center group-hover:bg-secondary-500/20 transition-colors">
                    <CheckCircle className="w-4 h-4 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Trust badges */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap gap-3"
            >
              {[
                { label: 'MSME Registered', icon: Award },
                { label: '50+ Projects', icon: TrendingUp },
                { label: '3+ Years', icon: Building2 },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary-500/10 dark:bg-secondary-500/20 text-secondary-700 dark:text-secondary-300 border border-secondary-500/20 text-sm font-medium"
                >
                  <badge.icon className="w-4 h-4" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
