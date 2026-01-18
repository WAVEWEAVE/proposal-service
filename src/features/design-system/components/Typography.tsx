'use client';

import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

// Heading Components
export const H1 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h1 ref={ref} className={cn('heading-1', className)} {...props}>
        {children}
      </h1>
    );
  }
);
H1.displayName = 'H1';

export const H2 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h2 ref={ref} className={cn('heading-2', className)} {...props}>
        {children}
      </h2>
    );
  }
);
H2.displayName = 'H2';

export const H3 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h3 ref={ref} className={cn('heading-3', className)} {...props}>
        {children}
      </h3>
    );
  }
);
H3.displayName = 'H3';

export const H4 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h4 ref={ref} className={cn('heading-4', className)} {...props}>
        {children}
      </h4>
    );
  }
);
H4.displayName = 'H4';

export const H5 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h5 ref={ref} className={cn('heading-5', className)} {...props}>
        {children}
      </h5>
    );
  }
);
H5.displayName = 'H5';

export const H6 = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h6 ref={ref} className={cn('heading-6', className)} {...props}>
        {children}
      </h6>
    );
  }
);
H6.displayName = 'H6';

// Text Components
export const TextLarge = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <p ref={ref} className={cn('body-large', className)} {...props}>
        {children}
      </p>
    );
  }
);
TextLarge.displayName = 'TextLarge';

export const Text = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <p ref={ref} className={cn('body-base', className)} {...props}>
        {children}
      </p>
    );
  }
);
Text.displayName = 'Text';

export const TextSmall = forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <p ref={ref} className={cn('body-small', className)} {...props}>
        {children}
      </p>
    );
  }
);
TextSmall.displayName = 'TextSmall';

export const Caption = forwardRef<HTMLSpanElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <span ref={ref} className={cn('caption', className)} {...props}>
        {children}
      </span>
    );
  }
);
Caption.displayName = 'Caption';
