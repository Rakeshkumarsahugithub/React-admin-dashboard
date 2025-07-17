import { useState } from "react";
import ThreeDCard from "../common/ThreeDCard";
import { Bell, Mail, Smartphone } from "lucide-react";
import ToggleSwitch from "./ToggleSwitch";

const Notifications = () => {
	const [notifications, setNotifications] = useState({
		push: true,
		email: false,
		sms: true,
	});

	return (
		<ThreeDCard className="mb-8 p-0 overflow-visible bg-gradient-to-br from-white/80 via-blue-50/60 to-purple-50/60 dark:from-slate-800/80 dark:via-blue-900/60 dark:to-purple-900/60">
			<div className="flex items-center gap-3 p-6 pb-2">
				<Bell className="text-indigo-500 dark:text-indigo-400 mr-2" size={24} />
				<h2 className="text-xl font-semibold text-slate-800 dark:text-gray-100">Notifications</h2>
			</div>
			<div className="px-6 pb-6 flex flex-col gap-4">
				<div className="flex items-center gap-3">
					<Bell className="text-blue-400 bg-blue-100 dark:bg-blue-900 rounded-full p-1" size={24} />
					<span className="flex-1 text-slate-700 dark:text-gray-200 font-medium">Push Notifications</span>
					<ToggleSwitch
						isOn={notifications.push}
						onToggle={() => setNotifications({ ...notifications, push: !notifications.push })}
					/>
				</div>
				<div className="flex items-center gap-3">
					<Mail className="text-pink-400 bg-pink-100 dark:bg-pink-900 rounded-full p-1" size={24} />
					<span className="flex-1 text-slate-700 dark:text-gray-200 font-medium">Email Notifications</span>
					<ToggleSwitch
						isOn={notifications.email}
						onToggle={() => setNotifications({ ...notifications, email: !notifications.email })}
					/>
				</div>
				<div className="flex items-center gap-3">
					<Smartphone className="text-green-400 bg-green-100 dark:bg-green-900 rounded-full p-1" size={24} />
					<span className="flex-1 text-slate-700 dark:text-gray-200 font-medium">SMS Notifications</span>
					<ToggleSwitch
						isOn={notifications.sms}
						onToggle={() => setNotifications({ ...notifications, sms: !notifications.sms })}
					/>
				</div>
				<button className="mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-bold py-2 px-6 rounded-xl shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 w-full sm:w-auto self-end">
					Save Changes
				</button>
			</div>
		</ThreeDCard>
	);
};
export default Notifications;
