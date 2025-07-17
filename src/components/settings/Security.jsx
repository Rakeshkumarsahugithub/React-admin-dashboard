import { Lock } from "lucide-react";
import ThreeDCard from "../common/ThreeDCard";
import ToggleSwitch from "./ToggleSwitch";
import { useState } from "react";

const Security = () => {
	const [twoFactor, setTwoFactor] = useState(false);

	return (
		<ThreeDCard className="mb-8 p-0 overflow-visible bg-gradient-to-br from-white/80 via-blue-50/60 to-purple-50/60 dark:from-slate-800/80 dark:via-blue-900/60 dark:to-purple-900/60">
			<div className="flex items-center gap-3 p-6 pb-2">
				<Lock className="text-indigo-500 dark:text-indigo-400 mr-2" size={24} />
				<h2 className="text-xl font-semibold text-slate-800 dark:text-gray-100">Security</h2>
			</div>
			<div className="px-6 pb-6 flex flex-col gap-4">
				<ToggleSwitch
					label={"Two-Factor Authentication"}
					isOn={twoFactor}
					onToggle={() => setTwoFactor(!twoFactor)}
				/>
				<button
					className="mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-bold py-2 px-6 rounded-xl shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 w-full sm:w-auto self-end"
				>
					Change Password
				</button>
			</div>
		</ThreeDCard>
	);
};
export default Security;
