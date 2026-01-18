'use client';

import { cn } from '@/lib/utils';
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = false,
      leftIcon,
      rightIcon,
      className,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={inputId}
            className="body-small font-medium text-gray-700"
          >
            {label}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={cn(
              // Base
              'w-full h-10 px-4 rounded-lg',
              'body-base text-gray-900',
              'border transition-all duration-200',
              'placeholder:text-gray-400',
              // Default state
              'border-gray-300 bg-white',
              // Focus state
              'focus:outline-none focus:border-purple-600',
              // Error state
              error && 'border-red-500 focus:border-red-600 bg-red-50',
              // Disabled state
              disabled && 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200',
              // Icons
              leftIcon && 'pl-10',
              rightIcon && 'pr-10',
              className
            )}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {rightIcon}
            </div>
          )}
        </div>

        {error && (
          <span className="caption text-red-600 flex items-center gap-1">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="flex-shrink-0"
            >
              <path
                d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 4.5V7.5M7 9.5H7.005"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {error}
          </span>
        )}

        {helperText && !error && (
          <span className="caption text-gray-500">{helperText}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
