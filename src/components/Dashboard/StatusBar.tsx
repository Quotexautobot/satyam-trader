'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, AlertCircle } from 'react-icons/fa';

interface StatusBarProps {
  dailyProfit?: number;
  dailyGoal?: number;
  currentTime?: Date;
}

const reminders = [
  '📌 Are you following your plan?',
  '📈 Check the higher timeframe trend',
  "❌ Don't fight the OTC market trends",
  '💰 Protect your capital first',
  '⏱️ Manage your time on 1-min trades',
  '🎯 Focus on quality over quantity',
];

export const StatusBar: React.FC<StatusBarProps> = ({
  dailyProfit = 0,
  dailyGoal = 1000,
  currentTime = new Date(),
}) => {
  const [liveTime, setLiveTime] = useState(new Date());
  const [reminderIndex, setReminderIndex] = useState(0);
  const goalProgress = Math.min((dailyProfit / dailyGoal) * 100, 100);
  const isPositive = dailyProfit >= 0;

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const reminderTimer = setInterval(() => {
      setReminderIndex((prev) => (prev + 1) % reminders.length);
    }, 5000);

    return () => clearInterval(reminderTimer);
  }, []);

  const formattedTime = liveTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-glass-dark via-glass-light to-glass-dark backdrop-blur-xl border-t border-white/10 z-40"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4 flex-wrap">
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
        >
          <TrendingUp className={isPositive ? 'text-emerald-400' : 'text-red-400'} />
          <div className="flex flex-col">
            <span className="text-xs text-white/60">Daily P&L</span>
            <span
              className={`text-sm font-bold ${
                isPositive ? 'text-emerald-400' : 'text-red-400'
              }`}
            >
              {isPositive ? '+' : ''} ${dailyProfit.toFixed(2)}
            </span>
          </div>
        </motion.div>

        <div className="flex-1 min-w-[200px] max-w-[300px]">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-semibold text-white/70">Daily Goal</span>
            <span className="text-xs text-white/50">{Math.round(goalProgress)}%</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
              initial={{ width: 0 }}
              animate={{ width: `${goalProgress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <Clock className="text-cyan-400" />
          <span className="text-sm font-mono font-bold text-cyan-300">{formattedTime}</span>
        </motion.div>

        <motion.div
          className="flex items-center gap-2 text-xs text-white/70 max-w-[250px]"
          key={reminderIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          <AlertCircle className="text-yellow-400 flex-shrink-0" />
          <span className="truncate">{reminders[reminderIndex]}</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StatusBar;
