<script>
	export let href = ""
	export let title = undefined
	export let text = ""
</script>

<img
	src={href}
	{title}
	alt={text}
	class="max-h-[565px] w-full rounded-2xl object-cover"
/>
