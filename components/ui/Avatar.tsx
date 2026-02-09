'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface AvatarProps {
  name: string;
  image?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Avatar({ name, image, size = 'md', className }: AvatarProps) {
  const [imageError, setImageError] = useState(false);

  // Get initials from name
  const getInitials = (fullName: string): string => {
    const names = fullName.trim().split(' ');
    if (names.length === 1) {
      return names[0].charAt(0).toUpperCase();
    }
    return names[0].charAt(0).toUpperCase() + names[names.length - 1].charAt(0).toUpperCase();
  };

  // Generate a consistent color based on name
  const getGradientColor = (fullName: string): string => {
    const gradients = [
      'from-secondary-500 to-secondary-400',
      'from-secondary-600 to-secondary-500',
      'from-accent-500 to-accent-400',
      'from-secondary-500 to-accent-500',
      'from-secondary-400 to-secondary-600',
      'from-accent-400 to-accent-600',
      'from-secondary-600 to-accent-500',
      'from-accent-500 to-secondary-500',
    ];

    let hash = 0;
    for (let i = 0; i < fullName.length; i++) {
      hash = fullName.charCodeAt(i) + ((hash << 5) - hash);
    }

    const index = Math.abs(hash % gradients.length);
    return gradients[index];
  };

  const sizes = {
    sm: 'w-16 h-16 text-xl',
    md: 'w-32 h-32 text-4xl',
    lg: 'w-40 h-40 text-5xl',
  };

  const initials = getInitials(name);
  const gradient = getGradientColor(name);
  const shouldShowImage = image && !imageError;

  return (
    <div className={cn('relative', className)}>
      {/* Glow effect */}
      <div className={cn(
        'absolute inset-0 bg-gradient-to-br rounded-full opacity-20 blur-xl',
        gradient
      )} />

      {/* Avatar circle */}
      <div className={cn(
        'relative rounded-full overflow-hidden border-4 border-white shadow-lg',
        sizes[size]
      )}>
        {shouldShowImage ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={cn(
            'w-full h-full flex items-center justify-center text-white font-semibold bg-gradient-to-br',
            gradient
          )}>
            {initials}
          </div>
        )}
      </div>
    </div>
  );
}
