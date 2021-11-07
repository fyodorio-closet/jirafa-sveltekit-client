<script lang="ts">
	import BlockHeader from '$lib/app/BlockHeader.svelte';
</script>

<main>
	<BlockHeader />
	<p>Main content</p>
</main>

<style>
	main {
		background-color: #f2eddb;
		display: flex;
		flex-direction: column;
		flex-basis: 0;
		flex-grow: 3;
	}
	p {
		display: flex;
		flex-direction: column;
		flex-basis: 0;
		flex-grow: 1;
		overflow-y: auto;
	}
</style>
