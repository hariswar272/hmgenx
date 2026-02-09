'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';
import { staggerContainer, fadeInUp } from '@/lib/animations';
import NewsletterSignup from '@/components/ui/NewsletterSignup';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0f0e0c] to-[#0a0a08] text-gray-300 overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-secondary-500/5 via-transparent to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-accent-500/3 via-transparent to-transparent rounded-full blur-3xl" />

      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-secondary-500/40 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Company Info */}
          <motion.div variants={fadeInUp}>
            <div className="relative w-[186px] h-[62px] mb-4">
              <Image
                src="/images/main-logo.png"
                alt="HMGenX Logo"
                fill
                className="object-contain object-left brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Your All-in-One Digital Solutions Partner. We build premium websites,
              mobile apps, and innovative software solutions.
            </p>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs text-gray-500">Available for new projects</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-5 font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-secondary-500 mr-0 group-hover:mr-2 transition-all duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-5 font-semibold">Services</h4>
            <ul className="space-y-3">
              {['Website Development', 'Mobile Applications', 'Web Applications', 'OMR Exam System', 'Internship Programs'].map((service) => (
                <li key={service} className="text-gray-400 text-sm flex items-center">
                  <span className="w-1 h-1 bg-gray-600 rounded-full mr-2.5" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-5 font-semibold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="p-2 bg-[#1e1c18] rounded-lg mt-0.5">
                  <MapPin className="w-4 h-4 text-secondary-400" />
                </div>
                <span className="text-gray-400 text-sm">{SITE_CONFIG.location}</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="p-2 bg-[#1e1c18] rounded-lg">
                  <Mail className="w-4 h-4 text-secondary-400" />
                </div>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="p-2 bg-[#1e1c18] rounded-lg">
                  <Phone className="w-4 h-4 text-secondary-400" />
                </div>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <NewsletterSignup />
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-[#2e2a24]"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} {SITE_CONFIG.fullName}. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-600 text-xs">
              <span>Built with</span>
              <span className="text-accent-500">&#9829;</span>
              <span>by HMGenX Team</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
