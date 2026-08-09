import React, { useState } from 'react';
import { ParticlesBackground } from './components/ParticlesBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { GameIntro } from './components/GameIntro';
import { GameModes } from './components/GameModes';
import { HowItWorks } from './components/HowItWorks';
import { GameplayShowcase } from './components/GameplayShowcase';
import { Features } from './components/Features';
import { PlayerProgression } from './components/PlayerProgression';
import { Statistics } from './components/Statistics';
import { ThemeSection } from './components/ThemeSection';
import { FriendsCTA } from './components/FriendsCTA';
import { DownloadCTA } from './components/DownloadCTA';
import { Footer } from './components/Footer';
import { InteractiveMiniGameModal } from './components/InteractiveMiniGameModal';
import { DownloadModal } from './components/DownloadModal';

export function App() {
  const [playModalOpen, setPlayModalOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#07060D] text-white selection:bg-[#8B5CF6] selection:text-white">
      {/* Dynamic Floating Canvas Particles & Numbers 0-9 Background */}
      <ParticlesBackground />

      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenPlayModal={() => setPlayModalOpen(true)}
        onOpenDownloadModal={() => setDownloadModalOpen(true)}
      />

      {/* Main Landing Page Sections */}
      <main className="relative z-10">
        <HeroSection
          onOpenPlayModal={() => setPlayModalOpen(true)}
          onOpenDownloadModal={() => setDownloadModalOpen(true)}
        />

        <GameIntro />

        <GameModes
          onOpenPlayModal={() => setPlayModalOpen(true)}
          onOpenDownloadModal={() => setDownloadModalOpen(true)}
        />

        <HowItWorks />

        <GameplayShowcase />

        <Features />

        <PlayerProgression />

        <Statistics />

        <ThemeSection />

        <FriendsCTA
          onOpenPlayModal={() => setPlayModalOpen(true)}
        />

        <DownloadCTA
          onOpenDownloadModal={() => setDownloadModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Playable Mini-Game Modal */}
      <InteractiveMiniGameModal
        isOpen={playModalOpen}
        onClose={() => setPlayModalOpen(false)}
      />

      {/* Download Options Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </div>
  );
}

export default App;
