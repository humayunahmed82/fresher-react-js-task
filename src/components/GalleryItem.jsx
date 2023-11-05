import CheckBoxStyle from "../ui/CheckBoxStyle";

const GalleryItem = ({
	image,
	handelSort,
	dragStart,
	dragEnter,
	handelChecked,
	selectedItem,
}) => {
	const selectedId = selectedItem.includes(image.id);

	return (
		<div
			className={`rounded-md border border-gray-300 overflow-hidden relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-stone-900 before:opacity-0 hover:before:opacity-50 before:transition-all before:duration-200 before:ease-linear z-10 group/item cursor-pointer ${
				selectedId ? "before:opacity-20" : ""
			}`}
			draggable
			onDragStart={dragStart}
			onDragEnter={dragEnter}
			onDragEnd={handelSort}
			onDragOver={(e) => e.preventDefault()}
		>
			<img className="w-full" src={image.image} alt="Image" />

			<div
				className={`custom-label absolute top-4 left-4 opacity-0 transition-all duration-200 ease-linear group-hover/item:opacity-100 ${
					selectedId ? "opacity-100" : ""
				} `}
			>
				<CheckBoxStyle
					id={image.id}
					onChangeHandel={() => handelChecked(image.id)}
					isChecked={selectedId}
				/>
			</div>
		</div>
	);
};

export default GalleryItem;
