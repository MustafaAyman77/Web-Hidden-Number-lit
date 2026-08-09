import React, { useState } from 'react';
import { Play, Compass, Smartphone, Lock, ShieldCheck, Sparkles, ChevronRight, Zap } from 'lucide-react';

interface HeroSectionProps {
  onOpenPlayModal: () => void;
  onOpenDownloadModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPlayModal, onOpenDownloadModal }) => {
  const [interactiveLockCode, setInteractiveLockCode] = useState(['7', '4', '9', '2']);
  const [activeDigitIndex, setActiveDigitIndex] = useState(0);

  const cycleDigit = (idx: number) => {
    setInteractiveLockCode((prev) => {
      const copy = [...prev];
      copy[idx] = String((parseInt(copy[idx], 10) + 1) % 10);
      return copy;
    });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden cyber-grid">
      {/* Cinematic Ambient Fog & Light Rays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[500px] bg-gradient-to-tr from-purplePrimary/30 via-purpleSecondary/20 to-cyanAccent/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyanAccent/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating 3D Cyber Lock Background Decor */}
      <div className="absolute top-20 left-10 hidden xl:flex flex-col items-center gap-2 opacity-30 animate-float pointer-events-none">
        <div className="p-4 rounded-2xl glass-panel border-purplePrimary/30 text-purplePrimary text-3xl font-orbitron font-bold">
          [ 4 ] [ 9 ] [ 2 ] [ 7 ]
        </div>
        <span className="text-xs text-textSecondary font-orbitron">DIGITAL LOCK MATRIX</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Text Column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Cyber Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-purplePrimary/40 mb-6 group cursor-pointer hover:border-cyanAccent/50 transition-colors"
                 onClick={onOpenPlayModal}>
              <span className="w-2 h-2 rounded-full bg-cyanAccent animate-ping" />
              <span className="text-xs font-orbitron font-bold text-cyanAccent tracking-widest uppercase">
                SEASON 1 ONLINE NOW
              </span>
              <span className="text-xs text-textSecondary">•</span>
              <span className="text-xs font-medium text-white group-hover:text-cyanAccent transition-colors flex items-center gap-1">
                TRY BROWSER DEMO <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>

            {/* Main Title: HIDDEN NUMBER */}
            <h1 className="font-orbitron font-black text-4xl sm:text-6xl xl:text-7xl tracking-wider text-white uppercase leading-none mb-4">
              HIDDEN <span className="text-transparent bg-clip-text bg-gradient-to-r from-purplePrimary via-purpleSecondary to-cyanAccent text-glow-purple">
                NUMBER
              </span>
            </h1>

            {/* Subtitle: THINK. GUESS. WIN. */}
            <div className="font-orbitron font-bold text-lg sm:text-2xl text-cyanAccent tracking-[0.25em] uppercase mb-6 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-cyanAccent/50 hidden sm:inline-block" />
              <span>THINK. GUESS. WIN.</span>
              <span className="h-[2px] w-8 bg-cyanAccent/50 hidden sm:inline-block" />
            </div>

            {/* Description */}
            <p className="text-textSecondary font-medium text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
              A strategic number-guessing game where every guess brings you closer to the hidden number. Outsmart players worldwide, challenge local friends, or test your logic against elite AI algorithms.
            </p>

            {/* Primary & Secondary Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenPlayModal}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purplePrimary via-purpleSecondary to-cyanAccent rounded-2xl font-orbitron font-bold text-sm tracking-wider uppercase text-white shadow-neon-purple hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 group"
              >
                <Play className="w-5 h-5 fill-white text-white group-hover:scale-110 transition-transform" />
                <span>PLAY NOW</span>
              </button>

              <a
                href="#game-intro"
                className="w-full sm:w-auto px-8 py-4 glass-panel border border-purplePrimary/50 rounded-2xl font-orbitron font-bold text-sm tracking-wider uppercase text-white hover:border-cyanAccent hover:text-cyanAccent hover:bg-purplePrimary/10 transition-all duration-200 flex items-center justify-center gap-2.5"
              >
                <Compass className="w-5 h-5 text-cyanAccent" />
                <span>DISCOVER THE GAME</span>
              </a>
            </div>

            {/* Store Download Buttons (Android & iOS) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 border-t border-purplePrimary/20 w-full">
              <span className="text-xs font-orbitron font-semibold text-textSecondary uppercase tracking-widest w-full sm:w-auto text-center sm:text-left mb-1 sm:mb-0">
                AVAILABLE ON:
              </span>
              
              <button
                onClick={onOpenDownloadModal}
                className="px-5 py-2.5 glass-panel border border-purplePrimary/30 rounded-xl hover:border-cyanAccent/60 hover:bg-purplePrimary/20 transition-all duration-200 flex items-center gap-3 group"
              >
                {/* Google Play Icon */}
                <svg className="w-6 h-6 text-white group-hover:text-cyanAccent transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="flex flex-col items-start text-left">
                  <span className="text-[10px] text-textSecondary uppercase font-medium">GET IT ON</span>
                  <span className="text-xs font-bold font-orbitron text-white group-hover:text-cyanAccent">Google Play</span>
                </div>
              </button>

              <button
                onClick={onOpenDownloadModal}
                className="px-5 py-2.5 glass-panel border border-purplePrimary/30 rounded-xl hover:border-cyanAccent/60 hover:bg-purplePrimary/20 transition-all duration-200 flex items-center gap-3 group"
              >
                {/* Apple App Store Icon */}
                <svg className="w-6 h-6 text-white group-hover:text-cyanAccent transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.09,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <div className="flex flex-col items-start text-left">
                  <span className="text-[10px] text-textSecondary uppercase font-medium">DOWNLOAD ON THE</span>
                  <span className="text-xs font-bold font-orbitron text-white group-hover:text-cyanAccent">App Store</span>
                </div>
              </button>
            </div>

          </div>

          {/* Smartphone 3D Mockup Column (Right side on Desktop, Below on Mobile) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] group">
              
              {/* Outer Glow Halo behind Phone */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-purplePrimary via-purpleSecondary to-cyanAccent rounded-[48px] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              
              {/* Interactive Phone Frame */}
              <div className="relative rounded-[40px] p-3 bg-gradient-to-b from-purplePrimary/40 via-darkBg to-purpleSecondary/30 border border-purplePrimary/50 shadow-2xl overflow-hidden backdrop-blur-md">
                
                {/* Phone Notch & Speaker */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-purplePrimary/60" />
                  <div className="w-10 h-1 rounded-full bg-gray-800" />
                </div>

                {/* Phone Screen Canvas showing generated UI screenshot */}
                <div className="relative rounded-[32px] overflow-hidden bg-[#07060D] aspect-[9/19] border border-purplePrimary/30 flex flex-col">
                  
                  {/* Generated Screenshot Image */}
                  <img
                    src="/screenshots/hero_mockup.png"
                    alt="Hidden Number Game Gameplay Mockup"
                    className="w-full h-full object-cover rounded-[32px]"
                  />

                  {/* Interactive Overlaid Digital Lock Selector */}
                  <div className="absolute bottom-4 left-3 right-3 glass-panel p-3 rounded-2xl border-purplePrimary/50 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[11px] font-orbitron text-cyanAccent">
                      <span className="flex items-center gap-1">
                        <Lock className="w-3 h-3" />
                        TAP TO CYCLE LOCK DIGITS:
                      </span>
                      <span className="text-white font-mono">{interactiveLockCode.join('')}</span>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                      {interactiveLockCode.map((digit, idx) => (
                        <button
                          key={idx}
                          onClick={() => cycleDigit(idx)}
                          className={`py-2 rounded-xl font-orbitron font-bold text-lg transition-all ${
                            activeDigitIndex === idx
                              ? 'bg-purplePrimary text-white shadow-neon-purple scale-105 border border-cyanAccent'
                              : 'bg-purplePrimary/20 text-cyanAccent border border-purplePrimary/30 hover:bg-purplePrimary/40'
                          }`}
                        >
                          {digit}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

              {/* Floating Floating Stat Badges around phone */}
              <div className="absolute -top-4 -right-4 glass-panel px-3.5 py-2 rounded-xl border-cyanAccent/40 flex items-center gap-2 shadow-lg animate-float">
                <Sparkles className="w-4 h-4 text-cyanAccent" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-textSecondary font-orbitron">ACCURACY</span>
                  <span className="text-xs font-bold text-white font-orbitron">98.4% CLUE</span>
                </div>
              </div>

              <div className="absolute bottom-12 -left-6 glass-panel px-3.5 py-2 rounded-xl border-purplePrimary/40 flex items-center gap-2 shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
                <Zap className="w-4 h-4 text-purplePrimary" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-textSecondary font-orbitron">MODE</span>
                  <span className="text-xs font-bold text-white font-orbitron">1v1 MULTIPLAYER</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
