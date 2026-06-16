'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import LiquidGlassShell from '@/components/LiquidGlassShell';
import TradeUploadZone from '@/components/Dashboard/TradeUploadZone';
import EmotionWheel from '@/components/Dashboard/EmotionWheel';
import TradeHistory from '@/components/Dashboard/TradeHistory';
import StatusBar from '@/components/Dashboard/StatusBar';
import { useTradeStore } from '@/stores/tradeStore';

export default function Dashboard() {
  const { trades, addTrade, getDailyStats } = useTradeStore();
  const [showEmotionWheel, setShowEmotionWheel] = useState(false);
  const dailyStats = getDailyStats?.() || { totalProfit: 0 };

  const handleTradeExtracted = (tradeData: any) => {
    setShowEmotionWheel(true);
  };

  const handleEmotionSelect = (emotion: string, setup: string) => {
    // Trade will be added after emotion selection
    setShowEmotionWheel(false);
  };

  return (
    <main className="min-h-screen pb-32">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <h1 className="text-5xl font-bold text-gradient">📊 Satyam Trader</h1>
          <p className="text-white/60">Master your trading psychology. Optimize every decision.</p>
        </motion.div>

        {/* Upload Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ delay: 0.1 }}
        >
          <TradeUploadZone onTradeExtracted={handleTradeExtracted} />
        </motion.div>

        {/* Emotion Wheel Modal */}
        {showEmotionWheel && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setShowEmotionWheel(false)}
          >
            <motion.div
              className="max-w-2xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <EmotionWheel onEmotionSelect={handleEmotionSelect} />
              <button
                onClick={() => setShowEmotionWheel(false)}
                className="mt-4 w-full py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}

        {/* Trade History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 20 }}
          transition={{ delay: 0.2 }}
        >
          <TradeHistory trades={trades} />
        </motion.div>
      </div>

      {/* Status Bar */}
      <StatusBar dailyProfit={dailyStats.totalProfit} dailyGoal={1000} />
    </main>
  );
}
