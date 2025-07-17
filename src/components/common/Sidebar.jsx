// import { BarChart2, DollarSign, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from "lucide-react";
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Link, useLocation } from "react-router-dom";
// import { useTheme } from '../../context/ThemeContext';

// const SIDEBAR_ITEMS = [
// 	{
// 		name: "Overview",
// 		icon: BarChart2,
// 		color: "#6366f1",
// 		href: "/",
// 	},
// 	{ name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
// 	{ name: "Users", icon: Users, color: "#EC4899", href: "/users" },
// 	{ name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
// 	{ name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
// 	{ name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
// 	{ name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
// ];

// const Sidebar = () => {
// 	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
// 	const { isDarkMode } = useTheme();
// 	const location = useLocation();

// 	// Lighter pastel aurora palette for light mode
// 	const auroraGradients = isDarkMode
// 		? [
// 			'linear-gradient(120deg, #0f2027 0%, #2c5364 40%, #20e3b2 70%, #ff6a88 100%)',
// 			'linear-gradient(120deg, #232946 0%, #8f5cff 40%, #00eaff 70%, #ff6a88 100%)',
// 			'linear-gradient(120deg, #0f2027 0%, #2c5364 40%, #20e3b2 70%, #ff6a88 100%)',
// 		]
// 		: [
// 			'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 40%, #fbc2eb 70%, #f9d423 100%)',
// 			'linear-gradient(120deg, #fbc2eb 0%, #f9d423 40%, #a1c4fd 70%, #c2e9fb 100%)',
// 			'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 40%, #fbc2eb 70%, #f9d423 100%)',
// 		];

