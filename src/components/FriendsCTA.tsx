import React, { useState } from 'react';
import { Users, Copy, Check, Play, Share2, Sparkles, Shield, Lock } from 'lucide-react';

interface FriendsCTAProps {
  onOpenPlayModal: () => void;
}

export const FriendsCTA: React.FC = ({ onOpenPlayModal }) => {
  const [roomCode, setRoomCode] = useState('HN-8942');
  const [copied, setCopied] = useState(false);

  const generateNewRoomCode = () => {
    const randomCode = 'HN-' + Math.floor(1000 + Math.random() * 9000);
    setRoomCode(randomCode);
    setCopied(false);
  };

  const copyRoomCode = () => {
    navigator.clipboard.writeText(roomCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const roomPlayers = [
    { name: 'Cyber_Master', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80', status: 'HOST' },
    { name: 'Shadow_Guess', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80', status: 'READY' },
    { name: 'Neo_Hunter', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80', status: 'READY' },
    { name: 'Vortex_4', avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&auto=format&fit=crop&q=80', status: 'JOINING...' },
  ];

  return (
    <section id="friends" className="py-24 relative overflow-hidden bg-darkBg/90 border-t border-purplePrimary/20">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purplePrimary/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-orbitron font-bold tracking-[0.3em] text-cyanAccent uppercase px-4 py-1.5 glass-panel rounded-full border border-cyanAccent/30 mb-4 inline-block">
            MULTIPLAYER LOBBY
          </span>
          <h2 className="font-orbitron font-black text-3xl sm:text-5xl text-white tracking-wider uppercase mb-4">
            PLAY WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-purplePrimary via-purpleSecondary to-cyanAccent text-glow-purple">YOUR FRIENDS</span>
          </h2>
          <p className="text-textSecondary font-medium text-base sm:text-lg">
            "Create a room. Share the code. Start the challenge."
          </p>
        </div>

        {/* Connected Player Avatars around Glowing Game Room Card */}
        <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border-purplePrimary/50 shadow-2xl relative overflow-hidden text-center">
          
          {/* Room Code Share Banner */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 p-3 bg-[#07060D] rounded-2xl border border-purplePrimary/40 mb-10">
            <span className="text-xs font-orbitron text-textSecondary uppercase font-medium pl-2">
              LOBBY ROOM CODE:
            </span>
            <span className="font-orbitron font-black text-xl text-cyanAccent text-glow-cyan tracking-wider px-3 py-1 bg-purplePrimary/20 rounded-xl border border-purplePrimary/50">
              {roomCode}
            </span>
            <button
              onClick={copyRoomCode}
              className="px-4 py-2 bg-purplePrimary/30 hover:bg-purplePrimary text-white rounded-xl text-xs font-orbitron font-bold flex items-center gap-1.5 transition-colors border border-purplePrimary/50"
            >
              {copied ? <Check className="w-4 h-4 text-cyanAccent" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'COPIED!' : 'COPY CODE'}</span>
            </button>
          </div>

          {/* Connected Avatars Grid Ring */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
            {roomPlayers.map((player, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="relative mb-3">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-purplePrimary to-cyanAccent rounded-full blur opacity-50 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={player.avatar}
                    alt={player.name}
                    className="relative w-16 h-16 rounded-full object-cover border-2 border-cyanAccent shadow-lg"
                  />
                  <span className={`absolute -bottom-1 -right-1 px-2 py-0.5 rounded-full text-[9px] font-orbitron font-extrabold ${
                    player.status === 'HOST' ? 'bg-purplePrimary text-white' : player.status === 'READY' ? 'bg-cyanAccent text-black' : 'bg-gray-800 text-textSecondary'
                  }`}>
                    {player.status}
                  </span>
                </div>
                <span className="font-orbitron font-bold text-xs text-white group-hover:text-cyanAccent transition-colors">
                  {player.name}
                </span>
              </div>
            ))}
          </div>

          {/* START A GAME CTA */}
          <button
            onClick={onOpenPlayModal}
            className="px-10 py-4 bg-gradient-to-r from-purplePrimary via-purpleSecondary to-cyanAccent font-orbitron font-black text-sm tracking-widest uppercase text-white rounded-2xl shadow-neon-purple hover:scale-105 active:scale-95 transition-all duration-200 inline-flex items-center gap-3"
          >
            <Play className="w-5 h-5 fill-white text-white" />
            <span>START A GAME</span>
          </button>

        </div>

      </div>
    </section>
  );
};
