'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  Text,
  TextSmall,
  Button,
  Card,
  CardContent,
  Badge,
  Container,
  Section,
  Navbar,
  Footer,
  Input,
  Textarea,
} from '@/features/design-system/components';
import Link from 'next/link';

function ProposalNewContent() {
  const searchParams = useSearchParams();
  const expertise = searchParams.get('expertise') || '';
  const industry = searchParams.get('industry') || '';

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 18;

  // Form states
  const [q1ClientName, setQ1ClientName] = useState('');
  const [q2Problem, setQ2Problem] = useState('');
  const [q3PainPoint, setQ3PainPoint] = useState('');
  const [q4Service, setQ4Service] = useState('');
  const [q5Process, setQ5Process] = useState('');
  const [q6Timeline, setQ6Timeline] = useState('');
  const [q7Strength, setQ7Strength] = useState('');
  const [q8Experience, setQ8Experience] = useState('');
  const [q9Testimonial, setQ9Testimonial] = useState('');
  const [q10Origin, setQ10Origin] = useState('');
  const [q11Challenge, setQ11Challenge] = useState('');
  const [q12Vision, setQ12Vision] = useState('');
  const [q13Impact, setQ13Impact] = useState('');
  const [q14Metrics, setQ14Metrics] = useState('');
  const [q15Pricing, setQ15Pricing] = useState('');
  const [q16Terms, setQ16Terms] = useState('');
  const [q17Contact, setQ17Contact] = useState('');
  const [portfolioFiles, setPortfolioFiles] = useState<File[]>([]);

  // 예시 데이터
  const exampleData = {
    q1: '클린푸드 스타트업, 김민지 대표',
    q2: '현재 인스타그램과 카카오톡으로만 주문을 받고 있어 주문 관리가 어렵고, 고객 데이터를 체계적으로 관리할 수 없는 상황입니다. 매달 주문량이 증가하고 있지만, 수작업으로 처리하다 보니 실수가 잦고 고객 응대에 많은 시간이 소요됩니다.',
    q3: '주문 처리 오류로 인한 고객 불만 증가로 브랜드 신뢰도가 하락할 수 있습니다. 또한 수작업 처리로 인한 인건비 증가와 확장성 부족으로 사업 성장에 한계가 발생할 것입니다.',
    q4: '- 24시간 자동 주문 접수가 가능한 전자상거래 웹사이트 구축\n- 실시간 재고 관리 시스템 통합\n- 모바일 최적화 반응형 디자인\n- 카카오페이, 토스페이먼츠 등 간편결제 시스템 연동',
    q5: '1) 요구사항 분석 및 기획 (1주)\n2) UI/UX 디자인 (2주)\n3) 프론트엔드 개발 (3주)\n4) 백엔드 개발 (3주)\n5) 결제 및 알림 시스템 연동 (1주)\n6) 테스트 및 QA (1주)\n7) 배포 및 교육 (1주)',
    q6: '12주 (약 3개월)',
    q7: '7년간 식품/배달 분야 전자상거래 플랫폼 개발 경험이 있으며, React와 Next.js를 활용한 고성능 웹 개발에 특화되어 있습니다.',
    q8: '- 프레시밀 스타트업: 전자상거래 플랫폼 구축 후 월 주문량 150% 증가\n- 오가닉마켓: 모바일 주문 시스템 개편으로 모바일 전환율 3배 향상',
    q9: '"개발 과정에서 매주 진행 상황을 공유해주셔서 안심하고 기다릴 수 있었습니다. 요구사항 변경에도 유연하게 대응해주셨습니다." - 프레시밀 김OO 대표',
    q10: '대기업 개발자로 5년간 일하면서 복잡한 시스템만 다루다가, 우연히 지인의 소규모 쇼핑몰 개발을 도와주게 되었습니다. 그때 작은 시스템 하나로 그들의 일상이 완전히 바뀌는 모습을 보며 큰 감동을 받았습니다.',
    q11: '초기에는 기술만 좋으면 된다고 생각했지만, 첫 프로젝트에서 고객의 실제 업무 흐름을 이해하지 못해 재작업을 해야 했던 경험이 있습니다. 이후 각 업종의 비즈니스 모델을 깊이 공부했습니다.',
    q12: '대한민국의 모든 소상공인과 스타트업이 기술 장벽 없이 디지털 비즈니스를 운영할 수 있도록 돕고 싶습니다.',
    q13: '- 24시간 자동 주문 접수로 매출 기회 확대 (예상 주문량 200% 증가)\n- 주문 처리 시간 90% 단축으로 인건비 절감 (월 300만원 이상)\n- 고객 데이터 기반 마케팅으로 재구매율 향상',
    q14: '- 일 평균 주문 건수 (목표: 기존 대비 150% 증가)\n- 주문 처리 소요 시간 (목표: 건당 10분 → 1분 이하)\n- 고객 재방문율 및 재구매율 (목표: 50% 이상)',
    q15: '[스탠다드 플랜] 1,800만원 (VAT 별도)\n- 반응형 웹사이트 (PC/모바일 최적화)\n- 기본 기능: 회원가입, 주문, 결제\n- 3개월 무상 유지보수\n\n[프리미엄 플랜] 2,400만원 (VAT 별도)\n- 스탠다드 플랜 전체 포함\n- 재고 자동 관리 시스템\n- 6개월 무상 유지보수',
    q16: '- 디자인 수정: 각 단계별 2회까지 무상\n- 저작권: 최종 결과물의 모든 저작권은 고객사에 귀속\n- 대금 지급: 착수금 30%, 중도금 40%, 잔금 30%\n- 유지보수: 무상 기간 종료 후 월 50만원',
    q17: '📧 이메일: devhello@example.com\n📱 전화: 010-1234-5678 (평일 10시-18시)\n💬 카카오톡: ID_webdev_pro\n\n✨ 초회 상담은 무료이며, 제안서 검토 후 3일 이내 연락 주시면 10% 할인 적용됩니다!',
  };

  // 예시 넣기 함수
  const fillExample = (questionNumber: number) => {
    const key = `q${questionNumber}` as keyof typeof exampleData;
    const exampleValue = exampleData[key];
    
    if (exampleValue) {
      switch(questionNumber) {
        case 1: setQ1ClientName(exampleValue); break;
        case 2: setQ2Problem(exampleValue); break;
        case 3: setQ3PainPoint(exampleValue); break;
        case 4: setQ4Service(exampleValue); break;
        case 5: setQ5Process(exampleValue); break;
        case 6: setQ6Timeline(exampleValue); break;
        case 7: setQ7Strength(exampleValue); break;
        case 8: setQ8Experience(exampleValue); break;
        case 9: setQ9Testimonial(exampleValue); break;
        case 10: setQ10Origin(exampleValue); break;
        case 11: setQ11Challenge(exampleValue); break;
        case 12: setQ12Vision(exampleValue); break;
        case 13: setQ13Impact(exampleValue); break;
        case 14: setQ14Metrics(exampleValue); break;
        case 15: setQ15Pricing(exampleValue); break;
        case 16: setQ16Terms(exampleValue); break;
        case 17: setQ17Contact(exampleValue); break;
      }
    }
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async () => {
    setIsGenerating(true);

    try {
      const response = await fetch('/api/generate-proposal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          expertise,
          industry,
          q1ClientName,
          q2Problem,
          q3PainPoint,
          q4Service,
          q5Process,
          q6Timeline,
          q7Strength,
          q8Experience,
          q9Testimonial,
          q10Origin,
          q11Challenge,
          q12Vision,
          q13Impact,
          q14Metrics,
          q15Pricing,
          q16Terms,
          q17Contact,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // localStorage에 저장 (URL 크기 제한 문제 해결)
        localStorage.setItem('proposalData', JSON.stringify(data));
        
        // 결과 페이지로 이동
        window.location.href = '/proposal/result';
      } else {
        alert(`오류: ${data.error}`);
        setIsGenerating(false);
      }
    } catch (error) {
      console.error('제안서 생성 오류:', error);
      alert('제안서 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
      setIsGenerating(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setPortfolioFiles([...portfolioFiles, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setPortfolioFiles(portfolioFiles.filter((_, i) => i !== index));
  };

  // 질문별 카테고리 매핑
  const getQuestionCategory = (questionNumber: number) => {
    if (questionNumber <= 3) return { title: '1단계: 제안 대상 및 현황', variant: 'error' as const };
    if (questionNumber <= 6) return { title: '2단계: 서비스 내용 및 프로세스', variant: 'primary' as const };
    if (questionNumber <= 9) return { title: '3단계: 전문성 및 실행 역량', variant: 'success' as const };
    if (questionNumber <= 12) return { title: '4단계: 브랜드 스토리', variant: 'warning' as const };
    if (questionNumber <= 14) return { title: '5단계: 기대 효과 및 목표', variant: 'info' as const };
    if (questionNumber <= 16) return { title: '6단계: 서비스 비용 및 조건', variant: 'gray' as const };
    return { title: '7단계: 다음 단계 안내', variant: 'primary' as const };
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Loading Overlay */}
      {isGenerating && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <Card variant="elevated" className="max-w-md mx-4">
            <CardContent className="p-8 text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-purple-600 mx-auto mb-4"></div>
              <H4 className="text-gray-900 mb-2">AI가 제안서를 작성하고 있습니다</H4>
              <Text className="text-gray-600">
                입력하신 정보를 바탕으로 전문적인 제안서를 생성 중입니다.
                <br />
                잠시만 기다려주세요... ✨
              </Text>
            </CardContent>
          </Card>
        </div>
      )}
      
      <Navbar />

      <Section spacing="large" className="bg-gray-50">
        <Container>
          {/* Progress Header */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-between mb-4">
              <Badge variant="primary" size="medium">
                제안서 작성 중
              </Badge>
              <Text className="text-gray-600 font-medium">
                질문 {currentQuestion} / {totalQuestions}
              </Text>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
              />
            </div>
            <TextSmall className="text-gray-500 text-right">
              {Math.round((currentQuestion / totalQuestions) * 100)}% 완료
            </TextSmall>

            {/* Context Info */}
            <div className="mt-6 flex gap-4 flex-wrap">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <TextSmall className="text-gray-500">전문분야:</TextSmall>
                <TextSmall className="font-medium text-gray-900">{expertise}</TextSmall>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <TextSmall className="text-gray-500">잠재고객 업종:</TextSmall>
                <TextSmall className="font-medium text-gray-900">{industry}</TextSmall>
              </div>
            </div>
          </div>

          {/* Question Card */}
          <div className="max-w-3xl mx-auto">
            <Card variant="elevated">
              <CardContent className="p-8 md:p-12">
                {/* Category Badge */}
                <Badge 
                  variant={getQuestionCategory(currentQuestion).variant} 
                  size="medium" 
                  className="mb-6"
                >
                  {getQuestionCategory(currentQuestion).title}
                </Badge>

                {/* Q1 */}
                {currentQuestion === 1 && (
                  <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4 h-[80px]">
                      <H4 className="text-gray-900 leading-tight flex-1">
                        제안서를 받으실 잠재 고객사(또는 담당자)는 누구인가요?
                      </H4>
                      <Button 
                        variant="outline" 
                        size="small" 
                        onClick={() => fillExample(1)}
                        className="flex-shrink-0"
                      >
                        💡 예시 넣기
                      </Button>
                    </div>
                    <div className="h-[280px] flex flex-col">
                      <Input
                        placeholder="예: ABC 스타트업, 김영희 대표"
                        value={q1ClientName}
                        onChange={(e) => setQ1ClientName(e.target.value)}
                      />
                      <Text className="text-gray-500 mt-3">
                        기업명 또는 담당자명을 정확히 입력하세요
                      </Text>
                    </div>
                  </div>
                )}

                {/* Q2 */}
                {currentQuestion === 2 && (
                  <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4 h-[80px]">
                      <H4 className="text-gray-900 leading-tight flex-1">
                        고객이 현재 처해 있는 상황이나 해결이 필요한 구체적인 문제는 무엇인가요?
                      </H4>
                      <Button 
                        variant="outline" 
                        size="small" 
                        onClick={() => fillExample(2)}
                        className="flex-shrink-0"
                      >
                        💡 예시 넣기
                      </Button>
                    </div>
                    <div className="h-[280px] flex flex-col">
                      <Textarea
                        placeholder="예: 온라인 매출이 오프라인의 10%에 불과하여 디지털 전환이 시급한 상황"
                        value={q2Problem}
                        onChange={(e) => setQ2Problem(e.target.value)}
                        rows={8}
                        className="flex-1"
                      />
                      <Text className="text-gray-500 mt-3">
                        고객이 겪고 있는 구체적인 문제 상황을 설명하세요
                      </Text>
                    </div>
                  </div>
                )}

                {/* Q3 */}
                {currentQuestion === 3 && (
                  <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4 h-[80px]">
                      <H4 className="text-gray-900 leading-tight flex-1">
                        해당 문제가 해결되지 않았을 때 고객이 겪게 될 실질적인 어려움은 무엇일까요?
                      </H4>
                      <Button 
                        variant="outline" 
                        size="small" 
                        onClick={() => fillExample(3)}
                        className="flex-shrink-0"
                      >
                        💡 예시 넣기
                      </Button>
                    </div>
                    <div className="h-[280px] flex flex-col">
                      <Textarea
                        placeholder="예: 경쟁사 대비 시장 점유율 하락, 고객 이탈률 증가 등"
                        value={q3PainPoint}
                        onChange={(e) => setQ3PainPoint(e.target.value)}
                        rows={8}
                        className="flex-1"
                      />
                      <Text className="text-gray-500 mt-3">
                        문제를 방치했을 때의 부정적 영향을 구체적으로 작성하세요
                      </Text>
                    </div>
                  </div>
                )}

                {/* Q4 */}
                {currentQuestion === 4 && (
                  <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4 h-[80px]">
                      <H4 className="text-gray-900 leading-tight flex-1">
                        고객의 문제를 해결하기 위해 어떤 서비스(작업)를 제안하시나요?
                      </H4>
                      <Button 
                        variant="outline" 
                        size="small" 
                        onClick={() => fillExample(4)}
                        className="flex-shrink-0"
                      >
                        💡 예시 넣기
                      </Button>
                    </div>
                    <div className="h-[280px] flex flex-col">
                      <Textarea
                        placeholder="예: 반응형 전자상거래 웹사이트 구축, 결제 시스템 통합, SEO 최적화"
                        value={q4Service}
                        onChange={(e) => setQ4Service(e.target.value)}
                        rows={8}
                        className="flex-1"
                      />
                      <Text className="text-gray-500 mt-3">
                        제공할 서비스의 핵심 내용을 구체적으로 나열하세요
                      </Text>
                    </div>
                  </div>
                )}

                {/* Q5 */}
                {currentQuestion === 5 && (
                  <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4 h-[80px]">
                      <H4 className="text-gray-900 leading-tight flex-1">
                        작업은 어떤 순서로 진행되나요? 단계별로 핵심 과정을 적어주세요.
                      </H4>
                      <Button 
                        variant="outline" 
                        size="small" 
                        onClick={() => fillExample(5)}
                        className="flex-shrink-0"
                      >
                        💡 예시 넣기
                      </Button>
                    </div>
                    <div className="h-[280px] flex flex-col">
                      <Textarea
                        placeholder="예: 1) 요구사항 분석 (1주) → 2) 디자인 작업 (2주) → 3) 개발 (4주) → 4) 테스트 및 런칭 (1주)"
                        value={q5Process}
                        onChange={(e) => setQ5Process(e.target.value)}
                        rows={8}
                        className="flex-1"
                      />
                      <Text className="text-gray-500 mt-3">
                        작업 단계를 순서대로 나열하고, 각 단계별 소요 기간을 함께 작성하세요
                      </Text>
                    </div>
                  </div>
                )}

                {/* Q6 */}
                {currentQuestion === 6 && (
                  <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4 h-[80px]">
                      <H4 className="text-gray-900 leading-tight flex-1">
                        예상되는 총 소요 기간은 어느 정도인가요?
                      </H4>
                      <Button 
                        variant="outline" 
                        size="small" 
                        onClick={() => fillExample(6)}
                        className="flex-shrink-0"
                      >
                        💡 예시 넣기
                      </Button>
                    </div>
                    <div className="h-[280px] flex flex-col">
                      <Input
                        placeholder="예: 8주 (약 2개월)"
                        value={q6Timeline}
                        onChange={(e) => setQ6Timeline(e.target.value)}
                      />
                      <Text className="text-gray-500 mt-3">
                        전체 프로젝트가 완료되기까지의 총 기간을 입력하세요
                      </Text>
                    </div>
                  </div>
                )}

                {/* Q7 */}
                {currentQuestion === 7 && (
                  <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4 h-[80px]">
                      <H4 className="text-gray-900 leading-tight flex-1">
                        이번 제안과 관련하여 본인이 가진 가장 큰 강점이나 전문성은 무엇인가요?
                      </H4>
                      <Button 
                        variant="outline" 
                        size="small" 
                        onClick={() => fillExample(7)}
                        className="flex-shrink-0"
                      >
                        💡 예시 넣기
                      </Button>
                    </div>
                    <div className="h-[280px] flex flex-col">
                      <Textarea
                        placeholder="예: 5년간 전자상거래 분야 전문, React 기반 고성능 웹 개발 경험 20건 이상"
                        value={q7Strength}
                        onChange={(e) => setQ7Strength(e.target.value)}
                        rows={8}
                        className="flex-1"
                      />
                      <Text className="text-gray-500 mt-3">
                        이 프로젝트에 가장 관련 있는 강점을 구체적으로 작성하세요
                      </Text>
                    </div>
                  </div>
                )}

                {/* Q8 */}
                {currentQuestion === 8 && (
                  <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4 h-[80px]">
                      <H4 className="text-gray-900 leading-tight flex-1">
                        고객이 참고할 만한 유사 프로젝트 경험과 실질적인 성과가 있다면 알려주세요.
                      </H4>
                      <Button 
                        variant="outline" 
                        size="small" 
                        onClick={() => fillExample(8)}
                        className="flex-shrink-0"
                      >
                        💡 예시 넣기
                      </Button>
                    </div>
                    <div className="h-[280px] flex flex-col">
                      <Textarea
                        placeholder="예: OO쇼핑몰 구축 후 월 매출 300% 증가, △△기업 웹사이트 개편으로 전환율 2배 향상"
                        value={q8Experience}
                        onChange={(e) => setQ8Experience(e.target.value)}
                        rows={8}
                        className="flex-1"
                      />
                      <Text className="text-gray-500 mt-3">
                        숫자로 증명 가능한 성과가 있다면 함께 작성하세요
                      </Text>
                    </div>
                  </div>
                )}

                {/* Q9 */}
                {currentQuestion === 9 && (
                  <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4 h-[80px]">
                      <H4 className="text-gray-900 leading-tight flex-1">
                        작업물이나 업무 방식에 대해 이전 고객들에게 받은 긍정적인 평가가 있다면 무엇인가요?
                      </H4>
                      <Button 
                        variant="outline" 
                        size="small" 
                        onClick={() => fillExample(9)}
                        className="flex-shrink-0"
                      >
                        💡 예시 넣기
                      </Button>
                    </div>
                    <div className="h-[280px] flex flex-col">
                      <Textarea
                        placeholder="예: '일정을 정확히 지켜주셔서 신뢰가 갔습니다', '커뮤니케이션이 원활해서 작업이 수월했습니다'"
                        value={q9Testimonial}
                        onChange={(e) => setQ9Testimonial(e.target.value)}
                        rows={8}
                        className="flex-1"
                      />
                      <Text className="text-gray-500 mt-3">
                        고객 후기나 피드백이 있다면 직접 인용하세요
                      </Text>
                    </div>
                  </div>
                )}

                {/* Q10 */}
                {currentQuestion === 10 && (
                  <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4 h-[80px]">
                      <H4 className="text-gray-900 leading-tight flex-1">
                        이 사업을 시작하게 된 계기와 과정은 무엇인가요?
                      </H4>
                      <Button 
                        variant="outline" 
                        size="small" 
                        onClick={() => fillExample(10)}
                        className="flex-shrink-0"
                      >
                        💡 예시 넣기
                      </Button>
                    </div>
                    <div className="h-[280px] flex flex-col">
                      <Textarea
                        placeholder="예: 직장 생활 중 불편함을 해결하고 싶어 프리랜서로 전환, 첫 프로젝트의 성공이 큰 동기부여가 됨"
                        value={q10Origin}
                        onChange={(e) => setQ10Origin(e.target.value)}
                        rows={8}
                        className="flex-1"
                      />
                      <Text className="text-gray-500 mt-3">
                        당신의 사업 시작 배경을 솔직하게 들려주세요
                      </Text>
                    </div>
                  </div>
                )}

                {/* Q11 */}
                {currentQuestion === 11 && (
                  <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4 h-[80px]">
                      <H4 className="text-gray-900 leading-tight flex-1">
                        그동안 어떤 어려움을 극복하며 지금의 전문성을 갖추게 되었나요?
                      </H4>
                      <Button 
                        variant="outline" 
                        size="small" 
                        onClick={() => fillExample(11)}
                        className="flex-shrink-0"
                      >
                        💡 예시 넣기
                      </Button>
                    </div>
                    <div className="h-[280px] flex flex-col">
                      <Textarea
                        placeholder="예: 초기 실패 경험을 통해 고객 니즈 파악의 중요성을 깨달음, 꾸준한 학습으로 최신 기술 습득"
                        value={q11Challenge}
                        onChange={(e) => setQ11Challenge(e.target.value)}
                        rows={8}
                        className="flex-1"
                      />
                      <Text className="text-gray-500 mt-3">
                        성장 과정에서의 도전과 극복 스토리를 공유하세요
                      </Text>
                    </div>
                  </div>
                )}

                {/* Q12 */}
                {currentQuestion === 12 && (
                  <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4 h-[80px]">
                      <H4 className="text-gray-900 leading-tight flex-1">
                        당신이 이 비즈니스를 통해 궁극적으로 이루고 싶은 목표(비전)는 무엇인가요?
                      </H4>
                      <Button 
                        variant="outline" 
                        size="small" 
                        onClick={() => fillExample(12)}
                        className="flex-shrink-0"
                      >
                        💡 예시 넣기
                      </Button>
                    </div>
                    <div className="h-[280px] flex flex-col">
                      <Textarea
                        placeholder="예: 중소기업의 디지털 전환을 돕는 최고의 파트너가 되고 싶습니다"
                        value={q12Vision}
                        onChange={(e) => setQ12Vision(e.target.value)}
                        rows={8}
                        className="flex-1"
                      />
                      <Text className="text-gray-500 mt-3">
                        당신의 장기적인 비전과 지향점을 표현하세요
                      </Text>
                    </div>
                  </div>
                )}

                {/* Q13 */}
                {currentQuestion === 13 && (
                  <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4 h-[80px]">
                      <H4 className="text-gray-900 leading-tight flex-1">
                        제안하신 서비스가 완료된 후, 고객사의 비즈니스에 어떤 긍정적인 변화가 생길까요?
                      </H4>
                      <Button 
                        variant="outline" 
                        size="small" 
                        onClick={() => fillExample(13)}
                        className="flex-shrink-0"
                      >
                        💡 예시 넣기
                      </Button>
                    </div>
                    <div className="h-[280px] flex flex-col">
                      <Textarea
                        placeholder="예: 온라인 매출 채널 확보로 수익원 다각화, 고객 접근성 향상으로 브랜드 인지도 상승"
                        value={q13Impact}
                        onChange={(e) => setQ13Impact(e.target.value)}
                        rows={8}
                        className="flex-1"
                      />
                      <Text className="text-gray-500 mt-3">
                        고객이 얻게 될 실질적인 이익과 변화를 구체적으로 작성하세요
                      </Text>
                    </div>
                  </div>
                )}

                {/* Q14 */}
                {currentQuestion === 14 && (
                  <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4 h-[80px]">
                      <H4 className="text-gray-900 leading-tight flex-1">
                        프로젝트의 성과를 어떻게 측정할 수 있을까요?
                      </H4>
                      <Button 
                        variant="outline" 
                        size="small" 
                        onClick={() => fillExample(14)}
                        className="flex-shrink-0"
                      >
                        💡 예시 넣기
                      </Button>
                    </div>
                    <div className="h-[280px] flex flex-col">
                      <Textarea
                        placeholder="예: 웹사이트 방문자 수, 전환율, 매출 증가율, 고객 만족도 지수 등"
                        value={q14Metrics}
                        onChange={(e) => setQ14Metrics(e.target.value)}
                        rows={8}
                        className="flex-1"
                      />
                      <Text className="text-gray-500 mt-3">
                        성과를 객관적으로 측정할 수 있는 지표를 제시하세요
                      </Text>
                    </div>
                  </div>
                )}

                {/* Q15 */}
                {currentQuestion === 15 && (
                  <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4 h-[80px]">
                      <H4 className="text-gray-900 leading-tight flex-1">
                        서비스 가격은 어떻게 구성되나요? (A/B안 등 옵션 제안 권장)
                      </H4>
                      <Button 
                        variant="outline" 
                        size="small" 
                        onClick={() => fillExample(15)}
                        className="flex-shrink-0"
                      >
                        💡 예시 넣기
                      </Button>
                    </div>
                    <div className="h-[280px] flex flex-col">
                      <Textarea
                        placeholder="예: 
[기본안] 500만원 (부가세 별도)
- 웹사이트 5페이지 구축
- 반응형 디자인
- 1개월 무상 유지보수

[프리미엄안] 800만원 (부가세 별도)
- 기본안 포함
- 관리자 페이지 추가"
                        value={q15Pricing}
                        onChange={(e) => setQ15Pricing(e.target.value)}
                        rows={8}
                        className="flex-1"
                      />
                      <Text className="text-gray-500 mt-3">
                        여러 옵션을 제시하면 고객의 선택권이 늘어납니다
                      </Text>
                    </div>
                  </div>
                )}

                {/* Q16 */}
                {currentQuestion === 16 && (
                  <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4 h-[80px]">
                      <H4 className="text-gray-900 leading-tight flex-1">
                        작업 시 사전에 협의가 필요한 조건(수정 횟수, 저작권 등)이 있나요?
                      </H4>
                      <Button 
                        variant="outline" 
                        size="small" 
                        onClick={() => fillExample(16)}
                        className="flex-shrink-0"
                      >
                        💡 예시 넣기
                      </Button>
                    </div>
                    <div className="h-[280px] flex flex-col">
                      <Textarea
                        placeholder="예: 
- 수정 요청은 각 단계별 2회까지 무상
- 최종 결과물의 저작권은 고객사 귀속
- 대금 지급: 착수금 30%, 중도금 40%, 잔금 30%"
                        value={q16Terms}
                        onChange={(e) => setQ16Terms(e.target.value)}
                        rows={8}
                        className="flex-1"
                      />
                      <Text className="text-gray-500 mt-3">
                        미리 명확히 하면 나중에 발생할 수 있는 분쟁을 예방합니다
                      </Text>
                    </div>
                  </div>
                )}

                {/* Q17 */}
                {currentQuestion === 17 && (
                  <div className="space-y-6">
                    <div className="flex items-start justify-between gap-4 h-[80px]">
                      <H4 className="text-gray-900 leading-tight flex-1">
                        제안을 확인한 고객이 미팅이나 계약을 위해 바로 연락할 수 있는 방법은 무엇인가요?
                      </H4>
                      <Button 
                        variant="outline" 
                        size="small" 
                        onClick={() => fillExample(17)}
                        className="flex-shrink-0"
                      >
                        💡 예시 넣기
                      </Button>
                    </div>
                    <div className="h-[280px] flex flex-col">
                      <Textarea
                        placeholder="예: 
📧 이메일: hello@example.com
📱 전화: 010-1234-5678
💬 카카오톡: ID_example
📅 미팅 예약: calendly.com/yourname"
                        value={q17Contact}
                        onChange={(e) => setQ17Contact(e.target.value)}
                        rows={8}
                        className="flex-1"
                      />
                      <Text className="text-gray-500 mt-3">
                        여러 연락 수단을 제공하면 고객 편의성이 높아집니다
                      </Text>
                    </div>
                  </div>
                )}

                {/* Q18 - 포트폴리오 파일 업로드 */}
                {currentQuestion === 18 && (
                  <div className="space-y-6">
                    <div className="h-[80px]">
                      <H4 className="text-gray-900 leading-tight">
                        포트폴리오 파일을 첨부해주세요 (선택사항)
                      </H4>
                    </div>
                    
                    <div className="h-[280px] flex flex-col">
                      <Text className="text-gray-500 mb-4">
                        PDF, 이미지, 또는 문서 파일을 첨부할 수 있습니다 (최대 5개)
                      </Text>
                      
                      <div>
                        <input
                          type="file"
                          id="portfolio-upload"
                          multiple
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <label
                          htmlFor="portfolio-upload"
                          className="inline-flex items-center gap-3 px-6 py-4 bg-white border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-colors cursor-pointer"
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gray-600">
                            <path d="M12 4V16M12 16L8 12M12 16L16 12M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span className="text-body-base text-gray-700 font-medium">
                            파일 선택 또는 드래그 앤 드롭
                          </span>
                        </label>
                      </div>

                      {/* 업로드된 파일 목록 */}
                      {portfolioFiles.length > 0 && (
                        <div className="space-y-2 mt-6">
                          <Text className="text-gray-700 font-medium mb-3">
                            첨부된 파일 ({portfolioFiles.length})
                          </Text>
                          {portfolioFiles.map((file, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                            >
                              <div className="flex items-center gap-3 flex-1 min-w-0">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-purple-600 flex-shrink-0">
                                  <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <div className="flex-1 min-w-0">
                                  <Text className="text-gray-900 truncate block">
                                    {file.name}
                                  </Text>
                                  <TextSmall className="text-gray-500">
                                    {(file.size / 1024).toFixed(1)} KB
                                  </TextSmall>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="ml-3 p-2 text-gray-400 hover:text-red-600 transition-colors flex-shrink-0"
                                aria-label="파일 삭제"
                              >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                  <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-10 pt-8 border-t border-gray-200">
                  {currentQuestion > 1 && (
                    <Button variant="outline" onClick={handlePrevious} size="large" className="flex-1">
                      ← 이전
                    </Button>
                  )}
                  {currentQuestion < totalQuestions ? (
                    <Button variant="primary" onClick={handleNext} size="large" className="flex-1">
                      다음 →
                    </Button>
                  ) : (
                    <Button 
                      variant="primary" 
                      onClick={handleSubmit} 
                      size="large" 
                      className="flex-1"
                      disabled={isGenerating}
                    >
                      {isGenerating ? (
                        <>
                          <span className="animate-spin inline-block mr-2">⏳</span>
                          제안서 생성 중...
                        </>
                      ) : (
                        '제안서 생성하기 ✨'
                      )}
                    </Button>
                  )}
                </div>

                {/* Cancel Link */}
                <div className="text-center mt-4">
                  <Link href="/" className="text-gray-500 hover:text-gray-700 text-body-small">
                    취소하고 홈으로 돌아가기
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}

export default function ProposalNewPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProposalNewContent />
    </Suspense>
  );
}