// 	return (
// 		<motion.div
// 			className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
// 				isSidebarOpen ? "w-40 sm:w-64" : "w-12 sm:w-20"
// 			} sm:w-64`}
// 			animate={{ width: isSidebarOpen ? (window.innerWidth < 640 ? 160 : 256) : (window.innerWidth < 640 ? 48 : 80) }}
// 			transition={{ type: 'tween', duration: 0.12, ease: 'easeInOut' }}
// 		>
// 			{/* Animated Aurora Gradient Background */}
// 			<motion.div
// 				className="absolute inset-0 z-0"
// 				style={{}}
// 				animate={{ background: auroraGradients }}
// 				transition={{ repeat: Infinity, duration: 8, ease: 'linear', repeatType: 'loop', times: [0, 0.5, 1] }}
// 			/>
// 			{/* Overlay for contrast */}
// 			<div
// 				className="absolute inset-0 z-10 pointer-events-none"
// 				style={{
// 					background: isDarkMode
// 						? 'rgba(30,41,59,0.82)'
// 						: 'rgba(255,255,255,0.50)', // lighter for light mode
// 				}}
// 			/>
// 			{/* Main content (menu button, logo, nav) */}
// 			<div className='relative z-20 h-full flex flex-col'>
// 				{/* Menu button in top left corner */}
// 				<div className="flex items-center justify-start mt-3 sm:mt-2 mb-2">
// 					<motion.button
// 						whileHover={{ scale: 1.12, rotateX: 8 }}
// 						whileTap={{ scale: 0.97, rotateX: -8 }}
// 						onClick={() => setIsSidebarOpen(!isSidebarOpen)}
// 						className='p-1 rounded-full relative max-w-fit flex items-center justify-center focus:outline-none'
// 						aria-label={isSidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
// 					>
// 						{/* Animated Aurora Glow */}
// 						<motion.div
// 							className="absolute inset-0 m-auto w-8 h-8 sm:w-12 sm:h-12 rounded-full z-0 pointer-events-none"
// 							animate={{
// 								boxShadow: [
// 									'0 0 0 0 rgba(161,196,253,0.18), 0 0 0 0 rgba(251,194,235,0.12)',
// 									'0 0 16px 4px rgba(161,196,253,0.28), 0 0 32px 8px rgba(251,194,235,0.18)',
// 									'0 0 0 0 rgba(161,196,253,0.18), 0 0 0 0 rgba(251,194,235,0.12)'
// 								],
// 							}}
// 							transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
// 						/>
// 						{/* Glassy Circle with Inner Shadow and Border Glow */}
// 						<span className="relative w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-white/90 via-blue-100/60 to-purple-100/60 dark:from-slate-800/90 dark:via-blue-900/60 dark:to-purple-900/60 shadow-xl border-2 border-white/70 dark:border-slate-700/80 overflow-hidden">
// 							{/* Inner shadow for glassy look */}
// 							<span className="absolute inset-0 rounded-full pointer-events-none" style={{boxShadow:'inset 0 2px 8px 0 rgba(161,196,253,0.18), inset 0 1px 4px 0 rgba(0,0,0,0.06)'}} />
// 							{/* Animated Hamburger Menu - 3D centered */}
// 							<span className="relative w-5 h-5 sm:w-8 sm:h-8 flex flex-col items-center justify-center mx-auto my-auto">
// 								{[0, 1, 2].map((i) => (
// 									<motion.span
// 										key={i}
// 										className="block w-4 h-0.5 sm:w-6 sm:h-1 rounded bg-blue-500 dark:bg-blue-300 shadow-lg mb-1 last:mb-0"
// 										style={{
// 											boxShadow: '0 2px 8px 0 rgba(24, 58, 117, 0.18), 0 1px 2px 0 rgba(0,0,0,0.10)',
// 											transform: isSidebarOpen
// 												? 'translateZ(0px)'
// 												: i === 0
// 													? 'translateY(7px) rotate(45deg) translateZ(2px)'
// 													: i === 1
// 													? 'scaleX(0.5) opacity(0)'
// 													: 'translateY(-7px) rotate(-45deg) translateZ(2px)',
// 										}}
// 										animate={isSidebarOpen ? {
// 											rotate: 0,
// 											y: 0,
// 											scaleX: 1,
// 											opacity: 1,
// 										} : i === 0 ? {
// 											rotate: 45,
// 											y: 7,
// 											scaleX: 1,
// 											opacity: 1,
// 										} : i === 1 ? {
// 											scaleX: 0.5,
// 											opacity: 0,
// 										} : {
// 											rotate: -45,
// 											y: -7,
// 											scaleX: 1,
// 											opacity: 1,
// 										}}
// 										transition={{ type: 'spring', stiffness: 400, damping: 30 }}
// 									/>
// 								))}
// 							</span>
// 						</span>
// 					</motion.button>
// 				</div>
// 				{/* Logo/name area (unchanged) */}
// 				<div className="flex items-center justify-center mb-0" style={{ minHeight: '56px' }}>
// 					{/* Place your logo/name here, unchanged */}
// 				</div>
// 				<nav className='-mt-6 flex-grow'>
// 					{SIDEBAR_ITEMS.map((item) => {
// 						const isActive = location.pathname === item.href;
// 						return (
// 						<Link key={item.href} to={item.href}>
// 								<motion.div
// 									className={`flex items-center p-2 sm:p-4 text-xs sm:text-base font-medium rounded-xl mb-2 group transition-all duration-200
// 										${isActive ? 'bg-gradient-to-r from-blue-200/80 via-pink-200/80 to-yellow-100/80 dark:from-blue-900/60 dark:via-purple-900/60 dark:to-pink-900/60 shadow-lg border-l-4 border-blue-400 dark:border-blue-300 font-bold' : 'hover:bg-slate-100 dark:hover:bg-gray-700'}
// 										text-slate-700 dark:text-gray-300`}
// 									style={!isDarkMode ? { textShadow: '0 1px 4px rgba(0,0,0,0.10)' } : undefined}
// 									whileHover={{ scale: 1.03 }}
// 									whileTap={{ scale: 0.98 }}
// 									transition={{ type: 'spring', stiffness: 400, damping: 30 }}
// 								>
// 									<item.icon
// 										size={22}
// 										style={{
// 											color: item.color,
// 											minWidth: "22px",
// 											filter: isActive ? 'drop-shadow(0 2px 8px #a1c4fd)' : undefined,
// 											transition: 'filter 0.2s',
// 										}}
// 									/>
// 								<AnimatePresence>
// 									{isSidebarOpen && (
// 										<motion.span
// 												className={`ml-4 whitespace-nowrap group-hover:text-slate-900 dark:group-hover:text-white transition-colors ${isActive ? 'font-bold' : ''} text-xs sm:text-sm md:text-base`}
// 											initial={{ opacity: 0, width: 0 }}
// 											animate={{ opacity: 1, width: "auto" }}
// 											exit={{ opacity: 0, width: 0 }}
// 											transition={{ duration: 0.2, delay: 0.3 }}
// 										>
// 											{item.name}
// 										</motion.span>
// 									)}
// 								</AnimatePresence>
// 							</motion.div>
// 						</Link>
// 						);
// 					})}
// 				</nav>
// 			</div>
// 		</motion.div>
// 	);
// };
// export default Sidebar;




