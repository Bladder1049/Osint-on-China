import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import svelte from "@astrojs/svelte"
import compress from "astro-compress"
import tailwind from "@astrojs/tailwind"

import SvelteSVG from "vite-plugin-svelte-svg"
import { VitePWA } from "vite-plugin-pwa"
import { manifest, defaultSEO } from "./helpers/seoConfig"

// https://astro.build/config
export default defineConfig({
	site: defaultSEO.baseURL,
	integrations: [
		tailwind({
			config: {
				applyBaseStyles: false,
				path: "./tailwind.config.js"
			}
		}),
		svelte(),
		sitemap(),
		compress()
	],
	vite: {
		plugins: [
			SvelteSVG(),
			VitePWA({
				registerType: "autoUpdate",
				manifest,
				workbox: {
					globDirectory: "dist",
					globPatterns: [
						"**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico,html}"
					]
				}
			})
		]
	}
})
