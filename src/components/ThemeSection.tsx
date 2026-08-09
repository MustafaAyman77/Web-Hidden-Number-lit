import React, { useState } from 'react';
import { Sun, Moon, Sparkles, Check, Lock, Smartphone } from 'lucide-react';

export const ThemeSection: React.FC = () => {
  const [selectedTheme, setSelectedTheme] = useState<'dark' | 'light'>('dark');

  return (
    <section id="theme-switch" className="py-24 relative overflow-hidden bg-[#07060D]">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purplePrimary/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-orbitron font-bold tracking-[0.3em] text-cyanAccent uppercase px-4 py-1.5 glass-panel rounded-full border border-cyanAccent/30 mb-4 inline-block">
            VISUAL ADAPTABILITY
          </span>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white tracking-wider uppercase mb-4">
            DARK OR LIGHT. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purplePrimary via-purpleSecondary to-cyanAccent text-glow-purple">YOUR CHOICE.</span>
          </h2>
          <p className="text-textSecondary font-medium text-base sm:text-lg">
            Switch seamlessly between high-contrast Cyber Dark mode and ultra-clean Light Frost Glass theme without compromising the sleek visual identity of Hidden Number.
          </p>
        </div>

        {/* Interactive Theme Switcher Toggle Bar */}
        <div className="flex justify-center mb-12">
          <div className="p-2 glass-panel rounded-2xl border-purplePrimary/40 flex items-center gap-2 shadow-2xl">
            <button
              onClick={() => setSelectedTheme('dark')}
              className={`px-6 py-3 rounded-xl font-orbitron font-bold text-xs uppercase transition-all duration-300 flex items-center gap-2.5 ${
                selectedTheme === 'dark'
                  ? 'bg-gradient-to-r from-purplePrimary to-purpleSecondary text-white shadow-neon-purple scale-105'
                  : 'text-textSecondary hover:text-white'
              }`}
            >
              <Moon className="w-4 h-4 text-cyanAccent" />
              <span>DARK CYBER THEME</span>
            </button>

            <button
              onClick={() => setSelectedTheme('light')}
              className={`px-6 py-3 rounded-xl font-orbitron font-bold text-xs uppercase transition-all duration-300 flex items-center gap-2.5 ${
                selectedTheme === 'light'
                  ? 'bg-white text-purplePrimary shadow-lg scale-105'
                  : 'text-textSecondary hover:text-white'
              }`}
            >
              <Sun className="w-4 h-4 text-amber-500" />
              <span>LIGHT FROST THEME</span>
            </button>
          </div>
        </div>

        {/* Live Theme Preview Cards Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* DARK THEME PREVIEW CARD */}
          <div className={`p-8 rounded-3xl transition-all duration-500 border relative overflow-hidden flex flex-col justify-between ${
            selectedTheme === 'dark'
              ? 'bg-[#07060D] border-purplePrimary box-glow-purple scale-105 z-20'
              : 'bg-[#07060D]/60 border-purplePrimary/20 opacity-70'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purplePrimary/20 border border-purplePrimary/50 flex items-center justify-center text-purplePrimary">
                  <Moon className="w-5 h-5 text-cyanAccent" />
                </div>
                <div>
                  <h3 className="font-orbitron font-extrabold text-xl text-white uppercase">DARK CYBER MODE</h3>
                  <span className="text-xs text-cyanAccent font-orbitron font-semibold">BLACK + NEON PURPLE</span>
                </div>
              </div>
              {selectedTheme === 'dark' && (
                <span className="p-1.5 rounded-full bg-cyanAccent text-black">
                  <Check className="w-4 h-4" />
                </span>
              )}
            </div>

            {/* In-Game Lock UI Mockup in Dark Mode */}
            <div className="bg-[#07060D] p-5 rounded-2xl border border-purplePrimary/40 mb-6">
              <div className="flex justify-between items-center text-xs font-orbitron text-textSecondary mb-3">
                <span>SECRET VAULT #8942</span>
                <span className="text-cyanAccent font-bold">2 BULL / 1 COW</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {['8', '9', '4', '2'].map((digit, i) => (
                  <div key={i} className="py-3 bg-purplePrimary/20 border border-purplePrimary/50 rounded-xl text-center font-orbitron font-extrabold text-2xl text-white shadow-inner">
                    {digit}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-textSecondary text-xs leading-relaxed font-medium">
              Deep black background `#07060D`, vibrant neon purple `#8B5CF6`, electric violet accents, and cyber glass HUD elements designed for late-night gaming sessions.
            </p>
          </div>

          {/* LIGHT THEME PREVIEW CARD */}
          <div className={`p-8 rounded-3xl transition-all duration-500 border relative overflow-hidden flex flex-col justify-between ${
            selectedTheme === 'light'
              ? 'bg-[#F0EEF9] border-purplePrimary text-[#07060D] shadow-2xl scale-105 z-20'
              : 'bg-[#F0EEF9]/60 border-purplePrimary/20 text-[#07060D]/80 opacity-70'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purplePrimary/20 border border-purplePrimary/50 flex items-center justify-center text-purplePrimary">
                  <Sun className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-orbitron font-extrabold text-xl text-[#07060D] uppercase">LIGHT FROST MODE</h3>
                  <span className="text-xs text-purplePrimary font-orbitron font-semibold">WHITE + PURPLE GLASS</span>
                </div>
              </div>
              {selectedTheme === 'light' && (
                <span className="p-1.5 rounded-full bg-purplePrimary text-white">
                  <Check className="w-4 h-4" />
                </span>
              )}
            </div>

            {/* In-Game Lock UI Mockup in Light Mode */}
            <div className="bg-white/90 p-5 rounded-2xl border border-purplePrimary/30 mb-6 shadow-md">
              <div className="flex justify-between items-center text-xs font-orbitron text-purple-950 mb-3">
                <span>SECRET VAULT #8942</span>
                <span className="text-purplePrimary font-bold">2 BULL / 1 COW</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {['8', '9', '4', '2'].map((digit, i) => (
                  <div key={i} className="py-3 bg-purplePrimary/10 border border-purplePrimary/30 rounded-xl text-center font-orbitron font-extrabold text-2xl text-purplePrimary shadow-sm">
                    {digit}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-700 text-xs leading-relaxed font-medium">
              Frosted white background `#FAFAFC`, soft purple gradient panels, crisp dark typography, and luminous glass highlights perfect for daylight play.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
