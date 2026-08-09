import React, { useState, useEffect } from 'react';
import { Lock, Unlock, Eye, Sparkles, RefreshCw, ShieldCheck } from 'lucide-react';

export const GameIntro: React.FC = () => {
  const [digits, setDigits] = useState(['4', '8', '1', '9']);
  const [isLocked, setIsLocked] = useState(true);
  const [isRolling, setIsRolling] = useState(false);

  const rollNewNumber = () => {
    setIsRolling(true);
    let count = 0;
    const interval = setInterval(() => {
      setDigits([
        Math.floor(Math.random() * 10).toString(),
        Math.floor(Math.random() * 10).toString(),
        Math.floor(Math.random() * 10).toString(),
        Math.floor(Math.random() * 10).toString(),
      ]);
      count++;
      if (count > 10) {
        clearInterval(interval);
        setIsRolling(false);
      }
    }, 80);
  };

  return (
    <section id="game-intro" className="py-24 relative overflow-hidden bg-darkBg/90 border-y border-purplePrimary/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purplePrimary/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Minimal Large Typography Heading */}
        <div className="inline-block mb-3">
          <span className="text-xs font-orbitron font-bold tracking-[0.3em] text-cyanAccent uppercase px-4 py-1.5 glass-panel rounded-full border border-cyanAccent/30">
            THE CONCEPT
          </span>
        </div>

        <h2 className="font-orbitron font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-widest uppercase mb-6">
          THE NUMBER IS <span className="text-transparent bg-clip-text bg-gradient-to-r from-purplePrimary via-purpleSecondary to-cyanAccent text-glow-purple">HIDDEN.</span>
        </h2>

        <p className="text-textSecondary font-medium text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-12">
          "Think of your number. Make your guess. Read the clues. Outsmart your opponent."
        </p>

        {/* Futuristic 4-Digit Lock Display Interface */}
        <div className="max-w-3xl mx-auto glass-panel p-6 sm:p-10 rounded-3xl border-purplePrimary/40 relative group shadow-2xl">
          
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-purplePrimary/20">
            <div className="flex items-center gap-2">
              {isLocked ? (
                <Lock className="w-5 h-5 text-purplePrimary animate-pulse" />
              ) : (
                <Unlock className="w-5 h-5 text-cyanAccent animate-bounce" />
              )}
              <span className="font-orbitron text-xs sm:text-sm font-bold text-white tracking-wider">
                {isLocked ? 'SECURE 4-DIGIT VAULT' : 'VAULT UNLOCKED!'}
              </span>
            </div>

            <button
              onClick={rollNewNumber}
              disabled={isRolling}
              className="px-4 py-1.5 glass-panel hover:bg-purplePrimary/20 text-cyanAccent rounded-xl text-xs font-orbitron font-bold flex items-center gap-2 border border-cyanAccent/30 transition-all hover:scale-105"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRolling ? 'animate-spin' : ''}`} />
              RANDOMIZE SECRET
            </button>
          </div>

          {/* 4 Digit Displays */}
          <div className="grid grid-cols-4 gap-3 sm:gap-6 mb-8">
            {digits.map((digit, idx) => (
              <div key={idx} className="relative group/digit">
                <div className="absolute -inset-1 bg-gradient-to-b from-purplePrimary to-cyanAccent rounded-2xl blur opacity-30 group-hover/digit:opacity-75 transition-opacity" />
                <div className="relative bg-[#07060D] border-2 border-purplePrimary/60 rounded-2xl py-6 sm:py-8 flex flex-col items-center justify-center shadow-inner overflow-hidden">
                  
                  {/* Subtle Matrix Lines background */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purplePrimary/10 via-transparent to-transparent pointer-events-none" />

                  <span className={`font-orbitron font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white ${isRolling ? 'animate-pulse text-purpleSecondary' : 'text-glow-cyan'}`}>
                    {digit}
                  </span>

                  <span className="text-[10px] font-orbitron font-bold text-textSecondary uppercase mt-2">
                    POS {idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Clue Bar Preview */}
          <div className="p-4 bg-purplePrimary/10 rounded-2xl border border-purplePrimary/30 flex flex-wrap items-center justify-between gap-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purplePrimary/20 flex items-center justify-center text-cyanAccent">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-orbitron font-bold text-white block">INTELLIGENT FEEDBACK ENGINE</span>
                <span className="text-xs text-textSecondary">Every guess outputs exact Bull & Cow position clues.</span>
              </div>
            </div>

            <button
              onClick={() => setIsLocked(!isLocked)}
              className="px-4 py-2 bg-gradient-to-r from-purplePrimary to-cyanAccent text-white rounded-xl text-xs font-orbitron font-bold tracking-wider uppercase hover:opacity-90 transition-opacity"
            >
              {isLocked ? 'SIMULATE UNLOCK' : 'RELOCK VAULT'}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
