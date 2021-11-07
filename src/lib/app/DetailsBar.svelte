<script lang="ts">
	import BlockHeader from '$lib/app/BlockHeader.svelte';
</script>

<aside>
	<BlockHeader />
	<p>Details Bar</p>
</aside>

<style>
	aside {
		background-color: #a3fcc3;
		display: flex;
		flex-direction: column;
		flex-basis: 0;
		flex-grow: 1;
	}
	p {
		display: flex;
		flex-direction: column;
		flex-basis: 0;
		flex-grow: 1;
		overflow-y: auto;
	}
</style>
