'use client';

import { cn } from '@/lib/utils';
import { forwardRef, InputHTMLAttributes, useId } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, id, disabled, ...props }, ref) => {
    const generatedId = useId();
    const checkboxId = id || generatedId;

    return (
      <div className={cn('flex items-start gap-2', className)}>
        <div className="relative flex items-center">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            disabled={disabled}
            className={cn(
              // Base
              'w-5 h-5 rounded cursor-pointer',
              'border-2 transition-all duration-200',
              'appearance-none',
              // Default state
              'border-gray-300 bg-white',
              // Checked state
              'checked:bg-purple-600 checked:border-purple-600',
              // Focus state
              'focus:outline-none',
              // Disabled state
              disabled && 'cursor-not-allowed opacity-50'
            )}
            {...props}
          />
          {/* Checkmark */}
          <svg
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100"
            style={{
              opacity: 'var(--checkbox-checked, 0)',
            }}
            viewBox="0 0 12 10"
            fill="none"
          >
            <path
              d="M1 5L4.5 8.5L11 1.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <style jsx>{`
            input:checked + svg {
              --checkbox-checked: 1;
            }
          `}</style>
        </div>

        {label && (
          <label
            htmlFor={checkboxId}
            className={cn(
              'body-base text-gray-700 cursor-pointer select-none',
              disabled && 'cursor-not-allowed opacity-50'
            )}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
