# Design System

> ClickUp-inspired modern design system for Proposal Service

## Overview

이 디자인 시스템은 ClickUp의 현대적이고 강력한 시각 언어에서 영감을 받아 제작되었습니다. 보라색 브랜드 컬러를 중심으로 깔끔하고 대담한 디자인을 제공합니다.

## Core Principles

### 1. **Bold & Modern** (대담하고 현대적인)
- 강렬한 타이포그래피와 선명한 색상 사용
- 명확한 시각적 계층 구조
- 자신감 있는 디자인 결정

### 2. **Clean & Purposeful** (깔끔하고 목적이 있는)
- 불필요한 요소 제거
- 명확한 공간 활용
- 의도가 있는 모든 디자인 요소

### 3. **Accessible & Inclusive** (접근 가능하고 포용적인)
- WCAG 2.1 AA 준수
- 명확한 대비와 가독성
- 키보드 네비게이션 지원

### 4. **Scalable & Consistent** (확장 가능하고 일관적인)
- 재사용 가능한 컴포넌트
- 일관된 디자인 토큰
- 유지보수 용이성

## Color System

### Primary Colors

#### Purple (Primary Brand)
```css
--purple-50: #faf5ff    /* Lightest background */
--purple-100: #f3e8ff   /* Light background */
--purple-200: #e9d5ff   /* Hover background */
--purple-300: #d8b4fe   /* Disabled state */
--purple-400: #c084fc   /* Secondary elements */
--purple-500: #a855f7   /* Primary brand */
--purple-600: #9333ea   /* Primary hover */
--purple-700: #7e22ce   /* Primary active */
--purple-800: #6b21a8   /* Dark accents */
--purple-900: #581c87   /* Darker accents */
--purple-950: #3b0764   /* Darkest */
```

**Usage:**
- Primary CTA buttons: `purple-600`
- Hover states: `purple-700`
- Backgrounds: `purple-50`, `purple-100`
- Badges: `purple-500`

#### Gray (Neutral)
```css
--gray-50: #f9fafb     /* Page backgrounds */
--gray-100: #f3f4f6    /* Card backgrounds */
--gray-200: #e5e7eb    /* Borders */
--gray-300: #d1d5db    /* Disabled borders */
--gray-400: #9ca3af    /* Placeholder text */
--gray-500: #6b7280    /* Secondary text */
--gray-600: #4b5563    /* Body text */
--gray-700: #374151    /* Headings */
--gray-800: #1f2937    /* Dark headings */
--gray-900: #111827    /* Primary text */
--gray-950: #030712    /* Darkest text */
```

### Secondary Colors

