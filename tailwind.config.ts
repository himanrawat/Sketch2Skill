import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-sora)"],
			},
			animation: {
				scroll:
					"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
				"spin-slow": "spin 10s linear infinite",
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"theme-switch-spin": "theme-switch-spin 15s linear infinite",
				"theme-switch-wiggle": "theme-switch-wiggle 5s linear infinite",
			},
			clipPath: {
				circle: "circle(50% at 50% 50%)",
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				scroll: {
					to: {
						transform: "translate(calc(-50% - 0.5rem))",
					},
				},
				"theme-switch-spin": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" },
				},
				"theme-switch-wiggle": {
					"0%, 100%": { transform: "rotate(0deg)" },
					"25%": { transform: "rotate(-10deg)" },
					"75%": { transform: "rotate(10deg)" },
				},
			},
			textWrap: {
				balance: "balance",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		plugin(function ({ addBase }) {
			addBase({
				"*": { textWrap: "balance" },
			});
		}),
	],
} satisfies Config;

export default config;
