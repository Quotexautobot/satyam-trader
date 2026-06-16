'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LiquidGlassShellProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  hoverEffect?: boolean;
}

export const LiquidGlassShell: React.FC<LiquidGlassShellProps> = ({
  children,
  className = '',
  variant = 'primary',
  hoverEffect = true,
}) => {
  const variantStyles = {
    primary: 'backdrop-blur-lg bg-white/3 border border-white/8 rounded-2xl',
    secondary: 'backdrop-blur-md bg-white/2 border border-white/6 rounded-xl',
    accent: 'backdrop-blur-lg bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-400/30 rounded-2xl',
  };

  return (
    <motion.div
      className={`glass-container ${variantStyles[variant]} ${className} ${
        hoverEffect ? 'glass-hover' : ''
      } transition-all duration-300`}
      whileHover={hoverEffect ? { y: -4 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default LiquidGlassShell;
