<script lang="ts">
	// Helper imports
	import cn from "classnames"

	/**
	 * Props.
	 */

	/** The HTML tag for this text component. Defaults to `p` */
	export let tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" = "p"

	/** The header style for this text component. Defaults to paragraph. */
	export let style:
		| "h1"
		| "h2"
		| "h3"
		| "h4"
		| "h5"
		| "h6"
		| "p"
		| "small"
		| "tiny" = tag

	/** Optional classnames. */
	export let className: string = ""
</script>

<svelte:element this={tag} class={cn(style, className)}>
	<slot />
</svelte:element>
