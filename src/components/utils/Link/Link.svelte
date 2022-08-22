<script lang="ts">
	// Helper imports
	import cn from "classnames"
	/**
	 * Props.
	 */
	/** The URL this anchor should direct to. */
	export let href: string
	/** Optional classnames for this anchor. */
	export let className: string = ""
</script>

<a {href} class={cn(className)}>
	<slot />
</a>
