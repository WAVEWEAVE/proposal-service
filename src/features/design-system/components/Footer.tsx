'use client';

import { Text, TextSmall, Container, Section, Divider } from '@/features/design-system/components';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn('bg-[var(--neutral-950)]', className)}>
      <Section spacing="medium">
        <Container>
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="heading-6 text-white mb-3">
                Proposal Service
              </h3>
              <Text className="text-gray-400 mb-4">
                프리랜서의 성공적인 영업을 돕는
                <br />
                제안서 작성 및 발송 플랫폼
              </Text>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="body-base font-semibold text-white mb-3">
                바로가기
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="body-small text-gray-400 hover:text-white transition-colors"
                  >
                    홈
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="body-small text-gray-400 hover:text-white transition-colors"
                  >
                    소개
                  </Link>
                </li>
                <li>
                  <Link
                    href="/components"
                    className="body-small text-gray-400 hover:text-white transition-colors"
                  >
                    디자인 시스템
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="body-base font-semibold text-white mb-3">
                지원
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:support@proposal-service.com"
                    className="body-small text-gray-400 hover:text-white transition-colors"
                  >
                    문의하기
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="body-small text-gray-400 hover:text-white transition-colors"
                  >
                    도움말
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="body-small text-gray-400 hover:text-white transition-colors"
                  >
                    자주 묻는 질문
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Divider className="border-gray-800" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6">
            <Text className="text-gray-400 text-center md:text-left">
              © {currentYear} Proposal Service. All rights reserved.
            </Text>

            <div className="flex gap-6">
              <a
                href="#"
                className="body-small text-gray-400 hover:text-white transition-colors"
              >
                이용약관
              </a>
              <a
                href="#"
                className="body-small text-gray-400 hover:text-white transition-colors"
              >
                개인정보처리방침
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
