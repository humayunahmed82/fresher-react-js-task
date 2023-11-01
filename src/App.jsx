import { useRef, useState } from "react";
import Item from "./components/Item";
import ItemsRow from "./ui/ItemsRow";
import FilesSelected from "./ui/FilesSelected";

const images = [
	{
		id: 1,
		image: "/public/images/image-1.webp",
	},
	{
		id: 2,
		image: "/public/images/image-2.webp",
	},
	{
		id: 3,
		image: "/public/images/image-3.webp",
	},
	{
		id: 4,
		image: "/public/images/image-4.webp",
	},
	{
		id: 5,
		image: "/public/images/image-5.webp",
	},
	{
		id: 6,
		image: "/public/images/image-6.webp",
	},
	{
		id: 7,
		image: "/public/images/image-7.webp",
	},
	{
		id: 8,
		image: "/public/images/image-8.webp",
	},
	{
		id: 9,
		image: "/public/images/image-9.webp",
	},
	{
		id: 10,
		image: "/public/images/image-10.jpeg",
	},
	{
		id: 11,
		image: "/public/images/image-11.jpeg",
	},
];

const App = () => {
	const [imageItem, setImageItem] = useState(images);
	const [selectedItem, setSelectedItem] = useState([]);

	const dragItem = useRef(0);
	const draggedOverItem = useRef(0);

	const handelSort = () => {
		const imageClone = [...imageItem];
		const temp = imageClone[dragItem.current];
		imageClone[dragItem.current] = imageClone[draggedOverItem.current];
		imageClone[draggedOverItem.current] = temp;

		setImageItem(imageClone);
	};

	const handelChecked = (id) => {
		if (selectedItem.includes(id)) {
			setSelectedItem(selectedItem.filter((elId) => elId !== id));
		} else {
			setSelectedItem([...selectedItem, id]);
		}
		const newData = imageItem.map((item) => {
			if (item.id === id) {
				return { ...item };
			}
			return item;
		});
		setImageItem(newData);
	};

	const handelAllCheckedRemove = () => {
		setSelectedItem([]);
	};

	const handelDeleting = () => {
		const newData = imageItem.filter((item) => !selectedItem.includes(item.id));
		setImageItem(newData);
		setSelectedItem([]);
	};

	return (
		<div className="bg-white max-w-5xl mx-auto mt-4 rounded-lg overflow-hidden">
			<div className="border-b border-b-gray-300 py-4 px-8 flex justify-between items-center">
				{selectedItem.length === 0 ? (
					<h2 className="text-[20px] font-semibold text-stone-900">Gallery</h2>
				) : (
					<>
						<FilesSelected
							selectedItem={selectedItem}
							onHandelAll={handelAllCheckedRemove}
						/>

						<button
							className="text-base text-red-700 font-medium"
							onClick={handelDeleting}
						>
							Delete files
						</button>
					</>
				)}
			</div>

			<ItemsRow>
				{imageItem.map((image, index) => (
					<div className="p-3 first:col-span-2 first:row-span-2" key={image.id}>
						<Item
							image={image}
							handelSort={handelSort}
							handelChecked={handelChecked}
							dragStart={() => (dragItem.current = index)}
							dragEnter={() => (draggedOverItem.current = index)}
							selectedItem={selectedItem}
						/>
					</div>
				))}
			</ItemsRow>
		</div>
	);
};

export default App;
