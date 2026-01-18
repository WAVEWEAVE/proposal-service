import { Button, Container, H1, Text, Navbar, Footer } from '@/features/design-system/components';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <Container className="text-center">
          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <H1 className="text-purple-600 mb-2">404</H1>
            </div>

            <H1 className="mb-4 text-gray-900 text-3xl">
              페이지를 찾을 수 없습니다
            </H1>
            
            <Text className="text-gray-600 mb-8">
              요청하신 페이지가 존재하지 않거나 이동되었습니다.
              <br />
              URL을 다시 확인해 주세요.
            </Text>

            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/">
                <Button variant="primary">홈으로 돌아가기</Button>
              </Link>
              <Link href="/components">
                <Button variant="outline">디자인 시스템</Button>
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
