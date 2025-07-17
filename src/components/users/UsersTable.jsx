import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const userData = [
	{ id: 1, name: "Rakesh Kumar Sahu", email: "sahurks1234@gmail.com", role: "Admin", status: "Active" },
	{ id: 2, name: "Akash Kumar Sahu", email: "sahurks12345@gmail.com", role: "Admin", status: "Active" },
	{ id: 3, name: "Ramesh Rout", email: "ramesh@example.com", role: "Customer", status: "Inactive" },
	{ id: 4, name: "Akankshya M", email: "akku@example.com", role: "Customer", status: "Active" },
	{ id: 5, name: "Charlie chaplin", email: "charlie@example.com", role: "Moderator", status: "Active" },
];

const UsersTable = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredUsers, setFilteredUsers] = useState(userData);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = userData.filter(
			(user) => user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
		);
		setFilteredUsers(filtered);
	};

	return (
		<motion.div
			className='bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg rounded-xl p-6 border border-slate-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6'>
				<h2 className='text-xl font-semibold text-slate-800 dark:text-gray-100'>Users</h2>
				<div className='relative w-full max-w-xs sm:max-w-sm'>
					<input
						type='text'
						placeholder='Search users...'
						className='w-full bg-slate-100 dark:bg-gray-700 text-slate-800 dark:text-white placeholder-slate-500 dark:placeholder-gray-400 rounded-md pl-8 pr-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 border border-slate-200 dark:border-gray-600 sm:rounded-lg sm:pl-10 sm:pr-4 sm:py-2 sm:text-base'
						value={searchTerm}
						onChange={handleSearch}
					/>
					<Search className='absolute left-2 top-1.5 text-slate-500 dark:text-gray-400 sm:left-3 sm:top-2.5' size={16} />
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-slate-200 dark:divide-gray-700'>
					<thead>
						<tr>
							<th className='px-6 py-3 text-left text-xs font-medium text-slate-600 dark:text-gray-400 uppercase tracking-wider'>
								Name
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-slate-600 dark:text-gray-400 uppercase tracking-wider'>
								Email
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-slate-600 dark:text-gray-400 uppercase tracking-wider'>
								Role
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-slate-600 dark:text-gray-400 uppercase tracking-wider'>
								Status
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-slate-600 dark:text-gray-400 uppercase tracking-wider'>
								Actions
							</th>
						</tr>
					</thead>

					<tbody className='divide-y divide-slate-200 dark:divide-gray-700'>
						{filteredUsers.map((user) => (
							<motion.tr
								key={user.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
								className='hover:bg-slate-50 dark:hover:bg-gray-700/50 transition-colors'
							>
								<td className='px-6 py-4 whitespace-nowrap'>
									<div className='flex items-center'>
										<div className='flex-shrink-0 h-10 w-10'>
											<div className='h-10 w-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center text-white font-semibold'>
												{user.name.charAt(0)}
											</div>
										</div>
										<div className='ml-4'>
											<div className='text-sm font-medium text-slate-800 dark:text-gray-100'>{user.name}</div>
										</div>
									</div>
								</td>

								<td className='px-6 py-4 whitespace-nowrap'>
									<div className='text-sm text-slate-600 dark:text-gray-300'>{user.email}</div>
								</td>
								<td className='px-6 py-4 whitespace-nowrap'>
									<span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100'>
										{user.role}
									</span>
								</td>

								<td className='px-6 py-4 whitespace-nowrap'>
									<span
										className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
											user.status === "Active"
												? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
												: "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100"
										}`}
									>
										{user.status}
									</span>
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-gray-300'>
									<button className='text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 mr-2 transition-colors'>Edit</button>
									<button className='text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 transition-colors'>Delete</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};
export default UsersTable;