// import { BarChart2, DollarSign, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from "lucide-react";
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Link, useLocation } from "react-router-dom";
// import { useTheme } from '../../context/ThemeContext';

// const SIDEBAR_ITEMS = [
// 	{
// 		name: "Overview",
// 		icon: BarChart2,
// 		color: "#6366f1",
// 		href: "/",
// 	},
// 	{ name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
// 	{ name: "Users", icon: Users, color: "#EC4899", href: "/users" },
// 	{ name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
// 	{ name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
// 	{ name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
// 	{ name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
// ];

// const Sidebar = () => {
// 	const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
// 		if (typeof window !== 'undefined') {
// 			return window.innerWidth >= 640; // open on desktop, closed on mobile
// 		}
// 		return true; // fallback for SSR
// 	});
// 	const { isDarkMode } = useTheme();
// 	const location = useLocation();

// 	// Lighter pastel aurora palette for light mode
// 	const auroraGradients = isDarkMode
// 		? [
// 			'linear-gradient(120deg, #0f2027 0%, #2c5364 40%, #20e3b2 70%, #ff6a88 100%)',
// 			'linear-gradient(120deg, #232946 0%, #8f5cff 40%, #00eaff 70%, #ff6a88 100%)',
// 			'linear-gradient(120deg, #0f2027 0%, #2c5364 40%, #20e3b2 70%, #ff6a88 100%)',
// 		]
// 		: [
// 			'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 40%, #fbc2eb 70%, #f9d423 100%)',
// 			'linear-gradient(120deg, #fbc2eb 0%, #f9d423 40%, #a1c4fd 70%, #c2e9fb 100%)',
// 			'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 40%, #fbc2eb 70%, #f9d423 100%)',
// 		];

// 	return (
// 		<motion.div
// 			className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
// 				isSidebarOpen ? "w-40 sm:w-64" : "w-12 sm:w-20"
// 			} sm:w-64`}
// 			animate={{ width: isSidebarOpen ? (window.innerWidth < 640 ? 160 : 256) : (window.innerWidth < 640 ? 48 : 80) }}
// 			transition={{ type: 'tween', duration: 0.12, ease: 'easeInOut' }}
// 		>
// 			{/* Animated Aurora Gradient Background */}
// 			<motion.div
// 				className="absolute inset-0 z-0"
// 				style={{}}
// 				animate={{ background: auroraGradients }}
// 				transition={{ repeat: Infinity, duration: 8, ease: 'linear', repeatType: 'loop', times: [0, 0.5, 1] }}
// 			/>
// 			{/* Overlay for contrast */}
// 			<div
// 				className="absolute inset-0 z-10 pointer-events-none"
// 				style={{
// 					background: isDarkMode
// 						? 'rgba(30,41,59,0.82)'
// 						: 'rgba(255,255,255,0.50)', // lighter for light mode
// 				}}
// 			/>
			
