import React, { useState, useEffect } from 'react';
import { X, Lock, Unlock, Sparkles, RefreshCw, Trophy, AlertCircle, Play } from 'lucide-react';
import confetti from 'canvas-confetti';

interface InteractiveMiniGameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface GuessRecord {
  guess: string;
  bulls: number; // Correct position
  cows: number;  // Correct digit, wrong position
}

export const InteractiveMiniGameModal: React.FC<InteractiveMiniGameModalProps> = ({ isOpen, onClose }) => {
  const [secretCode, setSecretCode] = useState<string>('');
  const [currentInput, setCurrentInput] = useState<string>('');
  const [guessHistory, setGuessHistory] = useState<GuessRecord[]>([]);
  const [isWon, setIsWon] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  // Generate a random 4-digit secret code with unique digits
  const generateSecretCode = () => {
    const digits: number[] = [];
    while (digits.length < 4) {
      const rand = Math.floor(Math.random() * 10);
      if (!digits.includes(rand)) {
        digits.push(rand);
      }
    }
    const code = digits.join('');
    setSecretCode(code);
    setGuessHistory([]);
    setCurrentInput('');
    setIsWon(false);
    setErrorMsg('');
  };

  useEffect(() => {
    if (isOpen) {
      generateSecretCode();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleKeyPress = (num: string) => {
    if (isWon) return;
    if (currentInput.length < 4) {
      if (currentInput.includes(num)) {
        setErrorMsg('Digits must be unique!');
        setTimeout(() => setErrorMsg(''), 2000);
        return;
      }
      setErrorMsg('');
      setCurrentInput((prev) => prev + num);
    }
  };

  const handleBackspace = () => {
    if (isWon) return;
    setCurrentInput((prev) => prev.slice(0, -1));
  };

  const handleSubmitGuess = () => {
    if (currentInput.length !== 4) {
      setErrorMsg('Please enter a full 4-digit code!');
      setTimeout(() => setErrorMsg(''), 2000);
      return;
    }

    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
      if (currentInput[i] === secretCode[i]) {
        bulls++;
      } else if (secretCode.includes(currentInput[i])) {
        cows++;
      }
    }

    const newRecord: GuessRecord = {
      guess: currentInput,
      bulls,
      cows,
    };

    setGuessHistory((prev) => [newRecord, ...prev]);
    setCurrentInput('');

    if (bulls === 4) {
      setIsWon(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#8B5CF6', '#22D3EE', '#A855F7'],
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative max-w-md w-full glass-panel-glow p-6 sm:p-8 rounded-3xl border-purplePrimary/60 max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col justify-between">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-purplePrimary/30">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purplePrimary/20 text-cyanAccent">
              {isWon ? <Unlock className="w-5 h-5 text-cyanAccent animate-bounce" /> : <Lock className="w-5 h-5 text-purplePrimary" />}
            </div>
            <div>
              <h3 className="font-orbitron font-extrabold text-lg text-white">HIDDEN NUMBER DEMO</h3>
              <span className="text-[10px] font-orbitron text-cyanAccent">CRACK THE SECRET 4-DIGIT VAULT</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-purplePrimary/20 text-textSecondary hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Victory Screen Banner */}
        {isWon && (
          <div className="my-4 p-4 rounded-2xl bg-cyanAccent/20 border border-cyanAccent/60 text-center box-glow-cyan animate-pulse">
            <Trophy className="w-8 h-8 text-cyanAccent mx-auto mb-1" />
            <h4 className="font-orbitron font-black text-xl text-white">VICTORY! UNLOCKED: {secretCode}</h4>
            <p className="text-xs text-textSecondary mt-1 font-medium">
              You cracked the vault in {guessHistory.length} attempts!
            </p>
            <button
              onClick={generateSecretCode}
              className="mt-3 px-5 py-2 bg-gradient-to-r from-purplePrimary to-cyanAccent text-white font-orbitron font-bold text-xs uppercase rounded-xl shadow"
            >
              PLAY AGAIN
            </button>
          </div>
        )}

        {/* Current Guess Display Slots */}
        <div className="my-6">
          <div className="flex items-center justify-between text-xs font-orbitron text-textSecondary mb-2">
            <span>ENTER 4 UNIQUE DIGITS:</span>
            <span>ATTEMPTS: {guessHistory.length}</span>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((idx) => {
              const char = currentInput[idx] || '';
              return (
                <div
                  key={idx}
                  className={`h-16 rounded-2xl border-2 flex items-center justify-center font-orbitron font-extrabold text-3xl transition-all shadow-inner ${
                    char
                      ? 'border-cyanAccent text-white bg-purplePrimary/30 shadow-neon-cyan'
                      : 'border-purplePrimary/40 text-gray-600 bg-[#07060D]'
                  }`}
                >
                  {char || '_'}
                </div>
              );
            })}
          </div>

          {errorMsg && (
            <p className="text-xs text-red-400 font-orbitron mt-2 text-center flex items-center justify-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errorMsg}
            </p>
          )}
        </div>

        {/* On-Screen Cyber Keypad */}
        {!isWon && (
          <div className="mb-6">
            <div className="grid grid-cols-5 gap-2 mb-3">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((num) => {
                const isUsed = currentInput.includes(num);
                return (
                  <button
                    key={num}
                    onClick={() => handleKeyPress(num)}
                    disabled={isUsed}
                    className={`py-3 rounded-xl font-orbitron font-bold text-lg transition-all ${
                      isUsed
                        ? 'bg-gray-800 text-gray-500 border border-gray-700 opacity-40'
                        : 'bg-purplePrimary/20 hover:bg-purplePrimary text-cyanAccent hover:text-white border border-purplePrimary/40 active:scale-95'
                    }`}
                  >
                    {num}
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleBackspace}
                className="py-3 glass-panel hover:bg-red-500/20 text-red-400 font-orbitron font-bold text-xs uppercase rounded-xl border border-red-500/30"
              >
                DELETE
              </button>
              <button
                onClick={handleSubmitGuess}
                className="py-3 bg-gradient-to-r from-purplePrimary via-purpleSecondary to-cyanAccent text-white font-orbitron font-bold text-xs uppercase rounded-xl shadow-neon-purple"
              >
                SUBMIT GUESS
              </button>
            </div>
          </div>
        )}

        {/* Guess History Feed */}
        <div className="border-t border-purplePrimary/20 pt-4">
          <span className="text-xs font-orbitron font-bold text-textSecondary uppercase block mb-2">
            FEEDBACK LOG ({guessHistory.length})
          </span>

          {guessHistory.length === 0 ? (
            <p className="text-xs text-textSecondary italic text-center py-2">
              No guesses submitted yet. Type 4 digits and press SUBMIT!
            </p>
          ) : (
            <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
              {guessHistory.map((rec, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-xl bg-purplePrimary/10 border border-purplePrimary/30 flex items-center justify-between text-xs font-orbitron"
                >
                  <span className="font-bold text-white text-sm">#{guessHistory.length - i}: {rec.guess}</span>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-purplePrimary/30 text-cyanAccent border border-purplePrimary/50">
                      {rec.bulls} BULL
                    </span>
                    <span className="px-2 py-0.5 rounded bg-purpleSecondary/30 text-purpleSecondary border border-purpleSecondary/50">
                      {rec.cows} COW
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
