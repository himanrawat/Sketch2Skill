"use client";

import React from "react";
import { IconPlayerPlay } from "@tabler/icons-react";

const VideoButton = () => {
	return (
		<div className="relative w-24 h-24">
			<button className="w-full h-full rounded-full  flex items-center justify-center focus:outline-none ">
				<div className="bg-blue-500 rounded-full p-2">
					<IconPlayerPlay className="w-8 h-8 text-white" />
				</div>
			</button>
			<div className="absolute top-0 left-0 w-full h-full animate-spin-slow pointer-events-none ">
				{"PLAY OUR INTRO VIDEO ".split("").map((char, i) => (
					<span
						key={i}
						className="absolute left-1/2 -translate-x-1/2 text-xs text-blue-500 font-bold"
						style={{
							transform: `rotate(${i * 15}deg)`,
							transformOrigin: "0 48px",
						}}
					>
						{char}
					</span>
				))}
			</div>
		</div>
	);
};

export default VideoButton;
