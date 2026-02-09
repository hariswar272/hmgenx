'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '@/lib/constants';
import Button from '@/components/ui/Button';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(`#${current}`);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'tween', duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${
          isScrolled
            ? 'glass-premium shadow-depth-sm'
            : 'bg-transparent'
        }`}
      >
        {/* Bottom gradient glow line when scrolled */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary-500/40 to-transparent" />
        )}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => handleLinkClick('#home')}
              className="group flex items-center hover:scale-105 transition-all duration-300"
            >
              <div className="relative w-[170px] h-[58px] md:w-[202px] md:h-[66px]">
                <Image
                  src="/images/main-logo.png"
                  alt="HMGenX Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === link.href
                      ? 'text-secondary-600 dark:text-secondary-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-secondary-600 dark:hover:text-secondary-400'
                  }`}
                >
                  {link.label}
                  {activeSection === link.href && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 rounded-lg bg-secondary-500/10 dark:bg-secondary-500/20 -z-10"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              <Button
                className="hidden md:inline-flex"
                onClick={() => handleLinkClick('#contact')}
                size="sm"
                variant="glow"
              >
                Get Started
              </Button>
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 overflow-hidden group"
                style={{
                  background: isMobileMenuOpen
                    ? 'linear-gradient(135deg, #c9982c 0%, #deb54d 100%)'
                    : 'transparent'
                }}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {/* Hover gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-secondary-500/10 to-secondary-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isMobileMenuOpen ? 'hidden' : ''}`} />

                {/* Hamburger lines */}
                <div className="relative w-5 h-4 flex flex-col justify-center items-center">
                  <motion.span
                    className="absolute block h-0.5 rounded-full"
                    style={{
                      width: '20px',
                      background: isMobileMenuOpen ? '#ffffff' : 'currentColor'
                    }}
                    animate={{
                      rotate: isMobileMenuOpen ? 45 : 0,
                      y: isMobileMenuOpen ? 0 : -6,
                      width: isMobileMenuOpen ? '20px' : '20px'
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <motion.span
                    className="absolute block h-0.5 rounded-full"
                    style={{
                      width: '20px',
                      background: isMobileMenuOpen ? '#ffffff' : 'currentColor'
                    }}
                    animate={{
                      opacity: isMobileMenuOpen ? 0 : 1,
                      x: isMobileMenuOpen ? -10 : 0
                    }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <motion.span
                    className="absolute block h-0.5 rounded-full"
                    style={{
                      width: '20px',
                      background: isMobileMenuOpen ? '#ffffff' : 'currentColor'
                    }}
                    animate={{
                      rotate: isMobileMenuOpen ? -45 : 0,
                      y: isMobileMenuOpen ? 0 : 6,
                      width: isMobileMenuOpen ? '20px' : '14px'
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
