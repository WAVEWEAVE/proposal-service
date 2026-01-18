'use client';

import { cn } from '@/lib/utils';
import { forwardRef, InputHTMLAttributes, useId } from 'react';

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, className, id, disabled, ...props }, ref) => {
    const generatedId = useId();
    const switchId = id || generatedId;

    return (
      <div className={cn('flex items-center gap-3', className)}>
        <div className="relative inline-flex items-center">
          <input
            ref={ref}
            type="checkbox"
            id={switchId}
            disabled={disabled}
            className="sr-only peer"
            {...props}
          />
          <label
            htmlFor={switchId}
            className={cn(
              // Base
              'relative w-11 h-6 rounded-full cursor-pointer',
              'transition-colors duration-200',
              // Default state
              'bg-gray-300',
              // Checked state
              'peer-checked:bg-purple-600',
                // Focus state
                'peer-focus:outline-none',
              // Disabled state
              disabled && 'cursor-not-allowed opacity-50',
              'block'
            )}
          >
            <span
              className={cn(
                'absolute left-1 top-1',
                'w-4 h-4 rounded-full bg-white',
                'transition-transform duration-200',
                'peer-checked:translate-x-5'
              )}
            />
          </label>
        </div>

        {label && (
          <label
            htmlFor={switchId}
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

Switch.displayName = 'Switch';
