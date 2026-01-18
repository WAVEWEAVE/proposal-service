'use client';

import { useEffect } from 'react';

export default function GlobalError({
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
    <html>
      <body>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f9fafb',
          fontFamily: 'system-ui, sans-serif',
        }}>
          <div style={{
            textAlign: 'center',
            maxWidth: '500px',
            padding: '2rem',
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1rem',
            }}>⚠️</div>
            
            <h1 style={{
              fontSize: '1.875rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#111827',
            }}>
              심각한 오류가 발생했습니다
            </h1>
            
            <p style={{
              color: '#6b7280',
              marginBottom: '2rem',
            }}>
              애플리케이션에 예기치 않은 문제가 발생했습니다.
              <br />
              페이지를 새로고침하거나 나중에 다시 시도해 주세요.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button
                onClick={reset}
                style={{
                  backgroundColor: '#7c3aed',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500',
                }}
              >
                다시 시도
              </button>
              <button
                onClick={() => (window.location.href = '/')}
                style={{
                  backgroundColor: 'white',
                  color: '#374151',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: '1px solid #d1d5db',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500',
                }}
              >
                홈으로
              </button>
            </div>

            {process.env.NODE_ENV === 'development' && (
              <div style={{
                marginTop: '2rem',
                padding: '1rem',
                backgroundColor: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '0.5rem',
                textAlign: 'left',
              }}>
                <pre style={{
                  color: '#991b1b',
                  fontSize: '0.875rem',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-all',
                }}>
                  {error.message}
                </pre>
              </div>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
