"use client";
import React, { useState, useEffect } from "react";
import {
	motion,
	AnimatePresence,
	useScroll,
	useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch";
import Image from "next/image";

export const FloatingNav = ({
	navItems,
	className,
}: {
	navItems: {
		name: string;
		link: string;
		icon?: JSX.Element;
	}[];
	className?: string;
}) => {
	const [isMobile, setIsMobile] = useState(false);
	const [visible, setVisible] = useState(true);
	const { scrollY } = useScroll();
	const [lastScrollY, setLastScrollY] = useState(0);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 640);
		};

		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	useMotionValueEvent(scrollY, "change", (latest) => {
		if (isMobile) {
			setVisible(true);
			return;
		}

		const currentScrollY = latest;
		const viewportHeight = window.innerHeight;

		if (currentScrollY <= viewportHeight) {
			setVisible(true);
		} else {
			if (currentScrollY < lastScrollY) {
				setVisible(true);
			} else {
				setVisible(false);
			}
		}

		setLastScrollY(currentScrollY);
	});

	const MobileTopNavbar = () => (
		<div className="flex justify-between items-center px-4 py-2 fixed top-0 left-0 right-0 bg-white dark:bg-stone-950/80 backdrop-filter backdrop-blur-sm z-[5001]">
			<Image
				src="/logo.svg"
				alt="logo"
				width={200}
				height={200}
				className="w-20"
			/>
			<ThemeSwitch />
		</div>
	);

	return (
		<>
			{isMobile && <MobileTopNavbar />}
			<AnimatePresence mode="wait">
				<motion.div
					initial={{ opacity: 1, y: 0 }}
					animate={{
						y: !isMobile && !visible ? -100 : 0,
						opacity: !isMobile && !visible ? 0 : 1,
					}}
					transition={{ duration: 0.2 }}
					className={cn(
						"flex w-full fixed inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] dark:bg-stone-950/80 backdrop-filter backdrop-blur-sm bg-opacity-80 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] py-2 items-center md:justify-between justify-center space-x-4 px-8",
						isMobile ? "bottom-0 rounded-t-xl" : "top-0 rounded-b-xl",
						className
					)}
				>
					{!isMobile && (
						<div className="w-fit ml-8">
							<Image
								src="/logo.svg"
								alt="logo"
								width={200}
								height={200}
								className="w-20"
							/>
						</div>
					)}
					<div className="flex items-center justify-between space-x-4 w-full md:w-fit">
						{navItems.map((navItem, idx: number) => (
							<Link
								key={`link=${idx}`}
								href={navItem.link}
								className={cn(
									"relative dark:text-neutral-50 items-center flex space-x-1 text-blue-600 font-bold dark:hover:text-neutral-300 hover:text-neutral-500",
									isMobile ? "flex-col text-xs" : ""
								)}
							>
								<span className={isMobile ? "block" : "block sm:hidden"}>
									{navItem.icon}
								</span>
								<span
									className={isMobile ? "block" : "hidden sm:block text-sm"}
								>
									{navItem.name}
								</span>
							</Link>
						))}
					</div>
					{!isMobile && (
						<div>
							<button className="border text-sm font-medium relative border-blue-200 dark:border-white/[0.2] text-black hover:text-white hover:bg-blue-500 dark:text-white px-4 py-2 rounded-full mr-8">
								<span>Login</span>
								<span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
							</button>
							<ThemeSwitch />
						</div>
					)}
				</motion.div>
			</AnimatePresence>
		</>
	);
};
