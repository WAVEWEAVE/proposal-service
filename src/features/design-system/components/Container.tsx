'use client';

import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, maxWidth = 'xl', ...props }, ref) => {
    const maxWidthStyles = {
      sm: 'max-w-screen-sm', // 640px
      md: 'max-w-screen-md', // 768px
      lg: 'max-w-screen-lg', // 1024px
      xl: 'max-w-screen-xl', // 1280px
      full: 'max-w-full',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'container-custom',
          maxWidthStyles[maxWidth],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';

// Section Component
export interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: 'small' | 'medium' | 'large';
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className, spacing = 'medium', ...props }, ref) => {
    const spacingStyles = {
      small: 'py-8 md:py-12',
      medium: 'py-12 md:py-16',
      large: 'py-16 md:py-24',
    };

    return (
      <section
        ref={ref}
        className={cn(spacingStyles[spacing], className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';
