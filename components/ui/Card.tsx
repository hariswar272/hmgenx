import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  variant?: 'default' | 'glass' | 'gradient-border' | 'elevated';
  glow?: boolean;
}

export default function Card({
  children,
  className,
  hover = false,
  glass = false,
  variant = 'default',
  glow = false,
}: CardProps) {
  const variants = {
    default: 'bg-white dark:bg-dark-card border border-primary-100 dark:border-dark-border shadow-soft',
    glass: 'glass-card',
    'gradient-border': 'gradient-border',
    elevated: 'bg-white dark:bg-dark-card shadow-depth-md border border-primary-100/50 dark:border-dark-border/50',
  };

  // Support old `glass` boolean prop for backwards compat
  const resolvedVariant = glass ? 'glass' : variant;

  return (
    <div
      className={cn(
        'rounded-2xl p-6 group',
        variants[resolvedVariant],
        hover && 'transition-all duration-300 hover:shadow-premium hover:-translate-y-1',
        glow && 'glow-on-hover',
        className
      )}
    >
      {children}
    </div>
  );
}
