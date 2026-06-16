'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import LiquidGlassShell from '@/components/LiquidGlassShell';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    // Page 1: Splash Screen
    (
      <motion.div
        className="min-h-screen flex items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center space-y-8">
          <motion.div
            className="text-7xl font-bold text-gradient"
            variants={itemVariants}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            🎯
          </motion.div>
          <motion.h1 className="text-6xl font-bold text-white" variants={itemVariants}>
            Satyam Trader
          </motion.h1>
          <motion.p className="text-2xl text-white/70" variants={itemVariants}>
            Premium Binary Trading Journal
          </motion.p>
          <motion.p className="text-white/50 max-w-md mx-auto" variants={itemVariants}>
            Master your emotions. Optimize your trades. Protect your capital.
          </motion.p>
        </div>
      </motion.div>
    ),
    // Page 2: Broker Selection
    (
      <motion.div
        className="min-h-screen flex items-center justify-center p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl w-full space-y-8">
          <motion.h2 className="text-4xl font-bold text-gradient text-center" variants={itemVariants}>
            Select Your Broker
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Quotex', 'IQ Option', 'Pocket Option', 'Olymp Trade'].map((broker) => (
              <motion.button
                key={broker}
                className="p-6 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-all border border-white/20"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {broker}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    ),
    // Page 3: Community Integration
    (
      <motion.div
        className="min-h-screen flex items-center justify-center p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl w-full space-y-8">
          <motion.h2 className="text-4xl font-bold text-gradient text-center" variants={itemVariants}>
            Community Integration
          </motion.h2>
          <div className="space-y-4">
            {[
              { name: 'Telegram', icon: '📱', enabled: true },
              { name: 'Discord', icon: '💬', enabled: true },
            ].map((platform) => (
              <motion.div
                key={platform.name}
                className="p-4 rounded-xl bg-white/10 border border-white/20 flex items-center justify-between"
                variants={itemVariants}
              >
                <span className="text-white font-semibold">
                  {platform.icon} {platform.name}
                </span>
                <label className="relative inline-block w-10 h-6 bg-white/20 rounded-full cursor-pointer">
                  <input type="checkbox" defaultChecked={platform.enabled} className="hidden" />
                  <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform" />
                </label>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    ),
    // Page 4: Risk Profile
    (
      <motion.div
        className="min-h-screen flex items-center justify-center p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl w-full space-y-8">
          <motion.h2 className="text-4xl font-bold text-gradient text-center" variants={itemVariants}>
            Your Risk Profile
          </motion.h2>
          <div className="space-y-4">
            {[
              { level: 'Conservative', description: 'Small positions, low leverage' },
              { level: 'Moderate', description: 'Balanced approach' },
              { level: 'Aggressive', description: 'Large positions, high risk' },
            ].map((profile) => (
              <motion.button
                key={profile.level}
                className="p-4 rounded-xl bg-white/10 hover:bg-white/20 text-left text-white transition-all border border-white/20"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="font-bold">{profile.level}</div>
                <div className="text-sm text-white/60">{profile.description}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    ),
  ];

  return (
    <main className="min-h-screen">
      <motion.div
        key={currentPage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {pages[currentPage]}
      </motion.div>

      {/* Navigation */}
      <motion.div
        className="fixed bottom-8 left-0 right-0 flex items-center justify-center gap-4 z-50"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
      >
        {currentPage > 0 && (
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-all border border-white/20"
          >
            ← Back
          </button>
        )}

        <div className="flex gap-2">
          {pages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentPage ? 'bg-emerald-400 w-8' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {currentPage < pages.length - 1 ? (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-6 py-2 bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 rounded-lg font-bold transition-all hover:shadow-lg"
          >
            Next →
          </button>
        ) : (
          <Link
            href="/dashboard"
            className="px-6 py-2 bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 rounded-lg font-bold transition-all hover:shadow-lg"
          >
            Start Trading →
          </Link>
        )}
      </motion.div>
    </main>
  );
}
