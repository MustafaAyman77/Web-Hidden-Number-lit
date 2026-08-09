import React from 'react';
import { Lock, Sparkles, Download as DownloadIcon, Smartphone, ShieldCheck, CheckCircle } from 'lucide-react';

interface DownloadCTAProps {
  onOpenDownloadModal: () => void;
}

export const DownloadCTA: React.FC<DownloadCTAProps> = ({ onOpenDownloadModal }) => {
  return (
    <section id="download" className="py-28 relative overflow-hidden bg-[#07060D] border-t border-purplePrimary/30 cyber-grid">
      {/* Cinematic Giant Glowing Digital Lock Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-purplePrimary/25 via-purpleSecondary/20 to-cyanAccent/20 rounded-full blur-[160px] pointer-events-none" />
      
      {/* Giant Lock Graphic Background Layer */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
        <Lock className="w-[450px] h-[450px] text-purplePrimary" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Glowing Icon Header */}
        <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-purplePrimary/30 to-cyanAccent/30 border-2 border-cyanAccent/50 flex items-center justify-center text-cyanAccent shadow-neon-purple mb-8 animate-pulse-slow">
          <Lock className="w-10 h-10" />
        </div>

        {/* Heading: READY TO GUESS? */}
        <h2 className="font-orbitron font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-wider uppercase mb-4 leading-none">
          READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-purplePrimary via-purpleSecondary to-cyanAccent text-glow-purple">GUESS?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-textSecondary font-orbitron font-bold text-lg sm:text-2xl tracking-widest uppercase mb-10">
          "Your next challenge is waiting."
        </p>

        {/* Large Prominent Download Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 max-w-2xl mx-auto">
          
          {/* DOWNLOAD FOR ANDROID */}
          <button
            onClick={onOpenDownloadModal}
            className="w-full sm:w-1/2 py-5 px-6 bg-gradient-to-r from-purplePrimary to-purpleSecondary hover:from-purpleSecondary hover:to-purplePrimary rounded-2xl font-orbitron font-extrabold text-sm tracking-wider uppercase text-white shadow-neon-purple hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 group border border-purplePrimary/50"
          >
            <svg className="w-7 h-7 text-white group-hover:text-cyanAccent transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            <div className="flex flex-col items-start text-left">
              <span className="text-[10px] text-textSecondary uppercase font-medium">ANDROID APK / GOOGLE PLAY</span>
              <span className="text-sm font-bold font-orbitron text-white">DOWNLOAD FOR ANDROID</span>
            </div>
          </button>

          {/* DOWNLOAD FOR iOS */}
          <button
            onClick={onOpenDownloadModal}
            className="w-full sm:w-1/2 py-5 px-6 bg-gradient-to-r from-purpleSecondary via-purplePrimary to-cyanAccent hover:brightness-110 rounded-2xl font-orbitron font-extrabold text-sm tracking-wider uppercase text-white shadow-neon-cyan hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 group border border-cyanAccent/50"
          >
            <svg className="w-7 h-7 text-white group-hover:text-cyanAccent transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.09,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
            </svg>
            <div className="flex flex-col items-start text-left">
              <span className="text-[10px] text-textSecondary uppercase font-medium">APP STORE / TESTFLIGHT</span>
              <span className="text-sm font-bold font-orbitron text-white">DOWNLOAD FOR iOS</span>
            </div>
          </button>

        </div>

        {/* Security & Verification Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-textSecondary font-semibold">
          <span className="flex items-center gap-1.5 text-cyanAccent">
            <ShieldCheck className="w-4 h-4" /> 100% Virus & Malware Free
          </span>
          <span className="flex items-center gap-1.5 text-purpleSecondary">
            <CheckCircle className="w-4 h-4" /> Instant Fast Download
          </span>
          <span className="flex items-center gap-1.5 text-white">
            <Sparkles className="w-4 h-4 text-cyanAccent" /> Free To Play
          </span>
        </div>

      </div>
    </section>
  );
};
