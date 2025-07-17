import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { motion } from "framer-motion";
import { useTheme } from "./context/ThemeContext";

import Sidebar from "./components/common/Sidebar";

import OverviewPage from "./pages/OverviewPage";
import ProductsPage from "./pages/ProductsPage";
import UsersPage from "./pages/UsersPage";
import SalesPage from "./pages/SalesPage";
import OrdersPage from "./pages/OrdersPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from "./pages/SettingsPage";

function AnimatedBackground() {
	const { isDarkMode } = useTheme();
	const lightGradients = [
		'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 40%, #fbc2eb 70%, #f9d423 100%)',
		'linear-gradient(120deg, #fbc2eb 0%, #f9d423 40%, #a1c4fd 70%, #c2e9fb 100%)',
		'linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 40%, #fbc2eb 70%, #f9d423 100%)',
	];
	const darkGradients = [
		'linear-gradient(120deg, #0f2027 0%, #ff512f 15%, #f9d423 30%, #20e3b2 50%, #2196f3 65%, #8f5cff 80%, #ee9ca7 100%)',
		'linear-gradient(120deg, #0f2027 0%, #ee9ca7 15%, #8f5cff 30%, #2196f3 50%, #20e3b2 65%, #f9d423 80%, #ff512f 100%)',
		'linear-gradient(120deg, #0f2027 0%, #ff512f 15%, #f9d423 30%, #20e3b2 50%, #2196f3 65%, #8f5cff 80%, #ee9ca7 100%)',
	];
	return (
		<div className='fixed inset-0 z-0 pointer-events-none'>
			<motion.div
				className='absolute inset-0'
				style={{ background: isDarkMode ? darkGradients[0] : lightGradients[0] }}
				animate={{
					background: isDarkMode ? darkGradients : lightGradients,
				}}
				transition={{ duration: 16, repeat: Infinity, ease: 'linear', times: [0, 0.5, 1] }}
			/>
			<div className='absolute inset-0 backdrop-blur-sm' />
		</div>
	);
}

function App() {
	return (
		<ThemeProvider>
			<div className='flex h-screen bg-slate-50 dark:bg-gray-900 text-slate-800 dark:text-gray-100 overflow-hidden'>
				<AnimatedBackground />
				<Sidebar />
				<Routes>
					<Route path='/' element={<OverviewPage />} />
					<Route path='/products' element={<ProductsPage />} />
					<Route path='/users' element={<UsersPage />} />
					<Route path='/sales' element={<SalesPage />} />
					<Route path='/orders' element={<OrdersPage />} />
					<Route path='/analytics' element={<AnalyticsPage />} />
					<Route path='/settings' element={<SettingsPage />} />
				</Routes>
			</div>
		</ThemeProvider>
	);
}

export default App;
