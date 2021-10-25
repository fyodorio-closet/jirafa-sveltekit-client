<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/projects');
		const data = await res.json();

		return { props: { projects: data } };
	};

	export const prerender = true;
</script>

<script lang="ts">
	import type { Project } from '$lib/types';

	export let projects: Project[];
</script>

<svelte:head>
	<title>App</title>
</svelte:head>

<section>
	<h1>Projects</h1>
	{#each projects as project}
		<div>
			<h2>{project.name}</h2>
			<h4>{project.owner.username}</h4>
		</div>
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: start;
		flex: 1;
	}
</style>
