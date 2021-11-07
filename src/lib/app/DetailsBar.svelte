<script lang="ts">
	import BlockHeader from '$lib/app/BlockHeader.svelte';
	import { MockScrollableContent } from './mockScrollableContent';
</script>

<aside>
	<BlockHeader />
	<p><span>Details Bar. </span><span>{MockScrollableContent}</span></p>
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
