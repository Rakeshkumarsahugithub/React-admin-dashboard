import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const userGrowthData = [
	{ month: "Jan", users: 1000 },
	{ month: "Feb", users: 1500 },
	{ month: "Mar", users: 2000 },
	{ month: "Apr", users: 3000 },
	{ month: "May", users: 4000 },
	{ month: "Jun", users: 5000 },
];

const UserGrowthChart = () => {
	const { isDarkMode } = useTheme();

	return (
		<motion.div
			className='bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg rounded-xl p-6 border border-slate-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<h2 className='text-xl font-semibold text-slate-800 dark:text-gray-100 mb-4'>User Growth</h2>
			<div className='h-[320px]'>
				<ResponsiveContainer width='100%' height='100%'>
					<LineChart data={userGrowthData}>
						<CartesianGrid strokeDasharray='3 3' stroke={isDarkMode ? '#374151' : '#E2E8F0'} />
						<XAxis dataKey='month' stroke={isDarkMode ? '#9CA3AF' : '#64748B'} />
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
						<Line
							type='monotone'
							dataKey='users'
							stroke='#8B5CF6'
							strokeWidth={2}
							dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }}
							activeDot={{ r: 8 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default UserGrowthChart;
