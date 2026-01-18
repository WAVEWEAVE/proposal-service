'use client';

import {
  H1,
  H2,
  H3,
  H4,
  Text,
  TextLarge,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
  Container,
  Section,
  Navbar,
  Footer,
} from '@/features/design-system/components';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <Section spacing="large" className="bg-gradient-to-b from-purple-50 to-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="primary" size="medium" className="mb-6">
              About Us
            </Badge>
            
            <H1 className="mb-6 text-gray-900">
              프리랜서의 <span className="text-purple-600">독립을 돕습니다</span>
            </H1>
            
            <TextLarge className="text-gray-600 leading-relaxed">
              Proposal Service는 프리랜서들이 플랫폼에 의존하지 않고
              <br />
              직접 클라이언트를 확보할 수 있도록 돕는 서비스입니다.
            </TextLarge>
          </div>
        </Container>
      </Section>

      {/* Mission Section */}
      <Section spacing="large">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <H2 className="text-gray-900 mb-4">우리의 미션</H2>
              <TextLarge className="text-gray-600">
                모든 프리랜서가 자신의 가치를 인정받고, 공정한 대가를 받을 수 있도록
              </TextLarge>
            </div>

            <Card variant="elevated" className="mb-8">
              <CardContent className="py-8">
                <TextLarge className="text-gray-700 leading-relaxed text-center">
                  "플랫폼 수수료 20-30%는 프리랜서의 생존을 위협합니다.
                  <br />
                  우리는 프리랜서들이 자신의 실력으로 직접 클라이언트를 만나고,
                  <br />
                  정당한 대가를 온전히 받을 수 있는 세상을 만들고자 합니다."
                </TextLarge>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Core Values */}
      <Section spacing="large" className="bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <H2 className="text-gray-900 mb-4">핵심 가치</H2>
            <TextLarge className="text-gray-600">
              우리가 중요하게 생각하는 것들
            </TextLarge>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card variant="default">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-purple-600">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <H4 className="text-gray-900 mb-3">독립성</H4>
                  <Text className="text-gray-600">
                    프리랜서가 플랫폼에 의존하지 않고 독립적으로 일할 수 있도록 지원합니다
                  </Text>
                </div>
              </CardContent>
            </Card>

            <Card variant="default">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-green-600">
                      <path d="M13 10V3L4 14H11L11 21L20 10L13 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <H4 className="text-gray-900 mb-3">실행력</H4>
                  <Text className="text-gray-600">
                    생각에서 그치지 않고 실제 행동으로 옮길 수 있도록 돕습니다
                  </Text>
                </div>
              </CardContent>
            </Card>

            <Card variant="default">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <H4 className="text-gray-900 mb-3">지속성</H4>
                  <Text className="text-gray-600">
                    하루하루 꾸준히 실행하여 습관으로 만들 수 있도록 지원합니다
                  </Text>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="large" className="bg-gray-50 border-t border-gray-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <H2 className="mb-6 text-gray-900">
              <span className="text-purple-600">함께</span> 시작하세요
            </H2>
            
            <TextLarge className="text-gray-600 mb-10">
              지금 바로 첫 제안서를 작성하고,
              <br />
              플랫폼 없이 독립적으로 일하는 프리랜서가 되어보세요.
            </TextLarge>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Button variant="primary" size="large">
                무료로 시작하기
              </Button>
              <Button variant="secondary" size="large">
                <Link href="/">홈으로 돌아가기</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
