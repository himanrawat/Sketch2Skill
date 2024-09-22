"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { img } from "framer-motion/client";

export default function InfiniteMovingCard() {
	return (
		<div className="h-fit md:h-1/2 py-0 md:py-16  flex flex-col antialiased items-center justify-center relative overflow-hidden px-4 md:px-0">
			<h2 className="text-2xl md:text-4xl font-bold mb-12 text-balance text-center">
				<span className="text-blue-500 relative inline-block group">
					Technologies
					<span className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-current transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
				</span>{" "}
				you will master hands-on
			</h2>
			<InfiniteMovingCards
				items={testimonials}
				direction="right"
				speed="slow"
			/>
		</div>
	);
}

const testimonials = [
	{
		title: "HTML",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
	},
	{
		title: "CSS",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
	},
	{
		title: "JavaScript",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
	},
	{
		title: "React.JS",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
	},
	{
		title: "Node.JS",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
	},
	{
		title: "Express.JS",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
	},
	{
		title: "MongDB",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
	},
	{
		title: "mysql",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
	},
	{
		title: "Mongoose",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
	},
	{
		title: "Python",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
	},
	{
		title: "Next.JS",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
	},
	{
		title: "NPM",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
	},
	{
		title: "Java",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
	},
	{
		title: "Tailwind CSS",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
	},
	{
		title: "TypeScript",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
	},
	{
		title: "Postman",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
	},
];
