import AnimatedThemeToggle from './AnimatedThemeToggle';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Header = ({ title }) => {
	const { isDarkMode } = useTheme();

	// Lighter pastel aurora palette for light mode
	const auroraGradients = isDarkMode
		? [
			'linear-gradient(120deg, #0f2027 0%, #2c5364 40%, #20e3b2 70%, #ff6a88 100%)',
			'linear-gradient(120deg, #232946 0%, #8f5cff 40%, #00eaff 70%, #ff6a88 100%)',
			'linear-gradient(120deg, #0f2027 0%, #2c5364 40%, #20e3b2 70%, #ff6a88 100%)',
		]
		: [
			'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 40%, #fbc2eb 70%, #f9d423 100%)',
			'linear-gradient(120deg, #fbc2eb 0%, #f9d423 40%, #a1c4fd 70%, #c2e9fb 100%)',
			'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 40%, #fbc2eb 70%, #f9d423 100%)',
		];

	return (
		<motion.header
			className="relative shadow-xl border-b border-slate-200 dark:border-gray-700 overflow-hidden"
			initial={false}
			animate={{}}
		>
			{/* Animated Aurora Gradient Background */}
			<motion.div
				className="absolute inset-0 z-0"
				style={{ borderRadius: 0 }}
				animate={{ background: auroraGradients }}
				transition={{ repeat: Infinity, duration: 8, ease: 'linear', repeatType: 'loop', times: [0, 0.5, 1] }}
			/>
			{/* Overlay for contrast */}
			<div
				className="absolute inset-0 z-10 pointer-events-none"
				style={{
					background: isDarkMode
						? 'rgba(30,41,59,0.72)'
						: 'rgba(255,255,255,0.50)', // lighter for light mode
				}}
			/>
			<div className="relative z-20 max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
				<h1
					className="text-2xl font-semibold text-slate-800 dark:text-gray-100 drop-shadow-lg"
					style={!isDarkMode ? { textShadow: '0 1px 4px rgba(0,0,0,0.10)' } : undefined}
				>
					{title}
				</h1>
				{/* Animated Theme Toggle Button */}
				<AnimatedThemeToggle />
			</div>
		</motion.header>
	);
};
export default Header;
