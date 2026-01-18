'use client';

import {
  H1,
  H2,
  H3,
  H4,
  H5,
  Text,
  TextLarge,
  TextSmall,
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
  Input,
} from '@/features/design-system/components';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const [expertise, setExpertise] = useState('');
  const [clientIndustry, setClientIndustry] = useState('');

  const handleStartProposal = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!expertise.trim() || !clientIndustry.trim()) {
      alert('전문분야와 잠재고객 업종을 모두 입력해주세요.');
      return;
    }

    // 질문지 페이지로 이동 (query params로 데이터 전달)
    router.push(`/proposal/new?expertise=${encodeURIComponent(expertise)}&industry=${encodeURIComponent(clientIndustry)}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <Section spacing="large" className="bg-gradient-to-b from-purple-50 to-white">
        <Container>
          <div className="text-center">
            <Badge variant="primary" size="medium" className="mb-6">
              프리랜서를 위한 제안서 솔루션
            </Badge>
            <H1 className="mb-4 text-gray-900">
              플랫폼 없이도
              <br />
              <span className="text-purple-600">당당하게 영업하세요</span>
            </H1>
            <TextLarge className="text-gray-600 max-w-3xl mx-auto mb-10">
              더 이상 플랫폼에 의존하지 마세요.
              <br />
              직접 잠재 고객을 찾고, 전문적인 제안서를 작성하여
              <br />
              당신만의 클라이언트를 확보하세요.
            </TextLarge>
            
            {/* Proposal Start Form */}
            <form onSubmit={handleStartProposal} className="max-w-2xl mx-auto mb-8">
              <Card variant="elevated" className="text-left">
                <CardContent className="p-6 md:p-8">
                  <div className="space-y-6">
                    <div>
                      <Input
                        label="나의 전문분야"
                        placeholder="예: 웹 개발, 앱 개발, 디자인, 마케팅 등"
                        value={expertise}
                        onChange={(e) => setExpertise(e.target.value)}
                        helperText="당신이 제공할 수 있는 서비스를 입력하세요"
                      />
                    </div>
                    
                    <div>
                      <Input
                        label="잠재고객의 업종"
                        placeholder="예: 스타트업, IT, 제조업, 유통업 등"
                        value={clientIndustry}
                        onChange={(e) => setClientIndustry(e.target.value)}
                        helperText="제안할 고객의 업종을 입력하세요"
                      />
                    </div>

                    <Button 
                      variant="primary" 
                      size="large" 
                      type="submit"
                      className="w-full"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mr-2">
                        <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      제안서 작성 시작하기
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="flex items-center justify-center gap-6 mt-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-green-600">
                    <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <TextSmall>무료 시작</TextSmall>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-green-600">
                    <path d="M10 6V10L13 11M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <TextSmall>20분 완성</TextSmall>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-green-600">
                    <path d="M5 10L7.5 12.5L14 6M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <TextSmall>신용카드 불필요</TextSmall>
                </div>
              </div>
            </form>

            <Text className="text-gray-500">
              AI가 당신의 제안서 작성을 도와드립니다
            </Text>
          </div>
        </Container>
      </Section>

      {/* How It Works - 3 Steps */}
      <Section spacing="large" className="bg-white">
        <Container>
          <div className="text-center mb-16">
            <Badge variant="success" size="medium" className="mb-4">
              간단한 3단계로 완성
            </Badge>
            <H2 className="text-gray-900 mb-4">
              오늘부터 바로 시작할 수 있어요
            </H2>
            <TextLarge className="text-gray-600">
              복잡한 과정 없이, 단계별 가이드를 따라 첫 제안서를 완성하세요
            </TextLarge>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <Card variant="elevated">
              <CardContent className="pt-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 heading-4">
                    1
                  </div>
                  <div>
                    <H4 className="text-gray-900 mb-2">잠재 고객 선택</H4>
                    <Badge variant="info" size="small">5분 소요</Badge>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <TextSmall className="text-gray-600">제안할 기업명을 입력하세요</TextSmall>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <TextSmall className="text-gray-600">AI가 기업 정보를 자동 분석</TextSmall>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <TextSmall className="text-gray-600">제안 적합성을 확인하고 선택</TextSmall>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <TextSmall className="text-gray-500 font-medium mb-2">예시</TextSmall>
                  <TextSmall className="text-gray-700">"ABC 스타트업에 웹사이트 개발 제안"</TextSmall>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card variant="elevated">
              <CardContent className="pt-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 heading-4">
                    2
                  </div>
                  <div>
                    <H4 className="text-gray-900 mb-2">제안서 작성</H4>
                    <Badge variant="info" size="small">15분 소요</Badge>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <TextSmall className="text-gray-600">당신의 생각을 키워드로 입력</TextSmall>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <TextSmall className="text-gray-600">AI가 전문적인 문장으로 변환</TextSmall>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <TextSmall className="text-gray-600">단계별로 제안서를 완성</TextSmall>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <TextSmall className="text-gray-500 font-medium mb-2">AI 변환 예시</TextSmall>
                  <TextSmall className="text-gray-700">"웹사이트 개발" → "귀사의 비즈니스 성장을 위한 맞춤형 웹 솔루션을 제안드립니다"</TextSmall>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card variant="elevated">
              <CardContent className="pt-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center flex-shrink-0 heading-4">
                    3
                  </div>
                  <div>
                    <H4 className="text-gray-900 mb-2">발송 및 기록</H4>
                    <Badge variant="info" size="small">2분 소요</Badge>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <TextSmall className="text-gray-600">완성된 제안서를 이메일로 발송</TextSmall>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <TextSmall className="text-gray-600">오늘의 영업 활동을 기록</TextSmall>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <TextSmall className="text-gray-600">지속적인 영업 습관 형성</TextSmall>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <TextSmall className="text-purple-900 font-medium">
                    ✨ 하루의 성과를 기록하고 꾸준히 영업하세요
                  </TextSmall>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="primary" size="large">
              지금 바로 시작하기 →
            </Button>
          </div>
        </Container>
      </Section>

      {/* Key Features */}
      <Section spacing="large" className="bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <Badge variant="primary" size="medium" className="mb-4">
              핵심 기능
            </Badge>
            <H2 className="text-gray-900 mb-4">
              필요한 모든 기능이 준비되어 있어요
            </H2>
            <TextLarge className="text-gray-600">
              프리랜서의 성공적인 영업을 위한 핵심 기능들
            </TextLarge>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <Card variant="default">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-purple-600">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <H5 className="text-gray-900 mb-2">AI 제안서 작성</H5>
                <Text className="text-gray-600">
                  당신의 아이디어를 전문적인 제안서 문장으로 자동 변환
                </Text>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card variant="default">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-600">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <H5 className="text-gray-900 mb-2">잠재 고객 분석</H5>
                <Text className="text-gray-600">
                  제안 대상 기업의 적합성을 AI가 분석하고 확인
                </Text>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card variant="default">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-green-600">
                    <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <H5 className="text-gray-900 mb-2">단계별 가이드</H5>
                <Text className="text-gray-600">
                  제안서 작성부터 발송까지 체계적인 안내
                </Text>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card variant="default">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-orange-600">
                    <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <H5 className="text-gray-900 mb-2">일일 활동 기록</H5>
                <Text className="text-gray-600">
                  매일의 영업 활동을 기록하고 습관화
                </Text>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card variant="default">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-pink-100 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-pink-600">
                    <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <H5 className="text-gray-900 mb-2">이메일 발송</H5>
                <Text className="text-gray-600">
                  완성된 제안서를 바로 이메일로 전송
                </Text>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card variant="default">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-purple-600">
                    <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <H5 className="text-gray-900 mb-2">빠른 완성</H5>
                <Text className="text-gray-600">
                  평균 20분 만에 전문적인 제안서 완성
                </Text>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section spacing="medium" className="bg-white">
        <Container>
          <Card variant="elevated" className="max-w-4xl mx-auto">
            <CardContent className="py-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <H1 className="text-purple-600 mb-2">20분</H1>
                  <Text className="text-gray-600">평균 제안서 완성 시간</Text>
                </div>
                <div>
                  <H1 className="text-purple-600 mb-2">0원</H1>
                  <Text className="text-gray-600">플랫폼 수수료</Text>
                </div>
                <div>
                  <H1 className="text-purple-600 mb-2">100%</H1>
                  <Text className="text-gray-600">나만의 클라이언트</Text>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </Section>

      {/* Target Audience */}
      <Section spacing="large" className="bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <Badge variant="primary" size="medium" className="mb-4">
              이런 분들께 추천합니다
            </Badge>
            <H2 className="text-gray-900 mb-4">
              당신도 해당되나요?
            </H2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card variant="elevated">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Text className="text-purple-600 font-bold">✓</Text>
                  </div>
                  <div>
                    <H5 className="text-gray-900 mb-2">경력 2년 미만의 프리랜서</H5>
                    <Text className="text-gray-600">
                      아직 영업 경험이 부족하지만, 독립적으로 일하고 싶은 분
                    </Text>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Text className="text-purple-600 font-bold">✓</Text>
                  </div>
                  <div>
                    <H5 className="text-gray-900 mb-2">플랫폼 수수료에 지친 분</H5>
                    <Text className="text-gray-600">
                      20-30% 수수료에서 벗어나 직접 영업하고 싶은 분
                    </Text>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Text className="text-purple-600 font-bold">✓</Text>
                  </div>
                  <div>
                    <H5 className="text-gray-900 mb-2">제안서 작성이 어려운 분</H5>
                    <Text className="text-gray-600">
                      무엇부터 써야 할지 막막하고 체계적인 가이드가 필요한 분
                    </Text>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Text className="text-purple-600 font-bold">✓</Text>
                  </div>
                  <div>
                    <H5 className="text-gray-900 mb-2">첫 유료 프로젝트 경험자</H5>
                    <Text className="text-gray-600">
                      최소 1건 이상의 프로젝트를 완료하여 실력을 갖춘 분
                    </Text>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section spacing="large" className="bg-gradient-to-b from-white to-purple-50 border-t border-gray-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <H2 className="mb-6 text-gray-900">
              오늘부터 플랫폼 없이
              <br />
              <span className="text-purple-600">직접 영업을 시작하세요</span>
            </H2>
            
            <TextLarge className="text-gray-600 mb-10">
              신용카드 등록 없이 바로 시작할 수 있습니다.
              <br />
              첫 제안서 작성부터 발송까지, 단 20분이면 충분합니다.
            </TextLarge>
            
            <Button variant="primary" size="large" className="mb-6">
              무료로 시작하기 →
            </Button>

            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-green-600">
                  <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <Text className="text-gray-600">신용카드 불필요</Text>
              </div>
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-green-600">
                  <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <Text className="text-gray-600">언제든 무료</Text>
              </div>
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-green-600">
                  <path d="M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <Text className="text-gray-600">즉시 시작 가능</Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
