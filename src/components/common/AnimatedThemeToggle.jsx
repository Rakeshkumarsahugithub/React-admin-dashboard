import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useState } from 'react';

const AnimatedThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isPressed, setIsPressed] = useState(false);

  // More vibrant aurora gradients
  const auroraGradients = isDarkMode
    ? [
        'linear-gradient(120deg, #232946 0%, #7c3aed 40%, #38bdf8 100%)',
        'linear-gradient(120deg, #312e81 0%, #a5b4fc 40%, #06b6d4 100%)',
        'linear-gradient(120deg, #232946 0%, #7c3aed 40%, #38bdf8 100%)',
      ]
    : [
        'linear-gradient(120deg, #fbbf24 0%, #60a5fa 40%, #f472b6 100%)',
        'linear-gradient(120deg, #f472b6 0%, #fbbf24 40%, #38bdf8 100%)',
        'linear-gradient(120deg, #fbbf24 0%, #60a5fa 40%, #f472b6 100%)',
      ];

  return (
    <motion.button
      onClick={toggleTheme}
      onPointerDown={() => setIsPressed(true)}
      onPointerUp={() => setIsPressed(false)}
      onPointerLeave={() => setIsPressed(false)}
      className="relative w-16 h-9 rounded-full overflow-hidden shadow-2xl border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      {/* Animated Aurora Gradient Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ borderRadius: '9999px' }}
        animate={{
          background: auroraGradients,
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: 'linear',
          repeatType: 'loop',
          times: [0, 0.5, 1],
        }}
      />
      {/* Overlay for contrast */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: isDarkMode
            ? 'rgba(30,41,59,0.32)' // semi-transparent dark overlay
            : 'rgba(255,255,255,0.38)', // semi-transparent light overlay
          borderRadius: '9999px',
        }}
      />
      {/* Aurora Wave SVG Overlay */}
      <svg
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
        viewBox="0 0 64 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ mixBlendMode: 'screen' }}
      >
        <motion.path
          d="M0 24 Q 16 12 32 24 T 64 24 V36 H0 Z"
          fill={isDarkMode ? '#818cf833' : '#fbbf24bb'}
          animate={{
            d: isDarkMode
              ? [
                  'M0 24 Q 16 12 32 24 T 64 24 V36 H0 Z',
                  'M0 20 Q 16 28 32 20 T 64 20 V36 H0 Z',
                  'M0 24 Q 16 12 32 24 T 64 24 V36 H0 Z',
                ]
              : [
                  'M0 24 Q 16 12 32 24 T 64 24 V36 H0 Z',
                  'M0 20 Q 16 28 32 20 T 64 20 V36 H0 Z',
                  'M0 24 Q 16 12 32 24 T 64 24 V36 H0 Z',
                ],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: 'easeInOut',
            repeatType: 'loop',
            times: [0, 0.5, 1],
          }}
        />
      </svg>
      {/* Toggle Circle with Glow, Border, and Stronger Shadow */}
      <motion.div
        className="absolute top-1 left-1 w-7 h-7 rounded-full flex items-center justify-center z-30 border-2 border-white dark:border-slate-800 shadow-lg"
        animate={{
          x: isDarkMode ? 28 : 0,
          boxShadow: isPressed
            ? '0 0 0 0 rgba(251,191,36,0.0), 0 0 0 0 rgba(96,165,250,0.0)'
            : isDarkMode
            ? '0 0 16px 6px #818cf8cc, 0 0 32px 8px #7c3aed99'
            : '0 0 16px 6px #fbbf24cc, 0 0 32px 8px #60a5fa99',
          scale: isPressed ? 0.95 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {/* Pulsing Glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: isDarkMode
              ? 'radial-gradient(circle, #818cf8bb 0%, transparent 70%)'
              : 'radial-gradient(circle, #fbbf24bb 0%, transparent 70%)',
            zIndex: 0,
          }}
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Sun/Moon Icon */}
        <AnimatePresence mode="wait">
          {isDarkMode ? (
            <motion.svg
              key="moon"
              className="w-4 h-4 text-indigo-200 drop-shadow"
              fill="currentColor"
              viewBox="0 0 20 20"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </motion.svg>
          ) : (
            <motion.svg
              key="sun"
              className="w-4 h-4 text-amber-400 drop-shadow"
              fill="currentColor"
              viewBox="0 0 20 20"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
};

export default AnimatedThemeToggle; 