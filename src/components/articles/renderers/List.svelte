<script>
	export let ordered
	export let start
</script>

{#if ordered}
	<ol class="list-decimal pl-4" {start}><slot /></ol>
{:else}
	<ul class="list-disc pl-4"><slot /></ul>
{/if}
