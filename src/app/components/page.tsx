'use client';

import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Text,
  TextLarge,
  TextSmall,
  Caption,
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Container,
  Section,
  Input,
  Textarea,
  Checkbox,
  Switch,
  Navbar,
  Footer,
} from '@/features/design-system/components';
import { useState } from 'react';

export default function ComponentsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <Section spacing="large" className="gradient-purple-pink">
        <Container>
          <div className="text-center text-white">
            <Badge variant="primary" size="medium" className="mb-6 bg-white/20 text-white">
              Design System v2.0
            </Badge>
            <H1 className="mb-4 text-white">
              ClickUp-Inspired Components
            </H1>
            <TextLarge className="text-white/90 max-w-3xl mx-auto">
              현대적이고 강력한 디자인 시스템. 보라색 브랜드 컬러를 중심으로
              <br />
              깔끔하고 일관성 있는 컴포넌트들을 제공합니다.
            </TextLarge>
          </div>
        </Container>
      </Section>

      {/* Typography Section */}
      <Section spacing="large">
        <Container>
          <div className="mb-12">
            <Badge variant="primary" size="medium" className="mb-4">
              Typography
            </Badge>
            <H2 className="text-gray-900 mb-4">타이포그래피</H2>
            <Text className="text-gray-600 max-w-2xl">
              명확한 시각적 계층 구조를 제공하는 타이포그래피 시스템입니다.
            </Text>
          </div>

          <div className="space-y-8">
            {/* Headings */}
            <Card>
              <CardHeader>
                <CardTitle>Headings (헤딩)</CardTitle>
                <CardDescription>
                  6가지 레벨의 헤딩 스타일
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Caption className="mb-2">H1 - Hero Title</Caption>
                  <H1 className="text-gray-900">The quick brown fox</H1>
                </div>
                <div>
                  <Caption className="mb-2">H2 - Page Title</Caption>
                  <H2 className="text-gray-900">The quick brown fox</H2>
                </div>
                <div>
                  <Caption className="mb-2">H3 - Section Title</Caption>
                  <H3 className="text-gray-900">The quick brown fox</H3>
                </div>
                <div>
                  <Caption className="mb-2">H4 - Subsection Title</Caption>
                  <H4 className="text-gray-900">The quick brown fox</H4>
                </div>
                <div>
                  <Caption className="mb-2">H5 - Card Title</Caption>
                  <H5 className="text-gray-900">The quick brown fox</H5>
                </div>
                <div>
                  <Caption className="mb-2">H6 - Small Title</Caption>
                  <H6 className="text-gray-900">The quick brown fox</H6>
                </div>
              </CardContent>
            </Card>

            {/* Body Text */}
            <Card>
              <CardHeader>
                <CardTitle>Body Text (본문)</CardTitle>
                <CardDescription>
                  다양한 크기의 본문 텍스트 스타일
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Caption className="mb-2">Text Large</Caption>
                  <TextLarge className="text-gray-700">
                    The quick brown fox jumps over the lazy dog. 빠른 갈색 여우가 게으른 개를 뛰어넘습니다.
                  </TextLarge>
                </div>
                <div>
                  <Caption className="mb-2">Text (Base)</Caption>
                  <Text className="text-gray-700">
                    The quick brown fox jumps over the lazy dog. 빠른 갈색 여우가 게으른 개를 뛰어넘습니다.
                  </Text>
                </div>
                <div>
                  <Caption className="mb-2">Text Small</Caption>
                  <TextSmall className="text-gray-700">
                    The quick brown fox jumps over the lazy dog. 빠른 갈색 여우가 게으른 개를 뛰어넘습니다.
                  </TextSmall>
                </div>
                <div>
                  <Caption className="mb-2">Caption</Caption>
                  <Caption>
                    The quick brown fox jumps over the lazy dog. 빠른 갈색 여우가 게으른 개를 뛰어넘습니다.
                  </Caption>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Buttons Section */}
      <Section spacing="large" className="bg-white">
        <Container>
          <div className="mb-12">
            <Badge variant="primary" size="medium" className="mb-4">
              Buttons
            </Badge>
            <H2 className="text-gray-900 mb-4">버튼</H2>
            <Text className="text-gray-600 max-w-2xl">
              다양한 스타일과 크기의 버튼 컴포넌트입니다.
            </Text>
          </div>

          <div className="space-y-8">
            {/* Variants */}
            <Card>
              <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription>4가지 버튼 변형</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                </div>
              </CardContent>
            </Card>

            {/* Sizes */}
            <Card>
              <CardHeader>
                <CardTitle>Button Sizes</CardTitle>
                <CardDescription>3가지 버튼 크기</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary" size="small">
                    Small Button
                  </Button>
                  <Button variant="primary" size="medium">
                    Medium Button
                  </Button>
                  <Button variant="primary" size="large">
                    Large Button
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* States */}
            <Card>
              <CardHeader>
                <CardTitle>Button States</CardTitle>
                <CardDescription>다양한 버튼 상태</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="primary"
                    isLoading={isLoading}
                    onClick={() => {
                      setIsLoading(true);
                      setTimeout(() => setIsLoading(false), 2000);
                    }}
                  >
                    Loading Button
                  </Button>
                  <Button variant="primary" disabled>
                    Disabled Button
                  </Button>
                  <Button variant="primary" fullWidth>
                    Full Width Button
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Badges Section */}
      <Section spacing="large">
        <Container>
          <div className="mb-12">
            <Badge variant="primary" size="medium" className="mb-4">
              Badges
            </Badge>
            <H2 className="text-gray-900 mb-4">배지</H2>
            <Text className="text-gray-600 max-w-2xl">
              상태 표시 및 라벨링을 위한 배지 컴포넌트입니다.
            </Text>
          </div>

          <div className="space-y-8">
            {/* Variants */}
            <Card>
              <CardHeader>
                <CardTitle>Badge Variants</CardTitle>
                <CardDescription>6가지 배지 색상</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                  <Badge variant="info">Info</Badge>
                  <Badge variant="gray">Gray</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Sizes */}
            <Card>
              <CardHeader>
                <CardTitle>Badge Sizes</CardTitle>
                <CardDescription>3가지 배지 크기</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="primary" size="small">
                    Small
                  </Badge>
                  <Badge variant="primary" size="medium">
                    Medium
                  </Badge>
                  <Badge variant="primary" size="large">
                    Large
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Cards Section */}
      <Section spacing="large" className="bg-white">
        <Container>
          <div className="mb-12">
            <Badge variant="primary" size="medium" className="mb-4">
              Cards
            </Badge>
            <H2 className="text-gray-900 mb-4">카드</H2>
            <Text className="text-gray-600 max-w-2xl">
              콘텐츠를 그룹화하고 구조화하는 카드 컴포넌트입니다.
            </Text>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Default Card */}
            <Card variant="default">
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>
                  기본 카드 스타일입니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Text className="text-gray-600">
                  테두리와 그림자가 있는 표준 카드입니다.
                </Text>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="small">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            {/* Elevated Card */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Elevated Card</CardTitle>
                <CardDescription>
                  강조된 카드 스타일입니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Text className="text-gray-600">
                  더 큰 그림자로 떠있는 느낌을 줍니다.
                </Text>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="small">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            {/* Interactive Card */}
            <Card variant="interactive">
              <CardHeader>
                <CardTitle>Interactive Card</CardTitle>
                <CardDescription>
                  클릭 가능한 카드입니다.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Text className="text-gray-600">
                  호버 시 확대되고 그림자가 변합니다.
                </Text>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="small">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Form Components */}
      <Section spacing="large">
        <Container>
          <div className="mb-12">
            <Badge variant="primary" size="medium" className="mb-4">
              Form Components
            </Badge>
            <H2 className="text-gray-900 mb-4">폼 컴포넌트</H2>
            <Text className="text-gray-600 max-w-2xl">
              사용자 입력을 받기 위한 폼 컴포넌트입니다.
            </Text>
          </div>

          <div className="max-w-2xl space-y-8">
            {/* Input */}
            <Card>
              <CardHeader>
                <CardTitle>Input Fields</CardTitle>
                <CardDescription>텍스트 입력 필드</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Input
                  label="이메일"
                  type="email"
                  placeholder="your@email.com"
                  helperText="이메일 주소를 입력하세요"
                />
                <Input
                  label="비밀번호"
                  type="password"
                  placeholder="••••••••"
                  error="비밀번호는 8자 이상이어야 합니다"
                />
                <Input
                  label="비활성화됨"
                  placeholder="입력 불가"
                  disabled
                />
                <Input
                  label="아이콘 포함"
                  placeholder="검색..."
                  leftIcon={
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.75 15.75L12.4875 12.4875"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                />
              </CardContent>
            </Card>

            {/* Textarea */}
            <Card>
              <CardHeader>
                <CardTitle>Textarea</CardTitle>
                <CardDescription>여러 줄 텍스트 입력</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Textarea
                  label="메시지"
                  placeholder="메시지를 입력하세요..."
                  rows={4}
                  helperText="최대 500자까지 입력 가능합니다"
                />
                <Textarea
                  label="에러 상태"
                  placeholder="입력..."
                  error="필수 항목입니다"
                  rows={3}
                />
              </CardContent>
            </Card>

            {/* Checkbox & Switch */}
            <Card>
              <CardHeader>
                <CardTitle>Checkbox & Switch</CardTitle>
                <CardDescription>선택 컴포넌트</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <H6 className="text-gray-900 mb-3">Checkbox</H6>
                  <div className="space-y-3">
                    <Checkbox
                      label="기본 체크박스"
                      checked={checkboxChecked}
                      onChange={(e) => setCheckboxChecked(e.target.checked)}
                    />
                    <Checkbox label="약관에 동의합니다" />
                    <Checkbox label="비활성화됨" disabled />
                  </div>
                </div>

                <div>
                  <H6 className="text-gray-900 mb-3">Switch</H6>
                  <div className="space-y-3">
                    <Switch
                      label="알림 받기"
                      checked={switchChecked}
                      onChange={(e) => setSwitchChecked(e.target.checked)}
                    />
                    <Switch label="다크 모드" />
                    <Switch label="비활성화됨" disabled />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Color Palette */}
      <Section spacing="large" className="bg-white">
        <Container>
          <div className="mb-12">
            <Badge variant="primary" size="medium" className="mb-4">
              Colors
            </Badge>
            <H2 className="text-gray-900 mb-4">컬러 팔레트</H2>
            <Text className="text-gray-600 max-w-2xl">
              디자인 시스템의 핵심 색상들입니다.
            </Text>
          </div>

          <div className="space-y-8">
            {/* Purple */}
            <div>
              <H5 className="text-gray-900 mb-4">Purple (Primary)</H5>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                  <div key={shade} className="space-y-2">
                    <div
                      className="h-20 rounded-lg shadow-md"
                      style={{ backgroundColor: `var(--purple-${shade})` }}
                    />
                    <TextSmall className="text-gray-600">
                      purple-{shade}
                    </TextSmall>
                  </div>
                ))}
              </div>
            </div>

            {/* Gray */}
            <div>
              <H5 className="text-gray-900 mb-4">Gray (Neutral)</H5>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                  <div key={shade} className="space-y-2">
                    <div
                      className="h-20 rounded-lg shadow-md border border-gray-200"
                      style={{ backgroundColor: `var(--gray-${shade})` }}
                    />
                    <TextSmall className="text-gray-600">
                      gray-{shade}
                    </TextSmall>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Colors */}
            <div>
              <H5 className="text-gray-900 mb-4">Secondary Colors</H5>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div
                    className="h-20 rounded-lg shadow-md"
                    style={{ backgroundColor: 'var(--blue-500)' }}
                  />
                  <TextSmall className="text-gray-600">blue-500</TextSmall>
                </div>
                <div className="space-y-2">
                  <div
                    className="h-20 rounded-lg shadow-md"
                    style={{ backgroundColor: 'var(--green-500)' }}
                  />
                  <TextSmall className="text-gray-600">green-500</TextSmall>
                </div>
                <div className="space-y-2">
                  <div
                    className="h-20 rounded-lg shadow-md"
                    style={{ backgroundColor: 'var(--orange-500)' }}
                  />
                  <TextSmall className="text-gray-600">orange-500</TextSmall>
                </div>
                <div className="space-y-2">
                  <div
                    className="h-20 rounded-lg shadow-md"
                    style={{ backgroundColor: 'var(--pink-500)' }}
                  />
                  <TextSmall className="text-gray-600">pink-500</TextSmall>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Gradients */}
      <Section spacing="large">
        <Container>
          <div className="mb-12">
            <Badge variant="primary" size="medium" className="mb-4">
              Gradients
            </Badge>
            <H2 className="text-gray-900 mb-4">그라데이션</H2>
            <Text className="text-gray-600 max-w-2xl">
              브랜드 그라데이션 패턴입니다.
            </Text>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="gradient-purple h-40 rounded-lg flex items-center justify-center">
              <H5 className="text-white">Purple Gradient</H5>
            </div>
            <div className="gradient-purple-pink h-40 rounded-lg flex items-center justify-center">
              <H5 className="text-white">Purple-Pink Gradient</H5>
            </div>
            <div className="gradient-blue-purple h-40 rounded-lg flex items-center justify-center">
              <H5 className="text-white">Blue-Purple Gradient</H5>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
