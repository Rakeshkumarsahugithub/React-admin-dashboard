import { motion } from "framer-motion";

const StatCard = ({ name, icon: Icon, value, color }) => {
	return (
		<motion.div
			className='bg-white/90 dark:bg-gray-800/90 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-slate-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300'
			whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
		>
			<div className='px-4 py-5 sm:p-6'>
				<span className='flex items-center text-sm font-medium text-slate-600 dark:text-gray-400'>
					<Icon size={20} className='mr-2' style={{ color }} />
					{name}
				</span>
				<p className='mt-1 text-3xl font-semibold text-slate-800 dark:text-gray-100'>{value}</p>
			</div>
		</motion.div>
	);
};
export default StatCard;
