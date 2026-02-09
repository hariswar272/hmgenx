import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow' | 'gradient-outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'rounded-xl transition-all duration-300 inline-flex items-center justify-center font-medium relative overflow-hidden';

  const variants = {
    primary: 'bg-gradient-to-r from-secondary-600 to-secondary-500 text-white hover:from-secondary-700 hover:to-secondary-600 shadow-soft hover:shadow-premium hover:scale-[1.02] dark:from-secondary-500 dark:to-secondary-400',
    secondary: 'bg-gradient-to-r from-accent-600 to-accent-500 text-white hover:from-accent-700 hover:to-accent-600 shadow-soft hover:shadow-premium hover:scale-[1.02]',
    outline: 'border border-secondary-400 dark:border-secondary-500 text-secondary-700 dark:text-secondary-400 hover:bg-secondary-50 dark:hover:bg-secondary-500/10 hover:border-secondary-600',
    ghost: 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800',
    glow: 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white shadow-glow-gold hover:shadow-glow-primary hover:scale-[1.02]',
    'gradient-outline': 'gradient-border text-secondary-700 dark:text-secondary-400 hover:shadow-glow-gold bg-transparent',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        (loading || disabled) && 'opacity-70 cursor-not-allowed pointer-events-none',
        className
      )}
      disabled={loading || disabled}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {children}
    </button>
  );
}
