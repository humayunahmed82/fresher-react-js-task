import Checkbox from "./checkbox";

const FilesSelected = ({ selectedItem, onHandelAll }) => {
	return (
		<div className="flex items-center">
			<div className="flex-shrink-0 custom-label">
				<Checkbox
					id="all"
					onChangeHandel={onHandelAll}
					isChecked={selectedItem.length !== 0 && true}
				/>
			</div>
			<div className="text-[20px] font-semibold text-stone-900 flex-1 ml-3">
				{selectedItem.length} Files Selects
			</div>
		</div>
	);
};

export default FilesSelected;
