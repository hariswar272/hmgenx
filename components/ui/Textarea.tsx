import React from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            'w-full px-4 py-3 rounded-xl border border-primary-200 dark:border-dark-border',
            'bg-white dark:bg-dark-card text-gray-900 dark:text-gray-100',
            'focus:ring-2 focus:ring-secondary-500/20 focus:border-secondary-500 dark:focus:border-secondary-400',
            'transition-all duration-200',
            'placeholder:text-gray-400 dark:placeholder:text-gray-500',
            'resize-none',
            error && 'border-red-500 dark:border-red-400 focus:ring-red-500/30',
            className
          )}
          rows={5}
          {...props}
        />
        {error && <p className="mt-1.5 text-sm text-red-500 dark:text-red-400">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
