"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Bento() {
	return (
		<BentoGrid className="max-w-5xl  h-fit mx-auto ">
			{items.map((item, i) => (
				<BentoGridItem
					key={i}
					title={item.title}
					description={item.description}
					header={item.header}
					className={cn("[&>p:text-lg]", item.className)}
				/>
			))}
		</BentoGrid>
	);
}

const SkeletonOne = () => {
	const variants = {
		initial: {
			x: 0,
		},
		animate: {
			x: 10,
			rotate: 5,
			transition: {
				duration: 0.2,
			},
		},
	};
	const variantsSecond = {
		initial: {
			x: 0,
		},
		animate: {
			x: -10,
			rotate: -5,
			transition: {
				duration: 0.2,
			},
		},
	};

	return (
		<motion.div
			initial="initial"
			whileHover="animate"
			className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
		>
			<h1>Hello World</h1>
			<motion.div
				variants={variants}
				className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
			>
				<div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
				<div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
			</motion.div>
			<motion.div
				variants={variantsSecond}
				className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
			>
				<div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
				<div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
			</motion.div>
			<motion.div
				variants={variants}
				className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
			>
				<div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
				<div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
			</motion.div>
		</motion.div>
	);
};
const SkeletonTwo = () => {
	const variants = {
		initial: {
			width: 0,
		},
		animate: {
			width: "100%",
			transition: {
				duration: 0.2,
			},
		},
		hover: {
			width: ["0%", "100%"],
			transition: {
				duration: 2,
			},
		},
	};
	const arr = new Array(6).fill(0);
	return (
		<motion.div
			initial="initial"
			animate="animate"
			whileHover="hover"
			className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
		>
			{arr.map((_, i) => (
				<motion.div
					key={"skelenton-two" + i}
					variants={variants}
					style={{
						maxWidth: Math.random() * (100 - 40) + 40 + "%",
					}}
					className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
				></motion.div>
			))}
		</motion.div>
	);
};
const SkeletonThree = () => {
	const variants = {
		initial: {
			backgroundPosition: "0 50%",
		},
		animate: {
			backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
		},
	};
	return (
		<motion.div
			initial="initial"
			animate="animate"
			variants={variants}
			transition={{
				duration: 5,
				repeat: Infinity,
				repeatType: "reverse",
			}}
			className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
			style={{
				background:
					"linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
				backgroundSize: "400% 400%",
			}}
		>
			<motion.div className="h-full w-full rounded-lg"></motion.div>
		</motion.div>
	);
};
const SkeletonFour = () => {
	const first = {
		initial: {
			x: 20,
			rotate: -5,
		},
		hover: {
			x: 0,
			rotate: 0,
		},
	};
	const second = {
		initial: {
			x: -20,
			rotate: 5,
		},
		hover: {
			x: 0,
			rotate: 0,
		},
	};
	return (
		<motion.div
			initial="initial"
			animate="animate"
			whileHover="hover"
			className="flex flex-1 w-full h-fit min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
		>
			<motion.div
				variants={first}
				className="h-56 w-1/3 rounded-2xl bg-white dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
			>
				<Image
					src="/ui-ux.jpg"
					alt="avatar"
					height="100"
					width="100"
					className="h-auto w-full rounded-2xl"
				/>
				<p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
					User Experience Design Essentials
				</p>
				<p className="border border-blue-500 mb-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 text-xs rounded-full px-2 py-0.5 mt-4">
					Design
				</p>
			</motion.div>
			<motion.div className="h-56 relative z-20 w-1/3 rounded-2xl bg-white  dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
				<Image
					src="/frontend.jpg"
					alt="avatar"
					height="100"
					width="100"
					className=" h-auto w-full rounded-2xl"
				/>
				<p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
					Ultimate Web Designer & Web Developer Course
				</p>
				<p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4 mb-2">
					Frontend
				</p>
			</motion.div>
			<motion.div
				variants={second}
				className="h-56 w-1/3 rounded-2xl bg-white dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
			>
				<Image
					src="/backend.jpg"
					alt="avatar"
					height="100"
					width="100"
					className="h-auto w-full rounded-2xl"
				/>
				<p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
					Backend Master [Postgres + Kubernetes + gRPC]
				</p>
				<p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4 mb-2">
					Backend
				</p>
			</motion.div>
		</motion.div>
	);
};
const SkeletonFive = () => {
	const variants = {
		initial: {
			x: 0,
		},
		animate: {
			x: 10,
			rotate: 5,
			transition: {
				duration: 0.2,
			},
		},
	};
	const variantsSecond = {
		initial: {
			x: 0,
		},
		animate: {
			x: -10,
			rotate: -5,
			transition: {
				duration: 0.2,
			},
		},
	};

	return (
		<motion.div
			initial="initial"
			whileHover="animate"
			className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
		>
			<motion.div
				variants={variants}
				className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
			>
				<Image
					src="/web.jpg"
					alt="avatar"
					height="100"
					width="100"
					className="rounded-full h-10 w-10"
				/>
				<p className="text-xs text-neutral-500">
					There are a lot of cool framerworks out there like React, Angular,
					Vue, Svelte that can make your life ....
				</p>
			</motion.div>
			<motion.div
				variants={variantsSecond}
				className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
			>
				<p className="text-xs text-neutral-500">Use PHP.</p>
				<div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
			</motion.div>
		</motion.div>
	);
};
const items = [
	{
		title: "AI Content Generation",
		description: (
			<span className="text-sm">
				Experience the power of AI in generating unique content.
			</span>
		),
		header: <SkeletonOne />,
		className: "md:col-span-1",
	},
	{
		title: "Automated Proofreading",
		description: (
			<span className="text-sm">
				Let AI handle the proofreading of your documents.
			</span>
		),
		header: <SkeletonTwo />,
		className: "md:col-span-1",
	},
	{
		title: "Contextual Suggestions",
		description: (
			<span className="text-sm">
				Get AI-powered suggestions based on your writing context.
			</span>
		),
		header: <SkeletonThree />,
		className: "md:col-span-1",
	},
	{
		title: "Trending Combo",
		description: (
			<span className="text-sm">
				Understand the sentiment of your text with AI analysis.
			</span>
		),
		header: <SkeletonFour />,
		className: "md:col-span-2",
	},

	{
		title: "Our Mission of Cultivating Creativity!",
		description: (
			<span className="text-sm">
				Empowering creativity by fostering an environment where bold ideas
				thrive and transformative solutions are born. Nurturing talent to drive
				meaningful progress and success.
			</span>
		),
		header: <SkeletonFive />,
		className: "md:col-span-1",
	},
];
