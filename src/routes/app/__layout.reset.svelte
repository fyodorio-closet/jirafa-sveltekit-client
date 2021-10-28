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
        flex: auto;
    }
</style>