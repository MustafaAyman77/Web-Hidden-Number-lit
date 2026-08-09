import React, { useState } from 'react';
import { Maximize2, Sparkles, ChevronLeft, ChevronRight, X, Eye } from 'lucide-react';
import { Screenshot } from '../types';

export const GameplayShowcase: React.FC = () => {
  const screenshots: Screenshot[] = [
    {
      id: 'home',
      title: 'Home Screen',
      category: 'Main Menu',
      description: 'Futuristic AAA menu interface with level stats, player profile header, and quick match launchers.',
      image: '/screenshots/home.png',
    },
    {
      id: 'gameplay',
      title: 'Gameplay Match',
      category: 'In-Game',
      description: 'Strategic 4-digit guessing HUD with live Bull & Cow feedback clues and cyberpunk keypad.',
      image: '/screenshots/gameplay.png',
    },
    {
      id: 'online',
      title: 'Online Room',
      category: 'Multiplayer',
      description: 'Lobby with room codes, ready statuses, private security locks, and player avatars.',
      image: '/screenshots/online_room.png',
    },
    {
      id: 'local',
      title: 'Local Multiplayer',
      category: 'Connection',
      description: 'Radar discovery scanner for Wi-Fi Direct, Mobile Hotspot, and Bluetooth local battles.',
      image: '/screenshots/local_multiplayer.png',
    },
    {
      id: 'ai',
      title: 'AI Challenge Mode',
      category: 'Solo Play',
      description: 'Selection HUD featuring Easy, Normal, Hard, and Elite AI strategic algorithms.',
      image: '/screenshots/ai_mode.png',
    },
    {
      id: 'results',
      title: 'Match Results',
      category: 'Victory Screen',
      description: 'Post-match victory screen showing rating rank, attempts breakdown, and XP level progression.',
      image: '/screenshots/results.png',
    },
    {
      id: 'stats',
      title: 'Player Statistics',
      category: 'Profile Dashboard',
      description: 'Detailed analytics tracking win rate, average attempt score, achievements, and career rank.',
      image: '/screenshots/statistics.png',
    },
  ];

  const [activeTab, setActiveTab] = useState('all');
  const [activeScreenshot, setActiveScreenshot] = useState<Screenshot | null>(null);

  const filteredScreenshots = activeTab === 'all'
    ? screenshots
    : screenshots.filter(s => s.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section id="gameplay-showcase" className="py-24 relative overflow-hidden bg-[#07060D]">
      {/* Glow effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purplePrimary/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-cyanAccent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-orbitron font-bold tracking-[0.3em] text-cyanAccent uppercase px-4 py-1.5 glass-panel rounded-full border border-cyanAccent/30 mb-4 inline-block">
            VISUAL SHOWCASE
          </span>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white tracking-wider uppercase mb-4">
            GAMEPLAY <span className="text-transparent bg-clip-text bg-gradient-to-r from-purplePrimary via-purpleSecondary to-cyanAccent text-glow-purple">SHOWCASE</span>
          </h2>
          <p className="text-textSecondary font-medium text-base sm:text-lg">
            Explore authentic screenshots directly from the mobile game interface. Every pixel engineered for maximum clarity, dark cyber luxury, and fast-paced competitive gameplay.
          </p>
        </div>

        {/* Tab Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {['all', 'Main Menu', 'In-Game', 'Multiplayer', 'Solo Play', 'Victory Screen', 'Profile Dashboard'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-orbitron font-bold uppercase transition-all duration-200 border ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-purplePrimary to-cyanAccent text-white border-cyanAccent shadow-neon-purple'
                  : 'glass-panel text-textSecondary hover:text-white border-purplePrimary/30 hover:border-purplePrimary'
              }`}
            >
              {tab === 'all' ? 'ALL SCREENSHOTS' : tab}
            </button>
          ))}
        </div>

        {/* Desktop Grid Showcase */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredScreenshots.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveScreenshot(item)}
              className="glass-panel rounded-3xl p-3 border-purplePrimary/30 hover:border-cyanAccent transition-all duration-300 hover:-translate-y-2 group cursor-pointer shadow-xl flex flex-col justify-between"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-black mb-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                
                {/* Expand Overlay Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-xs">
                  <div className="p-3 rounded-full bg-purplePrimary text-white shadow-neon-purple">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-purplePrimary/40 text-[10px] font-orbitron font-bold text-cyanAccent uppercase">
                  {item.category}
                </div>
              </div>

              <div className="px-2 pb-2">
                <h3 className="font-orbitron font-bold text-base text-white group-hover:text-cyanAccent transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-textSecondary line-clamp-2 mt-1 font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Swipe Carousel */}
        <div className="sm:hidden flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory scrollbar-none">
          {filteredScreenshots.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveScreenshot(item)}
              className="snap-center shrink-0 w-[260px] glass-panel rounded-3xl p-3 border-purplePrimary/30"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[9/16] bg-black mb-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 text-[9px] font-orbitron font-bold text-cyanAccent">
                  {item.category}
                </div>
              </div>
              <h3 className="font-orbitron font-bold text-sm text-white">{item.title}</h3>
              <p className="text-[11px] text-textSecondary line-clamp-2 mt-0.5">{item.description}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Screenshot Zoom Modal */}
      {activeScreenshot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-lg w-full glass-panel p-4 rounded-3xl border-purplePrimary/60 max-h-[90vh] flex flex-col overflow-y-auto">
            
            <button
              onClick={() => setActiveScreenshot(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-purplePrimary/20 text-white hover:bg-purplePrimary transition-colors z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="rounded-2xl overflow-hidden aspect-[9/16] bg-black mb-4">
              <img
                src={activeScreenshot.image}
                alt={activeScreenshot.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="px-2">
              <span className="text-xs font-orbitron font-bold text-cyanAccent uppercase tracking-widest block mb-1">
                {activeScreenshot.category}
              </span>
              <h3 className="font-orbitron font-extrabold text-xl text-white mb-2">
                {activeScreenshot.title}
              </h3>
              <p className="text-sm text-textSecondary leading-relaxed">
                {activeScreenshot.description}
              </p>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
