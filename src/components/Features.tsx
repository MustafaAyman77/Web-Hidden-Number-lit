import React from 'react';
import { Target, Users, Globe, Bot, ShieldAlert, Sparkles, Award } from 'lucide-react';

export const Features: React.FC = () => {
  const featureList = [
    {
      id: 'strategy',
      title: 'STRATEGY',
      quote: '"Every guess matters."',
      description: 'Deduce number sequences using real-time Bull and Cow positional feedback. Every turn tests your logical depth and tactical calculation.',
      icon: Target,
      color: 'text-purplePrimary',
      bgGradient: 'from-purplePrimary/20 to-purpleSecondary/10',
      borderColor: 'border-purplePrimary/40',
    },
    {
      id: 'multiplayer',
      title: 'MULTIPLAYER',
      quote: '"Challenge your friends."',
      description: 'Engage in fast-paced 1v1 tactical face-offs via Wi-Fi Direct, Mobile Hotspot, or Bluetooth without requiring an internet connection.',
      icon: Users,
      color: 'text-cyanAccent',
      bgGradient: 'from-cyanAccent/20 to-purplePrimary/10',
      borderColor: 'border-cyanAccent/40',
    },
    {
      id: 'online',
      title: 'ONLINE',
      quote: '"Create private rooms and play remotely."',
      description: 'Host private rooms protected by custom passcodes or join public lobbies to climb global leaderboard rankings.',
      icon: Globe,
      color: 'text-purpleSecondary',
      bgGradient: 'from-purpleSecondary/20 to-purplePrimary/10',
      borderColor: 'border-purpleSecondary/40',
    },
    {
      id: 'ai',
      title: 'AI',
      quote: '"Test your strategy against intelligent opponents."',
      description: 'Challenge 4 difficulty tiers of neural AI algorithms — from casual Easy warmups to ruthless Elite difficulty engines.',
      icon: Bot,
      color: 'text-cyanAccent',
      bgGradient: 'from-cyanAccent/20 to-purpleSecondary/10',
      borderColor: 'border-cyanAccent/40',
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-darkBg/90 border-t border-purplePrimary/20">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purplePrimary/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-orbitron font-bold tracking-[0.3em] text-cyanAccent uppercase px-4 py-1.5 glass-panel rounded-full border border-cyanAccent/30 mb-4 inline-block">
            GAME ENGINE HIGHLIGHTS
          </span>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white tracking-wider uppercase mb-4">
            BUILT FOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-purplePrimary via-purpleSecondary to-cyanAccent text-glow-purple">COMPETITION</span>
          </h2>
          <p className="text-textSecondary font-medium text-base sm:text-lg">
            Designed for gamers who crave deep logical strategy, clean zero-lag performance, and competitive brain teasers.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featureList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`glass-panel p-8 rounded-3xl border ${item.borderColor} hover:border-cyanAccent transition-all duration-300 hover:-translate-y-1 group shadow-2xl relative overflow-hidden flex flex-col justify-between`}
              >
                {/* Background Gradient Blob */}
                <div className={`absolute -right-12 -bottom-12 w-48 h-48 bg-gradient-to-br ${item.bgGradient} rounded-full blur-3xl group-hover:scale-125 transition-transform duration-500 pointer-events-none`} />

                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-[#07060D] border ${item.borderColor} flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform shadow-inner`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-orbitron font-extrabold text-2xl text-white tracking-wider uppercase">
                        {item.title}
                      </h3>
                      <p className="text-xs font-orbitron font-bold text-cyanAccent">
                        {item.quote}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-textSecondary text-sm sm:text-base leading-relaxed font-medium mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-purplePrimary/20 flex items-center justify-between text-xs font-orbitron font-semibold text-textSecondary">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyanAccent" />
                    PURE LOGIC ENGINE
                  </span>
                  <span className="text-cyanAccent uppercase">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
