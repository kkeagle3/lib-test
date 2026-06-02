import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUESTIONS, RESULTS } from './data';

const pageVariants = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 }
};

const pageTransition = {
  duration: 0.4,
  ease: [0.25, 1, 0.5, 1]
};

function App() {
  const [stage, setStage] = useState('landing');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false); // 물리적인 연타 방지 플래그
  const [scores, setScores] = useState({ 
    SILENT: 0, 
    AMBIENT: 0, 
    APPLE: 0, 
    MARKER: 0, 
    ALCHEMIST: 0, 
    TOURIST: 0 
  });
  const [finalResult, setFinalResult] = useState(null);

  const handleAnswer = (weights) => {
    // 1. 이미 클릭 처리 중이거나 로딩 상태로 넘어가는 중이라면 무조건 즉시 차단
    if (isSubmitting || stage !== 'quiz') return;
    setIsSubmitting(true);

    if (!weights) {
      console.error("데이터 오류: weights가 정의되지 않았습니다.");
      setIsSubmitting(false);
      return;
    }

    // 2. 점수 안전하게 합산
    setScores(prev => {
      const updated = { ...prev };
      Object.entries(weights).forEach(([type, value]) => {
        if (updated.hasOwnProperty(type)) {
          updated[type] += value;
        }
      });
      return updated;
    });

    // 3. 인덱스 경계값에 대한 절대적 검증 (이 부분이 구멍을 막는 핵심입니다)
    const nextIdx = currentIdx + 1;
    
    if (nextIdx < QUESTIONS.length) {
      // 다음 문항이 확실히 존재할 때만 인덱스를 안전하게 1 올림
      setCurrentIdx(nextIdx);
    } else {
      // 모든 문항이 끝났다면 인덱스를 절대 올리지 않고 스테이지만 로딩으로 전환
      setStage('loading');
    }
  };

  // 문항(currentIdx)이 실제로 갱신이 완료되어 화면 렌더링이 보장되면 그때 클릭 잠금을 해제
  useEffect(() => {
    if (stage === 'quiz') {
      setIsSubmitting(false);
    }
  }, [currentIdx, stage]);

  useEffect(() => {
    if (stage === 'loading') {
      const timer = setTimeout(() => {
        const maxScore = Math.max(...Object.values(scores));
        const candidates = Object.keys(scores).filter(key => scores[key] === maxScore);
        
        const priority = ["TOURIST", "APPLE", "MARKER", "ALCHEMIST", "AMBIENT", "SILENT"];
        const picked = candidates.sort((a, b) => priority.indexOf(a) - priority.indexOf(b))[0];
        
        setFinalResult(picked);
        setStage('result');
        setIsSubmitting(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [stage, scores]);

  const copyImageToClipboard = async () => {
    const imgUrl = RESULTS[finalResult]?.img;
    if (!imgUrl) {
      alert("복사할 이미지 경로가 없습니다.");
      return;
    }

    try {
      const response = await fetch(imgUrl);
      const blob = await response.blob();

      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ]);
      alert("결과 이미지가 클립보드에 복사되었습니다!\n원하는 곳에 바로 붙여넣기(Ctrl+V) 하세요.");
    } catch (err) {
      console.error("이미지 복사 실패:", err);
      alert("이미지 복사를 지원하지 않는 브라우저입니다.\n이미지를 꾹 누르거나 우클릭하여 '이미지 복사'를 이용해 주세요.");
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex items-center justify-center p-4 font-sans text-slate-900 overflow-x-hidden">
      <AnimatePresence mode="wait">
        
        {/* 1. 시작 페이지 */}
        {stage === 'landing' && (
          <motion.div 
            key="landing" 
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
            className="flex flex-col items-center text-center w-full max-w-sm"
          >
            <div className="w-44 h-44 mx-auto mb-6 relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[#ff6b6b]/10 rounded-full blur-2xl transform -translate-y-2"></div>
              <img 
                src="/images/kbg_basic.png" 
                alt="메인 크부기"
                className="w-full h-full object-contain relative z-10 drop-shadow-xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<span class="text-6xl block">🐢</span>';
                }}
              />
            </div>
            <h1 className="text-4xl font-black mb-4 tracking-tighter text-slate-800">나의 크부기 찾기</h1>
            <p className="text-slate-500 mb-10 font-medium">나의 도서관 성향은 어떨까?</p>
            <button 
              onClick={() => setStage('quiz')} 
              className="bg-[#ff6b6b] text-white px-14 py-5 rounded-3xl font-black text-xl shadow-lg shadow-red-100 hover:brightness-105 transition-all active:scale-95 w-full"
            >
              테스트 시작하기
            </button>
            <footer className="mt-16">
              <p className="text-sm font-bold text-slate-400 tracking-widest">제38기 도서관학생위원회</p>
            </footer>
          </motion.div>
        )}

        {/* 2. 질문 페이지 */}
        {stage === 'quiz' && QUESTIONS[currentIdx] && (
          <motion.div 
            key={`quiz-${currentIdx}`} 
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
            className="w-full max-w-sm bg-white rounded-[2.5rem] shadow-2xl p-8 border border-slate-50"
          >
            <div className="text-center font-black text-2xl text-[#ff6b6b] mb-2">
              {currentIdx + 1} / {QUESTIONS.length}
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full mb-10 overflow-hidden">
              <motion.div 
                className="h-full bg-[#ff6b6b]" 
                initial={{ width: 0 }} 
                animate={{ width: `${((currentIdx + 1) / QUESTIONS.length) * 100}%` }} 
                transition={{ duration: 0.3 }}
              />
            </div>
            <h2 className="text-2xl font-bold mb-10 text-slate-800 text-center break-keep whitespace-pre-line min-h-[4rem] flex items-center justify-center">
              {QUESTIONS[currentIdx].text}
            </h2>
            <div className="space-y-3">
              {QUESTIONS[currentIdx].options.map((opt, i) => (
                <button 
                  key={`${currentIdx}-${i}`} 
                  onClick={() => handleAnswer(opt.weights)} 
                  disabled={isSubmitting} 
                  className={`w-full p-5 text-left bg-white border-2 border-slate-50 rounded-2xl font-semibold shadow-sm transition-all text-slate-700 break-keep ${
                    isSubmitting ? 'opacity-60 cursor-not-allowed' : 'hover:border-[#ff6b6b] hover:bg-[#fff9f9] active:scale-95'
                  }`}
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* 3. 로딩 페이지 */}
        {stage === 'loading' && (
          <motion.div 
            key="loading" 
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
            className="text-center w-full max-w-sm"
          >
            <div className="w-16 h-16 border-4 border-[#ff6b6b] border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
            <p className="text-xl font-bold text-slate-600">공부 세포 분석 중...</p> 
          </motion.div>
        )}

        {/* 4. 결과 페이지 */}
        {stage === 'result' && finalResult && (
          <motion.div 
            key="result" 
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
            className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl p-5 text-center flex flex-col" 
          >
            <div className="w-full rounded-2xl overflow-hidden mb-5 bg-slate-50 shadow-md border border-slate-100">
              <img 
                src={RESULTS[finalResult]?.img || "https://via.placeholder.com/400?text=Kbeugi"} 
                alt={RESULTS[finalResult]?.name}
                className="w-full h-auto block"
                onError={(e) => { 
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = `<div class="w-full aspect-square flex flex-col items-center justify-center text-slate-400 font-bold bg-slate-100 gap-2"><span class="text-6xl">${RESULTS[finalResult]?.emoji || '🐢'}</span>${RESULTS[finalResult]?.name} 이미지를 찾을 수 없습니다.</div>`;
                }}
              />
            </div>
            
            <div className="bg-[#fff9f9] border border-[#ff6b6b]/10 p-4 rounded-xl mb-4 text-left">
              <p className="text-[#ff6b6b] text-xs font-black mb-1">📍 추천 공부 장소</p>
              <p className="text-slate-700 font-bold text-base">{RESULTS[finalResult]?.place}</p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 mb-5">
              <div className="bg-blue-50/50 p-2.5 rounded-xl border border-blue-100/50 flex flex-col justify-center items-center min-h-[4.5rem]">
                <p className="text-blue-500 text-[10px] font-black mb-1 uppercase tracking-wider">Best Match</p>
                <p className="text-slate-700 text-xs font-bold break-keep whitespace-normal leading-tight text-center px-1">
                  {RESULTS[RESULTS[finalResult]?.best]?.emoji} {RESULTS[RESULTS[finalResult]?.best]?.name}
                </p>
              </div>
              <div className="bg-red-50/50 p-2.5 rounded-xl border border-red-100/50 flex flex-col justify-center items-center min-h-[4.5rem]">
                <p className="text-red-500 text-[10px] font-black mb-1 uppercase tracking-wider">Worst Match</p>
                <p className="text-slate-700 text-xs font-bold break-keep whitespace-normal leading-tight text-center px-1">
                  {RESULTS[RESULTS[finalResult]?.worst]?.emoji} {RESULTS[RESULTS[finalResult]?.worst]?.name}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 mt-auto">
              <button 
                onClick={copyImageToClipboard} 
                className="w-full py-4 bg-[#ff6b6b] text-white rounded-xl font-bold shadow-md hover:brightness-105 active:scale-95 transition-all text-base"
              >
                결과 이미지 복사하기
              </button>
              <button onClick={() => window.location.reload()} className="w-full py-3 bg-slate-100 text-slate-500 rounded-xl font-bold hover:bg-slate-200 active:scale-95 transition-all text-sm">
                테스트 다시 하기
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;