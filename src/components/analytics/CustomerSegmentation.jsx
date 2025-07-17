import { motion } from "framer-motion";
import {
	ResponsiveContainer,
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Legend,
	Tooltip,
} from "recharts";
import { useTheme } from "../../context/ThemeContext";

const customerSegmentationData = [
	{ subject: "Engagement", A: 120, B: 110, fullMark: 150 },
	{ subject: "Loyalty", A: 98, B: 130, fullMark: 150 },
	{ subject: "Satisfaction", A: 86, B: 130, fullMark: 150 },
	{ subject: "Spend", A: 99, B: 100, fullMark: 150 },
	{ subject: "Frequency", A: 85, B: 90, fullMark: 150 },
	{ subject: "Recency", A: 65, B: 85, fullMark: 150 },
];

const CustomerSegmentation = () => {
	const { isDarkMode } = useTheme();

	return (
		<motion.div
			className='bg-white/90 dark:bg-gray-800/90 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-slate-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.6 }}
		>
			<h2 className='text-xl font-semibold text-slate-800 dark:text-gray-100 mb-4'>Customer Segmentation</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<RadarChart cx='50%' cy='50%' outerRadius='80%' data={customerSegmentationData}>
						<PolarGrid stroke={isDarkMode ? '#374151' : '#E2E8F0'} />
						<PolarAngleAxis dataKey='subject' stroke={isDarkMode ? '#9CA3AF' : '#64748B'} />
						<PolarRadiusAxis angle={30} domain={[0, 150]} stroke={isDarkMode ? '#9CA3AF' : '#64748B'} />
						<Radar name='Segment A' dataKey='A' stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.6} />
						<Radar name='Segment B' dataKey='B' stroke='#10B981' fill='#10B981' fillOpacity={0.6} />
						<Legend />
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
					</RadarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default CustomerSegmentation;
