import React from 'react';

type HelloCardProps = {
  name: string;
};

// HelloCard.tsx
export default function HelloCard({ name }: { name: string }) {
  return (
    <div className="p-6 border border-gray-300 rounded-xl shadow-sm">
      <h2 className="text-xl font-bold text-blue-600">안녕하세요, {name} 님!</h2>
      <p className="text-gray-600">이건 Tailwind로 꾸며본 카드입니다.</p>
    </div>
  );
}


