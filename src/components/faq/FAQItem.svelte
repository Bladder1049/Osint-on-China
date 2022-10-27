<script lang="ts">
	// Component imports
	import { Text } from "@utils"

	export let question: string
	export let answer: string
</script>

<details>
	<summary>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
			/>
		</svg>

		<Text tag="h2" style="h3" className="text-orange-500">{question}</Text
		></summary
	>

	<Text>{answer}</Text>
</details>
