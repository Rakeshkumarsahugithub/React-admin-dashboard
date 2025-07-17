import { motion } from "framer-motion";
import ThreeDCard from "../common/ThreeDCard";
import { Trash2, AlertTriangle } from "lucide-react";

const DangerZone = () => {
	return (
		<ThreeDCard className="mb-8 p-0 overflow-visible bg-white shadow-[0_0_32px_0_rgba(239,68,68,0.15)] relative rounded-none min-h-[280px] flex flex-col justify-center">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.2 }}
			>
				{/* Subtle animated glow (no border) */}
				<span className="pointer-events-none absolute inset-0 z-10 rounded-none animate-pulse" style={{boxShadow:'0 0 48px 8px rgba(239,68,68,0.12), 0 0 0 0 rgba(239,68,68,0.08)'}} />

				{/* Header with icons */}
				<div className="flex items-center gap-3 mb-2 z-20 relative justify-center">
					<AlertTriangle className='text-yellow-400 animate-bounce' size={28} />
					<Trash2 className='text-red-500' size={24} />
					<h2 className='text-2xl font-extrabold text-red-700 tracking-wide uppercase drop-shadow'>Danger Zone</h2>
				</div>

				{/* Description box - solid red, no white, slight dark overlay for depth */}
				<div className="bg-red-100/90 border border-red-400/30 rounded-lg px-6 py-4 mb-4 mx-auto max-w-xl shadow-inner text-center">
					<p className='text-red-700 font-medium text-base'>
						<strong className="text-red-800">Warning:</strong> Permanently delete your account and all of your content.<br />
						<span className="text-red-600">This action cannot be undone.</span>
					</p>
				</div>

				{/* Divider */}
				<div className="w-full flex justify-center mb-4">
					<span className="block w-24 h-1 rounded-full bg-gradient-to-r from-red-400 via-pink-400 to-red-700 opacity-60" />
				</div>

				{/* Centered button */}
				<div className="flex justify-center">
					<button
						className='bg-gradient-to-r from-red-600 via-pink-600 to-red-700 hover:from-red-700 hover:to-pink-700 text-white font-bold py-2 px-6 rounded-xl shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400/50 text-base z-20 relative'
					>
						Delete Account
					</button>
				</div>
			</motion.div>
		</ThreeDCard>
	);
};
export default DangerZone;
