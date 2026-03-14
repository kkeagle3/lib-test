import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUESTIONS, RESULTS } from './data';

function App() {
  const [stage, setStage] = useState('landing');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [scores, setScores] = useState({ SILENT: 0, AMBIENT: 0, APPLE: 0, MARKER: 0, ALCHEMIST: 0, TOURIST: 0 });
  const [finalResult, setFinalResult] = useState(null);

  const handleAnswer = (type, weight) => {
    setScores(prev => ({ ...prev, [type]: prev[type] + weight }));
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setStage('loading');
    }
  };

  useEffect(() => {
    if (stage === 'loading') {
      const timer = setTimeout(() => {
        const maxScore = Math.max(...Object.values(scores));
        const candidates = Object.keys(scores).filter(key => scores[key] === maxScore);
        const picked = candidates[Math.floor(Math.random() * candidates.length)];
        setFinalResult(picked);
        setStage('result');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [stage, scores]);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("테스트 링크가 복사되었습니다!");
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex items-center justify-center p-4 font-sans text-slate-900">
      <AnimatePresence mode="wait">
        
        {/* 1. 시작 페이지 */}
        {stage === 'landing' && (
          <motion.div 
            key="landing" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }} 
            className="flex flex-col items-center text-center"
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
              className="bg-[#ff6b6b] text-white px-14 py-5 rounded-3xl font-black text-xl shadow-lg shadow-red-100 hover:brightness-105 transition-all active:scale-95 w-full max-w-[280px]"
            >
              테스트 시작하기
            </button>

            <footer className="mt-16">
              <p className="text-sm font-bold text-slate-400 tracking-widest">
                제38기 도서관학생위원회
              </p>
            </footer>
          </motion.div>
        )}

        {/* 2. 질문 페이지 */}
        {stage === 'quiz' && (
          <motion.div 
            key="quiz" 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -50 }} 
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

            <h2 className="text-2xl font-bold mb-10 text-slate-800 text-center break-keep">
              {QUESTIONS[currentIdx].text}
            </h2>
            
            <div className="space-y-3">
              {QUESTIONS[currentIdx].options.map((opt, i) => (
                <button 
                  key={i} 
                  onClick={() => handleAnswer(opt.type, opt.weight)} 
                  className="w-full p-5 text-left bg-white border-2 border-slate-50 rounded-2xl font-semibold shadow-sm hover:border-[#ff6b6b] hover:bg-[#fff9f9] transition-all active:scale-95 text-slate-700"
                >
                  {opt.text}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* 3. 로딩 페이지 */}
        {stage === 'loading' && (
          <motion.div key="loading" className="text-center">
            <div className="w-16 h-16 border-4 border-[#ff6b6b] border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
            <p className="text-xl font-bold text-slate-600">공부 세포 분석 중...</p> 
          </motion.div>
        )}

        {/* 4. 결과 페이지 */}
        {stage === 'result' && finalResult && (
          <motion.div 
            key="result" 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl p-8 text-center" 
          >
            <div className="relative mb-6">
              <img 
                src={RESULTS[finalResult].img} 
                alt={RESULTS[finalResult].name}
                className="w-48 h-48 mx-auto object-contain drop-shadow-xl"
                onError={(e) => { e.target.src = "https://via.placeholder.com/200?text=Kbeugi"; }}
              />
            </div>

            <p className="text-[#ff6b6b] font-black text-sm tracking-widest mb-1 uppercase">Your DNA Type</p>
            <h1 className="text-3xl font-black mb-6 text-slate-800">{RESULTS[finalResult].name}</h1>

            <div className="bg-slate-50 p-6 rounded-3xl mb-6 text-slate-600 leading-relaxed text-sm font-medium text-left whitespace-pre-line">
              {RESULTS[finalResult].desc}
            </div>

            <div className="bg-[#fff9f9] border border-[#ff6b6b]/10 p-4 rounded-2xl mb-6 text-left">
              <p className="text-[#ff6b6b] text-xs font-black mb-1">📍 추천 공부 장소</p>
              <p className="text-slate-700 font-bold text-base">{RESULTS[finalResult].place}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 text-center">
                <p className="text-blue-500 text-xs font-black mb-2 uppercase">Best Match</p>
                <p className="text-slate-700 text-base font-bold leading-tight break-keep">
                  {RESULTS[RESULTS[finalResult].best].emoji} {RESULTS[RESULTS[finalResult].best].name}
                </p>
              </div>
              <div className="bg-red-50 p-4 rounded-2xl border border-red-100 text-center">
                <p className="text-red-500 text-xs font-black mb-2 uppercase">Worst Match</p>
                <p className="text-slate-700 text-base font-bold leading-tight break-keep">
                  {RESULTS[RESULTS[finalResult].worst].emoji} {RESULTS[RESULTS[finalResult].worst].name}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button onClick={copyLink} className="w-full py-4 bg-[#ff6b6b] text-white rounded-2xl font-bold shadow-lg hover:brightness-105 active:scale-95 transition-all text-lg">
                결과 링크 복사하기
              </button>
              <button onClick={() => window.location.reload()} className="w-full py-4 bg-slate-100 text-slate-500 rounded-2xl font-bold hover:bg-slate-200 active:scale-95 transition-all">
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