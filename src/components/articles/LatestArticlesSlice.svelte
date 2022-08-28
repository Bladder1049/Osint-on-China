<script>
	// Component imports
	import { Text, Hero, Container } from "@utils"
	import { Article } from "@component/Article"

	// Static imports
	import Grid from "@svg/grid.svg?component"
</script>

<Hero>
	<Container>
		<div class="space-y-10">
			<div class="text-center">
				<Text tag="h2">Latest articles</Text>
			</div>

			<div class="grid gap-8">
				<Article
					date="April 17, 2022"
					title="From NextJS to Astro"
					description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetm"
					slug="/"
				/>
				<Article
					date="April 17, 2022"
					title="From NextJS to Astro"
					description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetm"
					slug="/"
				/>
				<Article
					date="April 17, 2022"
					title="From NextJS to Astro"
					description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetm"
					slug="/"
				/>
				<Article
					date="April 17, 2022"
					title="From NextJS to Astro"
					description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetm"
					slug="/"
				/>
			</div>
		</div>
	</Container>

	<!-- Wave graphic -->
	<div class="hidden origin-center xl:absolute xl:left-0 xl:bottom-0 xl:block">
		<div class="-translate-x-2/3 -translate-y-1/2 transform-gpu">
			<Grid />
		</div>
	</div>
</Hero>
