const FileUpload = () => {
	return (
		<div className="w-full pb-[100%] relative">
			<div className="absolute top-0 left-0 w-full h-full">
				<input type="file" className="hidden" id="upload" />
				<label
					htmlFor="upload"
					className="border border-dashed border-gray-300 w-full h-full rounded-lg flex flex-col justify-center items-center"
				>
					<div className="text-center text-2xl">
						<svg
							className="w-[1em] h-[1em]"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path
								d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
								stroke="#292D32"
							/>
							<path
								d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
								stroke="#292D32"
							/>
							<path
								d="M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001"
								stroke="#292D32"
							/>
						</svg>
					</div>
					<p className="text-sm md:text-base mt-2 sm:mt-4 font-roboto font-medium">
						Add Image
					</p>
				</label>
			</div>
		</div>
	);
};

export default FileUpload;
