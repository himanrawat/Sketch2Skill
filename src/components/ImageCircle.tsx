"use clinet";

import React from "react";
import Image from "next/image";
import img1 from "../../public/1.jpg";
import img2 from "../../public/2.jpg";
import img3 from "../../public/3.jpg";
import img4 from "../../public/4.jpg";
import img5 from "../../public/5.jpg";

const ImageCircle = () => {
	return (
		<>
			<div className="">
				<Image
					src={img1}
					alt="Main profile"
					className="absolute bottom-2/3 left-1/4 w-48 h-48 rounded-full border-4 border-white object-cover"
				/>
				<Image
					src={img2}
					alt="profile"
					className="absolute top-1/4 right-0 w-40 h-40 rounded-full border-4 border-white object-cover"
				/>
				<Image
					src={img3}
					alt="Profile 3"
					className="absolute bottom-8 right-96 w-32 h-32 rounded-full border-4 border-white  object-cover"
				/>
				<Image
					src={img4}
					alt="Profile 4"
					className="absolute top-2 left-2/4 w-28 h-28 rounded-full border-4 border-white  object-cover"
				/>
				<Image
					src={img5}
					alt="Profile 5"
					className="absolute bottom-1/3 left-2/3 w-40 h-40 rounded-full border-4 border-white  object-cover"
				/>
				<Image
					src={img1}
					alt="Main profile"
					className="absolute left-2 w-48 h-48 rounded-full border-4 border-white object-cover"
				/>
				<Image
					src={img2}
					alt="profile"
					className="absolute bottom-0 left-1/4 w-40 h-40 rounded-full border-4 border-white object-cover"
				/>
				<Image
					src={img3}
					alt="Profile 3"
					className="absolute bottom-1/3 left-1/4 w-32 h-32 rounded-full border-4 border-white  object-cover"
				/>
				<Image
					src={img4}
					alt="Profile 4"
					className="absolute bottom-8 left-2/4 w-28 h-28 rounded-full border-4 border-white  object-cover"
				/>
				<Image
					src={img5}
					alt="Profile 5"
					className="absolute bottom-16 left-16 w-40 h-40 rounded-full border-4 border-white  object-cover"
				/>
				<Image
					src={img5}
					alt="Profile 5"
					className="absolute top-16 right-44 w-40 h-40 rounded-full border-4 border-white  object-cover"
				/>
			</div>
		</>
	);
};

export default ImageCircle;
