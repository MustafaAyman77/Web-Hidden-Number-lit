import React from 'react';
import { Shield, Sparkles, MessageSquare, Twitter, Youtube, Instagram, Github, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050409] border-t border-purplePrimary/20 pt-16 pb-12 relative overflow-hidden text-textSecondary">
      {/* Glow Effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-purplePrimary/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-purplePrimary/20">
          
          {/* Logo & Tagline Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purplePrimary to-cyanAccent p-[1.5px]">
                <div className="w-full h-full bg-[#07060D] rounded-[10px] flex items-center justify-center">
                  <span className="font-orbitron font-black text-base text-cyanAccent">HN</span>
                </div>
              </div>
              <span className="font-orbitron font-extrabold text-2xl text-white tracking-wider">
                HIDDEN <span className="text-cyanAccent">NUMBER</span>
              </span>
            </div>

            <p className="font-orbitron font-bold text-xs tracking-[0.25em] text-cyanAccent uppercase mb-4">
              THINK. GUESS. WIN.
            </p>

            <p className="text-xs text-textSecondary max-w-sm leading-relaxed mb-6 font-medium">
              The premier futuristic number deduction mobile game. Challenge your mind, calculate positional clues, and rise through the global ranks.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { name: 'Discord', icon: MessageSquare, href: '#discord' },
                { name: 'Twitter', icon: Twitter, href: '#twitter' },
                { name: 'YouTube', icon: Youtube, href: '#youtube' },
                { name: 'Instagram', icon: Instagram, href: '#instagram' },
                { name: 'GitHub', icon: Github, href: '#github' },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="p-2.5 rounded-xl glass-panel border-purplePrimary/30 hover:border-cyanAccent text-textSecondary hover:text-cyanAccent hover:bg-purplePrimary/20 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="font-orbitron font-bold text-sm text-white uppercase tracking-wider mb-2">
              NAVIGATION
            </h4>
            <a href="#hero" className="text-xs font-semibold hover:text-cyanAccent transition-colors">Home</a>
            <a href="#game-intro" className="text-xs font-semibold hover:text-cyanAccent transition-colors">Game</a>
            <a href="#game-modes" className="text-xs font-semibold hover:text-cyanAccent transition-colors">Game Modes</a>
            <a href="#features" className="text-xs font-semibold hover:text-cyanAccent transition-colors">Features</a>
            <a href="#how-it-works" className="text-xs font-semibold hover:text-cyanAccent transition-colors">How It Works</a>
            <a href="#download" className="text-xs font-semibold hover:text-cyanAccent transition-colors">Download</a>
          </div>

          {/* Legal & Policy Column */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="font-orbitron font-bold text-sm text-white uppercase tracking-wider mb-2">
              LEGAL & SUPPORT
            </h4>
            <a href="#privacy" className="text-xs font-semibold hover:text-cyanAccent transition-colors">Privacy Policy</a>
            <a href="#terms" className="text-xs font-semibold hover:text-cyanAccent transition-colors">Terms of Service</a>
            <a href="#contact" className="text-xs font-semibold hover:text-cyanAccent transition-colors">Contact Support</a>
            <a href="#security" className="text-xs font-semibold hover:text-cyanAccent transition-colors">Security & Fair Play</a>

            <div className="mt-4 p-3 rounded-xl bg-purplePrimary/10 border border-purplePrimary/30 text-[11px]">
              <span className="font-orbitron font-bold text-cyanAccent block mb-0.5">GAME IDENTITY GUARANTEE</span>
              <span>Authentic 4-digit deduction gameplay. No fake mechanics. Built for pure competition.</span>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span>© 2026 Hidden Number. All rights reserved.</span>
          <span className="font-orbitron text-[10px] text-textSecondary uppercase">
            DESIGNED WITH AAA CYBER LUXURY AESTHETIC
          </span>
        </div>

      </div>
    </footer>
  );
};
