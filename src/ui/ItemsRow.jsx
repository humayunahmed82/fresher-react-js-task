const ItemsRow = ({ children }) => {
	return (
		<div className="p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 -m-3">
			{children}
		</div>
	);
};

export default ItemsRow;
