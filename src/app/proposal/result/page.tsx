'use client';

import { Suspense, useEffect, useState, useRef } from 'react';
import {
  H1,
  H2,
  H3,
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
} from '@/features/design-system/components';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

function ProposalResultContent() {
  const [proposal, setProposal] = useState<any>(null);
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // localStorage에서 제안서 데이터 읽기
    const storedData = localStorage.getItem('proposalData');
    if (storedData) {
      try {
        const parsed = JSON.parse(storedData);
        setProposal(parsed);
        
        // 데이터를 사용한 후 정리 (선택사항)
        // localStorage.removeItem('proposalData');
      } catch (error) {
        console.error('제안서 데이터 파싱 오류:', error);
      }
    }
  }, []);

  const handlePrint = () => {
    if (printRef.current) {
      const printContent = printRef.current.innerHTML;
      const originalContent = document.body.innerHTML;
      
      document.body.innerHTML = printContent;
      window.print();
      document.body.innerHTML = originalContent;
      window.location.reload(); // 페이지 복원
    }
  };

  const handleDownload = () => {
    if (!proposal) return;
    
    const blob = new Blob([proposal.proposal], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `제안서_${proposal.metadata.clientName}_${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyToClipboard = async () => {
    if (!proposal) return;
    
    try {
      await navigator.clipboard.writeText(proposal.proposal);
      alert('제안서가 클립보드에 복사되었습니다!');
    } catch (error) {
      console.error('클립보드 복사 실패:', error);
      alert('클립보드 복사에 실패했습니다.');
    }
  };

  if (!proposal) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <Section spacing="large">
          <Container>
            <div className="max-w-4xl mx-auto text-center py-20">
              <H2 className="text-gray-900 mb-4">제안서를 불러오는 중...</H2>
              <Text className="text-gray-600">잠시만 기다려주세요.</Text>
            </div>
          </Container>
        </Section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <Section spacing="large" className="bg-gray-50">
        <Container>
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <Badge variant="success" size="medium" className="mb-3">
                  제안서 생성 완료 ✨
                </Badge>
                <H2 className="text-gray-900">
                  {proposal.metadata.clientName}님을 위한 제안서
                </H2>
                <TextSmall className="text-gray-500 mt-2">
                  생성일시: {new Date(proposal.metadata.generatedAt).toLocaleString('ko-KR')}
                </TextSmall>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 flex-wrap">
              <Button variant="primary" onClick={handleDownload} size="medium">
                📥 마크다운 다운로드
              </Button>
              <Button variant="outline" onClick={handlePrint} size="medium">
                🖨️ 인쇄하기
              </Button>
              <Button variant="outline" onClick={handleCopyToClipboard} size="medium">
                📋 복사하기
              </Button>
              <Link href="/">
                <Button variant="outline" size="medium">
                  🏠 홈으로
                </Button>
              </Link>
            </div>
          </div>

          {/* Proposal Content */}
          <div className="max-w-4xl mx-auto" ref={printRef}>
            <Card variant="elevated">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => (
                        <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-8">
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">
                          {children}
                        </h3>
                      ),
                      p: ({ children }) => (
                        <p className="text-gray-700 leading-relaxed mb-4">
                          {children}
                        </p>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
                          {children}
                        </ol>
                      ),
                      li: ({ children }) => (
                        <li className="ml-4">{children}</li>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-semibold text-gray-900">
                          {children}
                        </strong>
                      ),
                      em: ({ children }) => (
                        <em className="italic text-gray-800">{children}</em>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-700 my-4">
                          {children}
                        </blockquote>
                      ),
                      hr: () => (
                        <hr className="my-8 border-gray-300" />
                      ),
                    }}
                  >
                    {proposal.proposal}
                  </ReactMarkdown>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer Actions */}
          <div className="max-w-4xl mx-auto mt-8 text-center">
            <Text className="text-gray-600 mb-4">
              제안서가 마음에 드시나요? 원하시는 형식으로 다운로드하여 사용하세요.
            </Text>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/proposal/new">
                <Button variant="outline" size="medium">
                  ➕ 새 제안서 작성
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}

export default function ProposalResultPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">제안서를 불러오는 중...</p>
        </div>
      </div>
    }>
      <ProposalResultContent />
    </Suspense>
  );
}
