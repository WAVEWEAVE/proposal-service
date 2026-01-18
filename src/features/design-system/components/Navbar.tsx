'use client';

import { Button, Container } from '@/features/design-system/components';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={cn('bg-white border-b border-gray-200 sticky top-0 z-50', className)}>
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="body-base font-semibold text-gray-900">
              Proposal Service
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="body-base text-gray-700 hover:text-gray-900 transition-colors"
            >
              홈
            </Link>
            <Link
              href="/about"
              className="body-base text-gray-700 hover:text-gray-900 transition-colors"
            >
              소개
            </Link>
            <Link
              href="/components"
              className="body-base text-gray-700 hover:text-gray-900 transition-colors"
            >
              디자인 시스템
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="small">
              로그인
            </Button>
            <Button variant="primary" size="small">
              시작하기
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="메뉴 토글"
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-900">
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-900">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="body-base text-gray-700 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                홈
              </Link>
              <Link
                href="/about"
                className="body-base text-gray-700 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                소개
              </Link>
              <Link
                href="/components"
                className="body-base text-gray-700 hover:text-gray-900 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                디자인 시스템
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                <Button variant="ghost" size="small" fullWidth>
                  로그인
                </Button>
                <Button variant="primary" size="small" fullWidth>
                  시작하기
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
