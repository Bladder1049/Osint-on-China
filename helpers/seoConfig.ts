import type { ManifestOptions } from "vite-plugin-pwa"
/**
 * Defines the default SEO configuration for the website.
 */
export const defaultSEO = {
	baseURL: "https://osintonchina.com",
	description:
		"Our Services provide better information for your analysis, intelligence and insights.",
	type: "website",
	image: {
		url: "https://picsum.photos/1200/630",
		alt: "OpenGraph thumbnail description.",
		width: 1200,
		height: 630
	},
	siteName: "Osint on China",
	twitter: {
		card: "summary_large_image"
	}
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "Osint on China",
	short_name: "Osint on China",
	description:
		"Our Services provide better information for your analysis, intelligence and insights.",
	theme_color: "#F06A25",
	background_color: "#4D4D4D",
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
