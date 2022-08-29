<script lang="ts">
	// Component imports
	import { Section, Container, Text } from "@utils"
	import { Article } from "@component/Article"

	// Type imports
	import type { MarkdownInstance } from "astro"

	// Props
	export let data: MarkdownInstance<Record<string, any>>[]
</script>

<Section id="latest-articles" className="relative z-10">
	<Container>
		<div class="space-y-10">
			<div>
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
</Section>
