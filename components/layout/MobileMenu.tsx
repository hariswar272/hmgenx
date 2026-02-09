'use client';

import React from 'react';
import Image from 'next/image';
import { X, ArrowRight, Mail, Phone, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import Button from '@/components/ui/Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const handleLinkClick = (href: string) => {
    onClose();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 lg:hidden"
          />

          {/* Menu panel */}
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{
              type: 'tween',
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-sm z-50 lg:hidden overflow-y-auto"
          >
            {/* Glass background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#faf9f7] via-[#f8f7f4] to-[#f3f1ec] dark:from-dark-surface dark:via-dark-card dark:to-dark-bg" />

            {/* Subtle animated gradient orb */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-secondary-500/10 to-accent-500/10 dark:from-secondary-500/5 dark:to-accent-500/5 rounded-full blur-3xl animate-pulse" />

            {/* Animated gradient accent strip */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="relative h-1 bg-gradient-to-r from-secondary-500 via-secondary-400 to-secondary-500 origin-left"
              style={{
                backgroundSize: '200% 100%',
                animation: 'gradientShift 8s ease infinite'
              }}
            />

            {/* Content container */}
            <div className="relative p-6">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex justify-between items-center mb-12"
              >
                <div className="flex items-center space-x-2">
                  <div className="relative w-[154px] h-[54px]">
                    <Image
                      src="/images/main-logo.png"
                      alt="HMGenX Logo"
                      fill
                      className="object-contain object-left"
                      priority
                    />
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Sparkles className="w-4 h-4 text-secondary-500" />
                  </motion.div>
                </div>
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative p-2.5 rounded-xl transition-all duration-300 overflow-hidden group"
                  aria-label="Close menu"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <X className="w-5 h-5 text-gray-700 dark:text-gray-300 relative z-10" />
                </motion.button>
              </motion.div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-2 mb-8">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 30, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    transition={{
                      delay: 0.15 + i * 0.08,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    onClick={() => handleLinkClick(link.href)}
                    className="group relative flex items-center justify-between px-5 py-4 rounded-2xl overflow-hidden transition-all duration-300 text-gray-700 dark:text-gray-300"
                  >
                    {/* Animated gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/0 via-secondary-500/5 to-secondary-400/0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="absolute inset-0 border border-secondary-500/0 group-hover:border-secondary-500/20 rounded-2xl transition-all duration-300" />

                    {/* Animated circle indicator */}
                    <div className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: 0.15 + i * 0.08 + 0.2,
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        className="relative w-5 h-5"
                      >
                        {/* Outer ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-secondary-500/30 group-hover:border-secondary-500 group-hover:scale-110 transition-all duration-300" />

                        {/* Inner dot with pulse */}
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.6, 1, 0.6]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-gradient-to-br from-secondary-500 to-secondary-400 group-hover:from-secondary-600 group-hover:to-secondary-500"
                        />

                        {/* Rotating highlight */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="absolute -top-0.5 left-1/2 w-1 h-1 rounded-full bg-secondary-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </motion.div>
                    </div>

                    <span className="text-base font-medium ml-6 group-hover:text-secondary-600 dark:group-hover:text-secondary-400 transition-colors duration-300">
                      {link.label}
                    </span>

                    {/* Arrow with glow */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-secondary-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-secondary-500 relative" />
                    </div>
                  </motion.button>
                ))}
              </nav>

              {/* Elegant divider */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="h-px bg-gradient-to-r from-transparent via-secondary-500/30 to-transparent mb-8 origin-center"
              />

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ delay: 0.65, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Button className="w-full group" variant="glow" onClick={() => handleLinkClick('#contact')}>
                  <span className="flex items-center justify-center">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </motion.div>

              {/* Contact info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 space-y-3"
              >
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="group flex items-center space-x-3 px-4 py-3.5 rounded-xl bg-gray-50/80 backdrop-blur-sm border border-transparent hover:border-secondary-500/20 text-sm text-gray-600 hover:text-secondary-600 transition-all duration-300"
                >
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-gradient-to-br from-secondary-500/10 to-secondary-400/5 group-hover:from-secondary-500/20 group-hover:to-secondary-400/10 transition-all duration-300">
                    <Mail className="w-4 h-4 text-secondary-500" />
                  </div>
                  <span className="flex-1 truncate">{SITE_CONFIG.email}</span>
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="group flex items-center space-x-3 px-4 py-3.5 rounded-xl bg-gray-50/80 backdrop-blur-sm border border-transparent hover:border-secondary-500/20 text-sm text-gray-600 hover:text-secondary-600 transition-all duration-300"
                >
                  <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-gradient-to-br from-secondary-500/10 to-secondary-400/5 group-hover:from-secondary-500/20 group-hover:to-secondary-400/10 transition-all duration-300">
                    <Phone className="w-4 h-4 text-secondary-500" />
                  </div>
                  <span>{SITE_CONFIG.phone}</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
