import React, { useState, useEffect, useRef } from 'react';
import Header from '../../utils/header/Header';
import Footer from '../../utils/footer/Footer';

const FreeTest = () => {
  const [text] = useState(
    "The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet and is commonly used for typing practice. Regular practice helps improve both speed and accuracy in typing skills."
  );
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const inputRef = useRef(null);
  const isAuthenticated = false;

  useEffect(() => {
    let interval = null;
    if (isActive && startTime && !endTime) {
      interval = setInterval(() => {
        setTimeElapsed(Date.now() - startTime);
      }, 100);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, startTime, endTime]);

  const handleInputChange = (value) => {
    if (!startTime) {
      setStartTime(Date.now());
      setIsActive(true);
    }

    setUserInput(value);

    if (value.length >= text.length) {
      setEndTime(Date.now());
      setIsActive(false);
    }
  };

  const resetTest = () => {
    setUserInput('');
    setStartTime(null);
    setEndTime(null);
    setIsActive(false);
    setTimeElapsed(0);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const calculateWPM = () => {
    if (!startTime) return 0;
    const timeInMinutes = timeElapsed / 60000;
    const wordsTyped = userInput.trim().split(' ').length;
    return timeInMinutes > 0 ? Math.round(wordsTyped / timeInMinutes) : 0;
  };

  const calculateAccuracy = () => {
    if (userInput.length === 0) return 100;
    let correct = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === text[i]) {
        correct++;
      }
    }
    return Math.round((correct / userInput.length) * 100);
  };

  const getCharacterClass = (index) => {
    if (index >= userInput.length) return 'text-slate-500 bg-transparent';
    if (userInput[index] === text[index]) return 'text-emerald-700 bg-emerald-100/70';
    return 'text-rose-700 bg-rose-100/70';
  };

  const isTestComplete = endTime !== null;
  const wpm = calculateWPM();
  const accuracy = calculateAccuracy();

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
        <div className="max-w-5xl mx-auto px-4 py-16 space-y-12">
          {/* Heading Section */}
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent leading-[1.3]">
                Free Typing Speed Test
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Test your typing speed and accuracy in real time with our beautiful, modern interface.
              </p>
            </div>
            
            {!isAuthenticated && (
              <div className="inline-block mt-6 p-5 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200/50 rounded-2xl text-blue-800 backdrop-blur-sm">
                <div className="flex items-center gap-3 text-sm font-medium">
                  <span className="text-2xl">💡</span>
                  <div>
                    <strong>Want to track your progress?</strong>
                    <span className="block text-blue-600 mt-1">Login or create an account to save your results!</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Enhanced Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/50 shadow-lg shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">{wpm}</div>
                <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Words Per Minute</div>
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/50 shadow-lg shadow-emerald-500/10 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">{accuracy}%</div>
                <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Accuracy</div>
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/50 shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">{Math.round(timeElapsed / 1000)}s</div>
                <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Time Elapsed</div>
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/50 shadow-lg shadow-indigo-500/10 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent">
                  {userInput.length}/{text.length}
                </div>
                <div className="text-sm font-medium text-slate-600 uppercase tracking-wide">Characters</div>
              </div>
            </div>
          </div>

          {/* Enhanced Typing Section */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/50 shadow-xl shadow-slate-500/10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Start Typing</h2>
              <button
                onClick={resetTest}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 text-white font-medium shadow-lg shadow-rose-500/25 hover:shadow-xl hover:shadow-rose-500/30 hover:from-rose-600 hover:to-rose-700 transition-all duration-200 transform hover:scale-105"
              >
                Reset Test
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-slate-600 mb-2">
                <span>Progress</span>
                <span>{Math.round((userInput.length / text.length) * 100)}%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${(userInput.length / text.length) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="bg-slate-50/80 p-6 rounded-2xl font-mono text-lg leading-relaxed mb-6 border border-slate-200/50">
              {text.split('').map((char, index) => (
                <span key={index} className={`${getCharacterClass(index)} rounded px-0.5 transition-all duration-150`}>
                  {char}
                </span>
              ))}
            </div>
            
            <textarea
              ref={inputRef}
              value={userInput}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Click here and start typing to begin the test..."
              className="w-full h-40 p-6 border-2 border-slate-200 rounded-2xl font-mono text-lg resize-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-200 bg-white/70 backdrop-blur-sm"
              disabled={isTestComplete}
            />
          </div>

          {/* Enhanced Result Section */}
          <div className="text-center">
            {!isTestComplete ? (
              <div className="space-y-3">
                <p className="text-slate-500 text-lg">
                  {startTime ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-pulse w-2 h-2 bg-emerald-500 rounded-full"></span>
                      Keep typing... You're doing great!
                    </span>
                  ) : (
                    'Start typing to begin the test'
                  )}
                </p>
              </div>
            ) : (
              <div className="space-y-6 p-8 bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl border border-emerald-200/50">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  Test Complete! 🎉
                </h3>
                <p className="text-xl text-slate-700">
                  You typed at <strong className="text-blue-600">{wpm} WPM</strong> with <strong className="text-emerald-600">{accuracy}% accuracy</strong>.
                </p>
                <button
                  onClick={resetTest}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>

          {/* Enhanced Typing Tips */}
          <div className="bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/70 p-10 rounded-3xl space-y-8 border border-slate-200/50 shadow-lg">
            <h3 className="text-3xl font-bold text-slate-800 text-center">💡 Pro Typing Tips</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-slate-700 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Posture & Setup
                </h4>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span>
                    Sit with a straight back and relaxed shoulders.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span>
                    Keep both feet flat on the floor.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span>
                    Place screen at eye level to avoid neck strain.
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-slate-700 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Typing Technique
                </h4>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span>
                    Use all ten fingers (touch typing).
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span>
                    Avoid looking at the keyboard — trust muscle memory.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-500 mt-1">✓</span>
                    Focus on accuracy first, then work on speed.
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-200/30">
              <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                🔥 Pro Tip: Practice 15 minutes daily to build muscle memory and improve naturally!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FreeTest;