import React from 'react';
import { Trophy, Target, Zap, Activity, BarChart2, Hash, Flame } from 'lucide-react';

export const Statistics: React.FC = () => {
  const stats = [
    { label: 'Games Played', value: '142', icon: Activity, change: '+18 this week', color: 'text-purplePrimary' },
    { label: 'Victories', value: '111', icon: Trophy, change: '78.2% Win Rate', color: 'text-cyanAccent' },
    { label: 'Win Rate', value: '78.2%', icon: Target, isRadial: true, percentage: 78.2, color: 'text-purpleSecondary' },
    { label: 'Best Score', value: '2 Attempts', icon: Flame, change: 'Personal Record', color: 'text-cyanAccent' },
    { label: 'Avg. Attempts', value: '4.1', icon: Hash, change: 'Optimal Deduction', color: 'text-purplePrimary' },
    { label: 'Current Rank', value: '#42 Global', icon: Zap, change: 'Top 0.5% Players', color: 'text-purpleSecondary' },
  ];

  return (
    <section id="statistics" className="py-24 relative overflow-hidden bg-darkBg/90 border-t border-purplePrimary/20">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purplePrimary/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-orbitron font-bold tracking-[0.3em] text-cyanAccent uppercase px-4 py-1.5 glass-panel rounded-full border border-cyanAccent/30 mb-4 inline-block">
            PERFORMANCE METRICS
          </span>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white tracking-wider uppercase mb-4">
            GAMEPLAY <span className="text-transparent bg-clip-text bg-gradient-to-r from-purplePrimary via-purpleSecondary to-cyanAccent text-glow-purple">STATISTICS</span>
          </h2>
          <p className="text-textSecondary font-medium text-base sm:text-lg">
            Track your strategic mastery in real time. Analyze guess accuracy, match history, and global competitive standing.
          </p>
        </div>

        {/* Glowing Statistics Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-3xl border-purplePrimary/40 hover:border-cyanAccent transition-all duration-300 hover:-translate-y-1 group shadow-2xl relative overflow-hidden flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-orbitron font-bold text-textSecondary uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <div className={`p-2.5 rounded-xl bg-purplePrimary/15 border border-purplePrimary/30 ${stat.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="my-2">
                  {stat.isRadial ? (
                    <div className="flex items-center gap-4">
                      {/* Circular Progress SVG Indicator */}
                      <div className="relative w-16 h-16 flex items-center justify-center">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                          <path
                            className="text-gray-800"
                            strokeWidth="3.5"
                            stroke="currentColor"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <path
                            className="text-cyanAccent transition-all duration-1000 stroke-current"
                            strokeDasharray={`${stat.percentage}, 100`}
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                        </svg>
                        <span className="absolute text-xs font-orbitron font-bold text-white">
                          78%
                        </span>
                      </div>
                      <div>
                        <span className="font-orbitron font-black text-3xl sm:text-4xl text-white text-glow-cyan block">
                          {stat.value}
                        </span>
                        <span className="text-[11px] text-cyanAccent font-orbitron font-semibold">
                          HIGH ACCURACY
                        </span>
                      </div>
                    </div>
                  ) : (
                    <span className="font-orbitron font-black text-3xl sm:text-4xl text-white text-glow-purple block">
                      {stat.value}
                    </span>
                  )}
                </div>

                <div className="pt-3 border-t border-purplePrimary/20 flex items-center justify-between text-xs text-textSecondary font-medium">
                  <span>{stat.change}</span>
                  <span className="text-cyanAccent font-orbitron font-bold">LIVE METRIC</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Futuristic Chart Graphic Mockup */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border-purplePrimary/40 relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-orbitron font-bold text-lg text-white uppercase flex items-center gap-2">
                <BarChart2 className="w-5 h-5 text-cyanAccent" />
                GUESS DISTRIBUTION CURVE
              </h3>
              <span className="text-xs text-textSecondary">Average attempts needed to crack the 4-digit vault code over last 50 matches.</span>
            </div>
            <span className="px-3 py-1 rounded-xl text-xs font-orbitron font-bold bg-purplePrimary/20 text-purpleSecondary border border-purplePrimary/40">
              OPTIMAL GUESS: 4 ATTEMPTS
            </span>
          </div>

          <div className="grid grid-cols-6 gap-2 sm:gap-4 items-end h-36 pt-4 border-b border-purplePrimary/20 pb-2">
            {[
              { attempts: '1', percent: '5%' },
              { attempts: '2', percent: '18%' },
              { attempts: '3', percent: '32%' },
              { attempts: '4', percent: '28%' },
              { attempts: '5', percent: '12%' },
              { attempts: '6+', percent: '5%' },
            ].map((bar, i) => (
              <div key={i} className="flex flex-col items-center gap-2 h-full justify-end group">
                <span className="text-[10px] font-orbitron text-cyanAccent opacity-0 group-hover:opacity-100 transition-opacity">
                  {bar.percent}
                </span>
                <div
                  className="w-full bg-gradient-to-t from-purplePrimary via-purpleSecondary to-cyanAccent rounded-t-xl transition-all duration-500 hover:brightness-125 shadow-neon-purple"
                  style={{ height: bar.percent }}
                />
                <span className="text-xs font-orbitron font-bold text-textSecondary">
                  {bar.attempts} {bar.attempts === '1' ? 'Guess' : 'Guesses'}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
