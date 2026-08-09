import React from 'react';
import { KeyRound, Target, CheckCircle2, Lock, Sparkles, ChevronRight, Zap } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-darkBg/90 border-t border-purplePrimary/20">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purplePrimary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-orbitron font-bold tracking-[0.3em] text-cyanAccent uppercase px-4 py-1.5 glass-panel rounded-full border border-cyanAccent/30 mb-4 inline-block">
            TACTICAL PIPELINE
          </span>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white tracking-wider uppercase mb-4">
            HOW IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purplePrimary via-purpleSecondary to-cyanAccent text-glow-purple">WORKS</span>
          </h2>
          <p className="text-textSecondary font-medium text-base sm:text-lg">
            Master the core mechanics in three simple steps. Outsmart your opponents using mathematical logic, deduction, and speed.
          </p>
        </div>

        {/* 3 Steps Pipeline Container with Glowing Line */}
        <div className="relative">
          
          {/* Glowing Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-[3px] bg-gradient-to-r from-purplePrimary via-cyanAccent to-purpleSecondary -translate-y-1/2 z-0 shadow-neon-purple" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            
            {/* STEP 01: THINK */}
            <div className="glass-panel p-8 rounded-3xl border-purplePrimary/40 relative group hover:border-purplePrimary transition-all duration-300 hover:-translate-y-2 shadow-2xl flex flex-col justify-between">
              
              {/* Step Badge */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1 rounded-xl font-orbitron font-extrabold text-xs bg-purplePrimary/20 text-cyanAccent border border-cyanAccent/40">
                    STEP 01
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-purplePrimary/20 border border-purplePrimary/40 flex items-center justify-center text-purplePrimary group-hover:scale-110 transition-transform">
                    <KeyRound className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="font-orbitron font-extrabold text-2xl text-white tracking-wider uppercase mb-2">
                  THINK
                </h3>

                <p className="text-textSecondary text-sm sm:text-base mb-6 font-medium">
                  "Choose your secret number."
                </p>

                {/* Animated Futuristic Number Lock Graphic */}
                <div className="bg-[#07060D] p-5 rounded-2xl border border-purplePrimary/30 flex items-center justify-center gap-2 relative overflow-hidden group-hover:border-cyanAccent/50 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-r from-purplePrimary/10 to-transparent pointer-events-none" />
                  
                  {['7', '4', '9', '2'].map((digit, i) => (
                    <div key={i} className="w-12 h-14 bg-purplePrimary/10 border border-purplePrimary/50 rounded-xl flex flex-col items-center justify-center font-orbitron font-bold text-2xl text-white group-hover:border-cyanAccent group-hover:text-cyanAccent transition-all shadow-inner">
                      <span>{digit}</span>
                      <span className="text-[8px] text-textSecondary font-mono uppercase">SECRET</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-purplePrimary/20 flex items-center gap-2 text-xs text-textSecondary font-medium">
                <Lock className="w-3.5 h-3.5 text-cyanAccent" />
                <span>Keep your 4 digits encrypted from the rival</span>
              </div>
            </div>

            {/* STEP 02: GUESS */}
            <div className="glass-panel p-8 rounded-3xl border-purplePrimary/40 relative group hover:border-cyanAccent transition-all duration-300 hover:-translate-y-2 shadow-2xl flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1 rounded-xl font-orbitron font-extrabold text-xs bg-cyanAccent/20 text-cyanAccent border border-cyanAccent/40">
                    STEP 02
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-cyanAccent/20 border border-cyanAccent/40 flex items-center justify-center text-cyanAccent group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="font-orbitron font-extrabold text-2xl text-white tracking-wider uppercase mb-2">
                  GUESS
                </h3>

                <p className="text-textSecondary text-sm sm:text-base mb-6 font-medium">
                  "Make your strategic guess."
                </p>

                {/* 4-digit guessing interface graphic */}
                <div className="bg-[#07060D] p-4 rounded-2xl border border-purplePrimary/30 flex flex-col gap-2 relative overflow-hidden">
                  <div className="flex items-center justify-between text-[11px] font-orbitron text-textSecondary">
                    <span>ATTEMPT #03</span>
                    <span className="text-cyanAccent font-bold">2 BULL / 1 COW</span>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {['7', '1', '9', '5'].map((digit, i) => (
                      <div key={i} className="py-2.5 bg-purplePrimary/20 border border-purplePrimary/40 rounded-xl text-center font-orbitron font-bold text-xl text-white">
                        {digit}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-purplePrimary/20 flex items-center gap-2 text-xs text-textSecondary font-medium">
                <Zap className="w-3.5 h-3.5 text-purpleSecondary" />
                <span>Analyse position feedback on every attempt</span>
              </div>
            </div>

            {/* STEP 03: DISCOVER */}
            <div className="glass-panel p-8 rounded-3xl border-purplePrimary/40 relative group hover:border-purpleSecondary transition-all duration-300 hover:-translate-y-2 shadow-2xl flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3.5 py-1 rounded-xl font-orbitron font-extrabold text-xs bg-purpleSecondary/20 text-purpleSecondary border border-purpleSecondary/40">
                    STEP 03
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-purpleSecondary/20 border border-purpleSecondary/40 flex items-center justify-center text-purpleSecondary group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="font-orbitron font-extrabold text-2xl text-white tracking-wider uppercase mb-2">
                  DISCOVER
                </h3>

                <p className="text-textSecondary text-sm sm:text-base mb-6 font-medium">
                  "Use the clues and find the hidden number."
                </p>

                {/* Dramatic Unlock Animation Graphic */}
                <div className="bg-[#07060D] p-5 rounded-2xl border border-cyanAccent/60 flex flex-col items-center justify-center gap-2 relative overflow-hidden box-glow-cyan">
                  <div className="flex items-center gap-2 text-cyanAccent font-orbitron font-extrabold text-2xl animate-pulse">
                    <Sparkles className="w-5 h-5" />
                    <span>UNLOCKED: 7 4 9 2</span>
                  </div>
                  <span className="text-[10px] font-orbitron font-bold text-white bg-cyanAccent/20 px-3 py-1 rounded-full border border-cyanAccent/40">
                    VICTORY MATCH CLEAR!
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-purplePrimary/20 flex items-center gap-2 text-xs text-textSecondary font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyanAccent" />
                <span>Climb ranks and earn XP bonuses</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
