const CheckBoxStyle = ({ id, onChangeHandel, isChecked }) => {
	return (
		<>
			<input
				className="hidden"
				type="Checkbox"
				id={`item-${id}`}
				checked={isChecked}
				onChange={onChangeHandel}
			/>

			<label
				className="block bg-white w-5 h-5 rounded-sm relative transition-all duration-200 ease-linear"
				htmlFor={`item-${id}`}
			>
				<svg
					className="pointer-events-none absolute top-1 left-1 w-3 h-3 opacity-0 fill-white transition-all duration-200 ease-linear"
					width="18"
					height="14"
					viewBox="0 0 18 14"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M5.99997 11.17L1.82997 7L0.409973 8.41L5.99997 14L18 2L16.59 0.589996L5.99997 11.17Z" />
				</svg>
			</label>
		</>
	);
};

export default CheckBoxStyle;
