import React from 'react';

const LandingPage = ({ onStart }) => {
  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden">
      {/* 1. 배경 이미지 (버튼 없는 버전) */}
      <img 
        src="/images/landing_bg.png" 
        alt="배경" 
        className="w-full h-auto display-block"
      />

      {/* 2. JSS/Tailwind로 구현하는 실제 버튼 */}
      <button 
        onClick={onStart}
        className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[75%] h-[65px] 
                   bg-[#f8a19f] text-white rounded-full font-bold shadow-lg 
                   active:scale-95 transition-all flex flex-col items-center justify-center"
      >
        <span className="text-xl">테스트 시작하기</span>
        <span className="text-[10px] opacity-80">지금까지 17,986명이 참여했어요</span>
      </button>
    </div>
  );
};

export default LandingPage;