<script lang="ts">
	import type { Project } from '$lib/types';

	export let projects: Project[];

	interface ProjectItem {
		letter: string;
		color: string;
	}

	$: items = projects.map(
		(item: Project): ProjectItem => ({
			letter: getShortenedName(item.name),
			color: getRandomColor()
		})
	);

	const getRandomColor = (): string => {
		const hash = Math.floor(Math.random() * 16777215).toString(16);
		return '#' + hash;
	};

	const getShortenedName = (name: string): string => name.substring(0, 2).toUpperCase();
</script>

<aside>
	{#each items as project}
		<!-- TODO turn into button -->
		<div style="background-color: {project.color}">{project.letter}</div>
	{/each}
</aside>

<style>
	aside {
		background-color: darkseagreen;
		display: flex;
		flex-direction: column;
		flex-basis: 0;
		padding: 1rem;
	}
	div {
		padding: 0.5rem;
		font-weight: bold;
		cursor: pointer;
	}
	div:not(:last-child) {
		margin-bottom: 1rem;
	}
</style>
