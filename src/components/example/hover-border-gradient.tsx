"use client";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function ButtonHover({
	btnText,
}: {
	btnText?: string | React.ReactNode;
}) {
	return (
		<HoverBorderGradient
			containerClassName="rounded-full"
			as="button"
			className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
		>
			<span>{btnText}</span>
		</HoverBorderGradient>
	);
}
