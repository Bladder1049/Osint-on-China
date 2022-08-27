<script>
	// Component imports
	import { Hero, Text, Container, Link } from "@utils"

	// Static imports
	import DownArrow from "@svg/icons/down-arrow.svg?component"
	import HomeHero from "@svg/home-hero.svg?component"
	import Grid from "@svg/grid.svg?component"
</script>

<Hero>
	<Container className="relative z-10">
		<div class="xl:flex xl:items-center xl:justify-between">
			<!-- Right side -->
			<div class="space-y-6 xl:w-1/2 xl:max-w-[546px]">
				<Text tag="h1">
					Our technology collects better <span class="text-orange-500"
						>data for your analysis</span
					>, intelligence and insights
				</Text>
				<Text>
					OSINT stands for Open Source Intelligence, and this means collecting
					information from openly available sources online. This includes data
					mining, various crawling techniques, data extraction, data washing and
					analysis.
				</Text>
				<!-- Read more button -->
				<Link
					href="#about-us"
					className="flex items-center space-x-5 transition duration-300 ease-in-out hover:text-orange-500 focus:text-orange-500"
				>
					<DownArrow />
					<span class="opacity-50">read more</span>
				</Link>
			</div>

			<!-- Left side -->
			<div class="relative hidden xl:block xl:w-1/2">
				<div class="flex w-full items-center justify-center">
					<HomeHero />
				</div>
			</div>
		</div>
	</Container>

	<!-- Wave graphic -->
	<div class="hidden origin-center xl:absolute xl:bottom-0 xl:right-0 xl:block">
		<div class="translate-x-1/2 transform-gpu">
			<Grid />
		</div>
	</div>
</Hero>
