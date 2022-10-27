<script>
	// Component imports
	import { Hero, Text, Container } from "@utils"

	import { FAQItem } from "./FAQItem.svelte"
</script>

<Hero>
	<Container>
		<div class="space-y-10">
			<div class="text-center">
				<Text tag="h1" style="h2" className="text-orange-500">FAQ</Text>
			</div>

			<div class="space-y-6">
				<details>
					<summary>
						<Text tag="h2" style="h3" className="text-orange-500"
							>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Consectetur, rem.</Text
						></summary
					>

					<Text
						>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
						quibusdam quis eius quaerat sint amet veniam ab nobis distinctio
						accusamus ipsam deserunt error laboriosam atque excepturi tenetur?
						Harum deserunt, aliquam eaque tempore temporibus cupiditate quas
						facilis repellat excepturi nostrum optio?</Text
					>
				</details>

				<details>
					<summary>
						<Text tag="h2" style="h3" className="text-orange-500"
							>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Consectetur, rem.</Text
						></summary
					>

					<Text
						>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
						quibusdam quis eius quaerat sint amet veniam ab nobis distinctio
						accusamus ipsam deserunt error laboriosam atque excepturi tenetur?
						Harum deserunt, aliquam eaque tempore temporibus cupiditate quas
						facilis repellat excepturi nostrum optio?</Text
					>
				</details>

				<details>
					<summary>
						<Text tag="h2" style="h3" className="text-orange-500"
							>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Consectetur, rem.</Text
						></summary
					>

					<Text
						>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
						quibusdam quis eius quaerat sint amet veniam ab nobis distinctio
						accusamus ipsam deserunt error laboriosam atque excepturi tenetur?
						Harum deserunt, aliquam eaque tempore temporibus cupiditate quas
						facilis repellat excepturi nostrum optio?</Text
					>
				</details>

				<details>
					<summary>
						<Text tag="h2" style="h3" className="text-orange-500"
							>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Consectetur, rem.</Text
						></summary
					>

					<Text
						>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
						quibusdam quis eius quaerat sint amet veniam ab nobis distinctio
						accusamus ipsam deserunt error laboriosam atque excepturi tenetur?
						Harum deserunt, aliquam eaque tempore temporibus cupiditate quas
						facilis repellat excepturi nostrum optio?</Text
					>
				</details>

				<details>
					<summary>
						<Text tag="h2" style="h3" className="text-orange-500"
							>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Consectetur, rem.</Text
						></summary
					>

					<Text
						>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
						quibusdam quis eius quaerat sint amet veniam ab nobis distinctio
						accusamus ipsam deserunt error laboriosam atque excepturi tenetur?
						Harum deserunt, aliquam eaque tempore temporibus cupiditate quas
						facilis repellat excepturi nostrum optio?</Text
					>
				</details>
			</div>
		</div></Container
	>
</Hero>

<style>
	details {
		@apply bg-gray-100 p-8;
	}

	:global(details) {
		@apply space-y-4;
	}

	details summary::marker {
		content: "\2795";
	}

	details[open] summary::marker {
		content: "\2796";
	}

	summary {
		@apply cursor-pointer;
	}

	:global(summary > *) {
		@apply inline;
	}

	:global(summary h2) {
		@apply p-4;
	}
</style>
