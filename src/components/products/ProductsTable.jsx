import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const PRODUCT_DATA = [
	{ 
		id: 1, 
		name: "Wireless Earbuds", 
		category: "Electronics", 
		price: 59.99, 
		stock: 143, 
		sales: 1200,
		image: "https://m.media-amazon.com/images/I/61G8QDKAmwL._UF350,350_QL50_.jpg"
	},
	{ 
		id: 2, 
		name: "Wallet", 
		category: "Accessories", 
		price: 39.99, 
		stock: 89, 
		sales: 800,
		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiKZgks4wkDn8xRtykHCsT2pC2eXzMtwl8tA&s"
	},
	{ 
		id: 3, 
		name: "Smart Watch", 
		category: "Electronics", 
		price: 199.99, 
		stock: 56, 
		sales: 650,
		image: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg"
	},
	{ 
		id: 4, 
		name: "Yoga Mat", 
		category: "Fitness", 
		price: 29.99, 
		stock: 210, 
		sales: 950,
		image: "https://dukaan.b-cdn.net/700x700/webp/media/a0fee709-2209-4d74-81e8-c55ebfcbce47.jpg"
	},
	{ 
		id: 5, 
		name: "Coffee Maker", 
		category: "Home", 
		price: 79.99, 
		stock: 78, 
		sales: 720,
		image: "https://img.tatacliq.com/images/i20//437Wx649H/MP000000023915040_437Wx649H_202409301639381.jpeg"
	},
];

const ProductsTable = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = PRODUCT_DATA.filter(
			(product) => product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term)
		);

		setFilteredProducts(filtered);
	};

	return (
		<motion.div
			className='bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg rounded-xl p-6 border border-slate-200 dark:border-gray-700 mb-8 hover:shadow-xl transition-shadow duration-300'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-slate-800 dark:text-gray-100'>Product List</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search products...'
						className='bg-slate-100 dark:bg-gray-700 text-slate-800 dark:text-white placeholder-slate-500 dark:placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 border border-slate-200 dark:border-gray-600'
						onChange={handleSearch}
						value={searchTerm}
					/>
					<Search className='absolute left-3 top-2.5 text-slate-500 dark:text-gray-400' size={18} />
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
								Category
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-slate-600 dark:text-gray-400 uppercase tracking-wider'>
								Price
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-slate-600 dark:text-gray-400 uppercase tracking-wider'>
								Stock
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-slate-600 dark:text-gray-400 uppercase tracking-wider'>
								Sales
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-slate-600 dark:text-gray-400 uppercase tracking-wider'>
								Actions
							</th>
						</tr>
					</thead>

					<tbody className='divide-y divide-slate-200 dark:divide-gray-700'>
						{filteredProducts.map((product) => (
							<motion.tr
								key={product.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
								className='hover:bg-slate-50 dark:hover:bg-gray-700/50 transition-colors'
							>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-800 dark:text-gray-100 flex gap-2 items-center'>
									<img
										src={product.image}
										alt={`${product.name} img`}
										className='size-10 rounded-full object-cover'
									/>
									{product.name}
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-gray-300'>
									{product.category}
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-gray-300'>
									${product.price.toFixed(2)}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-gray-300'>{product.stock}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-gray-300'>{product.sales}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-gray-300'>
									<button className='text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 mr-2 transition-colors'>
										<Edit size={18} />
									</button>
									<button className='text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 transition-colors'>
										<Trash2 size={18} />
									</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};
export default ProductsTable;
