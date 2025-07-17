import React from 'react';
import { motion } from 'framer-motion';

const ThreeDCard = ({ children, className = '', style = {}, ...props }) => (
  <motion.div
    className={`relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-700 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.32)] overflow-hidden ${className}`}
    style={{
      ...style,
      boxShadow: '0 4px 24px 0 rgba(161,196,253,0.18), 0 1.5px 8px 0 rgba(251,194,235,0.10)',
    }}
    whileHover={{
      y: -6,
      scale: 1.025,
      boxShadow: '0 12px 40px 0 rgba(161,196,253,0.22), 0 4px 16px 0 rgba(251,194,235,0.16)',
    }}
    transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    {...props}
  >
    {/* Subtle gradient highlight */}
    <div className="pointer-events-none absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-white/40 via-blue-100/20 to-transparent dark:from-slate-700/40 dark:via-blue-900/20 dark:to-transparent z-0" />
    <div className="relative z-10">{children}</div>
  </motion.div>
);

export default ThreeDCard; 