#### Blue (Information)
- Primary: `blue-500` (#3b82f6)
- Usage: Informational messages, links

#### Green (Success)
- Primary: `green-500` (#22c55e)
- Usage: Success states, positive feedback

#### Orange (Warning)
- Primary: `orange-500` (#f97316)
- Usage: Warnings, cautionary messages

#### Pink (Accent)
- Primary: `pink-500` (#ec4899)
- Usage: Promotional elements, special features

### Semantic Colors

```css
--success: var(--green-500)
--warning: var(--orange-500)
--error: #ef4444
--info: var(--blue-500)
```

## Typography

### Font Families

```css
--font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
--font-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace
```

### Type Scale

| Class | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `.heading-1` | 60px | 800 | 1.25 | Hero titles |
| `.heading-2` | 48px | 700 | 1.25 | Page titles |
| `.heading-3` | 36px | 700 | 1.375 | Section titles |
| `.heading-4` | 30px | 600 | 1.375 | Subsection titles |
| `.heading-5` | 24px | 600 | 1.375 | Card titles |
| `.heading-6` | 20px | 600 | 1.5 | Small titles |
| `.body-large` | 18px | 400 | 1.625 | Large paragraphs |
| `.body-base` | 16px | 400 | 1.625 | Body text |
| `.body-small` | 14px | 400 | 1.5 | Small text |
| `.caption` | 12px | 400 | 1.5 | Captions, labels |

### Font Weights

```css
--font-normal: 400     /* Body text */
--font-medium: 500     /* Emphasized text */
--font-semibold: 600   /* Subtitles */
--font-bold: 700       /* Headings */
--font-extrabold: 800  /* Hero text */
```

## Spacing System

### Scale

```css
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 16px
--spacing-lg: 24px
--spacing-xl: 32px
--spacing-2xl: 48px
--spacing-3xl: 64px
```

### Common Patterns

- **Inline elements**: 4-8px
- **Component padding**: 12-16px
- **Card padding**: 20-24px
- **Section spacing**: 48-64px
- **Hero spacing**: 80-120px

## Border Radius

```css
--border-radius-sm: 6px    /* Small elements */
--border-radius-md: 8px    /* Buttons, inputs */
--border-radius-lg: 12px   /* Cards */
--border-radius-xl: 16px   /* Large cards */
--border-radius-full: 9999px /* Pills, avatars */
```

## Shadows

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1)
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1)
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1)
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25)
```

**Usage:**
- Buttons: `shadow-sm` or none
- Cards: `shadow-md`
- Modals: `shadow-xl`
- Popovers: `shadow-lg`

## Components

### Button

#### Variants

**Primary**
```css
Background: purple-600
Text: white
Hover: purple-700
Active: purple-800
Shadow: shadow-sm
```

**Secondary**
```css
Background: gray-100
Text: gray-900
Hover: gray-200
Active: gray-300
Border: gray-300
```

**Outline**
```css
Background: transparent
Text: purple-600
Border: purple-600
Hover: purple-50 background
Active: purple-100 background
```

**Ghost**
```css
Background: transparent
Text: gray-700
Hover: gray-100 background
Active: gray-200 background
```

#### Sizes

| Size | Height | Padding | Font Size |
|------|--------|---------|-----------|
| Small | 32px | 12px 16px | 14px |
| Medium | 40px | 14px 20px | 16px |
| Large | 48px | 16px 28px | 16px |

### Card

#### Default Card
```css
Background: white
Border: 1px solid gray-200
Border Radius: 12px
Padding: 24px
Shadow: shadow-md
```

#### Elevated Card
```css
Background: white
Border: none
Border Radius: 12px
Padding: 24px
Shadow: shadow-lg
Hover: shadow-xl (transition)
```

#### Interactive Card
```css
Cursor: pointer
Hover: shadow-lg, scale(1.02)
Active: shadow-md, scale(0.98)
Transition: 200ms
```

### Badge

#### Variants & Colors

| Variant | Background | Text | Usage |
|---------|------------|------|-------|
| Primary | purple-100 | purple-700 | Primary labels |
| Success | green-100 | green-700 | Success states |
| Warning | orange-100 | orange-700 | Warnings |
| Error | red-100 | red-700 | Errors |
| Info | blue-100 | blue-700 | Information |
| Gray | gray-100 | gray-700 | Neutral labels |

#### Sizes
- Small: 20px height, 6px 10px padding, 12px text
- Medium: 24px height, 8px 12px padding, 14px text
- Large: 28px height, 10px 16px padding, 14px text

### Input Fields

#### Default State
```css
Height: 40px
Padding: 12px 16px
Border: 1px solid gray-300
Border Radius: 8px
Font: 16px
Background: white
```

#### Focus State
```css
Border: purple-600
Ring: 2px purple-500 with 2px offset
Outline: none
```

#### Error State
```css
Border: red-500
Ring: 2px red-500 with 2px offset
Background: red-50
```

#### Disabled State
```css
Background: gray-100
Text: gray-400
Cursor: not-allowed
Border: gray-200
```

## Gradients

### Brand Gradients

```css
/* Purple Gradient */
.gradient-purple {
  background: linear-gradient(135deg, purple-600 0%, purple-800 100%);
}

/* Purple-Pink Gradient */
.gradient-purple-pink {
  background: linear-gradient(135deg, purple-600 0%, pink-600 100%);
}

/* Blue-Purple Gradient */
.gradient-blue-purple {
  background: linear-gradient(135deg, blue-600 0%, purple-600 100%);
}
```

**Usage:**
- Hero sections
- CTA backgrounds
- Feature highlights
- Premium badges

## Animations

### Transitions

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1)
```

### Keyframes

**fadeIn**
```css
from { opacity: 0 }
to { opacity: 1 }
```

**slideUp**
```css
from { transform: translateY(10px); opacity: 0 }
to { transform: translateY(0); opacity: 1 }
```

**scaleIn**
```css
from { transform: scale(0.95); opacity: 0 }
to { transform: scale(1); opacity: 1 }
```

### Usage
- Hover transitions: `transition-fast`
- State changes: `transition-base`
- Page transitions: `transition-slow`
- Respect `prefers-reduced-motion`

## Layout Patterns

### Container

```css
Max Width: 1280px
Padding: 24px (mobile), 32px (desktop)
Margin: 0 auto
```

### Grid Systems

#### 2-Column Grid
```css
grid-cols-1 md:grid-cols-2
gap: 24px
```

#### 3-Column Grid
```css
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
gap: 24px
```

#### 4-Column Grid
```css
grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
gap: 20px
```

### Section Spacing

