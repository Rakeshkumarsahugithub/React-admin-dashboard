import { motion } from "framer-motion";

const SettingSection = ({ icon: Icon, title, children }) => {
	return (
		<motion.div
			className='bg-white/90 dark:bg-gray-800/90 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-slate-200 dark:border-gray-700 mb-8 hover:shadow-xl transition-shadow duration-300'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className='flex items-center mb-4'>
				<Icon className='text-indigo-500 dark:text-indigo-400 mr-4' size='24' />
				<h2 className='text-xl font-semibold text-slate-800 dark:text-gray-100'>{title}</h2>
			</div>
			{children}
		</motion.div>
	);
};
export default SettingSection;
