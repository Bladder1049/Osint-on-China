/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*/*.{svelte,ts,astro}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"orange-600": "#C76541",
				"orange-550": "#DB6F47",
				"orange-500": "#F06A25",

				"gray-900": "#111827",
				"gray-700": "#4D4D4D",
				"gray-650": "#4D4D4E",
				"gray-500": "#4E4F4F",
				"gray-400": "#7F828A",
				"gray-200": "#EFEFEF",

				white: "#FFFFFF"
			},
			screens: {
				sm: "400px",
				xl: "1066px",
				"2xl": "1066px"
			},
			fontFamily: {
				body: ["Outfit", "sans-serif"]
			},
			outline: {
				none: "0"
			}
		}
	},
	plugins: [require("tailwind-scrollbar"), require("tailwindcss-animate")]
}
