<script lang="ts">
	// Component imports
	import { Text, Link } from "@utils"

	// Helper imports
	import dayjs from "dayjs"

	// Props
	export let date: string
	export let title: string
	export let description: string
	export let readingTime: number
	export let slug: string
</script>

<Link
	href={`/article/${slug.toLocaleLowerCase().split(" ").join("-")}`}
	className="block group hover:bg-orange-500 dark:hover:bg-orange-700 dark:focus:bg-orange-700 rounded-2xl transition duration-300 ease-in-out hover:text-white p-4"
>
	<article>
		<div class="space-x-1 md:flex md:items-center">
			<Text style="small">{dayjs(date).format("MMMM DD, YYYY")}</Text>
			<span class="hidden md:inline"> &bullet; </span>
			<Text style="small">{readingTime} Minute Read</Text>
		</div>
		<Text
			style="h3"
			className="text-orange-500 group-hover:text-white group-focus:text-white transition duration-300 ease-in-out"
			>{title}</Text
		>
		<Text>{description}</Text>
	</article>
</Link>
