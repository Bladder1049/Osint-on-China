module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: ["@typescript-eslint"],
	overrides: [
		{
			files: ["*.astro"],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
				sourceType: "module"
			},
			extends: ["plugin:astro/recommended", "plugin:astro/jsx-a11y-strict"],
			rules: {
				"astro/no-set-text-directive": "error",
				"astro/no-unused-css-selector": "error",
				"astro/prefer-class-list-directive": "error"
			}
		},
		{
			files: ["*.svelte"],
			processor: "svelte3/svelte3",
			plugins: ["svelte3"],
			settings: {
				"svelte3/typescript": true,
				"svelte3/ignore-warnings": () => true
			}
		}
	]
}
