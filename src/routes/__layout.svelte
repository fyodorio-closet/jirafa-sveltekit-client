<script lang="ts">
	import LandingHeader from '$lib/landing/LandingHeader.svelte';
	import LandingFooter from '$lib/landing/LandingFooter.svelte';
	import '../app.css';
</script>

<LandingHeader />

<main>
	<slot />
</main>

<LandingFooter />

<style>
	main {
		flex: auto;
	}
</style>
