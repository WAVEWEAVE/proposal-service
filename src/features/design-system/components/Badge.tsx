'use client';

import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'info' | 'gray';
  size?: 'small' | 'medium' | 'large';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, className, variant = 'primary', size = 'medium', ...props }, ref) => {
    const baseStyles = cn(
      'inline-flex items-center justify-center',
      'font-medium rounded-full',
      'select-none'
    );

    const variantStyles = {
      primary: 'bg-purple-100 text-purple-700',
      success: 'bg-green-100 text-green-700',
      warning: 'bg-orange-100 text-orange-700',
      error: 'bg-red-100 text-red-700',
      info: 'bg-blue-100 text-blue-700',
      gray: 'bg-gray-100 text-gray-700',
    };

    const sizeStyles = {
      small: 'h-5 px-2.5 text-xs',
      medium: 'h-6 px-3 text-sm',
      large: 'h-7 px-4 text-sm',
    };

    return (
      <span
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
