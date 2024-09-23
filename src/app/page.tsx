import BentoGridThirdDemo from "@/components/example/bento-grid";
import FocusCard from "@/components/example/focus-card";
import InfiniteMovingCard from "@/components/example/infinite-moving-text";
import TabsSection from "@/components/example/tabs-section";
import HoverEffect from "@/components/example/text-hover-effect";
import HeroSection from "@/components/HeroSection";

export default function Home() {
	return (
		<>
			<HeroSection />
			<div className="min-h-screen my-20 py-20 px-4 md:px-0">
				<h2 className="text-center mb-20 text-2xl md:text-4xl font-semibold ">
					Explore Over <span className="text-blue-500 font-bold">100+</span>{" "}
					Online Courses
				</h2>
				<FocusCard />
			</div>
			<InfiniteMovingCard />
			<TabsSection />
			<BentoGridThirdDemo />
			{/* footer */}
			<HoverEffect />
		</>
	);
}
