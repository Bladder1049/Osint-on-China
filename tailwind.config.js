/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["**/*/*.{svelte,ts,astro}"],
	theme: {
		colors: {
			"orange-500": "#F06A25",

			"gray-900": "#111827",
			"gray-700": "#4D4D4D",
			"gray-650": "#4D4D4E",
			"gray-500": "#4E4F4F",
			"gray-400": "#7F828A",
			"gray-200": "#EFEFEF",

			white: "#FFFFFF"
		},
		extend: {
			screens: {
				sm: "400px"
			},
			corePlugins: {
				fontSize: false
			},
			fontFamily: {
				body: ["Outfit", "sans-serif"]
			},
			outline: {
				none: "0"
			}
		}
	},
	plugins: [
		require("flowbite/plugin"),
		require("tailwindcss-fluid-type"),
		require("tailwind-scrollbar"),
		require("tailwindcss-animate")
	]
}
