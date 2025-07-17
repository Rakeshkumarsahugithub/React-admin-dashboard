const ToggleSwitch = ({ label, isOn, onToggle }) => {
	return (
		<div className='flex items-center justify-between py-3'>
			<span className='text-slate-700 dark:text-gray-300'>{label}</span>
			<button
				className={`
        relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800
        ${isOn ? "bg-indigo-600" : "bg-slate-300 dark:bg-gray-600"}
        `}
				onClick={onToggle}
			>
				<span
					className={`inline-block size-4 transform transition-transform bg-white rounded-full shadow-sm
            ${isOn ? "translate-x-6" : "translate-x-1"}
            `}
				/>
			</button>
		</div>
	);
};
export default ToggleSwitch;
