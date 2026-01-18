'use client';

import { cn } from '@/lib/utils';
import { forwardRef, TextareaHTMLAttributes, useId } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      helperText,
      fullWidth = false,
      className,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const textareaId = id || generatedId;

    return (
      <div className={cn('flex flex-col gap-1.5', fullWidth && 'w-full')}>
        {label && (
          <label
            htmlFor={textareaId}
            className="body-small font-medium text-gray-700"
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          disabled={disabled}
          className={cn(
            // Base
            'w-full min-h-[100px] px-4 py-3 rounded-lg',
            'body-base text-gray-900',
            'border transition-all duration-200',
            'placeholder:text-gray-400',
            'resize-y',
            // Default state
            'border-gray-300 bg-white',
            // Focus state
            'focus:outline-none focus:border-purple-600',
            // Error state
            error && 'border-red-500 focus:border-red-600 bg-red-50',
            // Disabled state
            disabled && 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200',
            className
          )}
          {...props}
        />

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

Textarea.displayName = 'Textarea';
