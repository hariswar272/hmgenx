'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, AlertCircle, Loader } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('loading');

    // Simulate API call - replace with actual newsletter subscription API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setStatus('success');
    setMessage('Thank you for subscribing!');
    setEmail('');
    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 4000);
  };

  return (
    <div className="w-full max-w-md">
      <h4 className="text-sm font-semibold text-gray-300 mb-3">Stay Updated</h4>
      <p className="text-xs text-gray-500 mb-4">
        Subscribe to our newsletter for the latest updates and offers.
      </p>

      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center rounded-xl overflow-hidden bg-gray-800/50 border border-gray-700 focus-within:border-secondary-500 transition-colors duration-200">
          <div className="pl-4 text-gray-400">
            <Mail className="w-4 h-4" />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={status === 'loading' || status === 'success'}
            className="flex-1 px-3 py-3 bg-transparent text-sm text-gray-100 placeholder-gray-500 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            type="submit"
            disabled={status === 'loading' || status === 'success'}
            className="px-5 py-3 bg-gradient-to-r from-secondary-600 to-secondary-500 text-white text-sm font-medium hover:from-secondary-500 hover:to-secondary-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            {status === 'loading' && (
              <Loader className="w-4 h-4 animate-spin" />
            )}
            {status === 'success' && (
              <Check className="w-4 h-4" />
            )}
            {status === 'idle' || status === 'error' ? (
              <span>Subscribe</span>
            ) : null}
          </button>
        </div>

        {/* Status message */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className={`mt-2 flex items-center space-x-1.5 text-xs ${
              status === 'success' ? 'text-emerald-400' : 'text-red-400'
            }`}
          >
            {status === 'success' ? (
              <Check className="w-3.5 h-3.5" />
            ) : (
              <AlertCircle className="w-3.5 h-3.5" />
            )}
            <span>{message}</span>
          </motion.div>
        )}
      </form>
    </div>
  );
}
