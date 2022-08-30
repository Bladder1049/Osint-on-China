import rss from "@astrojs/rss"

// Fetch all articles
const articles = import.meta.glob("../../_articles/*.md", { eager: true })
const parsedArticles = Object.values(articles)

export const get = () =>
	rss({
		// `<title>` field in output xml
		title: "OSINT on China",
		// `<description>` field in output xml
		description:
			"Our technology collects better data for your analysis, intelligence and insights.",
		// base URL for RSS <item> links
		// SITE will use "site" from your project's astro.config.
		site: import.meta.env.SITE,
		// list of `<item>`s in output xml
		// simple example: generate items for every md file in /src/pages
		// see "Generating items" section for required frontmatter and advanced use cases
		items: parsedArticles.map((article) => ({
			link: `/article/${article.frontmatter.title
				.toLocaleLowerCase()
				.split(" ")
				.join("-")}`,
			title: article.frontmatter.title,
			pubDate: article.frontmatter.date,
			description: article.frontmatter.description
		})),
		// (optional) inject custom xml
		customData: `<language>en-us</language>`,
		stylesheet: "/rss/styles.xsl"
	})
