'use client';

import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'interactive';
  padding?: 'compact' | 'standard' | 'spacious';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      variant = 'default',
      padding = 'standard',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'bg-white rounded-lg';

    const variantStyles = {
      default: 'border border-gray-200 shadow-md',
      elevated: 'shadow-lg hover:shadow-xl transition-shadow duration-200',
      interactive: cn(
        'border border-gray-200 shadow-md',
        'cursor-pointer',
        'hover:shadow-lg hover:scale-[1.02]',
        'active:shadow-md active:scale-[0.98]',
        'transition-all duration-200'
      ),
    };

    const paddingStyles = {
      compact: 'p-4',
      standard: 'p-6',
      spacious: 'p-8',
    };

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          paddingStyles[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Card Sub-components
export const CardHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  );
});
CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ children, className, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn('heading-5 text-gray-900 mb-2', className)}
      {...props}
    >
      {children}
    </h3>
  );
});
CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ children, className, ...props }, ref) => {
  return (
    <p ref={ref} className={cn('body-base text-gray-600', className)} {...props}>
      {children}
    </p>
  );
});
CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
});
CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('mt-4 pt-4 border-t border-gray-200', className)}
      {...props}
    >
      {children}
    </div>
  );
});
CardFooter.displayName = 'CardFooter';
