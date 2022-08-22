<script lang="ts">
	// Helper imports
	import cn from "classnames"

	/**
	 * Props.
	 */

	/** The URL this anchor should direct to. */
	export let href: string
	/** Programatically allow or disallow opening pages in new tabs. */
	export let openNewTab: boolean = true
	/** Optional classnames for this anchor. */
	export let className: string = ""
</script>

<a
	class={cn(className)}
	rel="noopener noreferrer nofollow"
	{href}
	target={!openNewTab ? "_blank" : "_self"}
>
	<slot />
</a>
