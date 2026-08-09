import React, { useState } from 'react';
import { Globe, Wifi, Bot, Shield, ChevronRight, Zap, Users, Radio, Cpu } from 'lucide-react';

interface GameModesProps {
  onOpenPlayModal: () => void;
  onOpenDownloadModal: () => void;
}

export const GameModes: React.FC<GameModesProps> = ({ onOpenPlayModal, onOpenDownloadModal }) => {
  const [activeAiLevel, setActiveAiLevel] = useState<'Easy' | 'Normal' | 'Hard' | 'Elite'>('Hard');

  return (
    <section id="game-modes" className="py-24 relative overflow-hidden bg-[#07060D]">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purplePrimary/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyanAccent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-orbitron font-bold tracking-[0.3em] text-cyanAccent uppercase px-4 py-1.5 glass-panel rounded-full border border-cyanAccent/30 mb-4 inline-block">
            GAMEPLAY MODES
          </span>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white tracking-wider uppercase mb-4">
            CHOOSE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-purplePrimary via-purpleSecondary to-cyanAccent text-glow-purple">BATTLE</span>
          </h2>
          <p className="text-textSecondary font-medium text-base sm:text-lg">
            Whether you want to play remotely with global rivals, match locally with friends nearby, or hone your strategic skills against adaptive AI, Hidden Number has you covered.
          </p>
        </div>

        {/* 3 Interactive Glass Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* CARD 1: ONLINE MULTIPLAYER */}
          <div className="glass-panel p-8 rounded-3xl border-purplePrimary/40 hover:border-purplePrimary transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-purplePrimary/20 rounded-full blur-2xl group-hover:bg-purplePrimary/30 transition-all" />

            <div>
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purplePrimary/30 to-purpleSecondary/20 border border-purplePrimary/50 flex items-center justify-center text-purplePrimary group-hover:scale-110 group-hover:text-cyanAccent transition-all duration-300 mb-6 shadow-neon-purple">
                <Globe className="w-8 h-8 animate-pulse-slow" />
              </div>

              {/* Title & Badge */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-orbitron font-extrabold text-2xl text-white tracking-wider uppercase">
                  ONLINE
                </h3>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-orbitron font-bold bg-purplePrimary/20 text-purpleSecondary border border-purplePrimary/40">
                  GLOBAL 1v1
                </span>
              </div>

              {/* Description */}
              <p className="text-textSecondary text-sm sm:text-base leading-relaxed mb-6">
                "Create a private room or join your friends using a room code."
              </p>

              {/* Features List */}
              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2.5 text-xs text-textSecondary font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyanAccent" />
                  <span>Real-time cross-platform matchmaking</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-textSecondary font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-purplePrimary" />
                  <span>Custom private room password protection</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-textSecondary font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyanAccent" />
                  <span>In-game tactical emoji chat & history logs</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={onOpenPlayModal}
              className="w-full py-3.5 bg-gradient-to-r from-purplePrimary to-purpleSecondary font-orbitron font-bold text-xs tracking-wider uppercase text-white rounded-xl shadow-neon-purple hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
            >
              <span>PLAY ONLINE</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* CARD 2: LOCAL MULTIPLAYER */}
          <div className="glass-panel p-8 rounded-3xl border-purplePrimary/40 hover:border-cyanAccent transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-cyanAccent/15 rounded-full blur-2xl group-hover:bg-cyanAccent/25 transition-all" />

            <div>
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyanAccent/20 to-purplePrimary/20 border border-cyanAccent/40 flex items-center justify-center text-cyanAccent group-hover:scale-110 transition-all duration-300 mb-6 shadow-neon-cyan">
                <Wifi className="w-8 h-8" />
              </div>

              {/* Title & Badge */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-orbitron font-extrabold text-2xl text-white tracking-wider uppercase">
                  LOCAL PLAY
                </h3>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-orbitron font-bold bg-cyanAccent/20 text-cyanAccent border border-cyanAccent/40">
                  NO INTERNET NEEDED
                </span>
              </div>

              {/* Description */}
              <p className="text-textSecondary text-sm sm:text-base leading-relaxed mb-6">
                "Play with friends using supported local connection methods."
              </p>

              {/* Connection Badges Specified in Prompt */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1.5 rounded-xl text-xs font-orbitron font-semibold bg-purplePrimary/20 text-white border border-purplePrimary/40 flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-cyanAccent" /> Wi-Fi Direct
                </span>
                <span className="px-3 py-1.5 rounded-xl text-xs font-orbitron font-semibold bg-purplePrimary/20 text-white border border-purplePrimary/40 flex items-center gap-1.5">
                  <Wifi className="w-3.5 h-3.5 text-purpleSecondary" /> Hotspot
                </span>
                <span className="px-3 py-1.5 rounded-xl text-xs font-orbitron font-semibold bg-purplePrimary/20 text-white border border-purplePrimary/40 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-cyanAccent" /> Bluetooth
                </span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={onOpenDownloadModal}
              className="w-full py-3.5 bg-cyanAccent/10 border border-cyanAccent/50 font-orbitron font-bold text-xs tracking-wider uppercase text-cyanAccent hover:bg-cyanAccent hover:text-black rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>PLAY LOCAL</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* CARD 3: AI CHALLENGE */}
          <div className="glass-panel p-8 rounded-3xl border-purplePrimary/40 hover:border-purpleSecondary transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-purpleSecondary/20 rounded-full blur-2xl group-hover:bg-purpleSecondary/35 transition-all" />

            <div>
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purpleSecondary/30 to-purplePrimary/20 border border-purpleSecondary/50 flex items-center justify-center text-purpleSecondary group-hover:scale-110 group-hover:text-white transition-all duration-300 mb-6 shadow-neon-purple">
                <Bot className="w-8 h-8" />
              </div>

              {/* Title & Badge */}
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-orbitron font-extrabold text-2xl text-white tracking-wider uppercase">
                  AI CHALLENGE
                </h3>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-orbitron font-bold bg-purpleSecondary/20 text-purpleSecondary border border-purpleSecondary/40">
                  SOLO PRACTICE
                </span>
              </div>

              {/* Description */}
              <p className="text-textSecondary text-sm sm:text-base leading-relaxed mb-6">
                "Challenge the AI or let the AI attempt to discover your hidden number."
              </p>

              {/* Difficulty Display Badges Specified in Prompt */}
              <div className="mb-8">
                <span className="text-[11px] font-orbitron font-semibold text-textSecondary uppercase block mb-2">
                  SELECT DIFFICULTY TIER:
                </span>
                <div className="grid grid-cols-4 gap-1.5 p-1.5 glass-panel rounded-2xl border-purplePrimary/30">
                  {(['Easy', 'Normal', 'Hard', 'Elite'] as const).map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setActiveAiLevel(lvl)}
                      className={`py-1.5 text-xs font-orbitron font-bold rounded-xl transition-all ${
                        activeAiLevel === lvl
                          ? 'bg-gradient-to-r from-purplePrimary to-cyanAccent text-white shadow-sm'
                          : 'text-textSecondary hover:text-white hover:bg-purplePrimary/10'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={onOpenPlayModal}
              className="w-full py-3.5 bg-gradient-to-r from-purpleSecondary via-purplePrimary to-cyanAccent font-orbitron font-bold text-xs tracking-wider uppercase text-white rounded-xl shadow-neon-purple hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
            >
              <span>CHALLENGE AI ({activeAiLevel})</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
