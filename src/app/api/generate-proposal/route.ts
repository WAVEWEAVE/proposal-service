import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    // API 키 확인
    const apiKey = process.env.ANTHROPIC_API_KEY;
    console.log('🔑 API Key exists:', !!apiKey);
    console.log('🔑 API Key length:', apiKey?.length || 0);
    console.log('🔑 API Key starts with sk-ant:', apiKey?.startsWith('sk-ant-') || false);
    
    if (!apiKey) {
      console.error('❌ ANTHROPIC_API_KEY가 설정되지 않았습니다!');
      return NextResponse.json(
        {
          success: false,
          error: 'API 키가 설정되지 않았습니다.',
          details: '.env.local 파일의 ANTHROPIC_API_KEY를 확인해주세요.',
        },
        { status: 500 }
      );
    }

    const data = await request.json();
    
    const {
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
    } = data;

    // Claude에게 제안서 작성을 요청하는 프롬프트
    const prompt = `당신은 전문적인 비즈니스 제안서 작성 전문가입니다. 아래 정보를 바탕으로 설득력 있고 전문적인 제안서를 작성해주세요.

# 기본 정보
- 전문분야: ${expertise}
- 잠재고객 업종: ${industry}
- 제안 대상: ${q1ClientName}

# 1단계: 제안 대상 및 현황
**고객의 현재 상황/문제:**
${q2Problem}

**문제 미해결 시 어려움:**
${q3PainPoint}

# 2단계: 서비스 내용 및 프로세스
**제안 서비스:**
${q4Service}

**작업 프로세스:**
${q5Process}

**예상 소요 기간:**
${q6Timeline}

# 3단계: 전문성 및 실행 역량
**핵심 강점:**
${q7Strength}

**유사 프로젝트 경험:**
${q8Experience}

**고객 평가:**
${q9Testimonial}

# 4단계: 브랜드 스토리
**사업 시작 계기:**
${q10Origin}

**극복한 어려움:**
${q11Challenge}

**비전:**
${q12Vision}

# 5단계: 기대 효과 및 목표
**기대되는 긍정적 변화:**
${q13Impact}

**성과 측정 방법:**
${q14Metrics}

# 6단계: 서비스 비용 및 조건
**가격 구성:**
${q15Pricing}

**작업 조건:**
${q16Terms}

# 7단계: 다음 단계 안내
**연락 방법:**
${q17Contact}

---

위 정보를 바탕으로 다음과 같은 구조로 전문적인 제안서를 작성해주세요:

1. **제목**: 매력적이고 명확한 제안서 제목
2. **요약**: 제안의 핵심 내용을 2-3문장으로 요약
3. **고객의 현재 상황 분석**: 고객의 문제와 필요성 설명
4. **제안하는 솔루션**: 구체적인 서비스 내용과 프로세스
5. **우리의 강점**: 전문성과 실적
6. **기대 효과**: 프로젝트 완료 후 얻을 수 있는 가치
7. **프로젝트 일정**: 단계별 타임라인
8. **투자 비용**: 가격과 조건
9. **다음 단계**: 연락 방법과 제안

제안서는 전문적이면서도 친근하고, 설득력 있게 작성해주세요. 마크다운 형식으로 작성하되, HTML 태그는 사용하지 마세요.`;

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 4000,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    // Claude의 응답 추출
    const proposalContent = message.content[0].type === 'text' 
      ? message.content[0].text 
      : '';

    return NextResponse.json({
      success: true,
      proposal: proposalContent,
      metadata: {
        expertise,
        industry,
        clientName: q1ClientName,
        generatedAt: new Date().toISOString(),
      },
    });

  } catch (error) {
    console.error('제안서 생성 중 오류 발생:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: '제안서 생성 중 오류가 발생했습니다.',
        details: error instanceof Error ? error.message : '알 수 없는 오류',
      },
      { status: 500 }
    );
  }
}
