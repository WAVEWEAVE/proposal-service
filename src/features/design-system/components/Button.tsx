'use client';

import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'medium',
      fullWidth = false,
      isLoading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      // Base
      'inline-flex items-center justify-center',
      'font-medium rounded-lg',
      'transition-all duration-200',
      'focus:outline-none',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      'select-none'
    );

    const variantStyles = {
      primary: cn(
        'bg-purple-600 text-white',
        'hover:bg-purple-700 active:bg-purple-800',
        'shadow-sm hover:shadow-md'
      ),
      secondary: cn(
        'bg-gray-100 text-gray-900 border border-gray-300',
        'hover:bg-gray-200 active:bg-gray-300',
        'hover:border-gray-400'
      ),
      outline: cn(
        'bg-transparent text-purple-600 border-2 border-purple-600',
        'hover:bg-purple-50 active:bg-purple-100'
      ),
      ghost: cn(
        'bg-transparent text-gray-700',
        'hover:bg-gray-100 active:bg-gray-200'
      ),
    };

    const sizeStyles = {
      small: 'h-8 px-4 text-sm',
      medium: 'h-10 px-5 text-base',
      large: 'h-12 px-7 text-base',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
