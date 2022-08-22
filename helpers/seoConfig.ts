import type { ManifestOptions } from "vite-plugin-pwa"
/**
 * Defines the default SEO configuration for the website.
 */
export const defaultSEO = {
	baseURL: "https://example.com",
	description: "syncore-astro-starter",
	type: "website",
	image: {
		url: "https://picsum.photos/1200/630",
		alt: "OpenGraph thumbnail description.",
		width: 1200,
		height: 630
	},
	siteName: "Syncore",
	twitter: {
		card: "summary_large_image"
	}
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "syncore-astro-starter",
	short_name: "syncore-astro-starter",
	description: "syncore-astro-starter",
	theme_color: "#00C999",
	background_color: "#0D141F",
	display: "minimal-ui",
	icons: [
		{
			src: "/favicons/favicon-192x192.png",
			sizes: "192x192",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable"
		}
	]
}
