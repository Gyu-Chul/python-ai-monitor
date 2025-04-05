import HelloCard from '@/components/hello-card';

export default function HelloPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Next.js + TypeScript 샘플 페이지</h1>
      <HelloCard name="홍길동" />
    </main>
  );
}
