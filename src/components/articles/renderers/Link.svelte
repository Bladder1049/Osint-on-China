<script>
	export let href = ""
	export let title = undefined
</script>

<a
	{href}
	{title}
	class="transition duration-300 ease-in-out hover:text-orange-500 focus:text-orange-500"
	><slot /></a
>
