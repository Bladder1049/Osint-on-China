<script lang="ts">
	// Helper imports
	import cn from "classnames"

	/**
	 * Props.
	 */

	/** Removes all padding, use wisely. */
	export let __noPadding: boolean

	/** The id for this section.*/
	export let id: string

	/** Optional classnames for this section. */
	export let className: string
</script>

<section
	{id}
	class={cn(className, {
		"px-6 py-12 md:py-20 lg:px-10 lg:py-24": !__noPadding
	})}
>
	<slot />
</section>
