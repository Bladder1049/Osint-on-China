/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["**/*/*.{svelte,ts,astro}"],
	theme: {
		colors: {
			"orange-500": "#F06A25",

			"gray-900": "#4D4D4D",
			"gray-850": "#4D4D4E",
			"gray-800": "#4E4F4F",
			"gray-500": "#7F828A",
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
