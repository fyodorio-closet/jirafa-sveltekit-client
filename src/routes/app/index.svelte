<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/app/projects');
		const data = await res.json();

		return { props: { projects: data } };
	};

	export const prerender = true;
</script>

<script lang="ts">
	import type { Project } from '$lib/types';
	import ProjectsBar from '$lib/app/ProjectsBar.svelte';
	import IssuesBar from '$lib/app/IssuesBar.svelte';
	import MainContent from '$lib/app/MainContent.svelte';
	import DetailsBar from '$lib/app/DetailsBar.svelte';

	export let projects: Project[];
</script>

<svelte:head>
	<title>Jirafa App</title>
</svelte:head>

<section>
	<ProjectsBar {projects} />
	<IssuesBar />
	<MainContent />
	<DetailsBar />
</section>

<style>
	section {
		display: flex;
		flex-direction: row;
		flex-grow: 1;
	}
</style>
