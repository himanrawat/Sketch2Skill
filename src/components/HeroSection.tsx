"use client";

import React from "react";
import { IconPlayerPlay } from "@tabler/icons-react";
import AnimatedTooltipPreview from "./example/animated-tooltip";
import VideoButton from "./VideoButton";
import ClippedProfileImage from "./ClippedProfileImage";

const HeroSection = () => {
	return (
		<>
			<main className="min-h-screen w-full text-center flex justify-center items-center overflow-y-hidden">
				<div className="text-left px-4 md:px-16 flex justify-center items-center flex-wrap-reverse lg:flex-nowrap">
					<div className="w-full lg:w-3/5 px-4">
						<h6 className="lg:text-lg text-sm font-bold text-blue-700 dark:text-blue-400 mt-8">
							Unleash Academic Excellence
						</h6>
						<h1 className="text-2xl md:text-4xl lg:text-6xl font-bold lg:leading-none capitalize dark:text-white">
							Master{" "}
							<span className="text-blue-500 relative inline-block group">
								Creative Skills
								<span className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-current transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
							</span>{" "}
							and Launch your{" "}
							<span className="text-blue-500 relative inline-block group">
								career
								<span className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-current transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
							</span>{" "}
							now!
						</h1>
						<p className="mt-4 mb-4 text-base md:text-xl">
							Unlock your potential. Discover a world of knowledge. Start Your
							journey today. Empower your future with over{" "}
							<span className="font-bold">100+ course</span> to choose from.
						</p>
						<div className="flex justify-center gap-4 mt-8  flex-wrap">
							<button className="bg-blue-700 text-white px-8 py-2 rounded-md hover:bg-blue-800 font-bold h-14 md:w-52 w-full">
								Book a Class
							</button>
							<button className="border border-stone-900 dark:border-white text-stone-900 dark:text-white px-4 py-2 rounded-md flex justify-center items-center gap-2 hover:bg-stone-900 dark:hover:bg-black hover:text-white font-bold group h-14 md:w-52 w-full ">
								<div className="p-2 border-2 border-stone-900 dark:border-white rounded-full w-fit group-hover:border-white">
									<IconPlayerPlay className="w-4 h-4" />
								</div>
								Register as Tutor
							</button>
						</div>
						<div className="py-8">
							<p className="mt-8 mb-2 font-medium text-2xl ">
								Trusted by 100k+ students
							</p>
							<AnimatedTooltipPreview />
						</div>
					</div>

					<div className="w-full lg:w-2/5 p-4 h-72 lg:h-screen flex justify-start items-end relative ">
						<ClippedProfileImage
							src="/profile.jpg"
							alt=""
							className="w-full h-4/5"
						/>
						<div className="absolute bottom-0 left-0 rounded-e-full p-4 rounded-full bg-background">
							<VideoButton />
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default HeroSection;
