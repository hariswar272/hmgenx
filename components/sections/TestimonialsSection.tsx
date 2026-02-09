'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/lib/data/testimonials';
import SectionHeading from '@/components/ui/SectionHeading';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-[#faf9f7] to-secondary-50 dark:from-dark-bg dark:via-dark-bg dark:to-dark-surface relative overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 bg-mesh-1 dark:bg-mesh-dark opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="Testimonials"
          title="What Our Clients"
          highlight="Say"
          subtitle="Hear from businesses and institutions we've helped transform"
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl p-8 md:p-12 text-center"
              >
                {/* Quote icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-secondary-500/10 dark:bg-secondary-500/15 mb-6">
                  <Quote className="w-6 h-6 text-secondary-500" />
                </div>

                {/* Stars */}
                <div className="flex justify-center space-x-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'text-secondary-400 fill-secondary-400'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div>
                  <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center text-white font-bold text-lg mb-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border hover:border-secondary-300 dark:hover:border-secondary-600 transition-all hover:shadow-soft"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === current
                        ? 'bg-secondary-500 w-8'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-2 rounded-full bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border hover:border-secondary-300 dark:hover:border-secondary-600 transition-all hover:shadow-soft"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
