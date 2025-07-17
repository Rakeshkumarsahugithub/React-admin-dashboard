import { useState } from "react";
import ThreeDCard from "../common/ThreeDCard";
import { HelpCircle, Plus } from "lucide-react";

const ConnectedAccounts = () => {
	const [connectedAccounts, setConnectedAccounts] = useState([
		{
			id: 1,
			name: "Google",
			connected: true,
			icon: "/google.png",
		},
		{
			id: 2,
			name: "Facebook",
			connected: false,
			icon: "/facebook.svg",
		},
		{
			id: 3,
			name: "Twitter",
			connected: true,
			icon: "/x.png",
		},
	]);
	return (
		<ThreeDCard className="mb-8 p-0 overflow-visible bg-gradient-to-br from-white/80 via-blue-50/60 to-purple-50/60 dark:from-slate-800/80 dark:via-blue-900/60 dark:to-purple-900/60">
			<div className="flex items-center gap-3 p-6 pb-2">
				<HelpCircle className="text-indigo-500 dark:text-indigo-400 mr-2" size={24} />
				<h2 className="text-xl font-semibold text-slate-800 dark:text-gray-100">Connected Accounts</h2>
			</div>
			<div className="px-6 pb-6 flex flex-col gap-4">
				{connectedAccounts.map((account) => (
					<div key={account.id} className='flex items-center justify-between py-3'>
						<div className='flex gap-1 items-center'>
							<img src={account.icon} alt='Social img' className='size-6 object-cover rounded-full mr-2' />
							<span className='text-gray-700 dark:text-gray-300 font-medium'>{account.name}</span>
						</div>
						<button
							className={`px-4 py-1.5 rounded-lg font-semibold shadow transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 text-white text-sm ${
								account.connected ? "bg-green-500 hover:bg-green-600" : "bg-gray-500 hover:bg-gray-700"
							}`}
							onClick={() => {
								setConnectedAccounts(
									connectedAccounts.map((acc) => {
										if (acc.id === account.id) {
											return {
												...acc,
												connected: !acc.connected,
											};
										}
										return acc;
									})
								);
							}}
						>
							{account.connected ? "Connected" : "Connect"}
						</button>
					</div>
				))}
				<button className="mt-4 flex items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-bold py-2 px-6 rounded-xl shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 w-full sm:w-auto self-end">
					<Plus size={18} className='mr-2' /> Add Account
				</button>
			</div>
		</ThreeDCard>
	);
};
export default ConnectedAccounts;
