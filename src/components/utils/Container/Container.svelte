<script lang="ts">
	// Helper imports
	import cn from "classnames"

	/**
	 * Props.
	 */

	/** Optional classnames for this container. */
	export let className: string = ""
</script>

<div class={cn("container mx-auto", className)}>
	<slot />
</div>
