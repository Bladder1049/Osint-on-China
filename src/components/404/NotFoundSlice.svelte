<script>
	// Component imports
	import { Text, Hero, Container, Link } from "@utils"
</script>

<Hero>
	<Container>
		<div
			class="mx-auto flex max-w-md flex-col items-center justify-center space-y-6 text-center"
		>
			<Text tag="h1" className="text-orange-500">404: Page not found</Text>
			<Text
				>The page you were looking for may not exist or was moved to a new
				location!</Text
			>
			<Link
				href="/"
				className="hover:text-orange-500 focus:text-orange-500 transition duration-300 ease-in-out"
				>Go Back Home</Link
			>
		</div>
	</Container>
</Hero>
