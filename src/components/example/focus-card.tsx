import { FocusCards } from "@/components/ui/focus-cards";

export default function FocusCard() {
	const cards = [
		{
			title: "Web Development",
			src: "/web.jpg",
			desc: "Learn to build modern, responsive websites.\nMaster HTML, CSS, JavaScript, and popular frameworks.",
		},

		{
			title: "Graphic Design",
			src: "/digital.jpg",
			desc: "Develop skills in creating digital artwork.\nExplore tools like Photoshop, Illustrator, and InDesign.",
		},
		{
			title: "UI/UX Design",
			src: "/uiux.jpg",
			desc: "Study principles of user-centered design.\nCreate intuitive interfaces and optimize user experiences.",
		},
		{
			title: "3D Modeling & Animation",
			src: "/3d.jpg",
			desc: "Learn 3D modeling techniques and software.\nExplore animation principles for characters and objects.",
		},
		{
			title: "Video Editing",
			src: "/video.jpg",
			desc: "Master video editing software and techniques.\nLearn color grading, effects, and storytelling through editing.",
		},
		{
			title: "Photography",
			src: "/photography.jpg",
			desc: "Understand camera operations and composition.\nExplore lighting techniques and photo editing skills.",
		},
	];

	return <FocusCards cards={cards} />;
}
