import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'gradient' | 'outline';
  className?: string;
}

export default function Badge({ children, variant = 'primary', className }: BadgeProps) {
  const variants = {
    primary: 'bg-secondary-100 dark:bg-secondary-500/20 text-secondary-700 dark:text-secondary-300',
    secondary: 'bg-accent-100 dark:bg-accent-500/20 text-accent-700 dark:text-accent-300',
    success: 'bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300',
    warning: 'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-700 dark:text-yellow-300',
    gradient: 'bg-gradient-to-r from-secondary-500 to-secondary-700 text-white',
    outline: 'border border-gray-300 dark:border-dark-border text-gray-600 dark:text-gray-400 bg-transparent',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
