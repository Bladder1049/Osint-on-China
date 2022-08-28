<script lang="ts">
	// Component imports
	import { Text, Link } from "@utils"

	// Props
	export let date: string
	export let title: string
	export let description: string
	export let slug: string
</script>

<Link href={`/article/${slug}`} className="block">
	<article>
		<Text style="small">{date}</Text>
		<Text style="h3" className="text-orange-500">{title}</Text>
		<Text>{description}</Text>
	</article>
</Link>
