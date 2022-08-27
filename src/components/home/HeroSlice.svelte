<script>
	// Component imports
	import { Hero, Text, Container, Link } from "@utils"

	// Static imports
	import DownArrow from "@svg/icons/down-arrow.svg?component"
</script>

<Hero>
	<Container>
		<div class="space-y-6">
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
	</Container>
</Hero>
