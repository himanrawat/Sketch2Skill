import Image from "next/image";
import { Tabs } from "../ui/tabs";
import ButtonHover from "./hover-border-gradient";
import { IconChevronRight } from "@tabler/icons-react";

export default function TabsSection() {
	const tabs = [
		{
			title: "Live Sessions",
			value: "liveSessions",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-blue-700 to-indigo-900">
					<div className="text-xl md:text-4xl font-bold text-center mb-4">
						<p>Live Sessions</p>
					</div>
					<Content
						desc="Experience interactive, real-time learning with our expert instructors. Engage in discussions, ask questions, and collaborate with peers in our dynamic live sessions designed to deepen your understanding and accelerate your progress."
						img="/live-sessions.jpg"
						imgPosition="right"
						btnName={
							<span className="flex justify-center items-center">
								Join Now <IconChevronRight stroke={2} />
							</span>
						}
					/>
				</div>
			),
		},
		{
			title: "Resource Files",
			value: "resourcesFiles",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-blue-700 to-indigo-900">
					<div className="text-xl md:text-4xl font-bold text-center mb-4">
						<p>Resource Files</p>
					</div>
					<Content
						desc="Access a comprehensive library of learning materials, including lecture notes, practice exercises, and supplementary readings. Our carefully curated resource files provide you with everything you need to reinforce your learning and excel in your studies."
						img="/resource-files.jpg"
						imgPosition="left"
						btnName="Know More"
					/>
				</div>
			),
		},
		{
			title: "Playground",
			value: "playground",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-blue-700 to-indigo-900">
					<div className="text-xl md:text-4xl font-bold text-center mb-4">
						<p>Playground</p>
					</div>
					<Content
						desc="Put theory into practice with our interactive coding playground. Experiment with code, debug in real-time, and build your projects in a safe, supportive environment. Perfect for hands-on learning and developing your practical skills."
						img="/playground.jpg"
						imgPosition="right"
						btnName="Know More"
					/>
				</div>
			),
		},
		{
			title: "Content",
			value: "content",
			content: (
				<div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-white bg-gradient-to-br from-blue-700 to-indigo-900">
					<div className="text-xl md:text-4xl font-bold text-center mb-4">
						<p>Course Content</p>
					</div>
					<Content
						desc="Dive into our rich, diverse course content covering a wide range of topics. From beginner fundamentals to advanced concepts, our curriculum is designed to provide a comprehensive learning experience that caters to all skill levels."
						img="/course-content.jpg"
						imgPosition="left"
						btnName="Know More"
					/>
				</div>
			),
		},
	];

	return (
		<div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start md:my-40 my-8 ">
			<h2 className="text-center text-2xl md:text-4xl  font-bold w-full mb-8">
				Our Course Highlights
			</h2>
			<Tabs tabs={tabs} />
		</div>
	);
}

const Content = ({
	img,
	desc,
	imgPosition,
	btnName,
}: {
	img?: string;
	desc: string;
	imgPosition: "left" | "right";
	btnName?: string | React.ReactNode | any;
}) => {
	return (
		<div
			className={`flex flex-wrap md:flex-nowrap justify-between items-start ${
				imgPosition === "left" ? "flex-row-reverse" : "flex-row"
			}`}
		>
			<div
				className={`w-full md:w-1/2 mb-8 md:mb-0 ${
					imgPosition === "left" ? "md:pl-16" : "md:pr-0"
				} `}
			>
				<p className="text-lg font-normal ">{desc}</p>
				<div className="mt-4">
					<ButtonHover btnText={btnName} />
				</div>
			</div>
			{img && (
				<div className="md:w-1/2 h-64 w-full">
					<Image
						src={img}
						alt="Tab content image"
						width={640}
						height={400}
						className="w-full h-full object-cover rounded-2xl"
					/>
				</div>
			)}
		</div>
	);
};
