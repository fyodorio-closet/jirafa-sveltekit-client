<script lang="ts">
	import type { Project } from '$lib/types';

	export let projects: Project[];
</script>

<aside>
	<h1>Projects</h1>
	{#each projects as project}
		<div>
			<h2>{project.name}</h2>
			<h4>{project.owner.username}</h4>
		</div>
	{/each}
</aside>

<style>
	aside {
		background-color: darkseagreen;
		display: flex;
		flex-direction: column;
		flex-basis: 0;
		flex-grow: 1;
	}
</style>
