"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	items: {
		title: string;
		img: string;
	}[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse"
				);
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty("--animation-duration", "20s");
			} else if (speed === "normal") {
				containerRef.current.style.setProperty("--animation-duration", "40s");
			} else {
				containerRef.current.style.setProperty("--animation-duration", "80s");
			}
		}
	};
	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20 md:max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
				className
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					" flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
					start && "animate-scroll ",
					pauseOnHover && "hover:[animation-play-state:paused]"
				)}
			>
				{items.map((item, idx) => (
					<li
						className="w-fit relative rounded-2xl flex-shrink-0  px-8 py-6 "
						key={idx}
					>
						<div className=" z-20 flex flex-col items-center justify-center grayscale hover:grayscale-0 group">
							<Image
								src={item.img}
								alt=""
								width="100"
								height="100"
								className="w-10 md:w-[100px] md:h-[100px]"
							/>
							<h1 className="text-base md:text-2xl font-bold text-black dark:text-neutral-400 group-hover:dark:text-white group-hover:text-blue-500">
								{item.title}
							</h1>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};
