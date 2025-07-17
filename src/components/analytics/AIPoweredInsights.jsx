import { motion } from "framer-motion";
import { TrendingUp, Users, ShoppingBag, DollarSign } from "lucide-react";

const INSIGHTS = [
	{
		icon: TrendingUp,
		color: "text-green-500",
		bgColor: "bg-green-100 dark:bg-green-900/20",
		insight: "Revenue is up 15% compared to last month, driven primarily by a successful email campaign.",
	},
	{
		icon: Users,
		color: "text-blue-500",
		bgColor: "bg-blue-100 dark:bg-blue-900/20",
		insight: "Customer retention has improved by 8% following the launch of the new loyalty program.",
	},
	{
		icon: ShoppingBag,
		color: "text-purple-500",
		bgColor: "bg-purple-100 dark:bg-purple-900/20",
		insight: 'Product category "Electronics" shows the highest growth potential based on recent market trends.',
	},
	{
		icon: DollarSign,
		color: "text-yellow-500",
		bgColor: "bg-yellow-100 dark:bg-yellow-900/20",
		insight: "Optimizing pricing strategy could potentially increase overall profit margins by 5-7%.",
	},
];

const AIPoweredInsights = () => {
	return (
		<motion.div
			className='bg-white/90 dark:bg-gray-800/90 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-slate-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 1.0 }}
		>
			<h2 className='text-xl font-semibold text-slate-800 dark:text-gray-100 mb-4'>AI-Powered Insights</h2>
			<div className='space-y-4'>
				{INSIGHTS.map((item, index) => (
					<div key={index} className='flex items-center space-x-3 p-3 rounded-lg bg-slate-50 dark:bg-gray-700/50 hover:bg-slate-100 dark:hover:bg-gray-700/70 transition-colors'>
						<div className={`p-2 rounded-full ${item.bgColor}`}>
							<item.icon className={`size-6 ${item.color}`} />
						</div>
						<p className='text-slate-700 dark:text-gray-300'>{item.insight}</p>
					</div>
				))}
			</div>
		</motion.div>
	);
};
export default AIPoweredInsights;