// 			{/* Main content (menu button, logo, nav) */}
// 			<div className='relative z-20 h-full flex flex-col'>
// 				{/* Menu button in top left corner */}
// 				<div className="flex items-center justify-start mt-3 sm:mt-2 mb-2">
// 					<motion.button
// 						whileHover={{ scale: 1.12, rotateX: 8 }}
// 						whileTap={{ scale: 0.97, rotateX: -8 }}
// 						onClick={() => setIsSidebarOpen(!isSidebarOpen)}
// 						className='p-1 rounded-full relative max-w-fit flex items-center justify-center focus:outline-none'
// 						aria-label={isSidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
// 					>
// 						{/* Animated Aurora Glow */}
// 						<motion.div
// 							className="absolute inset-0 m-auto w-8 h-8 sm:w-12 sm:h-12 rounded-full z-0 pointer-events-none"
// 							animate={{
// 								boxShadow: [
// 									'0 0 0 0 rgba(161,196,253,0.18), 0 0 0 0 rgba(251,194,235,0.12)',
// 									'0 0 16px 4px rgba(161,196,253,0.28), 0 0 32px 8px rgba(251,194,235,0.18)',
// 									'0 0 0 0 rgba(161,196,253,0.18), 0 0 0 0 rgba(251,194,235,0.12)'
// 								],
// 							}}
// 							transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
// 						/>
// 						{/* Glassy Circle with Inner Shadow and Border Glow */}
// 						<span className="relative w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-white/90 via-blue-100/60 to-purple-100/60 dark:from-slate-800/90 dark:via-blue-900/60 dark:to-purple-900/60 shadow-xl border-2 border-white/70 dark:border-slate-700/80 overflow-hidden">
// 							{/* Inner shadow for glassy look */}
// 							<span className="absolute inset-0 rounded-full pointer-events-none" style={{boxShadow:'inset 0 2px 8px 0 rgba(161,196,253,0.18), inset 0 1px 4px 0 rgba(0,0,0,0.06)'}} />
// 							{/* Animated Hamburger Menu - 3D centered */}
// 							<span className="relative w-5 h-5 sm:w-8 sm:h-8 flex flex-col items-center justify-center mx-auto my-auto">
// 								{[0, 1, 2].map((i) => (
// 									<motion.span
// 										key={i}
// 										className="block w-4 h-0.5 sm:w-6 sm:h-1 rounded bg-blue-500 dark:bg-blue-300 shadow-lg mb-1 last:mb-0"
// 										style={{
// 											boxShadow: '0 2px 8px 0 rgba(24, 58, 117, 0.18), 0 1px 2px 0 rgba(0,0,0,0.10)',
// 											transform: isSidebarOpen
// 												? 'translateZ(0px)'
// 												: i === 0
// 													? 'translateY(7px) rotate(45deg) translateZ(2px)'
// 													: i === 1
// 													? 'scaleX(0.5) opacity(0)'
// 													: 'translateY(-7px) rotate(-45deg) translateZ(2px)',
// 										}}
// 										animate={isSidebarOpen ? {
// 											rotate: 0,
// 											y: 0,
// 											scaleX: 1,
// 											opacity: 1,
// 										} : i === 0 ? {
// 											rotate: 45,
// 											y: 7,
// 											scaleX: 1,
// 											opacity: 1,
// 										} : i === 1 ? {
// 											scaleX: 0.5,
// 											opacity: 0,
// 										} : {
// 											rotate: -45,
// 											y: -7,
// 											scaleX: 1,
// 											opacity: 1,
// 										}}
// 										transition={{ type: 'spring', stiffness: 400, damping: 30 }}
// 									/>
// 								))}
// 							</span>
// 						</span>
// 					</motion.button>
// 				</div>
// 				{/* Logo/name area (unchanged) */}
// 				<div className="flex items-center justify-center mb-0" style={{ minHeight: '56px' }}>
// 					{/* Place your logo/name here, unchanged */}
// 				</div>
// 				<nav className='-mt-6 flex-grow'>
// 					{SIDEBAR_ITEMS.map((item) => {
// 						const isActive = location.pathname === item.href;
// 						return (
// 						<Link key={item.href} to={item.href}>
// 								<motion.div
// 									className={`flex items-center p-2 sm:p-4 text-xs sm:text-base font-medium rounded-xl mb-2 group transition-all duration-200
// 										${isActive ? 'bg-gradient-to-r from-blue-200/80 via-pink-200/80 to-yellow-100/80 dark:from-blue-900/60 dark:via-purple-900/60 dark:to-pink-900/60 shadow-lg border-l-4 border-blue-400 dark:border-blue-300 font-bold' : 'hover:bg-slate-100 dark:hover:bg-gray-700'}
// 										text-slate-700 dark:text-gray-300`}
// 									style={!isDarkMode ? { textShadow: '0 1px 4px rgba(0,0,0,0.10)' } : undefined}
// 									whileHover={{ scale: 1.03 }}
// 									whileTap={{ scale: 0.98 }}
// 									transition={{ type: 'spring', stiffness: 400, damping: 30 }}
// 								>
// 									<item.icon
// 										size={22}
// 										style={{
// 											color: item.color,
// 											minWidth: "22px",
// 											filter: isActive ? 'drop-shadow(0 2px 8px #a1c4fd)' : undefined,
// 											transition: 'filter 0.2s',
// 										}}
// 									/>
// 								<AnimatePresence>
// 									{isSidebarOpen && (
// 										<motion.span
// 												className={`ml-4 whitespace-nowrap group-hover:text-slate-900 dark:group-hover:text-white transition-colors ${isActive ? 'font-bold' : ''} text-xs sm:text-sm md:text-base`}
// 											initial={{ opacity: 0, width: 0 }}
// 											animate={{ opacity: 1, width: "auto" }}
// 											exit={{ opacity: 0, width: 0 }}
// 											transition={{ duration: 0.2, delay: 0.3 }}
// 										>
// 											{item.name}
// 										</motion.span>
// 									)}
// 								</AnimatePresence>
// 							</motion.div>
// 						</Link>
// 						);
// 					})}
// 				</nav>
// 			</div>
// 		</motion.div>
// 	);
// };
// export default Sidebar;



