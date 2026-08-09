import React, { useState, useEffect } from 'react';
import { Menu, X, Play, Shield, Gamepad2, Sparkles, Download as DownloadIcon } from 'lucide-react';

interface NavbarProps {
  onOpenPlayModal: () => void;
  onOpenDownloadModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPlayModal, onOpenDownloadModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Game', href: '#game-intro' },
    { name: 'Game Modes', href: '#game-modes' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Progression', href: '#progression' },
    { name: 'Download', href: '#download' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <nav
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'glass-panel-glow border-purplePrimary/40 shadow-2xl bg-[#07060D]/85 backdrop-blur-xl py-3 px-5'
            : 'glass-panel border-purplePrimary/20 py-4 px-6 bg-[#07060D]/60'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Left: Hidden Number Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-purplePrimary to-cyanAccent p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#07060D] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <span className="font-orbitron font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purplePrimary to-cyanAccent group-hover:text-cyanAccent transition-colors">
                  HN
                </span>
                <div className="absolute inset-0 bg-purplePrimary/10 group-hover:bg-cyanAccent/10 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-orbitron font-extrabold text-lg sm:text-xl tracking-wider text-white group-hover:text-purplePrimary transition-colors flex items-center gap-1.5">
                HIDDEN <span className="text-cyanAccent">NUMBER</span>
              </span>
              <span className="text-[10px] tracking-widest text-textSecondary uppercase font-medium">
                THINK. GUESS. WIN.
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-semibold text-textSecondary hover:text-white hover:bg-purplePrimary/10 rounded-lg transition-all duration-200 border border-transparent hover:border-purplePrimary/20"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: PLAY NOW CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenDownloadModal}
              className="px-4 py-2 text-xs font-bold font-orbitron text-cyanAccent hover:text-white bg-cyanAccent/10 hover:bg-cyanAccent/20 rounded-xl border border-cyanAccent/40 transition-all duration-200 flex items-center gap-1.5"
            >
              <DownloadIcon className="w-3.5 h-3.5" />
              GET APP
            </button>

            <button
              onClick={onOpenPlayModal}
              className="relative group overflow-hidden rounded-xl p-[1px] font-orbitron font-bold text-xs uppercase tracking-wider"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purplePrimary via-purpleSecondary to-cyanAccent animate-pulse" />
              <span className="relative block px-5 py-2.5 bg-[#07060D] rounded-[11px] text-white group-hover:bg-transparent transition-colors duration-200 flex items-center gap-2">
                <Play className="w-3.5 h-3.5 fill-cyanAccent text-cyanAccent group-hover:scale-110 transition-transform" />
                <span>PLAY NOW</span>
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenPlayModal}
              className="sm:hidden px-3 py-1.5 text-xs font-orbitron font-bold bg-gradient-to-r from-purplePrimary to-cyanAccent text-white rounded-lg flex items-center gap-1"
            >
              <Play className="w-3 h-3 fill-white" />
              PLAY
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-purplePrimary/10 border border-purplePrimary/30 text-white hover:bg-purplePrimary/20 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyanAccent" /> : <Menu className="w-6 h-6 text-purplePrimary" />}
            </button>
          </div>
        </div>

        {/* Mobile Animated Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-purplePrimary/20 flex flex-col gap-2 pb-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-semibold text-textSecondary hover:text-white hover:bg-purplePrimary/15 rounded-xl transition-all border border-transparent hover:border-purplePrimary/30"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-purplePrimary/20 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlayModal();
                }}
                className="w-full py-3 bg-gradient-to-r from-purplePrimary via-purpleSecondary to-cyanAccent font-orbitron font-bold text-sm tracking-wider uppercase rounded-xl text-white shadow-neon-purple flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 fill-white" />
                PLAY NOW (MINI GAME)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDownloadModal();
                }}
                className="w-full py-3 bg-cyanAccent/10 border border-cyanAccent/40 font-orbitron font-bold text-sm tracking-wider uppercase rounded-xl text-cyanAccent flex items-center justify-center gap-2"
              >
                <DownloadIcon className="w-4 h-4" />
                DOWNLOAD GAME APP
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
