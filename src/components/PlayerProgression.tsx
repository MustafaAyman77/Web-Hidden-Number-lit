import React, { useState } from 'react';
import { Trophy, Award, Shield, Zap, Sparkles, CheckCircle2, ChevronRight, User, Star } from 'lucide-react';
import { PlayerProfile } from '../types';

export const PlayerProgression: React.FC = () => {
  const profile: PlayerProfile = {
    username: 'CYBER_STRATEGIST',
    avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&auto=format&fit=crop&q=80',
    level: 24,
    xp: 18450,
    maxXp: 20000,
    victories: 111,
    rank: 'Grandmaster Tier I',
    winRate: 78.2,
    bestScore: 2,
    avgAttempts: 4.1,
    gamesPlayed: 142,
    achievements: [
      { id: '1', title: 'Master Guesser', icon: '🎯', unlocked: true },
      { id: '2', title: '10 Win Streak', icon: '🔥', unlocked: true },
      { id: '3', title: 'AI Slayer', icon: '🤖', unlocked: true },
      { id: '4', title: 'Room Host Pro', icon: '👑', unlocked: true },
      { id: '5', title: 'Sub-3 Attempt Victory', icon: '⚡', unlocked: true },
      { id: '6', title: 'Flawless Deduction', icon: '💎', unlocked: false },
    ],
  };

  const xpPercentage = Math.round((profile.xp / profile.maxXp) * 100);

  return (
    <section id="progression" className="py-24 relative overflow-hidden bg-[#07060D]">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purpleSecondary/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyanAccent/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-orbitron font-bold tracking-[0.3em] text-cyanAccent uppercase px-4 py-1.5 glass-panel rounded-full border border-cyanAccent/30 mb-4 inline-block">
            CAREER & RANKING
          </span>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white tracking-wider uppercase mb-4">
            PLAY. IMPROVE. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purplePrimary via-purpleSecondary to-cyanAccent text-glow-purple">LEVEL UP.</span>
          </h2>
          <p className="text-textSecondary font-medium text-base sm:text-lg">
            "Every match helps you improve, climb the ranks, and become a better strategist."
          </p>
        </div>

        {/* Realistic Player Profile Card Showcase */}
        <div className="max-w-4xl mx-auto glass-panel p-6 sm:p-10 rounded-3xl border-purplePrimary/50 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purplePrimary/20 via-transparent to-transparent pointer-events-none" />

          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pb-8 border-b border-purplePrimary/20">
            
            {/* Avatar with Glowing Border */}
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-purplePrimary via-cyanAccent to-purpleSecondary rounded-2xl blur opacity-75 animate-pulse" />
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-cyanAccent bg-black flex items-center justify-center">
                <img
                  src={profile.avatar}
                  alt={profile.username}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-lg bg-gradient-to-r from-purplePrimary to-cyanAccent text-[11px] font-orbitron font-extrabold text-white border border-black shadow">
                LVL {profile.level}
              </span>
            </div>

            {/* Username & Rank */}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-1">
                <h3 className="font-orbitron font-black text-2xl sm:text-3xl text-white tracking-wider">
                  {profile.username}
                </h3>
                <span className="px-3 py-1 rounded-full text-xs font-orbitron font-bold bg-cyanAccent/20 text-cyanAccent border border-cyanAccent/40 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-cyanAccent" />
                  {profile.rank}
                </span>
              </div>
              <span className="text-xs font-orbitron font-semibold text-textSecondary uppercase tracking-widest">
                SEASON 1 COMPETITOR • {profile.victories} VICTORIES
              </span>
            </div>

          </div>

          {/* Animated XP Progress Bar */}
          <div className="py-8 border-b border-purplePrimary/20">
            <div className="flex items-center justify-between text-xs font-orbitron font-bold mb-2">
              <span className="text-white flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-purpleSecondary animate-bounce" />
                EXPERIENCE PROGRESS
              </span>
              <span className="text-cyanAccent">
                {profile.xp.toLocaleString()} / {profile.maxXp.toLocaleString()} XP ({xpPercentage}%)
              </span>
            </div>

            <div className="w-full h-4 bg-[#07060D] rounded-full p-1 border border-purplePrimary/40 shadow-inner relative overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purplePrimary via-purpleSecondary to-cyanAccent rounded-full transition-all duration-1000 shadow-neon-purple"
                style={{ width: `${xpPercentage}%` }}
              />
            </div>
            <span className="text-[11px] text-textSecondary mt-2 block font-medium text-right">
              1,550 XP remaining to unlock Level 25 Strategic Avatar Badge
            </span>
          </div>

          {/* Achievements Grid */}
          <div className="pt-8">
            <h4 className="font-orbitron font-bold text-sm text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-cyanAccent" />
              UNLOCKED ACHIEVEMENTS ({profile.achievements.filter(a => a.unlocked).length} / {profile.achievements.length})
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {profile.achievements.map((ach) => (
                <div
                  key={ach.id}
                  className={`p-3 rounded-2xl border flex items-center gap-3 transition-all ${
                    ach.unlocked
                      ? 'bg-purplePrimary/15 border-purplePrimary/40 text-white'
                      : 'bg-black/40 border-gray-800 text-textSecondary opacity-50'
                  }`}
                >
                  <span className="text-2xl">{ach.icon}</span>
                  <div className="flex flex-col">
                    <span className="font-orbitron font-bold text-xs text-white line-clamp-1">{ach.title}</span>
                    <span className="text-[10px] text-cyanAccent font-orbitron">
                      {ach.unlocked ? 'UNLOCKED' : 'LOCKED'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
