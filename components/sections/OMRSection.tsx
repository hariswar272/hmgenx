'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, BarChart3, FileCheck, Clock, Users, Shield, ArrowRight } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import SectionHeading from '@/components/ui/SectionHeading';
import { staggerContainer, fadeInUp, fadeInLeft, fadeInRight } from '@/lib/animations';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered',
    description: 'Advanced AI technology for accurate result processing',
    bg: 'bg-secondary-500/10 dark:bg-secondary-500/20',
    iconColor: 'text-secondary-600 dark:text-secondary-400',
  },
  {
    icon: Zap,
    title: 'Instant Results',
    description: 'Get exam results processed in seconds, not hours',
    bg: 'bg-secondary-400/10 dark:bg-secondary-400/20',
    iconColor: 'text-secondary-500 dark:text-secondary-300',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Comprehensive analytics and student performance tracking',
    bg: 'bg-accent-500/10 dark:bg-accent-500/20',
    iconColor: 'text-accent-600 dark:text-accent-400',
  },
  {
    icon: FileCheck,
    title: 'Multiple Patterns',
    description: 'Support for JEE, NEET, EAMCET and custom exam patterns',
    bg: 'bg-secondary-600/10 dark:bg-secondary-600/20',
    iconColor: 'text-secondary-600 dark:text-secondary-400',
  },
];

const comparisons = [
  { feature: 'Processing Speed', omr: '< 5 seconds per sheet', manual: '5-10 minutes per sheet', icon: Clock },
  { feature: 'Accuracy Rate', omr: '99.9% accurate', manual: 'Prone to human error', icon: Shield },
  { feature: 'Scalability', omr: '10,000+ sheets/hour', manual: 'Limited by staff', icon: Users },
  { feature: 'Cost Efficiency', omr: 'One-time or annual fee', manual: 'Recurring labor costs', icon: BarChart3 },
];

export default function OMRSection() {
  const handleScroll = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="omr" className="section-padding bg-[#faf9f7] dark:bg-dark-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-secondary-500/5 via-transparent to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-accent-500/5 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge="OMR System"
          title="OMR Exam"
          highlight="Management System"
          subtitle="Revolutionary AI-powered solution for educational institutions"
        />

        {/* Feature Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={fadeInUp}>
              <Card variant="glass" hover className="text-center p-6 h-full group">
                <div className={`inline-flex items-center justify-center w-14 h-14 ${feature.bg} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-8">
            Why Choose <span className="gradient-text">OMR System</span> Over Manual Grading?
          </h3>
          <div className="grid gap-4">
            {comparisons.map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card variant="glass" className="p-4">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-secondary-500/10 dark:bg-secondary-500/20 rounded-lg">
                        <item.icon className="w-4 h-4 text-secondary-600 dark:text-secondary-400" />
                      </div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{item.feature}</span>
                    </div>
                    <div className="text-center">
                      <span className="inline-block px-3 py-1 bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium rounded-full">
                        {item.omr}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="inline-block px-3 py-1 bg-red-500/10 dark:bg-red-500/20 text-red-500 dark:text-red-400 text-sm font-medium rounded-full">
                        {item.manual}
                      </span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card variant="gradient-border" className="p-2">
            <div className="bg-white dark:bg-dark-card rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div variants={fadeInLeft} className="relative">
                  <div className="absolute -top-2 -left-2 w-20 h-20 bg-gradient-to-br from-secondary-500/10 to-secondary-600/10 rounded-full blur-2xl" />
                  <div className="relative">
                    <span className="inline-block px-3 py-1 bg-secondary-500/10 dark:bg-secondary-500/20 text-secondary-600 dark:text-secondary-400 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                      One-Time Purchase
                    </span>
                    <div className="text-4xl font-bold gradient-text font-mono mb-2">
                      <AnimatedCounter value={20000} prefix="₹" duration={1.5} />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                      Complete OMR system with lifetime ownership. No recurring charges.
                    </p>
                    <ul className="space-y-2 mb-6">
                      {['Full system access', 'All exam patterns', 'Lifetime updates', 'Setup assistance'].map((item) => (
                        <li key={item} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-secondary-500 rounded-full" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="glow" onClick={handleScroll} className="w-full">
                      Get Started <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>

                <motion.div variants={fadeInRight} className="relative md:border-l md:border-gray-100 md:dark:border-dark-border md:pl-8">
                  <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-secondary-500/10 to-accent-500/10 rounded-full blur-2xl" />
                  <div className="relative">
                    <span className="inline-block px-3 py-1 bg-accent-500/10 dark:bg-accent-500/20 text-accent-600 dark:text-accent-400 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                      Annual Subscription
                    </span>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold gradient-text font-mono">
                        <AnimatedCounter value={10000} prefix="₹" duration={1.5} />
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">/year</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                      Includes updates, maintenance, and priority support.
                    </p>
                    <ul className="space-y-2 mb-6">
                      {['Priority support', 'Regular updates', 'Cloud backup', 'Training included'].map((item) => (
                        <li key={item} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-accent-500 rounded-full" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" onClick={handleScroll} className="w-full">
                      Subscribe Now <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
