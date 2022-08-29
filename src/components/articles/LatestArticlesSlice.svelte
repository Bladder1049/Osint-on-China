<script lang="ts">
	// Component imports
	import { Text, Hero, Container } from "@utils"
	import { Article } from "@component/Article"

	// Static imports
	import Grid from "@svg/grid.svg?component"

	// Type imports
	import type { MarkdownInstance } from "astro"

	// Props
	export let data: MarkdownInstance<Record<string, any>>[]
</script>

<Hero>
	<Container className="relative z-10">
		<div class="space-y-10">
			<div class="text-center">
				<Text tag="h2">Latest articles</Text>
			</div>

			<div class="grid gap-8">
				{#each data as article}
					<Article
						date={article.frontmatter.date}
						title={article.frontmatter.title}
						description={article.frontmatter.description}
						slug={article.frontmatter.title}
						readingTime={article.frontmatter.readingTime}
					/>
				{/each}
			</div>
		</div>
	</Container>

	<!-- Wave graphic -->
	<div class="hidden origin-center xl:absolute xl:left-0 xl:bottom-0 xl:block">
		<div class="-translate-x-2/3  transform-gpu">
			<Grid />
		</div>
	</div>
</Hero>
