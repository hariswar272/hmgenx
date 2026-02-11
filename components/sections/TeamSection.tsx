'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Calendar, Star, CheckCircle2, Award, Briefcase, Mail, MessageCircle, TrendingUp } from 'lucide-react';
import Avatar from '@/components/ui/Avatar';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import SectionHeading from '@/components/ui/SectionHeading';
import { teamMembers, teamStats } from '@/lib/data/team';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const memberAccents = [
  {
    primary: '#c9982c',
    secondary: '#deb54d',
    gradient: 'from-secondary-500/5 via-secondary-400/3 to-transparent',
  },
  {
    primary: '#df6352',
    secondary: '#ec8a7b',
    gradient: 'from-accent-500/5 via-accent-400/3 to-transparent',
  },
  {
    primary: '#b07d1e',
    secondary: '#c9982c',
    gradient: 'from-secondary-600/5 via-secondary-500/3 to-transparent',
  },
  {
    primary: '#df6352',
    secondary: '#ec8a7b',
    gradient: 'from-accent-500/5 via-accent-400/3 to-transparent',
  },
];

const roleIcons: Record<string, typeof Award> = {
  'Founder': Award,
  'Co-Founder': Code,
  'CEO': Briefcase,
  'CMO': TrendingUp,
};

const specialties: Record<string, string[]> = {
  'Founder': ['Leadership', 'Vision', 'Strategy'],
  'Co-Founder': ['Technology', 'Innovation', 'Design'],
  'CEO': ['Business', 'Growth', 'Operations'],
  'CMO': ['Marketing', 'Branding', 'Analytics'],
};

function TeamCard({ member, index, accent }: {
  member: typeof teamMembers[0];
  index: number;
  accent: typeof memberAccents[0];
}) {
  const RoleIcon = roleIcons[member.role] || Award;
  const skills = specialties[member.role] || [];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      {/* Card with subtle styling */}
      <div className="relative h-full">
        {/* Soft glow on hover */}
        <div
          className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700"
          style={{ background: `radial-gradient(circle at center, ${accent.primary}15, transparent)` }}
        />

        {/* Main card container */}
        <div className="relative h-full bg-white dark:bg-dark-card rounded-3xl border border-primary-100/60 dark:border-dark-border/40 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">

          {/* Subtle gradient overlay at top */}
          <div className={`absolute top-0 inset-x-0 h-32 bg-gradient-to-b ${accent.gradient} pointer-events-none`} />

          {/* Content */}
          <div className="relative p-8 flex flex-col items-center text-center">

            {/* Avatar section */}
            <div className="relative mb-6">
              {/* Subtle rotating ring on hover */}
              <div
                className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                style={{
                  background: `conic-gradient(from 0deg, ${accent.primary}40, transparent, ${accent.secondary}40, transparent, ${accent.primary}40)`,
                  transform: isHovered ? 'rotate(0deg)' : 'rotate(0deg)',
                  animation: isHovered ? 'spin 4s linear infinite' : 'none',
                }}
              />

              {/* Avatar */}
              <div className="relative">
                <Avatar
                  name={member.name}
                  image={member.image}
                  size="lg"
                  className="transform transition-transform duration-500 group-hover:scale-105"
                />

                {/* Small role badge */}
                <motion.div
                  className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-white dark:bg-dark-card shadow-md flex items-center justify-center border border-primary-100 dark:border-dark-border"
                  whileHover={{ scale: 1.1 }}
                  style={{ color: accent.primary }}
                >
                  <RoleIcon className="w-5 h-5" />
                </motion.div>
              </div>
            </div>

            {/* Name */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 font-serif">
              {member.name}
            </h3>

            {/* Role */}
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 tracking-wide">
              {member.role}
            </p>

            {/* Bio */}
            {member.bio && (
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                {member.bio}
              </p>
            )}

            {/* Subtle divider */}
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary-200 dark:via-dark-border to-transparent mb-5" />

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-primary-50/50 dark:bg-dark-surface/50 rounded-full border border-primary-100/50 dark:border-dark-border/30"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Action buttons - subtle */}
            <div className="flex gap-2 w-full">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium text-white shadow-sm hover:shadow-md transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${accent.primary}, ${accent.secondary})`
                }}
              >
                <Mail className="w-4 h-4 mx-auto" />
              </motion.button>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium bg-white dark:bg-dark-surface border border-primary-200 dark:border-dark-border hover:border-primary-300 dark:hover:border-dark-border shadow-sm hover:shadow-md transition-all duration-300"
                style={{ color: accent.primary }}
              >
                <MessageCircle className="w-4 h-4 mx-auto" />
              </motion.button>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </motion.div>
  );
}

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const statItems = [
    { value: 300000, suffix: '+', icon: Code, label: 'Lines of Code' },
    { value: teamStats.yearsExperience, suffix: '+', icon: Calendar, label: 'Years Experience' },
    { value: 99, suffix: '%', icon: Star, label: 'Satisfaction' },
    { value: 50, suffix: '+', icon: CheckCircle2, label: 'Projects Delivered' },
  ];

  return (
    <section ref={sectionRef} id="team" className="section-padding bg-[#faf9f7] dark:bg-dark-bg relative overflow-hidden">

      {/* Subtle background decorations */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 -left-20 w-48 sm:w-72 h-48 sm:h-72 bg-secondary-500/[0.03] dark:bg-secondary-500/[0.02] rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 -right-20 w-56 sm:w-80 h-56 sm:h-80 bg-accent-500/[0.03] dark:bg-accent-500/[0.02] rounded-full blur-3xl"
      />

      {/* Very subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.01] dark:opacity-[0.015]"
        style={{
          backgroundImage: 'radial-gradient(circle, #c9982c 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">

        <SectionHeading
          badge="Our Team"
          title="Meet the"
          highlight="Visionaries"
          subtitle="Dedicated professionals crafting exceptional digital experiences"
        />

        {/* Team cards - clean 3-column grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20"
        >
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              index={index}
              accent={memberAccents[index % memberAccents.length]}
            />
          ))}
        </motion.div>

        {/* Stats section - refined and elegant */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          {/* Stats container */}
          <div className="relative bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm rounded-2xl border border-primary-100/60 dark:border-dark-border/40 shadow-lg overflow-hidden">

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/[0.02] via-transparent to-accent-500/[0.02] pointer-events-none" />

            <div className="relative grid grid-cols-2 md:grid-cols-4">
              {statItems.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  whileHover={{ y: -3 }}
                  className={`relative text-center p-8 group ${
                    i < statItems.length - 1 ? 'md:border-r border-primary-100/60 dark:border-dark-border/40' : ''
                  } ${i < 2 ? 'border-b md:border-b-0 border-primary-100/60 dark:border-dark-border/40' : ''}`}
                >
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 dark:bg-dark-surface mb-3 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
                  </div>

                  {/* Number */}
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1 font-mono">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2.5} />
                  </div>

                  {/* Label */}
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
