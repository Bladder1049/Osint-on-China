<script lang="ts">
	// Component imports
	import { Hero, Container, Text } from "@utils"
	import SvelteMarkdown from "svelte-markdown"
	import { Image, Link, List } from "./renderers"
	import { Article } from "@component/Article"

	// Helper imports
	import dayjs from "dayjs"

	// Static imports
	import Grid from "@svg/grid.svg?component"

	// Props
	export let data: any
</script>

<Hero>
	<Container className="relative z-10">
		<div class="space-y-16">
			<!-- Heading -->
			<div class="space-y-4 text-center">
				<Text style="small"
					>{dayjs(data.frontmatter.date).format("MMMM DD, YYYY")} • {data
						.frontmatter.readingTime} Minute Read</Text
				>
				<Text style="h2" tag="h1" className="text-orange-500"
					>{data.frontmatter.title}</Text
				>
			</div>

			<!-- Markdown post -->
			<div class="space-y-6">
				<SvelteMarkdown
					source={data.frontmatter.post}
					renderers={{
						image: Image,
						link: Link,
						list: List
					}}
				/>
			</div>

			<!--
				Related articles -->
			<div class="space-y-10">
				<div>
					<Text tag="h2">Related Articles</Text>
				</div>
				<div class="grid gap-8 md:grid-cols-2">
					{#if data.relatedArticles.length > 0}
						{#each data.relatedArticles as article}
							<Article
								date={article.frontmatter.date}
								title={article.frontmatter.title}
								description={article.frontmatter.description}
								slug={article.frontmatter.title}
								readingTime={article.frontmatter.readingTime}
							/>
						{/each}
					{/if}
				</div>
			</div>
		</div>
	</Container>

	<!-- Wave graphic -->
	<div class="hidden origin-center xl:absolute xl:left-0 xl:bottom-0 xl:block">
		<div class="-translate-x-2/3 transform-gpu">
			<Grid />
		</div>
	</div>
</Hero>
