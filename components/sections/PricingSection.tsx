'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import SectionHeading from '@/components/ui/SectionHeading';
import { pricingPlans } from '@/lib/data/pricing';
import { staggerContainer, fadeInUp } from '@/lib/animations';

const tierAccents = [
  'from-secondary-500 to-secondary-400',
  'from-secondary-600 to-secondary-500',
  'from-accent-500 to-accent-400',
  'from-secondary-400 to-secondary-300',
  'from-accent-600 to-accent-500',
  'from-secondary-700 to-secondary-600',
];

export default function PricingSection() {
  const handleScroll = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="section-padding bg-[#faf9f7] dark:bg-dark-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-secondary-500/5 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="Pricing"
          title="Transparent"
          highlight="Pricing"
          subtitle="Affordable pricing plans designed for businesses of all sizes"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={fadeInUp}
              className={plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}
            >
              <div
                className={`relative h-full rounded-2xl transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white dark:bg-dark-card border-2 border-secondary-500 shadow-depth-lg hover:shadow-glow-gold'
                    : 'bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border hover:shadow-depth-md hover:-translate-y-1'
                }`}
              >
                {/* Top accent strip */}
                <div className={`h-1 rounded-t-2xl bg-gradient-to-r ${tierAccents[index % tierAccents.length]}`} />

                {/* Popular ribbon */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center space-x-1.5 px-4 py-1.5 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-glow-gold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold gradient-text font-mono">
                      <AnimatedCounter value={plan.price} prefix="₹" duration={1.5} />
                    </span>
                    {plan.period && (
                      <span className="text-gray-500 dark:text-gray-400 ml-2 text-sm">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                    {plan.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5">
                        <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-secondary-500/10 dark:bg-secondary-500/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-secondary-600 dark:text-secondary-400" />
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full"
                    variant={plan.popular ? 'glow' : 'outline'}
                    onClick={handleScroll}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
