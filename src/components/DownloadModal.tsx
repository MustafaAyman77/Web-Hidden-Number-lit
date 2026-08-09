import React, { useState } from 'react';
import { X, Download, ShieldCheck, Smartphone, Check, ExternalLink } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadStarted, setDownloadStarted] = useState(false);

  if (!isOpen) return null;

  const handleSimulatedDownload = (platform: string) => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadStarted(true);
      setTimeout(() => setDownloadStarted(false), 4000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative max-w-lg w-full glass-panel-glow p-6 sm:p-8 rounded-3xl border-purplePrimary/60 shadow-2xl">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-purplePrimary/30 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purplePrimary/20 text-cyanAccent">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-orbitron font-extrabold text-lg text-white">DOWNLOAD HIDDEN NUMBER</h3>
              <span className="text-[10px] font-orbitron text-cyanAccent">SELECT YOUR PLATFORM & EDITION</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-purplePrimary/20 text-textSecondary hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {downloadStarted ? (
          <div className="p-6 rounded-2xl bg-cyanAccent/20 border border-cyanAccent/60 text-center box-glow-cyan my-4">
            <Check className="w-10 h-10 text-cyanAccent mx-auto mb-2 animate-bounce" />
            <h4 className="font-orbitron font-bold text-lg text-white">DOWNLOAD INITIATED!</h4>
            <p className="text-xs text-textSecondary mt-1">
              Your installer package is downloading. Install and start guessing!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Google Play / Android option */}
            <div
              onClick={() => handleSimulatedDownload('Android')}
              className="p-4 rounded-2xl glass-panel border border-purplePrimary/40 hover:border-cyanAccent transition-all cursor-pointer flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-purplePrimary/20 text-white group-hover:text-cyanAccent transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-orbitron font-bold text-sm text-white group-hover:text-cyanAccent">Android Edition (APK & Play)</h4>
                  <span className="text-xs text-textSecondary">Version 2.4.0 • 48 MB • Android 8.0+</span>
                </div>
              </div>

              <button className="px-3.5 py-1.5 rounded-xl bg-purplePrimary/30 text-cyanAccent font-orbitron font-bold text-xs uppercase flex items-center gap-1">
                GET <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Apple App Store / iOS option */}
            <div
              onClick={() => handleSimulatedDownload('iOS')}
              className="p-4 rounded-2xl glass-panel border border-purplePrimary/40 hover:border-cyanAccent transition-all cursor-pointer flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-purplePrimary/20 text-white group-hover:text-cyanAccent transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.09,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-orbitron font-bold text-sm text-white group-hover:text-cyanAccent">iOS Edition (App Store)</h4>
                  <span className="text-xs text-textSecondary">Version 2.4.0 • 52 MB • iOS 14.0+</span>
                </div>
              </div>

              <button className="px-3.5 py-1.5 rounded-xl bg-purplePrimary/30 text-cyanAccent font-orbitron font-bold text-xs uppercase flex items-center gap-1">
                GET <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {downloading && (
          <div className="mt-4 text-center font-orbitron text-xs text-cyanAccent animate-pulse">
            PREPARING SECURE DOWNLOAD PACKAGE...
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-purplePrimary/20 flex items-center justify-between text-[11px] text-textSecondary">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-cyanAccent" /> Verified Official Package
          </span>
          <span className="font-orbitron font-bold text-white">SEASON 1 ED.</span>
        </div>

      </div>
    </div>
  );
};
