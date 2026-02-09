'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import SectionHeading from '@/components/ui/SectionHeading';
import { portfolioProjects } from '@/lib/data/portfolio';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = ['All', ...new Set(portfolioProjects.map((p) => p.category))];
    return cats;
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return portfolioProjects;
    return portfolioProjects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  const project = selectedProject ? portfolioProjects.find((p) => p.id === selectedProject) : null;

  return (
    <section id="portfolio" className="section-padding bg-[#f3f1ec] dark:bg-dark-surface relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Work"
          title="Our"
          highlight="Portfolio"
          subtitle="Showcasing our best work and successful projects"
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-secondary-600 dark:hover:text-secondary-400 bg-primary-100 dark:bg-dark-card'
              }`}
            >
              {activeFilter === cat && (
                <motion.div
                  layoutId="portfolioFilter"
                  className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project.id)}
                className="cursor-pointer"
              >
                <div className="group bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-depth-md hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <div className="flex items-center space-x-2 text-white text-sm font-medium">
                        <ExternalLink className="w-4 h-4" />
                        <span>View Details</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <Badge className="mb-3" variant="primary">{project.category}</Badge>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2.5 py-1 bg-primary-100 dark:bg-dark-surface rounded-md text-gray-600 dark:text-gray-400 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {project && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-dark-card rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
            >
              <div className="relative h-56">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-6">
                <Badge className="mb-3" variant="primary">{project.category}</Badge>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1.5 bg-secondary-50 dark:bg-secondary-500/20 text-secondary-700 dark:text-secondary-300 rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
