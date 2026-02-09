'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, FileCode, Palette, Code2, Server, Atom, Hexagon, Zap, Code, Database, Braces, Smartphone, Cloud, Box, GitBranch } from 'lucide-react';
import { technologies } from '@/lib/data/technologies';
import { fadeInUp } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';

const iconMap = {
  Layers, FileCode, Palette, Code2, Server, Atom, Hexagon, Zap, Code, Database, Braces, Smartphone, Cloud, Box, GitBranch
};

function TechBadge({ tech }: { tech: { name: string; icon: string; color: string } }) {
  const Icon = iconMap[tech.icon as keyof typeof iconMap];
  return (
    <div
      className="flex items-center space-x-2.5 px-5 py-3 rounded-full border transition-all duration-300 hover:scale-105 hover:shadow-depth-sm cursor-default flex-shrink-0 mx-2"
      style={{
        borderColor: `${tech.color}30`,
        backgroundColor: `${tech.color}08`,
      }}
    >
      <Icon className="w-4 h-4 flex-shrink-0" style={{ color: tech.color }} />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">{tech.name}</span>
    </div>
  );
}

export default function TechnologyStack() {
  // Duplicate for seamless infinite scroll
  const row1 = [...technologies, ...technologies];
  const row2 = [...technologies.slice().reverse(), ...technologies.slice().reverse()];

  return (
    <section className="section-padding bg-[#faf9f7] dark:bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Tech Stack"
          title="Our"
          highlight="Technology Stack"
          subtitle="We use cutting-edge technologies to build robust and scalable solutions"
        />
      </div>

      {/* Marquee rows */}
      <div className="space-y-4 mt-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Row 1 - scrolling left */}
        <div className="flex overflow-hidden group">
          <motion.div
            className="flex animate-marquee group-hover:[animation-play-state:paused]"
          >
            {row1.map((tech, index) => (
              <TechBadge key={`r1-${index}`} tech={tech} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - scrolling right */}
        <div className="flex overflow-hidden group">
          <motion.div
            className="flex animate-marquee-reverse group-hover:[animation-play-state:paused]"
          >
            {row2.map((tech, index) => (
              <TechBadge key={`r2-${index}`} tech={tech} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
