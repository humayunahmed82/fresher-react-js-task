const GalleryBox = ({ children }) => {
	return (
		<div className="container">
			<div className="bg-white max-w-5xl mx-auto my-4 lg:my-8 rounded-lg overflow-hidden">
				{children}
			</div>
		</div>
	);
};

export default GalleryBox;
