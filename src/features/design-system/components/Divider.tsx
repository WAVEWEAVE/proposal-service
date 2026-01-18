'use client';

import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical';
  label?: string;
}

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ className, orientation = 'horizontal', label, ...props }, ref) => {
    if (label) {
      return (
        <div className={cn('relative flex items-center', className)}>
          <div className="flex-grow border-t border-gray-200" />
          <span className="mx-4 body-small text-gray-500">{label}</span>
          <div className="flex-grow border-t border-gray-200" />
        </div>
      );
    }

    return (
      <hr
        ref={ref}
        className={cn(
          orientation === 'horizontal'
            ? 'w-full border-t border-gray-200'
            : 'h-full border-l border-gray-200',
          className
        )}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';