- Small: 40px (mobile) → 60px (desktop)
- Medium: 60px (mobile) → 80px (desktop)
- Large: 80px (mobile) → 120px (desktop)

## Accessibility Guidelines

### Color Contrast

- **Normal text**: Minimum 4.5:1
- **Large text** (18px+): Minimum 3:1
- **Interactive elements**: Minimum 3:1
- Test all color combinations

### Focus States

```css
.focus-ring {
  focus:outline-none
  focus:ring-2
  focus:ring-purple-500
  focus:ring-offset-2
}
```

- All interactive elements must have visible focus
- Use consistent focus styles
- Never remove outline without replacement

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Logical tab order (top to bottom, left to right)
- Implement skip links for main content
- Support arrow key navigation in menus

### Screen Readers

- Use semantic HTML (`<button>`, `<nav>`, `<main>`, etc.)
- Provide alt text for all images
- Use ARIA labels when necessary
- Test with screen readers (NVDA, JAWS, VoiceOver)

## Best Practices

### Do's ✅

- Use design tokens consistently (CSS variables)
- Follow the type scale for hierarchy
- Maintain consistent spacing
- Test on multiple devices and browsers
- Ensure high color contrast
- Use semantic HTML elements
- Provide alternative text for images
- Test keyboard navigation
- Keep animations subtle and purposeful
- Use gradients sparingly for emphasis

### Don'ts ❌

- Don't create custom colors outside the palette
- Don't use arbitrary spacing values
- Don't ignore responsive design
- Don't sacrifice accessibility for aesthetics
- Don't use color alone to convey information
- Don't disable focus states
- Don't use too many font weights
- Don't overuse animations
- Don't ignore dark mode considerations

## Component Guidelines

### Button Guidelines

1. **Use appropriate variants**
   - Primary: Main actions (Submit, Save, Create)
   - Secondary: Alternative actions (Cancel, Back)
   - Outline: Tertiary actions (Learn More)
   - Ghost: Subtle actions (Close, Dismiss)

2. **Size selection**
   - Large: Hero CTAs, primary landing page actions
   - Medium: Forms, standard actions
   - Small: Compact spaces, inline actions

3. **States**
   - Always include hover, active, focus, disabled states
   - Loading state should show spinner with text
   - Disabled should be visually distinct

### Card Guidelines

1. **When to use**
   - Grouping related content
   - Displaying items in a list/grid
   - Creating visual separation

2. **Padding**
   - Standard: 24px
   - Compact: 16px
   - Spacious: 32px

3. **Interactions**
   - Only add hover effects if clickable
   - Use subtle elevation changes
   - Maintain accessibility

### Typography Guidelines

1. **Hierarchy**
   - Only one `heading-1` per page
   - Use consistent heading levels (don't skip)
   - Body text should be `body-base`
   - Use `body-large` for introductions

2. **Line Length**
   - Optimal: 50-75 characters per line
   - Maximum: 90 characters
   - Use max-width on text containers

3. **Color**
   - Primary text: `gray-900`
   - Secondary text: `gray-600`
   - Tertiary text: `gray-500`
   - Never use pure black (#000)

## Implementation Examples

### Button Component
```tsx
<button className="
  px-6 py-3 
  bg-purple-600 hover:bg-purple-700 active:bg-purple-800
  text-white font-medium
  rounded-lg
  shadow-sm
  transition-colors duration-200
  focus-ring
">
  Get Started
</button>
```

### Card Component
```tsx
<div className="
  bg-white
  border border-gray-200
  rounded-lg
  p-6
  shadow-md
  hover:shadow-lg
  transition-shadow duration-200
">
  <h3 className="heading-5 text-gray-900 mb-2">Card Title</h3>
  <p className="body-base text-gray-600">Card content goes here.</p>
</div>
```

### Badge Component
```tsx
<span className="
  inline-flex items-center
  px-3 py-1
  bg-purple-100
  text-purple-700 text-sm font-medium
  rounded-full
">
  New Feature
</span>
```

## Resources

### Design Files
- Figma: [Link to design files]
- Color Palette: See Color System section
- Component Library: `/components` page

### Development
- CSS Variables: `/global.css`
- Components: `/src/features/design-system/components/`
- Demo Page: `/components`

### References
- [ClickUp](https://clickup.com) - Design inspiration
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Inclusive Components](https://inclusive-components.design/)

## Version History

**Version 2.0.0** - 2026-01-15
- Complete redesign inspired by ClickUp
- New purple-focused color palette
- Updated typography scale
- Enhanced component system
- Improved accessibility guidelines

---

> **Note**: This design system is a living document. Always reference the latest version and contribute improvements as needed.
