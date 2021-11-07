<script lang="ts">
	import AppHeader from '$lib/app/AppHeader.svelte';
	import AppFooter from '$lib/app/AppFooter.svelte';
</script>

<AppHeader />

<main>
	<slot />
</main>

<AppFooter />

<style>
	main {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}
</style>
