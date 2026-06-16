'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LiquidGlassShell from '../LiquidGlassShell';

interface EmotionWheelProps {
  onEmotionSelect?: (emotion: string, setup: string) => void;
}

const emotions = [
  { type: 'disciplined', label: 'Disciplined', emoji: '🎯', color: 'from-blue-400 to-cyan-400' },
  { type: 'confident', label: 'Confident', emoji: '💪', color: 'from-emerald-400 to-green-400' },
  { type: 'greedy', label: 'Greedy', emoji: '🤑', color: 'from-yellow-400 to-orange-400' },
  { type: 'fearful', label: 'Fearful', emoji: '😰', color: 'from-red-400 to-pink-400' },
  { type: 'revenge_trading', label: 'Revenge Trading', emoji: '😡', color: 'from-purple-400 to-pink-400' },
  { type: 'bored', label: 'Bored', emoji: '😑', color: 'from-gray-400 to-slate-400' },
];

const setups = [
  { type: 'support_resistance', label: 'Support/Resistance', icon: '📊' },
  { type: 'trendline_bounce', label: 'Trendline Bounce', icon: '📈' },
  { type: 'ma_cross', label: 'MA Cross', icon: '🔄' },
  { type: 'price_action', label: 'Price Action', icon: '💹' },
  { type: 'blind_guess', label: 'Blind Guess', icon: '🎲' },
];

export const EmotionWheel: React.FC<EmotionWheelProps> = ({ onEmotionSelect }) => {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [selectedSetup, setSelectedSetup] = useState<string | null>(null);

  const handleEmotionSelect = (emotion: string) => {
    setSelectedEmotion(emotion);
  };

  const handleSetupSelect = (setup: string) => {
    setSelectedSetup(setup);
    if (selectedEmotion) {
      onEmotionSelect?.(selectedEmotion, setup);
    }
  };

  return (
    <LiquidGlassShell className="p-8">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gradient mb-6">How are you feeling?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {emotions.map((emotion) => (
              <motion.button
                key={emotion.type}
                onClick={() => handleEmotionSelect(emotion.type)}
                className={`p-4 rounded-xl font-semibold transition-all ${
                  selectedEmotion === emotion.type
                    ? `bg-gradient-to-r ${emotion.color} text-gray-900 shadow-lg`
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-3xl mb-2">{emotion.emoji}</div>
                <div className="text-sm">{emotion.label}</div>
              </motion.button>
            ))}
          </div>
        </div>

        {selectedEmotion && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-cyan-300">Trade Setup Type</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {setups.map((setup) => (
                <motion.button
                  key={setup.type}
                  onClick={() => handleSetupSelect(setup.type)}
                  className={`p-3 rounded-lg font-semibold transition-all ${
                    selectedSetup === setup.type
                      ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-xl mb-1">{setup.icon}</div>
                  <div className="text-xs">{setup.label}</div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {selectedEmotion && selectedSetup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-4 bg-emerald-500/20 border border-emerald-400/50 rounded-lg text-emerald-200 font-semibold"
          >
            ✅ Ready to log your trade!
          </motion.div>
        )}
      </div>
    </LiquidGlassShell>
  );
};

export default EmotionWheel;
