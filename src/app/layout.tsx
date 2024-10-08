import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import FloatingNavDemo from "@/components/example/floating-navbar";

const sora = Sora({
	subsets: ["latin"],
	variable: "--font-sora",
});

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${sora.variable} font-sans antialiased`}>
				<FloatingNavDemo />
				{children}
			</body>
		</html>
	);
}
