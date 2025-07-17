import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { useTheme } from "../../context/ThemeContext";

const orderStatusData = [
	{ name: "Pending", value: 30 },
	{ name: "Processing", value: 45 },
	{ name: "Shipped", value: 60 },
	{ name: "Delivered", value: 120 },
];
const COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FED766", "#2AB7CA"];

const OrderDistribution = () => {
	const { isDarkMode } = useTheme();

	return (
		<motion.div
			className='bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg rounded-xl p-6 border border-slate-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<h2 className='text-xl font-semibold text-slate-800 dark:text-gray-100 mb-4'>Order Status Distribution</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<PieChart>
						<Pie
							data={orderStatusData}
							cx='50%'
							cy='50%'
							outerRadius={80}
							fill='#8884d8'
							dataKey='value'
							label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
						>
							{orderStatusData.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
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
					</PieChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default OrderDistribution;
