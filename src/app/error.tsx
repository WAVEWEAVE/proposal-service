'use client';

import { useEffect } from 'react';
import { Button, Container, H2, Text } from '@/features/design-system/components';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Container className="text-center">
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                className="text-red-600"
              >
                <path
                  d="M12 9V11M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0377 2.66667 10.2679 4L3.33975 16C2.56995 17.3333 3.53223 19 5.07183 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <H2 className="mb-4 text-gray-900">문제가 발생했습니다</H2>
          
          <Text className="text-gray-600 mb-8">
            예기치 않은 오류가 발생했습니다.
            <br />
            다시 시도해 주세요.
          </Text>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="primary" onClick={reset}>
              다시 시도
            </Button>
            <Button variant="outline" onClick={() => (window.location.href = '/')}>
              홈으로 돌아가기
            </Button>
          </div>

          {process.env.NODE_ENV === 'development' && (
            <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
              <Text className="text-red-900 font-mono text-sm break-all">
                {error.message}
              </Text>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
