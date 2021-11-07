<script lang="ts">
	import BlockHeader from '$lib/app/BlockHeader.svelte';
</script>

<aside>
	<BlockHeader />
	<p>Issues Bar</p>
</aside>

<style>
	aside {
		background-color: blanchedalmond;
		display: flex;
		flex-direction: column;
		flex-basis: 0;
		flex-grow: 2;
	}
	p {
		display: flex;
		flex-direction: column;
		flex-basis: 0;
		flex-grow: 1;
		overflow-y: auto;
	}
</style>