import { BarChart2, DollarSign, Menu, Settings, ShoppingBag, ShoppingCart, TrendingUp, Users } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from '../../context/ThemeContext';

const SIDEBAR_ITEMS = [
	{
		name: "Overview",
		icon: BarChart2,
		color: "#6366f1",
		href: "/",
	},
	{ name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
	{ name: "Users", icon: Users, color: "#EC4899", href: "/users" },
	{ name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
	{ name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
	{ name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
	{ name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
];

const Sidebar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
		if (typeof window !== 'undefined') {
			return window.innerWidth >= 640; // open on desktop, closed on mobile
		}
		return true; // fallback for SSR
	});
	const [isMobile, setIsMobile] = useState(() => (typeof window !== 'undefined' ? window.innerWidth < 640 : false));
	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 640);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	const { isDarkMode } = useTheme();
	const location = useLocation();

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
		<motion.div
			className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
				isSidebarOpen ? "w-40 sm:w-64" : "w-12 sm:w-20"
			} sm:w-64`}
			animate={{ width: isSidebarOpen ? (window.innerWidth < 640 ? 160 : 256) : (window.innerWidth < 640 ? 48 : 80) }}
			transition={{ type: 'tween', duration: 0.12, ease: 'easeInOut' }}
		>
			{/* Animated Aurora Gradient Background */}
			<motion.div
				className="absolute inset-0 z-0"
				style={{}}
				animate={{ background: auroraGradients }}
				transition={{ repeat: Infinity, duration: 8, ease: 'linear', repeatType: 'loop', times: [0, 0.5, 1] }}
			/>
			{/* Overlay for contrast */}
			<div
				className="absolute inset-0 z-10 pointer-events-none"
				style={{
					background: isDarkMode
						? 'rgba(30,41,59,0.82)'
						: 'rgba(255,255,255,0.50)', // lighter for light mode
				}}
			/>
			{/* Main content (menu button, logo, nav) */}
			<div className='relative z-20 h-full flex flex-col'>
				{/* Menu button in top left corner */}
				<div className="flex items-center justify-start mt-3 sm:mt-2 mb-2">
					<motion.button
						whileHover={{ scale: 1.12, rotateX: 8 }}
						whileTap={{ scale: 0.97, rotateX: -8 }}
						onClick={() => setIsSidebarOpen(!isSidebarOpen)}
						className='p-1 rounded-full relative max-w-fit flex items-center justify-center focus:outline-none'
						aria-label={isSidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
					>
						{/* Animated Aurora Glow */}
						<motion.div
							className="absolute inset-0 m-auto w-8 h-8 sm:w-12 sm:h-12 rounded-full z-0 pointer-events-none"
							animate={{
								boxShadow: [
									'0 0 0 0 rgba(161,196,253,0.18), 0 0 0 0 rgba(251,194,235,0.12)',
									'0 0 16px 4px rgba(161,196,253,0.28), 0 0 32px 8px rgba(251,194,235,0.18)',
									'0 0 0 0 rgba(161,196,253,0.18), 0 0 0 0 rgba(251,194,235,0.12)'
								],
							}}
							transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
						/>
						{/* Glassy Circle with Inner Shadow and Border Glow */}
						<span className="relative w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-white/90 via-blue-100/60 to-purple-100/60 dark:from-slate-800/90 dark:via-blue-900/60 dark:to-purple-900/60 shadow-xl border-2 border-white/70 dark:border-slate-700/80 overflow-hidden">
							{/* Inner shadow for glassy look */}
							<span className="absolute inset-0 rounded-full pointer-events-none" style={{boxShadow:'inset 0 2px 8px 0 rgba(161,196,253,0.18), inset 0 1px 4px 0 rgba(0,0,0,0.06)'}} />
							{/* Animated Hamburger/X Menu - 3D centered, logic swapped on mobile */}
							<span className="relative w-5 h-5 sm:w-8 sm:h-8 flex flex-col items-center justify-center mx-auto my-auto">
								{isMobile
									? // On mobile, swap the logic: show hamburger when closed, X when open
										[0, 1, 2].map((i) => (
											<motion.span
												key={i}
												className="block w-4 h-0.5 sm:w-6 sm:h-1 rounded bg-blue-500 dark:bg-blue-300 shadow-lg mb-1 last:mb-0"
												style={{
													boxShadow: '0 2px 8px 0 rgba(24, 58, 117, 0.18), 0 1px 2px 0 rgba(0,0,0,0.10)',
													transform: !isSidebarOpen
														? 'translateZ(0px)'
														: i === 0
															? 'translateY(7px) rotate(45deg) translateZ(2px)'
															: i === 1
															? 'scaleX(0.5) opacity(0)'
															: 'translateY(-7px) rotate(-45deg) translateZ(2px)',
												}}
												animate={!isSidebarOpen ? {
													rotate: 0,
													y: 0,
													scaleX: 1,
													opacity: 1,
												} : i === 0 ? {
													rotate: 45,
													y: 7,
													scaleX: 1,
													opacity: 1,
												} : i === 1 ? {
													scaleX: 0.5,
													opacity: 0,
												} : {
													rotate: -45,
													y: -7,
													scaleX: 1,
													opacity: 1,
												}}
												transition={{ type: 'tween', duration: 0.15, ease: 'easeInOut' }}
											/>
										))
									: // On desktop, keep the original logic
										[0, 1, 2].map((i) => (
											<motion.span
												key={i}
												className="block w-4 h-0.5 sm:w-6 sm:h-1 rounded bg-blue-500 dark:bg-blue-300 shadow-lg mb-1 last:mb-0"
												style={{
													boxShadow: '0 2px 8px 0 rgba(24, 58, 117, 0.18), 0 1px 2px 0 rgba(0,0,0,0.10)',
													transform: isSidebarOpen
														? 'translateZ(0px)'
														: i === 0
															? 'translateY(7px) rotate(45deg) translateZ(2px)'
															: i === 1
															? 'scaleX(0.5) opacity(0)'
															: 'translateY(-7px) rotate(-45deg) translateZ(2px)',
												}}
												animate={isSidebarOpen ? {
													rotate: 0,
													y: 0,
													scaleX: 1,
													opacity: 1,
												} : i === 0 ? {
													rotate: 45,
													y: 7,
													scaleX: 1,
													opacity: 1,
												} : i === 1 ? {
													scaleX: 0.5,
													opacity: 0,
												} : {
													rotate: -45,
													y: -7,
													scaleX: 1,
													opacity: 1,
												}}
												transition={{ type: 'tween', duration: 0.15, ease: 'easeInOut' }}
											/>
										))}
							</span>
						</span>
					</motion.button>
				</div>
				{/* Logo/name area (unchanged) */}
				<div className="flex items-center justify-center mb-0" style={{ minHeight: '56px' }}>
					{/* Place your logo/name here, unchanged */}
				</div>
				<nav className='-mt-6 flex-grow'>
					{SIDEBAR_ITEMS.map((item) => {
						const isActive = location.pathname === item.href;
						return (
						<Link key={item.href} to={item.href}>
								<motion.div
									className={`flex items-center p-2 sm:p-4 text-xs sm:text-base font-medium rounded-xl mb-2 group transition-all duration-200
										${isActive ? 'bg-gradient-to-r from-blue-200/80 via-pink-200/80 to-yellow-100/80 dark:from-blue-900/60 dark:via-purple-900/60 dark:to-pink-900/60 shadow-lg border-l-4 border-blue-400 dark:border-blue-300 font-bold' : 'hover:bg-slate-100 dark:hover:bg-gray-700'}
										text-slate-700 dark:text-gray-300`}
									style={!isDarkMode ? { textShadow: '0 1px 4px rgba(0,0,0,0.10)' } : undefined}
									whileHover={{ scale: 1.03 }}
									whileTap={{ scale: 0.98 }}
									transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
								>
									<item.icon
										size={22}
										style={{
											color: item.color,
											minWidth: "22px",
											filter: isActive ? 'drop-shadow(0 2px 8px #a1c4fd)' : undefined,
											transition: 'filter 0.2s',
										}}
									/>
								<AnimatePresence>
									{isSidebarOpen && (
										<motion.span
												className={`ml-4 whitespace-nowrap group-hover:text-slate-900 dark:group-hover:text-white transition-colors ${isActive ? 'font-bold' : ''} text-xs sm:text-sm md:text-base`}
											initial={{ opacity: 0, width: 0 }}
											animate={{ opacity: 1, width: "auto" }}
											exit={{ opacity: 0, width: 0 }}
											transition={{ duration: 0.2, delay: 0.3 }}
										>
											{item.name}
										</motion.span>
									)}
								</AnimatePresence>
							</motion.div>
						</Link>
						);
					})}
				</nav>
			</div>
		</motion.div>
	);
};
export default Sidebar;
