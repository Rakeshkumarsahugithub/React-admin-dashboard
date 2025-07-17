import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const productPerformanceData = [
	{ name: "Product A", sales: 4000, revenue: 2400, profit: 2400 },
	{ name: "Product B", sales: 3000, revenue: 1398, profit: 2210 },
	{ name: "Product C", sales: 2000, revenue: 9800, profit: 2290 },
	{ name: "Product D", sales: 2780, revenue: 3908, profit: 2000 },
	{ name: "Product E", sales: 1890, revenue: 4800, profit: 2181 },
];

const ProductPerformance = () => {
	const { isDarkMode } = useTheme();

	return (
		<motion.div
			className='bg-white/90 dark:bg-gray-800/90 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-slate-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className='text-xl font-semibold text-slate-800 dark:text-gray-100 mb-4'>Product Performance</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<BarChart data={productPerformanceData}>
						<CartesianGrid strokeDasharray='3 3' stroke={isDarkMode ? '#374151' : '#E2E8F0'} />
						<XAxis dataKey='name' stroke={isDarkMode ? '#9CA3AF' : '#64748B'} />
						<YAxis stroke={isDarkMode ? '#9CA3AF' : '#64748B'} />
						<Tooltip
							contentStyle={{
								backgroundColor: isDarkMode ? "rgba(31, 41, 55, 0.95)" : "rgba(255, 255, 255, 0.95)",
								borderColor: isDarkMode ? "#4B5563" : "#E2E8F0",
								color: isDarkMode ? "#E5E7EB" : "#334155",
								borderRadius: "12px",
								boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
							}}
							itemStyle={{ color: isDarkMode ? "#E5E7EB" : "#334155" }}
						/>
						<Legend />
						<Bar dataKey='sales' fill='#8B5CF6' />
						<Bar dataKey='revenue' fill='#10B981' />
						<Bar dataKey='profit' fill='#F59E0B' />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default ProductPerformance;
