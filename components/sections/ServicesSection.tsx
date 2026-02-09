'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Code, GraduationCap, Rocket, CheckCircle, ChevronDown } from 'lucide-react';
import { services } from '@/lib/data/services';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import SectionHeading from '@/components/ui/SectionHeading';
import TiltCard from '@/components/ui/TiltCard';

const iconMap = {
  Globe,
  Code,
  GraduationCap,
  Rocket,
};

const serviceAccents = [
  { gradient: 'from-secondary-500 to-secondary-400', strip: 'from-secondary-500 to-secondary-300', hover: 'hover:border-secondary-300 dark:hover:border-secondary-600' },
  { gradient: 'from-accent-500 to-accent-400', strip: 'from-accent-500 to-accent-300', hover: 'hover:border-accent-300 dark:hover:border-accent-600' },
  { gradient: 'from-secondary-600 to-secondary-500', strip: 'from-secondary-600 to-secondary-400', hover: 'hover:border-secondary-400 dark:hover:border-secondary-500' },
  { gradient: 'from-accent-600 to-accent-500', strip: 'from-accent-600 to-accent-400', hover: 'hover:border-accent-400 dark:hover:border-accent-500' },
];

export default function ServicesSection() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  return (
    <section id="services" className="section-padding bg-[#f3f1ec] dark:bg-dark-surface relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="What We Do"
          title="Our"
          highlight="Services"
          subtitle="Comprehensive digital solutions to elevate your business"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            const accent = serviceAccents[index % serviceAccents.length];
            const isExpanded = expandedService === service.id;

            return (
              <motion.div key={service.id} variants={fadeInUp}>
                <TiltCard tiltAmount={6} scale={1.01}>
                  <div className={`group h-full rounded-2xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border transition-all duration-300 ${accent.hover} overflow-hidden`}>
                    {/* Top accent strip */}
                    <div className={`h-1 bg-gradient-to-r ${accent.strip}`} />

                    <div className="p-6">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${accent.gradient} mb-4 shadow-depth-sm`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed text-sm">
                        {service.description}
                      </p>

                      <ul className="space-y-2">
                        {service.features.slice(0, isExpanded ? undefined : 3).map((feature, idx) => (
                          <motion.li
                            key={idx}
                            initial={idx >= 3 ? { opacity: 0, height: 0 } : false}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="flex items-center space-x-2 text-sm"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-secondary-500 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {service.features.length > 3 && (
                        <button
                          onClick={() => setExpandedService(isExpanded ? null : service.id)}
                          className="mt-3 flex items-center space-x-1 text-xs font-medium text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 transition-colors"
                        >
                          <span>{isExpanded ? 'Show less' : `+${service.features.length - 3} more`}</span>
                          <ChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
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
