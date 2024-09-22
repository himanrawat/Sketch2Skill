import React from "react";

const ClippedProfileImage = ({ src, alt, className = "" }) => {
	return (
		<div className={`relative w-full pt-[126.17%] ${className}`}>
			<svg
				className="absolute inset-0 w-full h-full"
				viewBox="0 0 535 675"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="xMidYMid slice"
			>
				<defs>
					<clipPath id="customShape" clipPathUnits="objectBoundingBox">
						<path
							d="M1 0.0741C1 0.0332 0.9581 0 0.9065 0H0.0935C0.0418 0 0 0.0332 0 0.0741V0.8168C0 0.8371 0.0288 0.8504 0.0542 0.8504C0.1161 0.8504 0.1663 0.8901 0.1663 0.9393C0.1663 0.9647 0.1884 1 0.2204 1H0.9065C0.9581 1 1 0.9668 1 0.9259V0.0741Z"
							fill="white"
						/>
					</clipPath>
				</defs>
			</svg>
			<img
				src={src}
				alt={alt}
				className="absolute inset-0 w-full h-full object-cover"
				style={{ clipPath: "url(#customShape)" }}
			/>
		</div>
	);
};

export default ClippedProfileImage;
