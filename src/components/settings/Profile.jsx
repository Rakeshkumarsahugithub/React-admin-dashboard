import ThreeDCard from "../common/ThreeDCard";

const Profile = () => {
	return (
		<ThreeDCard className="mb-4 sm:mb-8 p-0 overflow-visible bg-gradient-to-br from-white/80 via-blue-50/60 to-purple-50/60 dark:from-slate-800/80 dark:via-blue-900/60 dark:to-purple-900/60">
			<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4 sm:p-8">
				<div className="relative flex-shrink-0 mb-2 sm:mb-0">
					<img
						src="https://media.licdn.com/dms/image/v2/D5635AQGGrT6enKBcxg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1716409421229?e=1753344000&v=beta&t=xy6UFckt-SXY2uQ8UURYEteNBIrFoAGEap_Q9IshyjY"
						alt="Profile"
						className="rounded-full w-20 h-20 sm:w-28 sm:h-28 object-cover border-4 border-white shadow-xl dark:border-slate-700 mx-auto"
					/>
					<div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-400 border-2 border-white dark:border-slate-700 shadow-md" title="Online" />
				</div>
				<div className="flex-1 text-center sm:text-left">
					<h3 className="text-lg sm:text-2xl font-bold text-slate-800 dark:text-gray-100 mb-1">Rakesh Kumar Sahu</h3>
					<p className="text-slate-600 dark:text-gray-400 mb-2 text-sm sm:text-base">sahurks1234@gmail.com</p>
					<span className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">Pro Member</span>
				</div>
				<div className="flex flex-col gap-2 w-full sm:w-auto mt-3 sm:mt-0">
					<button
						className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 text-white font-bold py-2 px-4 sm:px-6 rounded-xl shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 w-full sm:w-auto"
					>
						Edit Profile
					</button>
				</div>
			</div>
		</ThreeDCard>
	);
};
export default Profile;
