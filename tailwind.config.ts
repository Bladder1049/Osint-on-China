export default {
	content: ["**/*/*.{svelte,ts,astro}"],
	theme: {
		extend: {
			screens: {
				sm: "400px"
			},
			corePlugins: {
				fontSize: false
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
